"use client";

// Tiny external store for the cart, wishlist and toast messages.
// Persisted to localStorage; read through useSyncExternalStore so server and
// first client render agree (both start empty) and there is no hydration mismatch.
import { useSyncExternalStore } from "react";
import { getProduct } from "@/lib/data/products";

const STORAGE_KEY = "cartly:store:v1";
const EMPTY = Object.freeze({ cart: [], wishlist: [] });

let state = EMPTY;
let loaded = false;
const listeners = new Set();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (saved) {
      state = {
        cart: Array.isArray(saved.cart)
          ? saved.cart.filter((i) => getProduct(i.slug) && i.qty > 0)
          : [],
        wishlist: Array.isArray(saved.wishlist) ? saved.wishlist.filter((s) => getProduct(s)) : [],
      };
    }
  } catch {
    // Ignore unreadable storage (private mode, blocked cookies, bad JSON).
  }
}

function emit(next) {
  state = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable; the in-memory state still works.
  }
  listeners.forEach((l) => l());
}

function onStorage(e) {
  if (e.key !== STORAGE_KEY) return;
  loaded = false;
  load();
  listeners.forEach((l) => l());
}

function subscribe(listener) {
  load();
  listeners.add(listener);
  if (listeners.size === 1) window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", onStorage);
  };
}

const getSnapshot = () => {
  load();
  return state;
};
const getServerSnapshot = () => EMPTY;

export function useStore() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/* ---------------- Cart ---------------- */

export function addToCart(slug, qty = 1) {
  const product = getProduct(slug);
  if (!product) return;
  if (!product.inStock) {
    toast(`${product.name} is out of stock.`, "error");
    return;
  }
  const existing = state.cart.find((i) => i.slug === slug);
  const cart = existing
    ? state.cart.map((i) => (i.slug === slug ? { ...i, qty: Math.min(99, i.qty + qty) } : i))
    : [...state.cart, { slug, qty: Math.min(99, qty) }];
  emit({ ...state, cart });
  toast(`“${product.name}” has been added to your cart.`, "success", { href: "/cart", label: "View cart" });
}

export function setCartQty(slug, qty) {
  const n = Math.max(0, Math.min(99, Math.floor(Number(qty) || 0)));
  const cart = n === 0
    ? state.cart.filter((i) => i.slug !== slug)
    : state.cart.map((i) => (i.slug === slug ? { ...i, qty: n } : i));
  emit({ ...state, cart });
}

export function removeFromCart(slug) {
  const product = getProduct(slug);
  emit({ ...state, cart: state.cart.filter((i) => i.slug !== slug) });
  if (product) toast(`“${product.name}” removed from your cart.`);
}

export function clearCart() {
  emit({ ...state, cart: [] });
}

/* ---------------- Wishlist ---------------- */

export function toggleWishlist(slug) {
  const product = getProduct(slug);
  if (!product) return;
  const has = state.wishlist.includes(slug);
  emit({
    ...state,
    wishlist: has ? state.wishlist.filter((s) => s !== slug) : [...state.wishlist, slug],
  });
  toast(
    has ? `“${product.name}” removed from your wishlist.` : `“${product.name}” added to your wishlist.`,
    has ? "info" : "success",
    has ? undefined : { href: "/wishlist", label: "View wishlist" }
  );
}

/* ---------------- Derived helpers ---------------- */

export function cartLines(cart) {
  return cart
    .map((i) => {
      const product = getProduct(i.slug);
      return product ? { ...i, product, total: product.price * i.qty } : null;
    })
    .filter(Boolean);
}

export function cartCount(cart) {
  return cart.reduce((n, i) => n + i.qty, 0);
}

/* ---------------- Toasts ---------------- */

let toasts = [];
let toastId = 0;
const toastListeners = new Set();
const NO_TOASTS = [];

function emitToasts(next) {
  toasts = next;
  toastListeners.forEach((l) => l());
}

export function toast(message, type = "info", action) {
  const id = ++toastId;
  emitToasts([...toasts, { id, message, type, action }].slice(-4));
  setTimeout(() => dismissToast(id), 4000);
}

export function dismissToast(id) {
  emitToasts(toasts.filter((t) => t.id !== id));
}

export function useToasts() {
  return useSyncExternalStore(
    (l) => {
      toastListeners.add(l);
      return () => toastListeners.delete(l);
    },
    () => toasts,
    () => NO_TOASTS
  );
}

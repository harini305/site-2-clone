"use client";

import { useState } from "react";
import { PiCheckCircle } from "react-icons/pi";
import { cartLines, clearCart, useStore } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import Button from "@/components/ui/Button";
import CartTotals, { getTotals } from "./CartTotals";
import { EmptyCart } from "./CartView";
import styles from "./Checkout.module.css";

const fields = [
  { name: "firstName", label: "First name", autoComplete: "given-name", half: true },
  { name: "lastName", label: "Last name", autoComplete: "family-name", half: true },
  { name: "address", label: "Street address", autoComplete: "street-address" },
  { name: "city", label: "Town / City", autoComplete: "address-level2", half: true },
  { name: "postcode", label: "Postcode / ZIP", autoComplete: "postal-code", half: true },
  { name: "phone", label: "Phone", autoComplete: "tel", type: "tel", half: true },
  { name: "email", label: "Email address", autoComplete: "email", type: "email", half: true },
];

const EMPTY_FORM = Object.fromEntries(fields.map((f) => [f.name, ""]));

function validate(form) {
  const errors = {};
  fields.forEach((f) => {
    if (!form[f.name].trim()) errors[f.name] = `${f.label} is required.`;
  });
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (form.phone && !/^[+\d][\d\s()-]{5,}$/.test(form.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  return errors;
}

export default function CheckoutView() {
  const { cart } = useStore();
  const [form, setForm] = useState(EMPTY_FORM);
  const [payment, setPayment] = useState("cod");
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);
  const lines = cartLines(cart);

  if (order) {
    return (
      <div className={styles.done} role="status">
        <PiCheckCircle aria-hidden="true" />
        <h2>Thank you. Your order has been received.</h2>
        <p>
          Order number <strong>#{order.number}</strong> · Total <strong>{formatPrice(order.total)}</strong>
        </p>
        <p className="demo-note">
          Demo only: no payment was taken and no order was placed. This store has no backend.
        </p>
        <Button href="/products">Continue shopping</Button>
      </div>
    );
  }

  if (lines.length === 0) {
    return <EmptyCart message="Your cart is currently empty, so there’s nothing to check out yet." />;
  }

  const totals = getTotals(lines);

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      document.getElementById(`co-${first}`)?.focus();
      return;
    }
    setOrder({ number: Math.floor(10000 + Math.random() * 89999), total: totals.total });
    clearCart();
    window.scrollTo({ top: 0 });
  };

  const set = (name) => (e) => setForm({ ...form, [name]: e.target.value });

  return (
    <form className={styles.layout} onSubmit={onSubmit} noValidate>
      <section aria-labelledby="billing-title">
        <h2 id="billing-title" className={styles.heading}>
          Billing details
        </h2>
        <div className={styles.grid}>
          {fields.map((f) => (
            <div key={f.name} className={f.half ? styles.half : styles.full}>
              <label className="label" htmlFor={`co-${f.name}`}>
                {f.label}
                <span className="req">*</span>
              </label>
              <input
                id={`co-${f.name}`}
                type={f.type || "text"}
                className="field"
                value={form[f.name]}
                onChange={set(f.name)}
                autoComplete={f.autoComplete}
                aria-invalid={errors[f.name] ? "true" : undefined}
                aria-describedby={errors[f.name] ? `co-${f.name}-err` : undefined}
                required
              />
              {errors[f.name] ? (
                <p id={`co-${f.name}-err`} className="field-error">
                  {errors[f.name]}
                </p>
              ) : null}
            </div>
          ))}
          <div className={styles.full}>
            <label className="label" htmlFor="co-notes">
              Order notes (optional)
            </label>
            <textarea id="co-notes" className="field" rows={4} placeholder="Notes about your order or delivery." />
          </div>
        </div>
      </section>

      <aside className={styles.summary} aria-labelledby="order-title">
        <h2 id="order-title" className={styles.heading}>
          Your order
        </h2>
        <ul className={styles.lines}>
          {lines.map((l) => (
            <li key={l.slug}>
              <span>
                {l.product.name} <strong>× {l.qty}</strong>
              </span>
              <span>{formatPrice(l.total)}</span>
            </li>
          ))}
        </ul>
        <CartTotals totals={totals} className={styles.totals} />

        <fieldset className={styles.payment}>
          <legend className="label">Payment method</legend>
          <label>
            <input type="radio" name="payment" value="cod" checked={payment === "cod"} onChange={() => setPayment("cod")} />
            Cash on delivery
          </label>
          <label>
            <input type="radio" name="payment" value="card" checked={payment === "card"} onChange={() => setPayment("card")} />
            Card on delivery
          </label>
        </fieldset>
        <p className="demo-note">Demo checkout: placing an order won’t charge you or send any data.</p>
        <Button type="submit" size="lg" className={styles.place}>
          Place order
        </Button>
      </aside>
    </form>
  );
}

# Cartly Grocery Shop

A Next.js storefront that recreates the layout and interactions of the
[Phlox "Shop Grocery 2" demo](https://demo.phlox.pro/shop-grocery-2/). It uses original artwork, original
copy and a placeholder brand. See [ASSETS.md](ASSETS.md) for the asset inventory and licensing notes.

Built with Next.js 16 (App Router, JavaScript), CSS Modules, GSAP + ScrollTrigger, Swiper and react-icons.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000 (use `npx next dev -p 3100` if 3000 is taken)
npm run lint
npm run build && npm start
```

## Routes

| Route | What it is |
| --- | --- |
| `/` | Homepage: hero banners, special offers, filterable "Grocery Products" grid, promo tiles, "What's Trending" carousel, product rows, photo banners, features, newsletter |
| `/products` | Shop: sidebar search, price filter, category list, sorting, pagination (`?sort=`, `?min_price=`, `?max_price=`, `?page=`) |
| `/product-category/[slug]` | Category listing (9 categories, statically generated; unknown slugs return 404) |
| `/product/[slug]` | Product detail: gallery with lightbox, quantity, add to cart, share, wishlist, tabs, related products (22 products) |
| `/search?s=&category=` | Search results, also fed by the header's live search |
| `/cart` | Cart with quantity editing, removal, coupon field (demo), totals and shipping rule |
| `/checkout` | Billing form with validation and a demo order confirmation |
| `/my-account` | Login and register forms (demo) |
| `/wishlist` | Saved products |
| `/contact` | Help Center: map, contact details and contact form (demo) |
| any other URL | Custom 404 page |

Header links follow the reference: "Our Stores" goes to `/products`, "Help Center" to `/contact` and
"Sign In / Register" to `/my-account`. The departments that have no category in the catalogue (Food Cupboard,
Bakery, Frozen Food, Home Care & Cleaning) link to the full shop. In the reference they are dead `#` links.

## Project structure

```
app/                  routes (App Router), global styles, 404
components/
  layout/             Header, HeaderSearch, MiniCart, MobileMenu, CategoryNav, Footer, NewsletterForm,
                      Toasts, BackToTop, RevealController (GSAP)
  sections/           homepage sections (HeroGrid, PromoBanner, GroceryProducts, PromoTiles,
                      ProductCarousel, ProductRow, ImageBanners, Features)
  shop/               ShopLayout, ShopSidebar, PriceFilter, SortSelect
  product/            ProductGallery, ProductPurchase, ProductTabs
  cart/               CartView, CartTotals, CheckoutView
  account/            AuthForms, WishlistView
  contact/            ContactForm
  ui/                 Button, Logo, SectionHeading, ProductCard, Price, Rating, QuantityInput,
                      WishlistButton, AddToCartButton, Breadcrumbs, Icon
lib/
  data/               site settings, categories, products, homepage content
  store.js            cart, wishlist and toasts (localStorage + useSyncExternalStore)
  shop.js             listing filters, sorting and pagination
scripts/
  generate-illustrations.mjs   regenerates the SVG artwork in public/images
```

## Demo-only functionality

There is no backend. The following work in the browser only:

- **Cart and wishlist** are saved to `localStorage` and synced across tabs.
- **Checkout** validates the form and shows a confirmation, but no order is created and no payment is taken.
- **Login / register, contact, newsletter and reviews** validate input and show a message. Nothing is sent.
- **Coupons** always report "not valid".

Each of these is labelled as demo-only in the UI.

## Animations

- Scroll reveals (fade-up / left / right) via a single `RevealController` using `ScrollTrigger.batch`.
- Parallax on hero banner artwork, an animated filter in the Grocery Products tabs, and an auto-playing
  Swiper carousel.
- Hover effects on cards, banners, buttons and icons, plus a header that compacts when you scroll.
- `prefers-reduced-motion` turns the scroll animations off. Content is only hidden while the animation
  script is active, and it is forced visible if that script hasn't started within 4 seconds or when it
  receives keyboard focus.

## Deployment

The project works on Vercel with no extra configuration. You can optionally set `NEXT_PUBLIC_SITE_URL`
to the production URL so metadata uses absolute URLs. Before making a deployment public, read the
"Replace before public production use" section in [ASSETS.md](ASSETS.md).

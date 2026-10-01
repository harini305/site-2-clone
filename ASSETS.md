# Asset inventory and licensing

This storefront recreates the **layout, structure and interactions** of the reference demo
(`https://demo.phlox.pro/shop-grocery-2/`, a theme demo by Averta). It does **not** use any images,
logos or copy from that demo. Those assets belong to the theme vendor, and many of the demo's product
photos show third-party trademarked packaging.

All product and banner imagery is real photography under open licences. It comes from Wikimedia Commons
and Pexels, and every file is listed below with its source, author and licence. No photo shows a visible
brand name or logo.

## How the photos were prepared

- Downloaded from the Commons file page linked below, at up to 1280px wide.
- For "background removed" files, the original background was cut away with an automatic segmentation
  model so the product sits on the white cards and coloured banners, the way the reference's cut-out
  PNGs do. The result was then trimmed, padded to a square and saved as an 800×800 WebP.
- "Cropped, resized" files are the full photo centre-cropped to a square.

## Licence obligations

- **CC0 and public domain:** no conditions.
- **CC BY 2.0 / 3.0 / 4.0:** credit the author and link the licence.
- **CC BY-SA 3.0 / 4.0:** credit the author and link the licence. The cut-out versions are adaptations,
  so they are shared under the same CC BY-SA licence.
- **Pexels License:** free to use with no attribution required. Don't imply endorsement by the
  identifiable person in `pexels-3962285.jpg`.

Attribution appears on the site at **`/image-credits`**, which is linked from the footer on every page.
Its data lives in `lib/data/imageCredits.js`. If you replace or add a photo, update that file too.

## Openly licensed inventory (31 image files)

| File | Replaced (previous illustration) | Source | Author | Licence | Changes |
| --- | --- | --- | --- | --- | --- |
| `images/products/whole-wheat-bread.webp` | bread.svg | [Breads of Moskovskaya Oblast. img 008.jpg](https://commons.wikimedia.org/wiki/File:Breads_of_Moskovskaya_Oblast._img_008.jpg) | Dmitry Makeev | CC BY-SA 4.0 | background removed, trimmed, resized |
| `images/products/coffee-cup.webp` | coffee-jar.svg (product + Coffee tile) | [Cup of coffee with beans.jpg](https://commons.wikimedia.org/wiki/File:Cup_of_coffee_with_beans.jpg) | Petr Kratochvil | CC0 | background removed, trimmed, resized |
| `images/products/instant-coffee.webp` | — (new gallery image) | [Instant Coffee In a Glass Jar.jpg](https://commons.wikimedia.org/wiki/File:Instant_Coffee_In_a_Glass_Jar.jpg) | CYYK | Public domain | cropped, resized |
| `images/products/french-fries.webp` | fries.svg | [BK-French-Fries.jpg](https://commons.wikimedia.org/wiki/File:BK-French-Fries.jpg) | Evan-Amos | CC0 | background removed, trimmed, resized |
| `images/products/ice-cream-sundae.webp` | ice-cream.svg + sundae.svg | [Ice cream sundae.jpg](https://commons.wikimedia.org/wiki/File:Ice_cream_sundae.jpg) | Renee Comet (Photographer) | Public domain | background removed, trimmed, resized |
| `images/products/paprika-crisps.webp` | chips-bag.svg (product + Snacks tile) | [Potato Chips.jpg](https://commons.wikimedia.org/wiki/File:Potato_Chips.jpg) | Gaurav Dhwaj Khadka | CC BY-SA 4.0 | background removed, trimmed, resized |
| `images/products/potato-crisps.webp` | chips-bag-red.svg | [Potato-Chips.jpg](https://commons.wikimedia.org/wiki/File:Potato-Chips.jpg) | Evan-Amos | Public domain | cropped, resized |
| `images/products/chocolate-cake.webp` | cake.svg | [Piece of chocolate cake on a white plate decorated with chocolate sauce.jpg](https://commons.wikimedia.org/wiki/File:Piece_of_chocolate_cake_on_a_white_plate_decorated_with_chocolate_sauce.jpg) | Daria Yakovleva | CC0 | background removed, trimmed, resized |
| `images/products/chocolate-donut.webp` | donut.svg | [Fat-Doughnut-Brooklyn-Chocolate-Frosted.jpg](https://commons.wikimedia.org/wiki/File:Fat-Doughnut-Brooklyn-Chocolate-Frosted.jpg) | Evan-Amos | Public domain | background removed, trimmed, resized |
| `images/products/olive-oil.webp` | oil-bottle.svg | [Bottle of olive oil.jpg](https://commons.wikimedia.org/wiki/File:Bottle_of_olive_oil.jpg) | margenauer from Pixabay | CC0 | background removed, trimmed, resized |
| `images/products/pint-beer.webp` | beer-bottle.svg | [Pint of beer with some bread.jpg](https://commons.wikimedia.org/wiki/File:Pint_of_beer_with_some_bread.jpg) | Jon Sullivan | Public domain | background removed, trimmed, resized |
| `images/products/yeast-spread-toast.webp` | spread-jar.svg | [Vegemite and jelly.jpg](https://commons.wikimedia.org/wiki/File:Vegemite_and_jelly.jpg) | Hughessd01 | CC BY-SA 4.0 | background removed, trimmed, resized |
| `images/products/yogurt-bowl.webp` | milk-tub.svg | [Yoghurt in bowl 011715.jpg](https://commons.wikimedia.org/wiki/File:Yoghurt_in_bowl_011715.jpg) | Susan Slater | CC BY-SA 4.0 | background removed, trimmed, resized |
| `images/products/strawberry-yogurt.webp` | — (new gallery image) | [Strawberry with yogurt (7471571336).jpg](https://commons.wikimedia.org/wiki/File:Strawberry_with_yogurt_(7471571336).jpg) | LeonardKong | CC BY 2.0 | cropped, resized |
| `images/products/yogurt-fruit-bowl.webp` | yogurt-pack.svg | [Yogurt fruit bowl.jpg](https://commons.wikimedia.org/wiki/File:Yogurt_fruit_bowl.jpg) | Jumbocombo0811 | CC BY-SA 4.0 | background removed, trimmed, resized |
| `images/products/green-beans.webp` | green-beans.svg | [Beans Phaseolus vulgaris Gartenbohne.jpg](https://commons.wikimedia.org/wiki/File:Beans_Phaseolus_vulgaris_Gartenbohne.jpg) | bluecherry.at | CC BY-SA 3.0 | background removed, trimmed, resized |
| `images/products/chocolate-bar.webp` | chocolate-bar.svg | [Malagos Chocolate white bg.jpg](https://commons.wikimedia.org/wiki/File:Malagos_Chocolate_white_bg.jpg) | Hariboneagle927 | CC BY-SA 4.0 | background removed, trimmed, resized |
| `images/products/chocolate-nut-bar.webp` | — (new gallery image) | [Nuts chocolate bar 02.jpg](https://commons.wikimedia.org/wiki/File:Nuts_chocolate_bar_02.jpg) | Stolbovsky | CC BY-SA 3.0 | background removed, trimmed, resized |
| `images/products/fruit-nut-chocolate.webp` | chocolate-box.svg (+ Snacks tile) | [Nuts chocolate bar 01.jpg](https://commons.wikimedia.org/wiki/File:Nuts_chocolate_bar_01.jpg) | Stolbovsky | CC BY-SA 3.0 | background removed, trimmed, resized |
| `images/products/chocolate-pieces.webp` | — (new gallery image) | [Chocolate(bgFFF).jpg](https://commons.wikimedia.org/wiki/File:Chocolate(bgFFF).jpg) | User:Aka | CC BY-SA 3.0 | background removed, trimmed, resized |
| `images/products/milk-bottle.webp` | milk-carton.svg | [Milk bottle and two doughnuts.jpg](https://commons.wikimedia.org/wiki/File:Milk_bottle_and_two_doughnuts.jpg) | www.Pixel.la Free Stock Photos | CC0 | background removed, trimmed, resized |
| `images/products/black-tea.webp` | tea-box.svg | [Ceylon black tea leaves.jpg](https://commons.wikimedia.org/wiki/File:Ceylon_black_tea_leaves.jpg) | Patrick Kolencherry | CC BY-SA 3.0 | background removed, trimmed, resized |
| `images/products/popcorn.webp` | popcorn.svg | [Popcorn in a bowl.jpg](https://commons.wikimedia.org/wiki/File:Popcorn_in_a_bowl.jpg) | Ziongarage | CC0 | background removed, trimmed, resized |
| `images/products/eggs-carton.webp` | eggs.svg | [6-Pack-Chicken-Eggs.jpg](https://commons.wikimedia.org/wiki/File:6-Pack-Chicken-Eggs.jpg) | Evan-Amos | Public domain | background removed, trimmed, resized |
| `images/products/beer-mug.webp` | beer-can.svg | [Glass beer mug full.jpg](https://commons.wikimedia.org/wiki/File:Glass_beer_mug_full.jpg) | AxtImHause | CC BY 4.0 | background removed, trimmed, resized |
| `images/products/bananas.webp` | banana.svg | [Banana bunch.jpeg](https://commons.wikimedia.org/wiki/File:Banana_bunch.jpeg) | NW Indian Language Institute | CC BY 3.0 | background removed, trimmed, resized |
| `images/products/onions.webp` | onions.svg | [Red Onion from Bangladesh 02.jpg](https://commons.wikimedia.org/wiki/File:Red_Onion_from_Bangladesh_02.jpg) | Nahid.rajbd | CC BY-SA 4.0 | background removed, trimmed, resized |
| `images/banners/sunflower-seeds.webp` | seed-packs.svg (Sunflower tile) | [Sunflower seeds. img 007.jpg](https://commons.wikimedia.org/wiki/File:Sunflower_seeds._img_007.jpg) | Dmitry Makeev | CC BY-SA 4.0 | background removed, trimmed, resized |
| `images/banners/coffee-beans.webp` | second coffee-jar.svg (Coffee tile) | [Dark roasted coffee on white background.jpg](https://commons.wikimedia.org/wiki/File:Dark_roasted_coffee_on_white_background.jpg) | Jon Sullivan | Public domain | background removed, trimmed, resized |
| `images/banners/pexels-3962285.jpg` | — (unchanged; "Most Popular" banner) | [Pexels photo 3962285](https://www.pexels.com/photo/3962285/) | Anna Shvets | Pexels License | resized |
| `images/banners/pexels-3167310.jpg` | — (unchanged; "Special Offers" banner) | [Pexels photo 3167310](https://www.pexels.com/photo/3167310/) | René Asmussen | Pexels License | resized |

All 27 illustrated SVGs and their generator script have been removed. They remain in git history.

## Supplied by the site owner (3 image files)

The three homepage hero banners use images the site owner provided directly, on 2026-10-01. Their
original source and licence were **not provided and have not been verified**, so they are not listed on
`/image-credits`. Their backgrounds were removed so they sit on the banner gradients. They were then
trimmed and saved as WebP.

| File | Used in | Notes |
| --- | --- | --- |
| `images/banners/hero-oils.webp` | "Natural Oils" hero banner | Sunflower-oil still life (bottle, seed sack, gravy boat, sunflower) |
| `images/banners/hero-organic.webp` | "Eat Organic" hero banner | Clay jug with wheat, mug, cup and sliced bread. **The mug shows a "BREWRY JARA" logo.** |
| `images/banners/hero-popcorn.webp` | "Big Popcorn" banner | Popcorn bucket with spilled popcorn |

Before public use, confirm you hold the rights to these images. If they were adapted from the reference
demo's own banner artwork, the demo's licensing restrictions still apply. Also consider removing or
blurring the logo on the mug.

## Other third-party resources

| Resource | Where | Notes |
| --- | --- | --- |
| Poppins font | `next/font/google` in `app/layout.js` | SIL Open Font License. Self-hosted at build time. |
| Icons | `react-icons` (Phosphor + Font Awesome sets) | MIT / CC BY 4.0 icon licences. |
| Payment logos (Visa, Amex, Mastercard, PayPal) | Footer, via `react-icons/fa` | Trademarks of their owners. Only show the ones your store actually accepts. |
| Google Maps embed | `app/contact/page.js` | Subject to Google Maps terms. Update `site.contact.mapQuery` in `lib/data/site.js`. |

## Replace before public production use

1. **Brand name and logo.** "Cartly" and the cart-in-a-circle mark are placeholders (`lib/data/site.js`,
   `components/ui/Logo.js`).
2. **Contact details.** The address, phone numbers (555 range) and `@cartly.example` emails are placeholders.
3. **Hero banner images** (`hero-*.webp`). Confirm your rights to them, and remove or blur the logo on the
   mug (see "Supplied by the site owner" above).
4. **Product data and photos.** The prices, names, descriptions and photos are sample content. The photos are
   licensed for use, but they show generic food rather than your actual products, so swap in your own
   product photography when you have it (keep the filenames, or update the `images` arrays in
   `lib/data/products.js` and `lib/data/imageCredits.js`).

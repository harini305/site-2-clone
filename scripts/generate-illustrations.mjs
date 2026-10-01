// Generates the original, brand-free product & banner illustrations used by the site.
// Run with: npm run assets:illustrations
// Output: public/images/products/*.svg and public/images/banners/*.svg
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "public", "images");

const svg = (body, defs = "", vb = "0 0 400 400") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" fill="none">${
    defs ? `<defs>${defs}</defs>` : ""
  }${body}</svg>\n`;

const lin = (id, stops, x2 = 0, y2 = 1) =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}">${stops
    .map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`)
    .join("")}</linearGradient>`;

const rad = (id, stops, cx = 0.4, cy = 0.35, r = 0.75) =>
  `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}">${stops
    .map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`)
    .join("")}</radialGradient>`;

const shadow = (cx = 200, cy = 362, rx = 120, ry = 14) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#000" opacity=".08"/>`;

const products = {
  bread: svg(
    `${shadow(200, 340, 140, 16)}
    <path d="M58 250c-20-70 20-150 110-170 90-20 170 20 185 95 12 60-18 120-90 140-90 25-185 5-205-65z" fill="url(#b1)"/>
    <path d="M70 245c-10-55 30-120 105-135 80-16 150 15 162 78" stroke="#f6d8a8" stroke-width="10" stroke-linecap="round" opacity=".6"/>
    <g stroke="#9a5a22" stroke-width="9" stroke-linecap="round" opacity=".75">
      <path d="M120 150c25 30 40 70 40 110"/><path d="M175 125c25 35 40 80 38 130"/><path d="M235 115c22 35 32 80 28 130"/>
    </g>
    <g fill="#fff" opacity=".55"><circle cx="150" cy="140" r="4"/><circle cx="210" cy="120" r="3"/><circle cx="270" cy="150" r="4"/><circle cx="180" cy="190" r="3"/><circle cx="250" cy="200" r="3"/><circle cx="120" cy="210" r="3"/></g>`,
    rad("b1", [[0, "#f4c27a"], [0.55, "#d98b3a"], [1, "#9b5420"]])
  ),
  "coffee-jar": svg(
    `${shadow(200, 372, 95, 12)}
    <rect x="120" y="40" width="160" height="62" rx="16" fill="url(#c1)"/>
    <rect x="120" y="86" width="160" height="10" fill="#1d120c" opacity=".4"/>
    <path d="M110 112c0-10 8-16 18-16h144c10 0 18 6 18 16v230c0 14-10 24-24 24H134c-14 0-24-10-24-24z" fill="url(#c2)"/>
    <rect x="110" y="170" width="180" height="140" fill="#c4161c"/>
    <rect x="110" y="170" width="180" height="16" fill="#8d0f14"/>
    <text x="200" y="222" text-anchor="middle" font-family="Georgia,serif" font-size="30" font-weight="700" fill="#fff">CAFÉ</text>
    <text x="200" y="248" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="20" fill="#ffd9a0">classic</text>
    <path d="M168 266h64v12c0 14-14 24-32 24s-32-10-32-24z" fill="#fff"/><path d="M232 270c14 0 14 18 0 18" stroke="#fff" stroke-width="5"/>
    <path d="M180 266c4-10 12-10 8-22M200 266c4-10 12-10 8-22" stroke="#ffd9a0" stroke-width="3" stroke-linecap="round"/>
    <rect x="128" y="120" width="14" height="230" rx="7" fill="#fff" opacity=".12"/>`,
    lin("c1", [[0, "#5a3a2a"], [1, "#2a1810"]]) + lin("c2", [[0, "#3b2216"], [1, "#1a0d07"]], 1, 0)
  ),
  fries: svg(
    `${shadow(200, 360, 110, 12)}
    <g stroke="#c98a12" stroke-width="2">
      ${[[110, 70, -14], [135, 50, -8], [160, 40, -4], [185, 35, 0], [210, 38, 4], [235, 45, 8], [260, 55, 12], [285, 75, 16], [148, 80, -6], [198, 70, 2], [248, 78, 10]]
        .map(([x, y, r]) => `<rect x="${x}" y="${y}" width="22" height="150" rx="5" fill="#f9c434" transform="rotate(${r} ${x + 11} ${y + 150})"/>`)
        .join("")}
    </g>
    <path d="M100 170h200l-24 185H124z" fill="url(#f1)"/>
    <path d="M100 170c30 30 70 30 100 0 30 30 70 30 100 0" fill="#e11d2a"/>
    <path d="M100 170h200v14H100z" fill="#fff" opacity=".9"/>
    <circle cx="200" cy="270" r="40" fill="#fff"/><circle cx="200" cy="270" r="30" fill="#f9c434"/>
    <path d="M185 262h30M185 274h30" stroke="#c4161c" stroke-width="6" stroke-linecap="round"/>`,
    lin("f1", [[0, "#ef3340"], [1, "#a8101b"]], 1, 0)
  ),
  "ice-cream": svg(
    `${shadow(200, 378, 40, 8)}
    <path d="M140 180h120l-56 190c-2 6-6 6-8 0z" fill="url(#i1)"/>
    <g stroke="#b06a2b" stroke-width="4" opacity=".7"><path d="M150 205l85 85M160 180l85 85M140 230l60 60M200 180l50 50M245 205l-85 85M235 180l-80 80M260 230l-55 55M195 180l-45 45"/></g>
    <path d="M130 185c-20-20-5-55 25-55-10-30 20-55 45-40 10-30 55-25 55 5 35 0 40 45 15 60 10 25-20 40-40 30-25 15-60 15-75 0-15 8-35 5-25 0z" fill="url(#i2)"/>
    <path d="M160 140c20-10 45-5 60 10M150 170c30 10 70 10 100-5M175 105c15-5 30 0 40 12" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".45"/>`,
    lin("i1", [[0, "#e7b06a"], [1, "#a8642a"]]) + rad("i2", [[0, "#f6b3cf"], [0.6, "#d7638f"], [1, "#a73a64"]])
  ),
  sundae: svg(
    `${shadow(200, 365, 110, 12)}
    <path d="M90 210h220c0 70-50 120-110 120S90 280 90 210z" fill="url(#s1)"/>
    <rect x="175" y="320" width="50" height="35" rx="6" fill="#e993b8"/>
    <circle cx="150" cy="185" r="50" fill="#fff6e8"/><circle cx="250" cy="185" r="50" fill="#5b3420"/><circle cx="200" cy="150" r="55" fill="#fde6c6"/>
    <path d="M150 140c30-40 80-40 100 0" stroke="#5b3420" stroke-width="10" stroke-linecap="round"/>
    <circle cx="205" cy="92" r="16" fill="#d61f3a"/><path d="M205 76c0-14 10-22 18-26" stroke="#3d7a24" stroke-width="4"/>`,
    lin("s1", [[0, "#f6c1d8"], [1, "#d76c9a"]])
  ),
  "chips-bag": svg(
    `${shadow(200, 372, 100, 12)}
    <path d="M110 40h180l-6 20 10 280-6 22H112l-6-22 10-280z" fill="url(#p1)"/>
    <path d="M110 40h180v20H110zM106 340h188v22H106z" fill="#c4161c"/>
    <g stroke="#fff" stroke-width="2" opacity=".5"><path d="M118 40v20M130 40v20M142 40v20M154 40v20M166 40v20M178 40v20M190 40v20M202 40v20M214 40v20M226 40v20M238 40v20M250 40v20M262 40v20M274 40v20M286 40v20"/></g>
    <ellipse cx="200" cy="140" rx="70" ry="40" fill="#fff" transform="rotate(-12 200 140)"/>
    <text x="200" y="152" text-anchor="middle" font-family="Arial Black,Arial" font-weight="900" font-size="34" fill="#e2231a" transform="rotate(-12 200 140)">CRISPS</text>
    <text x="200" y="210" text-anchor="middle" font-family="Arial" font-weight="700" font-size="22" fill="#fff6c2">paprika · hot</text>
    <g fill="#e35d1c" stroke="#a8360c" stroke-width="3">
      <path d="M140 250c20-15 50-5 55 15s-25 40-45 30-25-30-10-45z"/><path d="M220 260c25-10 50 5 50 25s-30 35-50 25-20-40 0-50z"/><path d="M175 300c18-8 40 0 40 18s-25 30-40 22-18-32 0-40z"/>
    </g>
    <path d="M130 70l-8 260" stroke="#fff" stroke-width="10" opacity=".15" stroke-linecap="round"/>`,
    lin("p1", [[0, "#ffb21a"], [0.6, "#ff7a00"], [1, "#e44b00"]])
  ),
  "chips-bag-red": svg(
    `${shadow(200, 372, 100, 12)}
    <path d="M110 40h180l-6 20 10 280-6 22H112l-6-22 10-280z" fill="url(#q1)"/>
    <path d="M110 40h180v20H110zM106 340h188v22H106z" fill="#ffd21f"/>
    <circle cx="200" cy="130" r="52" fill="#ffd21f"/><circle cx="200" cy="130" r="44" fill="#fff"/>
    <text x="200" y="140" text-anchor="middle" font-family="Arial Black,Arial" font-weight="900" font-size="26" fill="#d1121b">WAVY</text>
    <text x="200" y="215" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="26" fill="#fff">Original</text>
    <text x="200" y="245" text-anchor="middle" font-family="Arial" font-weight="700" font-size="16" fill="#ffe7a3">FAMILY SIZE</text>
    <g fill="#f7d17a" stroke="#c99329" stroke-width="3"><path d="M145 270c25-12 55 0 55 20s-30 35-55 25-25-35 0-45z"/><path d="M210 285c22-12 55-2 58 18s-25 35-50 28-30-36-8-46z"/></g>
    <path d="M130 70l-8 260" stroke="#fff" stroke-width="10" opacity=".15" stroke-linecap="round"/>`,
    lin("q1", [[0, "#f0303c"], [1, "#a90d17"]])
  ),
  cake: svg(
    `${shadow(200, 340, 150, 16)}
    <path d="M60 170l170-60 120 50v120l-120 60-170-60z" fill="#3a2016"/>
    <path d="M60 170l170 60v110L60 280z" fill="url(#k1)"/>
    <path d="M230 230l120-70v120l-120 60z" fill="#4a281b"/>
    <path d="M60 222l170 60 120-68" stroke="#fff3df" stroke-width="12"/>
    <path d="M60 170l170-60 120 50-120 70z" fill="url(#k2)"/>
    <g fill="#fff3df"><circle cx="150" cy="160" r="5"/><circle cx="200" cy="150" r="4"/><circle cx="250" cy="165" r="5"/><circle cx="180" cy="185" r="4"/><circle cx="280" cy="160" r="4"/><circle cx="120" cy="175" r="4"/><circle cx="230" cy="190" r="4"/></g>
    <path d="M100 150c20 10 30-5 50 5s30 0 50 10 40-5 60 5" stroke="#26140d" stroke-width="8" stroke-linecap="round"/>`,
    lin("k1", [[0, "#5a3020"], [1, "#2a140c"]], 1, 0) + lin("k2", [[0, "#6b3a26"], [1, "#3b2016"]])
  ),
  donut: svg(
    `${shadow(200, 330, 140, 14)}
    <circle cx="200" cy="200" r="140" fill="url(#d1)"/>
    <path d="M200 70c70 0 128 55 128 125 0 20-10 40-25 50-20-5-25 15-45 10s-20 20-45 15-25 10-45 0-30 5-45-10-35 0-40-25c-10-15-15-30-15-45 0-70 60-120 132-120z" fill="url(#d2)"/>
    <circle cx="200" cy="195" r="44" fill="#f7efe6"/><circle cx="200" cy="195" r="44" fill="#c98a4b" opacity=".35"/>
    <path d="M120 140c25-35 70-50 110-40" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity=".25"/>`,
    rad("d1", [[0, "#e9a65c"], [1, "#b46a2a"]], 0.5, 0.5, 0.6) + rad("d2", [[0, "#7a4126"], [1, "#3e1f12"]], 0.4, 0.3, 0.8)
  ),
  "oil-bottle": svg(
    `${shadow(200, 376, 95, 12)}
    <rect x="178" y="26" width="44" height="30" rx="6" fill="#e0b021"/>
    <path d="M182 56h36l10 40c40 20 62 60 62 110v130c0 16-12 28-28 28H138c-16 0-28-12-28-28V206c0-50 22-90 62-110z" fill="url(#o1)"/>
    <path d="M262 150c30 10 40 50 20 80" stroke="#e0b021" stroke-width="14" fill="none" stroke-linecap="round"/>
    <rect x="128" y="200" width="144" height="110" rx="10" fill="#fff" opacity=".92"/>
    <circle cx="200" cy="244" r="26" fill="#ffcc00"/><circle cx="200" cy="244" r="12" fill="#6b3d12"/>
    <g fill="#ffcc00">${Array.from({ length: 10 }, (_, i) => `<ellipse cx="200" cy="208" rx="6" ry="12" transform="rotate(${i * 36} 200 244)"/>`).join("")}</g>
    <text x="200" y="296" text-anchor="middle" font-family="Arial" font-weight="700" font-size="18" fill="#3b7a2a">SUNFLOWER</text>
    <path d="M130 120c-10 40-12 150-6 200" stroke="#fff" stroke-width="10" opacity=".35" stroke-linecap="round"/>`,
    lin("o1", [[0, "#ffe76a"], [0.5, "#f6c919"], [1, "#d99a00"]], 1, 0)
  ),
  "beer-bottle": svg(
    `${shadow(200, 378, 60, 8)}
    <rect x="182" y="22" width="36" height="22" rx="4" fill="#c9c9c9"/>
    <path d="M184 44h32v70c0 20 34 40 34 80v160c0 10-8 18-18 18h-64c-10 0-18-8-18-18V194c0-40 34-60 34-80z" fill="url(#bb1)"/>
    <rect x="150" y="220" width="100" height="90" rx="6" fill="#fff"/>
    <text x="200" y="258" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="20" fill="#1f6e3a">PINT</text>
    <text x="200" y="284" text-anchor="middle" font-family="Arial" font-size="13" fill="#555">golden lager</text>
    <path d="M190 60v60M164 200v150" stroke="#fff" stroke-width="7" opacity=".3" stroke-linecap="round"/>`,
    lin("bb1", [[0, "#3aa35c"], [1, "#145a2c"]], 1, 0)
  ),
  "spread-jar": svg(
    `${shadow(200, 372, 110, 12)}
    <rect x="120" y="50" width="160" height="50" rx="10" fill="#f2c200"/>
    <path d="M110 110c0-8 6-12 14-12h152c8 0 14 4 14 12v20c30 30 30 180 0 220-6 10-14 14-24 14H134c-10 0-18-4-24-14-30-40-30-190 0-220z" fill="url(#m1)"/>
    <ellipse cx="200" cy="232" rx="82" ry="62" fill="#f2c200"/><ellipse cx="200" cy="232" rx="72" ry="52" fill="#c4161c"/>
    <text x="200" y="240" text-anchor="middle" font-family="Arial Black,Arial" font-weight="900" font-size="28" fill="#f2c200">YEAST</text>
    <text x="200" y="262" text-anchor="middle" font-family="Arial" font-size="13" fill="#fff">extract spread</text>
    <path d="M128 150c-10 40-8 120 4 170" stroke="#fff" stroke-width="10" opacity=".2" stroke-linecap="round"/>`,
    lin("m1", [[0, "#3a2414"], [1, "#120a05"]], 1, 0)
  ),
  "milk-tub": svg(
    `${shadow(200, 372, 120, 12)}
    <ellipse cx="200" cy="80" rx="120" ry="28" fill="#f3f3f3"/><path d="M80 80h240v20c0 15-54 28-120 28S80 115 80 100z" fill="#e1e1e1"/>
    <path d="M90 110h220l-20 240c0 12-40 20-90 20s-90-8-90-20z" fill="url(#g1)"/>
    <path d="M94 160h212l-6 70H100z" fill="#2f8f3a"/>
    <text x="200" y="208" text-anchor="middle" font-family="Arial Black,Arial" font-weight="900" font-size="34" fill="#fff">GRASS</text>
    <path d="M104 290c40-30 70 10 96-10s60-20 96 10l-4 40c-40 20-150 20-184 0z" fill="#7cc04b"/>
    <text x="200" y="262" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#2f8f3a">vanilla · organic</text>`,
    lin("g1", [[0, "#ffffff"], [1, "#e9efe4"]], 1, 0)
  ),
  "yogurt-pack": svg(
    `${shadow(200, 360, 160, 14)}
    <path d="M60 150l140-50 140 50v150l-140 50-140-50z" fill="#1d7a34"/>
    <path d="M60 150l140 50v150L60 300z" fill="url(#y1)"/>
    <path d="M200 200l140-50v150l-140 50z" fill="url(#y2)"/>
    <path d="M60 150l140-50 140 50-140 50z" fill="#eaf6ea"/>
    <path d="M200 100v100M130 125l140 50M270 125l-140 50" stroke="#c9dcc9" stroke-width="3"/>
    <text x="270" y="262" text-anchor="middle" font-family="Arial Black,Arial" font-weight="900" font-size="24" fill="#fff" transform="rotate(-18 270 262)">YOGURT</text>
    <g fill="#e2231a"><circle cx="110" cy="250" r="20"/><circle cx="145" cy="270" r="16"/></g>
    <g fill="#5fb446"><path d="M100 230l10 10 10-10M137 255l8 8 8-8"/></g>`,
    lin("y1", [[0, "#2e9b49"], [1, "#16602a"]], 1, 0) + lin("y2", [[0, "#e2231a"], [1, "#a80f15"]], 1, 0)
  ),
  "green-beans": svg(
    `${shadow(200, 360, 140, 14)}
    <g stroke="#2f6e1d" stroke-width="3">
    ${[[90, 160, -30], [120, 190, -15], [150, 150, 10], [180, 200, -5], [210, 160, 20], [240, 210, 5], [270, 170, 30], [140, 240, 15], [230, 250, -20], [190, 120, -25]]
      .map(([x, y, r]) => `<path d="M${x} ${y}c30-40 90-60 140-40-40 10-90 40-130 60-10 4-16-8-10-20z" fill="url(#gb)" transform="rotate(${r} ${x} ${y})"/>`)
      .join("")}
    </g>
    <g fill="#9ed36a" opacity=".6"><circle cx="170" cy="190" r="5"/><circle cx="230" cy="220" r="5"/><circle cx="140" cy="150" r="4"/></g>`,
    lin("gb", [[0, "#7fc24a"], [1, "#3f8c25"]], 1, 0)
  ),
  "chocolate-bar": svg(
    `${shadow(200, 320, 170, 14)}
    <path d="M40 140l300-30 30 120-300 40z" fill="url(#cb1)"/>
    <path d="M40 140l300-30 6 22-300 32z" fill="#3e1f6e"/>
    <path d="M70 280l-30-140 30 0 30 130z" fill="#b0b0b0" opacity=".6"/>
    <text x="200" y="205" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="42" fill="#fff" transform="rotate(-6 200 205)">Milk Choc</text>
    <rect x="130" y="222" width="110" height="26" rx="4" fill="#f2c200" transform="rotate(-6 185 235)"/>
    <text x="185" y="241" text-anchor="middle" font-family="Arial Black,Arial" font-size="16" fill="#5a2a0a" transform="rotate(-6 185 235)">WHOLE NUT</text>
    <ellipse cx="285" cy="215" rx="26" ry="18" fill="#c98a4b"/><ellipse cx="290" cy="208" rx="10" ry="6" fill="#e9b47a"/>`,
    lin("cb1", [[0, "#6a2fb6"], [1, "#3a1477"]], 1, 0)
  ),
  "chocolate-box": svg(
    `${shadow(200, 365, 120, 12)}
    <path d="M110 70l130-20 50 30v260l-130 20-50-30z" fill="#2a0f5e"/>
    <path d="M110 70l50 30v260l-50-30z" fill="#4a1c9a"/>
    <path d="M160 100l130-20v260l-130 20z" fill="url(#cx1)"/>
    <text x="225" y="160" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="30" fill="#fff" transform="rotate(-8 225 160)">Milk</text>
    <text x="225" y="192" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="22" fill="#f2c200" transform="rotate(-8 225 192)">fruit &amp; nut</text>
    <circle cx="225" cy="260" r="38" fill="#7a3c18"/><circle cx="212" cy="250" r="12" fill="#c98a4b"/><circle cx="238" cy="268" r="10" fill="#5a1f0e"/>`,
    lin("cx1", [[0, "#6c34c4"], [1, "#3b1584"]], 1, 0)
  ),
  "milk-carton": svg(
    `${shadow(200, 372, 90, 10)}
    <path d="M140 80l20-40h80l20 40z" fill="#5a2c18"/><rect x="215" y="30" width="26" height="22" rx="4" fill="#f5f5f5"/>
    <rect x="130" y="80" width="140" height="285" rx="6" fill="url(#mc1)"/>
    <text x="200" y="130" text-anchor="middle" font-family="Arial Black,Arial" font-size="24" fill="#fff">BARISTA</text>
    <text x="200" y="158" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="20" fill="#7cc8ef">milk</text>
    <circle cx="200" cy="270" r="62" fill="#7cc8ef"/><circle cx="200" cy="270" r="48" fill="#fff"/>
    <circle cx="183" cy="262" r="6" fill="#4a2414"/><circle cx="217" cy="262" r="6" fill="#4a2414"/><path d="M182 286c10 10 26 10 36 0" stroke="#d61f3a" stroke-width="5" stroke-linecap="round"/>`,
    lin("mc1", [[0, "#7a3e22"], [1, "#4a2414"]], 1, 0)
  ),
  "tea-box": svg(
    `${shadow(200, 360, 140, 14)}
    <path d="M70 140l170-40 90 40v190l-170 40-90-40z" fill="#c78a00"/>
    <path d="M70 140l90 40v190l-90-40z" fill="#f2c200"/>
    <path d="M160 180l170-40v190l-170 40z" fill="url(#t1)"/>
    <path d="M70 140l170-40 90 40-170 40z" fill="#ffe066"/>
    <rect x="190" y="200" width="110" height="40" rx="6" fill="#c4161c" transform="rotate(-13 245 220)"/>
    <text x="245" y="228" text-anchor="middle" font-family="Arial Black,Arial" font-size="22" fill="#fff" transform="rotate(-13 245 220)">BLACK TEA</text>
    <path d="M220 280c10-20 40-20 50 0" stroke="#2f6e1d" stroke-width="6" stroke-linecap="round"/><path d="M245 275c5-15 20-25 30-20" fill="#5fb446"/>`,
    lin("t1", [[0, "#ffd21f"], [1, "#e6a800"]], 1, 0)
  ),
  popcorn: svg(
    `${shadow(200, 372, 120, 14)}
    <g fill="#fff6dc" stroke="#e8c675" stroke-width="2">
    ${Array.from({ length: 26 }, (_, i) => {
      const x = 110 + ((i * 37) % 180);
      const y = 70 + ((i * 23) % 70);
      const r = 18 + (i % 4) * 3;
      return `<circle cx="${x}" cy="${y}" r="${r}"/>`;
    }).join("")}
    </g>
    <path d="M100 140h200l-26 220H126z" fill="#fff"/>
    ${[0, 1, 2, 3, 4].map((i) => `<path d="M${110 + i * 40} 140h20l-${3 - i * 1.5} 220h-18z" fill="#e2231a"/>`).join("")}
    <rect x="128" y="220" width="144" height="56" rx="8" fill="#ffd21f" stroke="#c4161c" stroke-width="4"/>
    <text x="200" y="258" text-anchor="middle" font-family="Arial Black,Arial" font-size="28" fill="#c4161c">POPCORN</text>`
  ),
  eggs: svg(
    `${shadow(200, 350, 160, 14)}
    <ellipse cx="200" cy="230" rx="160" ry="40" fill="#8a5a2b"/>
    ${[[120, 180], [170, 165], [225, 165], [278, 180], [145, 205], [200, 200], [255, 205], [105, 220], [300, 220], [175, 230], [230, 232]]
      .map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="32" ry="40" fill="url(#e${i % 2})" transform="rotate(${(i % 3) * 10 - 10} ${x} ${y})"/>`)
      .join("")}
    <path d="M40 230c0 60 60 100 160 100s160-40 160-100c-30 30-90 40-160 40S70 260 40 230z" fill="url(#eb)"/>
    <g stroke="#6b411c" stroke-width="4" opacity=".6"><path d="M60 260c40 25 90 35 140 35s100-10 140-35M80 290c40 20 80 25 120 25s80-5 120-25"/><path d="M100 250v70M150 262v70M200 266v66M250 262v66M300 250v60"/></g>`,
    rad("e0", [[0, "#fdf1e3"], [1, "#e7c9a6"]]) + rad("e1", [[0, "#f3d2ae"], [1, "#c99366"]]) + lin("eb", [[0, "#b07a3e"], [1, "#6b411c"]])
  ),
  "beer-can": svg(
    `${shadow(200, 376, 80, 10)}
    <ellipse cx="200" cy="50" rx="70" ry="16" fill="#cfd4da"/>
    <path d="M130 50h140v300c0 10-30 22-70 22s-70-12-70-22z" fill="url(#bc1)"/>
    <path d="M130 70h140v20H130z" fill="#cfd4da"/>
    <circle cx="200" cy="200" r="58" fill="#fff"/><path d="M150 200c30-40 70 40 100 0" stroke="#24a148" stroke-width="16" stroke-linecap="round"/><path d="M150 220c30-40 70 40 100 0" stroke="#ffd21f" stroke-width="10" stroke-linecap="round"/>
    <text x="200" y="300" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="30" fill="#fff">Lemon</text>
    <path d="M145 90v260" stroke="#fff" stroke-width="10" opacity=".25" stroke-linecap="round"/>`,
    lin("bc1", [[0, "#1d6fd1"], [0.5, "#3a8ff0"], [1, "#0f3f8a"]], 1, 0)
  ),
  banana: svg(
    `${shadow(200, 330, 160, 14)}
    <path d="M90 90c-10 120 60 210 200 230 30 4 40-20 10-30C190 260 140 180 130 90c-2-20-36-20-40 0z" fill="url(#bn)"/>
    <path d="M110 100c0 120 80 200 220 200 30 0 30-25 0-30-120-10-180-90-190-170-3-20-30-20-30 0z" fill="url(#bn2)"/>
    <path d="M130 105c10 110 70 180 190 195 30 3 30-22 2-28-110-20-150-90-160-170-3-18-34-18-32 3z" fill="url(#bn)"/>
    <path d="M100 60c10-5 25-5 30 0l-4 40h-24z" fill="#5a3a16"/><path d="M118 60l4-20" stroke="#5a3a16" stroke-width="10" stroke-linecap="round"/>
    <circle cx="330" cy="286" r="7" fill="#3d2810"/><circle cx="312" cy="300" r="6" fill="#3d2810"/>`,
    lin("bn", [[0, "#ffe259"], [1, "#f2b705"]], 1, 1) + lin("bn2", [[0, "#f6cf2b"], [1, "#d39b00"]], 1, 1)
  ),
  onions: svg(
    `${shadow(200, 340, 160, 14)}
    ${[[140, 230, 80], [265, 235, 75], [205, 180, 70]]
      .map(([x, y, r]) => `<path d="M${x} ${y - r - 30}c10 20 10 25 0 30 ${r} 10 ${r} ${r * 2} 0 ${r * 2}s-${r}-${r} 0-${r * 2}c-10-5-10-10 0-30z" fill="url(#on)"/><path d="M${x} ${y - r}c-30 30-30 ${r * 1.4} 0 ${r * 1.9}M${x} ${y - r}c30 30 30 ${r * 1.4} 0 ${r * 1.9}" stroke="#a35a1c" stroke-width="3" opacity=".5" fill="none"/>`)
      .join("")}`,
    rad("on", [[0, "#f6c58b"], [0.7, "#d9893e"], [1, "#a35a1c"]])
  ),
};

const banners = {
  // Sunflower-oil still life for the "Natural Oils" hero card.
  "oils-still-life": svg(
    `<ellipse cx="300" cy="380" rx="270" ry="30" fill="#000" opacity=".18"/>
    <path d="M40 380l60-60h400l60 60z" fill="#c9a26b"/><path d="M40 380l60-60h400l60 60z" fill="url(#jute)" opacity=".5"/>
    <path d="M90 330c-30-90 0-180 70-190 60-8 100 60 90 190z" fill="#a7814e"/><path d="M110 170c20-30 90-30 110 0-30 20-80 20-110 0z" fill="#3b2a16"/>
    <g fill="#2a2a2a">${Array.from({ length: 14 }, (_, i) => `<ellipse cx="${125 + (i % 7) * 13}" cy="${165 + Math.floor(i / 7) * 10}" rx="5" ry="8"/>`).join("")}</g>
    <rect x="262" y="40" width="46" height="34" rx="6" fill="#e0b021"/>
    <path d="M266 74h38v50c34 20 40 50 40 80v140c0 10-8 18-18 18h-82c-10 0-18-8-18-18V204c0-30 6-60 40-80z" fill="url(#ob)"/>
    <path d="M250 180c-4 40-4 120 0 160" stroke="#fff" stroke-width="8" opacity=".35" stroke-linecap="round"/>
    <path d="M200 340c0-30 40-40 60-40h20c0 30-30 40-80 40z" fill="#f6c919" opacity=".9"/><path d="M196 340h90" stroke="#d9a400" stroke-width="5"/>
    <g transform="translate(450 190)"><g fill="#ffcc00">${Array.from({ length: 16 }, (_, i) => `<ellipse cx="0" cy="-62" rx="14" ry="34" transform="rotate(${i * 22.5})"/>`).join("")}</g><circle r="40" fill="#5a3410"/><circle r="30" fill="#3a200a"/></g>
    <path d="M450 230c-10 60-20 100-40 140" stroke="#3f8c25" stroke-width="10" stroke-linecap="round"/><path d="M430 300c-40-10-60 10-70 30 30 0 60-5 70-30z" fill="#5fb446"/>`,
    lin("ob", [[0, "#ffe76a"], [0.5, "#f6c919"], [1, "#d99a00"]], 1, 0) +
      `<pattern id="jute" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 4h8M4 0v8" stroke="#8a6a3a" stroke-width="1"/></pattern>`,
    "0 0 600 420"
  ),
  // Clay jug and breads for the "Eat Organic" hero card.
  "organic-still-life": svg(
    `<ellipse cx="300" cy="390" rx="280" ry="26" fill="#000" opacity=".2"/>
    <path d="M300 40c-30 0-40 30-36 60-60 30-90 100-80 180 8 60 50 100 116 100s108-40 116-100c10-80-20-150-80-180 4-30-6-60-36-60z" fill="url(#jug)"/>
    <path d="M410 140c60 0 70 120 0 140" stroke="#7a3410" stroke-width="18" fill="none" stroke-linecap="round"/>
    <g stroke="#2a1006" stroke-width="6" fill="none" opacity=".75"><path d="M200 200c60 20 140 20 200 0M196 240c60 20 148 20 208 0M204 300c60 15 132 15 192 0"/></g>
    <g fill="#f2c200">${Array.from({ length: 9 }, (_, i) => `<path d="M${215 + i * 20} 215l8 14-8 14-8-14z"/>`).join("")}</g>
    <path d="M40 390c-10-60 30-110 110-115 80-5 120 40 120 100z" fill="url(#loaf)"/>
    <g stroke="#8a4a18" stroke-width="7" stroke-linecap="round" opacity=".7"><path d="M90 320l30 30M130 305l35 35M175 300l35 35"/></g>
    <path d="M420 390c0-50 40-80 90-80s80 30 80 80z" fill="url(#loaf)"/>
    <path d="M150 120c20-40 30-60 20-90M175 140c30-40 40-70 34-100" stroke="#d9b56a" stroke-width="4"/>
    <g fill="#e6c27a">${Array.from({ length: 8 }, (_, i) => `<ellipse cx="${168 + (i % 2) * 12}" cy="${40 + i * 12}" rx="5" ry="9"/>`).join("")}</g>`,
    lin("jug", [[0, "#c2581d"], [0.5, "#9a3f12"], [1, "#5a220a"]], 1, 0) + rad("loaf", [[0, "#f4c27a"], [0.6, "#d98b3a"], [1, "#9b5420"]]),
    "0 0 600 420"
  ),
  // Sunflower-seed snack packs for the orange promo tile.
  "seed-packs": svg(
    `<ellipse cx="200" cy="384" rx="190" ry="16" fill="#000" opacity=".15"/>
    ${[[30, 70, -6], [110, 50, 0], [190, 70, 6]]
      .map(
        ([x, y, r]) => `<g transform="rotate(${r} ${x + 90} ${y + 150})"><path d="M${x} ${y}h180v300H${x}z" fill="url(#sp)"/><path d="M${x} ${y}h180v18H${x}z" fill="#d61f1f"/>
      <rect x="${x + 10}" y="${y + 170}" width="160" height="50" rx="6" fill="#d61f1f"/><text x="${x + 90}" y="${y + 204}" text-anchor="middle" font-family="Arial Black,Arial" font-size="24" fill="#fff">SEEDS</text>
      <g fill="#1d1d1d">${Array.from({ length: 6 }, (_, i) => `<ellipse cx="${x + 45 + (i % 3) * 45}" cy="${y + 70 + Math.floor(i / 3) * 50}" rx="16" ry="26" transform="rotate(${i * 20 - 40} ${x + 45 + (i % 3) * 45} ${y + 70 + Math.floor(i / 3) * 50})"/>`).join("")}</g>
      <path d="M${x} ${y + 230}h180v70H${x}z" fill="#1d1d1d"/><path d="M${x + 20} ${y + 260}c40-30 100-30 140 0" stroke="#5fb446" stroke-width="10"/></g>`
      )
      .join("")}`,
    lin("sp", [[0, "#ffe23a"], [1, "#f2b705"]]),
    "0 0 400 400"
  ),
};

for (const [dir, set] of [["products", products], ["banners", banners]]) {
  mkdirSync(join(root, dir), { recursive: true });
  for (const [name, content] of Object.entries(set)) {
    writeFileSync(join(root, dir, `${name}.svg`), content);
  }
}
console.log(`Wrote ${Object.keys(products).length} product and ${Object.keys(banners).length} banner illustrations.`);

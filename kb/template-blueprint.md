# Avenue Cafe reconstruction blueprint

## Reference and evidence boundary

Primary reference: [Café Cecilia](https://www.cafececilia.com/index), selected after Avenue's facts, media and customer journeys. Observed in the browser at 1440×900 and 390×844: initial brand landing, Menus selection and Info presentation. The selection captures are retained separately as `selection-home-desktop.png`, `selection-menu-desktop.png`, `selection-info-desktop.png` and `selection-home-mobile.png`; reconstruction captures use page/viewport names.

These are browser observations, **not successful REA evidence**. The task-owned compatibility browser launch was rejected before execution. No CDP endpoint, REA target ID, passive capture or REA evidence ID exists for this run. Required REA observation remains an unresolved stage dependency; do not infer it from installed tooling or browser labeling.

## Observed reference system

- Desktop navigation begins at approximately x=50, y=49, in a persistent left rail. Links use roughly 24px serif type with 30.7px line spacing; the selected item is italic. A small social line sits near the lower left.
- Info content at 1440px is x=490 with a 628px measure, 24px serif body and approximately 31px line height. Paragraph groups use one line of separation and large gaps separate editorial sections. Info is text followed by photography, rather than card tiles.
- The initial hero is a centered proprietary logo/pear composition with extensive paper-colored space. The reference's mobile landing leaves a large empty region and its mobile identity is oversized. These are deliberate adaptation points, not behaviors to reproduce.
- Menus reveals a text-only printed-menu presentation on warm paper against a pale neutral surround; a two-item submenu appears under Menus. The inspected menu is an image/print treatment. The main document retains one URL while its navigation scrolls/selects content; clicking Menus did not navigate to a new route.
- Mobile uses a top-left mark and top-right menu icon, then one content column. Proprietary Bembo type was identified from computed styles; no reference font, graphic, code or business content is reused.
- Hidden ordering, validation and submission states were not observed. Reservations/shop/cart are outside Avenue's scope and are not reconstructed. Exact reference easing, server APIs and loading/error behavior remain unknown.

## Avenue implementation tokens and dimensions

One family: self-hosted **EB Garamond**, regular and italic, under the bundled OFL license; Georgia/serif fallbacks. This is an openly licensed substitute, not the reference font. Ink `#191815`, paper `#faf7f2`, secondary text `#625e56`, rules `#d8d1c6`, menu surround `#efefed`. No gradients, decorative ordinals or invented proof.

At 1440px: fixed rail x=50, top=46, bottom=42, width=240; original Avenue lettering 40px; navigation follows after a 75px gap. Main x=490, width=628, top padding=178. Desktop body=24px/1.28, home title=96px, other page titles=56px, lead=30–32px, editorial headings=32px, action text=22px, notes=18px, captions/footer=15px. The compact footer follows the content column.

At widths 701–1050px: rail x=32; main x=36vw and width=57vw; menu paper padding reduces from 46px to 28px. Below 701px: header returns to document flow with 22px side gutters, 32px lettering and a native button for navigation; main begins after 66px padding. Content has 22px side gutters, 18px at 320px. Home title=62px (54px below 360px), other titles=44px, body=22px, menu items=21px and notes=17px. Header wraps naturally when text is enlarged. No fixed-height hero, clipped overflow or fixed mobile overlay.

Photos retain their original 4:3 ratio with explicit dimensions and 640/1280px WebP responsive renditions. No image text overlay, hard portrait crop or background cover. Preserve both BLT halves and the entrance door plus glass lettering.

Menu paper: 628px outer width on desktop, 46px internal padding, 44px centered italic lettering, 58px category gaps; 28px category headings, 22px item names, 18px descriptions. Mobile paper padding=22px (18px at 320px), heading=26px, 43px category gaps. Sides and drinks use two columns, becoming one at 320px. Customer options use native details/summary and wrap within paper padding. Category jump links precede the paper.

## Page/content mapping and customer flows

| Avenue route | Reference mapping | Populated content and action |
|---|---|---|
| `/` | Restrained identity landing, followed by inset editorial photography/text | Original Avenue lettering, breakfast/lunch/coffee intro, menu and call actions; actual BLT, supported food/cookies copy, actual entrance, address and Visit/Maps links. |
| `/menu/` | Printed text-only menu on paper | All 85 source-index entries across 13 categories from [offerings](offerings.md) and `menu.json`, with readable descriptions and real preparation/bread/cheese/topping/dressing choices. Repeated BLT/grilled-cheese categories consolidated. No prices, item photos or editorial transcription notes. |
| `/visit/` | Info's address/phone then photograph and practical text | Verified 409 Washington Ave, Towson MD 21204; telephone; exact Maps CID; June 2026 entrance photo; supported inside/downstairs signage. No guessed floor/suite, parking or accessibility route. |

All three pages are separate authored HTML build outputs, direct-loadable without JavaScript. Normal links preserve browser Back/Forward/refresh. Active navigation is italic with `aria-current=page`. Mobile Explore toggles navigation in normal flow with `aria-expanded`; Escape closes and returns focus to the button, outside click closes, Enter/Space activates native controls. Without JavaScript, navigation remains visible. Category jumps frame their heading using scroll margins. Breads/toppings and salad options expand/collapse with native keyboard support; the full item list stays visible.

Primary destination: `tel:+14102968300`; map: `https://www.google.com/maps?cid=12875415791561100458`. One concise call prompt per page covers current hours, prices and availability. No schedule, open-now badge, hours schema, ordering form, email, social or payment flow is invented. [Contact evidence](contact-and-hours.md), [sources](sources.md).

Motion is an original quiet adaptation: one 450ms/7px heading entrance, 200ms arrow hover shift and smooth category scrolling. Reduced-motion disables these. All controls retain visible 2px focus outlines; skip-to-content works. No ongoing decorative motion.

## Actual media and implementation boundaries

- `0927eb2fadd1…`: authentic June 2019 BLT → `/images/avenue-blt-{640,1280}.webp` on Home, full 4:3, both halves and pickle. Historical photo is not a current portion guarantee.
- `17b4d83ae1da…`: authentic June 2026 glass entrance → `/images/avenue-entrance-{640,1280}.webp` on Home/Visit, full 4:3. Door remains left, lettering right. [Media record](media.md) retains provenance.
- Wall board is content evidence only. Chicken/fries remains unselected in this stage. Unrelated Avenue Kitchen & Bar images are excluded.

Original implementation lives in `app/`; `scripts/render-pages.mjs` creates the three authored pages from cleaned `src/menu.json`, and Vite uses three explicit HTML inputs. Generated HTML is committed so development works immediately. The cleaned menu keeps source keys for exact reconciliation, with category-wide options replacing repetitive transcription descriptions. Its 85 entries represent offerings/variants, not a claim of 85 unique meals.

This static flow needs no custom service. Existing `/health`, uncached `/version.json`, Nginx routing/404 behavior, noindex response headers and container checks remain the backend owner's responsibility under [API contract](../docs/API.md). No runtime or Dockerfile changes were made. All pages already contain noindex/nofollow metadata. No canonical domain is invented before publication.

## Intentional deviations and remaining unknowns

Separate Home/Menu/Visit routes replace reference anchors, per the accepted brief. Useful copy/actions and real photography replace the proprietary logo/empty mobile hero. Semantic text replaces image-only menu scans for reading, search, keyboard and zoom. One coherent 628px column serves all pages instead of recreating a horizontal image-menu carousel. No incidental reservation/shop functions or unsupported Avenue claims are added. Final Derek-only menu photography is deferred to its separate later variation.

Browser rendering and interaction checks can establish the implementation behavior, but cannot close the missing REA observation. Conflicting hours, current prices/stock, exact suite/floor and accessibility/parking remain unknown. Stage acceptance belongs to the coordinator.

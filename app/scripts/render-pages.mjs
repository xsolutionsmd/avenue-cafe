// Authored HTML keeps all routes and the complete menu useful without JavaScript.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const menu = JSON.parse(readFileSync(join(root, 'src/menu.json'), 'utf8'));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const phone = '<a href="tel:+14102968300">(410) 296-8300</a>';
const map = 'https://www.google.com/maps?cid=12875415791561100458';
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
const action = (href, text) => `<a class="text-link" href="${href}"><span>${text}</span>${arrow}</a>`;
const photo = (name, alt, eager = false) => `<img src="/images/${name}-1280.webp" srcset="/images/${name}-640.webp 640w, /images/${name}-1280.webp 1280w" sizes="(max-width: 700px) calc(100vw - 40px), 628px" width="1280" height="960" alt="${alt}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
const note = `<p class="call-note">Call ${phone} for current hours, prices &amp; availability.</p>`;
const nav = [ ['/', 'Home'], ['/menu/', 'Menu'], ['/visit/', 'Visit'] ];
const jumps = [['breakfast','Breakfast'],['hot-food','Hot food'],['house-specialties','House specialties'],['cold-sandwiches','Cold sandwiches'],['salads','Salads'],['extras','Sides & drinks']];
function shell(page, title, description, content) {
  return `<!doctype html>
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#faf7f2">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="preload" href="/fonts/eb-garamond-regular.ttf" as="font" type="font/ttf" crossorigin>
  <title>${title}</title>
</head><body class="${page === '/menu/' ? 'menu-page' : page === '/' ? 'home-page' : 'visit-page'}">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="wordmark" href="/" aria-label="Avenue Cafe home">Avenue<br><span>Cafe</span></a>
    <button class="nav-toggle" type="button" aria-controls="site-nav" aria-expanded="false">Explore <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation"><ul>${nav.map(([href,label]) => `<li><a href="${href}"${page === href ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}</ul><a class="nav-call" href="tel:+14102968300">Call the cafe</a></nav>
    <div class="sidebar-address">409 Washington Ave<br>Towson, Maryland</div>
  </header>
  <main id="main" tabindex="-1" class="content-column">${content}</main>
  <footer class="site-footer content-column"><span>Avenue Cafe</span><a href="${map}">409 Washington Ave, Towson</a><a href="#main">Back to top</a></footer>
  <script type="module" src="/src/main.js"></script>
</body></html>\n`;
}
const home = `<div class="page-intro home-intro"><h1>Avenue Cafe</h1><p class="intro-line">Breakfast, lunch,<br>and a cup of coffee.</p><div class="actions">${action('/menu/', 'Explore the menu')}${action('tel:+14102968300', 'Call the cafe')}</div></div>
<figure class="editorial-photo">${photo('avenue-blt', 'Both halves of Avenue Cafe’s BLT on toasted bread, with a pickle spear.', true)}<figcaption>A BLT from the cafe.</figcaption></figure>
<section class="editorial-copy" aria-labelledby="home-food"><h2 id="home-food">A little of what you like.</h2><p>Eggs and omelettes. Sandwiches, salads and something sweet. Find us inside 409 Washington Avenue in Towson, for breakfast or lunch.</p><p>And for a little something after? Homemade chocolate chip cookies.</p>${action('/menu/', 'Food & drink')}</section>
<figure class="editorial-photo">${photo('avenue-entrance', 'The glass entrance to Avenue Cafe inside the building, with the door on the left and cafe lettering on the right.')}<figcaption>Look for Avenue Cafe inside the building.</figcaption></figure>
<section class="editorial-copy visit-summary" aria-labelledby="home-visit"><h2 id="home-visit">Come find us.</h2><address>409 Washington Ave<br>Towson, MD 21204</address><div class="actions">${action('/visit/', 'Plan your visit')}${action(map, 'Open the map')}</div>${note}</section>`;
function menuSection(category) {
  const items = menu.items.filter(item => item.category === category.source);
  return `<section class="menu-section" id="${category.id}" aria-labelledby="heading-${category.id}"><h2 id="heading-${category.id}">${category.title}</h2>${category.intro ? `<p class="category-note">${category.intro}</p>` : ''}<ul class="menu-items${category.compact ? ' compact-items' : ''}">${items.map(item => `<li data-menu-key="${item.key}"><h3>${esc(item.name)}</h3>${item.description ? `<p>${esc(item.description)}</p>` : ''}</li>`).join('')}</ul>${category.options || ''}</section>`;
}
const options = (label, values) => `<p><span>${label}</span> ${values.map(esc).join(', ')}.</p>`;
const cold = menu.category_notes['Cold Sandwiches'];
const salad = menu.category_notes.Salads;
const categories = [
  {source:'Breakfast Stuff / Egg Platters',id:'breakfast',title:'Egg platters',intro:'With home fries and buttered toast or English muffin. Cheese and bagel add-ons available.'},
  {source:'Breakfast Stuff / Three Egg Omelettes',id:'omelettes',title:'Three egg omelettes',intro:'With home fries and buttered toast or English muffin. Cheese and bagel add-ons available.'},
  {source:'Breakfast Stuff / Breakfast Sandwiches',id:'breakfast-sandwiches',title:'Breakfast sandwiches',intro:'On buttered toast, English muffin or Kaiser roll. Bagel and egg-white options available. Choose bacon, ham, sausage or turkey bacon for your meat.'},
  {source:'Breakfast Stuff / Bagels',id:'bagels',title:'Bagels',intro:'Assorted bagels, with your choice of spread.'},
  {source:'Breakfast Stuff / Sides',id:'breakfast-sides',title:'Breakfast sides',compact:true},
  {source:'Hot Stuff',id:'hot-food',title:'Hot food'},
  {source:'House Specialties',id:'house-specialties',title:'House specialties'},
  {source:'Cold Sandwiches',id:'cold-sandwiches',title:'Cold sandwiches',intro:'Served as a sandwich, sub or wrap.',options:`<details class="menu-options"><summary>Breads, cheese & toppings</summary><div>${options('Breads',cold.bread_choices)}${options('Cheese',cold.cheese)}${options('Toppings',cold.toppings)}${options('Additions',cold.additions)}</div></details>`},
  {source:'Salads',id:'salads',title:'Salads',options:`<details class="menu-options"><summary>Salad additions & dressings</summary><div>${options('Additions',salad.additions)}${options('Dressings',salad.dressings)}<p>Dressings served on the side. Extra dressing available.</p></div></details>`},
  {source:'Salad Platters',id:'salad-platters',title:'Salad platters',intro:'On a bed of lettuce with tomato and a cracker.'},
  {source:'Extra Stuff',id:'extras',title:'On the side',compact:true},
  {source:'Beverages',id:'beverages',title:'To drink',compact:true},
  {source:'Desserts',id:'desserts',title:'Something sweet',compact:true},
];
const menuPage = `<div class="page-intro menu-intro"><h1>Our menu</h1><p class="intro-line">Breakfast &amp; lunch</p>${note}</div><nav class="menu-index" aria-label="Menu categories">${jumps.map(([id,label]) => `<a href="#${id}">${label}</a>`).join('')}</nav><div class="menu-paper"><p class="paper-lettering" aria-hidden="true">Avenue Cafe</p>${categories.map(menuSection).join('')}<section class="party-note"><h2>For the table, or the meeting.</h2><p>Gourmet sandwich and party platters available. ${action('tel:+14102968300', 'Ask about platters')}</p></section></div>`;
const visit = `<div class="page-intro"><h1>Visit the cafe</h1><p class="intro-line">A little tucked away.<br>Right here in Towson.</p></div><section class="visit-details" aria-label="Location and contact"><address>Avenue Cafe<br>409 Washington Ave<br>Towson, MD 21204</address><p>${phone}</p><div class="actions">${action(map,'Find us on Google Maps')}${action('tel:+14102968300','Call the cafe')}</div>${note}</section><figure class="editorial-photo">${photo('avenue-entrance','Avenue Cafe’s glass door and cafe lettering, with the counter visible inside.',true)}<figcaption>The cafe entrance, inside 409 Washington Avenue.</figcaption></figure><section class="editorial-copy"><h2>Look inside.</h2><p>You’ll find Avenue Cafe inside the building. Look for the glass door and Avenue Cafe lettering; the entrance sign points downstairs below PNC.</p><p>Call us if you need help finding the cafe.</p>${action('/menu/','Take a look at the menu')}</section>`;
for (const [path, title, description, content] of [
  ['/', 'Avenue Cafe | Breakfast & lunch in Towson', 'Breakfast, lunch, coffee and homemade chocolate chip cookies at Avenue Cafe, 409 Washington Ave in Towson. Explore the menu and plan your visit.', home],
  ['/menu/', 'Menu | Avenue Cafe, Towson', 'Explore Avenue Cafe’s breakfast platters, omelettes, sandwiches, salads, sides, drinks and homemade chocolate chip cookies.', menuPage],
  ['/visit/', 'Visit | Avenue Cafe, Towson', 'Find Avenue Cafe inside 409 Washington Ave, Towson, MD 21204. Call (410) 296-8300 or open the business map.', visit],
]) {const dir=join(root,path.slice(1));mkdirSync(dir,{recursive:true});writeFileSync(join(dir,'index.html'),shell(path,title,description,content));}
console.log(`Rendered Home, Menu (${menu.items.length} sourced entries), and Visit.`);

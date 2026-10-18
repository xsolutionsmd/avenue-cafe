import './styles.css';

const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');
const mobile=matchMedia('(max-width: 700px)');
document.documentElement.classList.add('js');
function closeNav(returnFocus=false){
  nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');
  if(returnFocus)toggle.focus();
}
toggle.addEventListener('click',()=>{
  const open=toggle.getAttribute('aria-expanded')!=='true';
  toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')closeNav(true)});
document.addEventListener('click',event=>{if(mobile.matches&&!event.target.closest('.site-header'))closeNav()});
mobile.addEventListener('change',()=>closeNav());

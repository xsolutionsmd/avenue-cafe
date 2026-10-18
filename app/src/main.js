import './styles.css';

const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');
const mobile=matchMedia('(max-width: 700px)');
document.documentElement.classList.add('js');
function setNav(open){
  toggle.setAttribute('aria-expanded',String(open));
  toggle.querySelector('span').textContent=open?'Close':'Explore';
  toggle.querySelector('path').setAttribute('d',open?'M6 6l12 12M18 6L6 18':'M4 8h16M4 16h16');
  nav.classList.toggle('is-open',open);
}
function closeNav(returnFocus=false){
  setNav(false);
  if(returnFocus)toggle.focus();
}
toggle.addEventListener('click',()=>{
  const open=toggle.getAttribute('aria-expanded')!=='true';
  setNav(open);
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')closeNav(true)});
document.addEventListener('click',event=>{if(mobile.matches&&!event.target.closest('.site-header'))closeNav()});
mobile.addEventListener('change',()=>closeNav());

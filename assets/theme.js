document.addEventListener('DOMContentLoaded',()=>{
  const body=document.body;
  const toggle=document.querySelector('[data-menu-toggle]');
  const nav=document.querySelector('.header-nav');

  const closeMenu=()=>{
    body.classList.remove('menu-open');
    if(toggle) toggle.setAttribute('aria-expanded','false');
  };

  if(toggle){
    toggle.addEventListener('click',()=>{
      const willOpen=!body.classList.contains('menu-open');
      body.classList.toggle('menu-open',willOpen);
      toggle.setAttribute('aria-expanded',willOpen?'true':'false');
    });
  }

  document.querySelectorAll('[data-close-menu]').forEach(link=>link.addEventListener('click',closeMenu));

  document.addEventListener('keydown',event=>{
    if(event.key==='Escape') closeMenu();
  });

  document.addEventListener('click',event=>{
    if(!body.classList.contains('menu-open')||!nav||!toggle) return;
    if(nav.contains(event.target)||toggle.contains(event.target)) return;
    closeMenu();
  });

  window.addEventListener('resize',()=>{
    if(window.innerWidth>989) closeMenu();
  },{passive:true});
});
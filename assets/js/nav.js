// Mobile nav toggle for EPIC Lab site
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.site-nav .menu-icon');
  if (!nav || !toggle) return;

  const setExpanded = (expanded) => {
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  };

  toggle.setAttribute('aria-label', 'Toggle navigation menu');
  toggle.setAttribute('aria-controls', 'site-nav-menu');
  setExpanded(false);

  const menu = nav.querySelector('.trigger');
  if (menu && !menu.id) menu.id = 'site-nav-menu';

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isActive = nav.classList.toggle('active');
    setExpanded(isActive);
  });

  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('active')) return;
    if (nav.contains(e.target)) return;
    nav.classList.remove('active');
    setExpanded(false);
  });

  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a.page-link');
    if (!link) return;
    nav.classList.remove('active');
    setExpanded(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
      nav.classList.remove('active');
      setExpanded(false);
    }
  });
});
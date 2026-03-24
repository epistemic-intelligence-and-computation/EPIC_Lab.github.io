// Mobile nav toggle for EPIC Lab site
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.site-nav');
    const toggle = nav ? nav.querySelector('.menu-icon') : null;
    const menu = nav ? nav.querySelector('.trigger') : null;

    if (!nav || !toggle || !menu) return;

    // Ensure ARIA wiring matches nav.html
    if (!menu.id) menu.id = 'site-nav-menu';
    toggle.setAttribute('aria-controls', menu.id);
    toggle.setAttribute('aria-label', 'Toggle navigation menu');

    const setExpanded = (expanded) => {
        toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    };

    const closeMenu = () => {
        nav.classList.remove('active');
        setExpanded(false);
    };

    const openMenu = () => {
        nav.classList.add('active');
        setExpanded(true);
    };

    const toggleMenu = () => {
        const isActive = nav.classList.toggle('active');
        setExpanded(isActive);
    };

    // Initial state
    closeMenu();

    // Toggle on button click
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Close when clicking a link in the menu
    menu.addEventListener('click', (e) => {
        const link = e.target.closest('a.page-link');
        if (!link) return;
        closeMenu();
    });

    // Close when clicking/tapping outside
    document.addEventListener('pointerdown', (e) => {
        if (!nav.classList.contains('active')) return;
        if (nav.contains(e.target)) return;
        closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // If user rotates/expands to desktop width, close menu
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });
});
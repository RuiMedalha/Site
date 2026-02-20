(() => {
  const $ = (sel, root = document) => root.querySelector(sel);

  const menuBtn = $('[data-hc-menu-btn]');
  const menu = $('[data-hc-menu]');
  if (menuBtn && menu) {
    const sync = () => {
      const open = menu.getAttribute('data-open') === '1';
      menu.style.display = open ? 'block' : 'none';
    };
    sync();
    menuBtn.addEventListener('click', () => {
      const open = menu.getAttribute('data-open') === '1';
      menu.setAttribute('data-open', open ? '0' : '1');
      menuBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
      sync();
    });
  }
})();


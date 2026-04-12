/**
 * GearGig — Navbar
 * Mobile hamburger toggle, outside-click dismiss, Escape key dismiss
 */
(function () {
  'use strict';

  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  function open()  {
    hamburger.classList.add('active');
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function close() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => mobileMenu.classList.contains('open') ? close() : open());

  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) close();
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

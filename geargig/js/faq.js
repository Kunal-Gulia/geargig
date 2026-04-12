/**
 * GearGig — FAQ Accordion
 * One item open at a time. Keyboard accessible.
 */
(function () {
  'use strict';

  const items = document.querySelectorAll('.faq__item');
  if (!items.length) return;

  function closeAll() {
    items.forEach(item => {
      item.classList.remove('open');
      const btn = item.querySelector('.faq__question');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  items.forEach(item => {
    const btn = item.querySelector('.faq__question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      closeAll();
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

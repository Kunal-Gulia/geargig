/**
 * GearGig — Scroll Animations
 * 1. Fade-in elements with .fade-in class
 * 2. Animated number counters with [data-target]
 */
(function () {
  'use strict';

  /* Fade-in on scroll */
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

  /* Animated counters */
  function animateCounter(el, target, duration) {
    duration = duration || 2000;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target).toLocaleString('en-IN') + '+';
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target, parseInt(e.target.dataset.target, 10));
        counterObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
})();

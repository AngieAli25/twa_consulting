// ============================================================
// TWA Consulting — Home V2 · interazioni
// ============================================================
(function () {
  'use strict';

  // --- Header: sfondo opaco allo scroll (trasparente sopra hero) ---
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --- Menu mobile (overlay) ---
  var toggle = document.querySelector('.nav-toggle');
  var overlay = document.getElementById('mobile-menu');
  var closeBtn = overlay ? overlay.querySelector('.close-btn') : null;

  function openMenu() {
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.classList.add('menu-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.classList.remove('menu-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) {
    // Chiudi cliccando su una voce del menu
    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
  // Chiudi con ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // --- Link segnaposto (Servizi, Chi Siamo, Portfolio, Contatti): non portano a nulla ---
  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
})();

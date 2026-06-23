(function () {
  var header = document.getElementById('site-header');
  var hero = document.querySelector('.hero-banner');
  if (!header) return;

  function onScroll() {
    // Header shrinks once it has reached the top of the viewport
    // (i.e. you scrolled past the hero banner above it).
    var stuck = header.getBoundingClientRect().top <= 0;
    if (stuck) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();

(function () {
  var header = document.getElementById('site-header');
  var hero = document.querySelector('.hero-banner');
  if (!header) return;

  function onScroll() {

    var stickyTop = parseFloat(getComputedStyle(header).top) || 0;
    var stuck = header.getBoundingClientRect().top <= stickyTop + 1;
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


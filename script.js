(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const video = document.querySelector('.hero-video');
  const videoToggle = document.querySelector('.video-toggle');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  if (video && videoToggle) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      video.pause();
      videoToggle.textContent = '▶';
      videoToggle.setAttribute('aria-label', 'Play background video');
    }
    videoToggle.addEventListener('click', () => {
      if (video.paused) {
        video.play().catch(() => {});
        videoToggle.textContent = 'Ⅱ';
        videoToggle.setAttribute('aria-label', 'Pause background video');
      } else {
        video.pause();
        videoToggle.textContent = '▶';
        videoToggle.setAttribute('aria-label', 'Play background video');
      }
    });
  }
})();
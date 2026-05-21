/* ─── UTOME · accessibility.js ──────────────────────────────────────────── */

export function initAccessibility() {
  /* Trap focus inside mobile menu when open */
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = mobileMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
  }

  /* Skip-to-content link */
  const skip = document.getElementById('skip-link');
  if (skip) {
    skip.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('hero');
      if (target) target.focus();
    });
  }

  /* Keyboard-accessible hamburger */
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hamburger.click(); }
    });
  }
}

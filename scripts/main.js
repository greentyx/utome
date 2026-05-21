/* ─── UTOME · main.js ───────────────────────────────────────────────────── */
import { initNavbar }      from './navbar.js';
import { initReveal }      from './animations.js';
import { initAccessibility } from './accessibility.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initReveal();
  initAccessibility();
});

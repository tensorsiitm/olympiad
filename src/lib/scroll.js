/* Smooth scrolling: Lenis when the motion layer has started it, native otherwise. */
let lenis = null;

export function setLenis(instance) {
  lenis = instance;
}

export function hasLenis() {
  return lenis !== null;
}

/* Freeze page scrolling while a popup is open */
export function lockScroll() {
  lenis?.stop();
  document.documentElement.style.overflow = "hidden";
}

export function unlockScroll() {
  document.documentElement.style.overflow = "";
  lenis?.start();
}

export function scrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const offset = -(document.getElementById("site-header")?.offsetHeight || 70) + 1;
  if (lenis) {
    lenis.scrollTo(target, { offset });
  } else {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }
}

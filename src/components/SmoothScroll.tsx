"use client";

import { useEffect } from "react";

function smoothScrollTo(targetY: number) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (diff === 0) return;
  // Speed: ~2px per ms = constant speed regardless of distance
  const duration = Math.abs(diff) / 2;
  let start: number | null = null;

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (!el) return;

  const navbar = document.querySelector("header");
  const navbarHeight = navbar ? navbar.offsetHeight + 16 : 120;

  const rect = el.getBoundingClientRect();
  const elementTop = rect.top + window.scrollY;
  const target = Math.max(0, elementTop - navbarHeight);

  smoothScrollTo(target);
  history.pushState(null, "", href);
}

export { scrollToSection };

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      e.preventDefault();
      scrollToSection(href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

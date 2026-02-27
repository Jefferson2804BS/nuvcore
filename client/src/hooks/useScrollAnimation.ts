/*
 * NUVCORE — useScrollAnimation Hook
 * Handles IntersectionObserver-based scroll animations
 * Adds .visible class when elements enter the viewport
 */

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-up, .fade-left, .fade-right, .scale-in"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

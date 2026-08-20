import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe the container and all children with .reveal class
    el.classList.add('reveal');
    observer.observe(el);

    const revealChildren = el.querySelectorAll('.reveal');
    revealChildren.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

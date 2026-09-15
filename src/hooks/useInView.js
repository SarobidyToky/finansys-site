import { useEffect, useState, useCallback } from 'react';

export default function useInView(threshold = 0.2) {
  const [node, setNode] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Ref-callback plutôt que useRef : se redéclenche correctement même si
  // l'élément n'apparaît dans le DOM qu'après le montage initial (ex: une
  // section affichée seulement après un chargement asynchrone).
  const ref = useCallback((el) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, threshold]);

  return [ref, isVisible];
}
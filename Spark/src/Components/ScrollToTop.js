import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function scrollToTop(duration = 1000) {
  const start = window.scrollY || window.pageYOffset;
  const startTime = performance.now();

  function scroll() {
    const now = performance.now();
    const time = Math.min(1, (now - startTime) / duration);
    const easeInOutCubic = time < 0.5 
      ? 4 * time * time * time 
      : 1 - Math.pow(-2 * time + 2, 3) / 2;

    window.scrollTo(0, Math.ceil(start * (1 - easeInOutCubic)));

    if (time < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

export default function Scroll() {
  const location = useLocation();

  useEffect(() => {
    scrollToTop(1500);  
  }, [location.pathname]);

  return null;
}

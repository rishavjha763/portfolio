import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useScrollReveal(threshold = 0.12) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  return { ref, inView };
}

export function useCursor() {
  useEffect(() => {
    const dot  = document.querySelector('.c-dot');
    const ring = document.querySelector('.c-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0, raf;

    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx - 3.5}px,${my - 3.5}px)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.transform = `translate(${rx - 16}px,${ry - 16}px)`;
      raf = requestAnimationFrame(loop);
    };

    const on  = () => ring.classList.add('hov');
    const off = () => ring.classList.remove('hov');

    const attach = () => {
      document.querySelectorAll('a,button,[data-hover]').forEach(el => {
        el.addEventListener('mouseenter', on);
        el.addEventListener('mouseleave', off);
      });
    };

    window.addEventListener('mousemove', move);
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);
}

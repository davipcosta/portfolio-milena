"use client";

import { useEffect, useRef, useState } from "react";

// px of scroll movement needed before toggling, so tiny jitters don't flicker
const DELTA = 8;

export default function SiteHeader({ whatsappLink }: { whatsappLink: string }) {
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = Math.max(window.scrollY, 0);
      const diff = y - lastY.current;
      const headerHeight = ref.current?.offsetHeight ?? 80;

      if (y <= headerHeight) {
        setHidden(false);
      } else if (diff > DELTA) {
        setHidden(true);
      } else if (diff < -DELTA) {
        setHidden(false);
      }

      if (Math.abs(diff) > DELTA || y <= headerHeight) {
        lastY.current = y;
      }
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      className={`nav nav-enter ${hidden ? "nav-hidden" : ""}`}
      // keyboard users tabbing into the nav should always see it
      onFocus={() => setHidden(false)}
    >
      <div className="wrap nav-wrap">
        <a href="#" className="nav-name">
          Milena Nobre
        </a>

        <nav className="nav-links">
          <a href="#sobre" className="nav-link">
            Sobre mim
          </a>
          <a href="#areas" className="nav-link">
            Temas
          </a>
          <a href="#como-comecar" className="nav-link">
            Como começar
          </a>
          <a href="#faq" className="nav-link">
            Dúvidas
          </a>
        </nav>

        <a
          className="nav-cta"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar sessão
        </a>
      </div>
    </header>
  );
}

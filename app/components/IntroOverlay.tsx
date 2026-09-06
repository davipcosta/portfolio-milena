"use client";

import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      setSkip(true);
      return;
    }

    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (skip) return null;

  return (
    <div className="intro-overlay" aria-hidden="true">
      <span className="intro-mark">Milena Nobre</span>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BackToTop() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setVisible(!entry.isIntersecting);
        }
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  function handleScrollTop() {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }

  const label = language === "es" ? "Volver arriba" : "Back to top";

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      aria-label={label}
      className={`back-to-top cursor-pointer print:hidden ${visible ? "is-visible" : ""}`}
    >
      <ArrowUp aria-hidden="true" className="w-4 h-4" />
    </button>
  );
}

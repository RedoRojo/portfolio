"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleMediaChange = () => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored !== "dark" && stored !== "light") {
        if (mediaQuery.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    } catch {
      // Ignore storage errors
    }
    callback();
  };

  mediaQuery.addEventListener("change", handleMediaChange);
  window.addEventListener("storage", callback);
  return () => {
    observer.disconnect();
    mediaQuery.removeEventListener("change", handleMediaChange);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot(): boolean {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { language } = useLanguage();

  function toggleTheme() {
    const nextDark = !isDark;
    const target = nextDark ? "dark" : "light";
    const meta = document.querySelector('meta[name="color-scheme"]');

    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    try {
      const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const osScheme = osDark ? "dark" : "light";
      if (target === osScheme) {
        localStorage.removeItem("theme");
        if (meta) meta.setAttribute("content", "light dark");
      } else {
        localStorage.setItem("theme", target);
        if (meta) meta.setAttribute("content", target);
      }
    } catch {
      if (meta) meta.setAttribute("content", target);
    }
  }

  const shortText = isDark
    ? language === "es"
      ? "PAPEL"
      : "PAPER"
    : language === "es"
    ? "NOCHE"
    : "INK";

  const label = isDark
    ? language === "es"
      ? `${shortText}: Cambiar a edición papel claro`
      : `${shortText}: Switch to light paper edition`
    : language === "es"
    ? `${shortText}: Cambiar a edición hormigón oscuro`
    : `${shortText}: Switch to dark concrete edition`;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="inline-flex items-center justify-center gap-1.5 min-h-[36px] min-w-[36px] px-2.5 py-1.5 text-[11px] font-mono font-semibold tracking-wider border border-[var(--band-border)] bg-[var(--band-surface)] text-[var(--band-ink)] hover:border-[var(--band-accent)] hover:text-[var(--band-accent)] transition-colors cursor-pointer"
    >
      {isDark ? (
        <>
          <Sun aria-hidden="true" className="w-3.5 h-3.5 text-[var(--band-accent)]" />
          <span className="hidden sm:inline">{shortText}</span>
        </>
      ) : (
        <>
          <Moon aria-hidden="true" className="w-3.5 h-3.5 text-[var(--band-accent)]" />
          <span className="hidden sm:inline">{shortText}</span>
        </>
      )}
    </button>
  );
}

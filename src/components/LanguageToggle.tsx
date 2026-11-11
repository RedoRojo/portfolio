"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={language === "es" ? "Idioma" : "Language"}
      className="inline-flex items-center border border-[var(--border-control)] rounded-[2px] font-serif text-xs"
    >
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        aria-label="ES — Español"
        className={`min-h-[36px] min-w-[36px] px-2.5 py-1 transition-colors cursor-pointer ${
          language === "es"
            ? "bg-[var(--accent)] text-[var(--on-accent)] font-semibold"
            : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="EN — English"
        className={`min-h-[36px] min-w-[36px] px-2.5 py-1 border-l border-[var(--border-control)] transition-colors cursor-pointer ${
          language === "en"
            ? "bg-[var(--accent)] text-[var(--on-accent)] font-semibold"
            : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}

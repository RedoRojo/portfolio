"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={language === "es" ? "Idioma" : "Language"}
      className="inline-flex items-center border border-[var(--border-subtle)] font-mono text-[11px]"
    >
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        aria-label="ES — Español"
        className={`min-h-[36px] min-w-[36px] px-2.5 py-1 transition-colors cursor-pointer ${
          language === "es"
            ? "text-[var(--accent)] font-bold underline underline-offset-4 decoration-1"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
      >
        ES
      </button>
      <span aria-hidden="true" className="text-[var(--border-subtle)]">
        /
      </span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="EN — English"
        className={`min-h-[36px] min-w-[36px] px-2.5 py-1 transition-colors cursor-pointer ${
          language === "en"
            ? "text-[var(--accent)] font-bold underline underline-offset-4 decoration-1"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}

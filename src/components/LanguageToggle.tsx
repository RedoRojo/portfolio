"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={language === "es" ? "Idioma" : "Language"}
      className="inline-flex items-stretch border border-[var(--band-border)] bg-[var(--band-surface)] text-[11px] font-mono"
    >
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        aria-label="ES — Español"
        className={`min-h-[34px] min-w-[34px] px-2.5 py-1 tracking-wider transition-colors cursor-pointer ${
          language === "es"
            ? "bg-[var(--band-accent)] text-[#151312] font-bold"
            : "text-[var(--band-muted)] hover:text-[var(--band-ink)]"
        }`}
      >
        ES
      </button>
      <span aria-hidden="true" className="w-px bg-[var(--band-border)]" />
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="EN — English"
        className={`min-h-[34px] min-w-[34px] px-2.5 py-1 tracking-wider transition-colors cursor-pointer ${
          language === "en"
            ? "bg-[var(--band-accent)] text-[#151312] font-bold"
            : "text-[var(--band-muted)] hover:text-[var(--band-ink)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}

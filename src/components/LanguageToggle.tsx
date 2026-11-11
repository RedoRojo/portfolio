"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={language === "es" ? "Idioma" : "Language"}
      className="flex items-center gap-1 p-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs font-mono shadow-xs"
    >
      <Globe aria-hidden="true" className="w-3.5 h-3.5 text-[var(--accent)] ml-1 shrink-0" />
      <div className="flex items-center p-0.5 bg-[var(--bg-secondary)] rounded-md">
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
          className={`min-h-[24px] min-w-[28px] px-2 py-0.5 rounded transition-colors cursor-pointer ${
            language === "en"
              ? "bg-[var(--bg-card)] text-[var(--text-primary)] font-bold shadow-2xs"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage("es")}
          aria-pressed={language === "es"}
          className={`min-h-[24px] min-w-[28px] px-2 py-0.5 rounded transition-colors cursor-pointer ${
            language === "es"
              ? "bg-[var(--bg-card)] text-[var(--text-primary)] font-bold shadow-2xs"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium"
          }`}
          aria-label="Cambiar a Español"
        >
          ES
        </button>
      </div>
    </div>
  );
}

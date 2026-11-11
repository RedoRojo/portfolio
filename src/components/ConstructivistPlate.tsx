"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ConstructivistPlate() {
  const { language, t } = useLanguage();
  const [plateMode, setPlateMode] = useState<"construct" | "portrait">("construct");

  return (
    <figure className="border-2 border-[var(--band-border)] bg-[var(--band-surface)]">
      {/* Top Plate Mode Bar */}
      <div className="flex items-center justify-between border-b border-[var(--band-border)] px-3 py-2 bg-[#110f0e] font-mono text-[10px] uppercase tracking-[0.14em]">
        <span className="text-[var(--band-muted)]">FIG. 01 // SVG PRESS</span>
        <div
          role="group"
          aria-label={language === "es" ? "Selector de lámina" : "Plate view"}
          className="flex items-center gap-1"
        >
          <button
            type="button"
            aria-pressed={plateMode === "construct"}
            onClick={() => setPlateMode("construct")}
            className={`px-2 py-1 transition-colors cursor-pointer ${
              plateMode === "construct"
                ? "bg-[var(--band-accent)] text-[#151312] font-bold"
                : "text-[var(--band-muted)] hover:text-[var(--band-ink)]"
            }`}
          >
            {t.home.plate.tabConstruct}
          </button>
          <button
            type="button"
            aria-pressed={plateMode === "portrait"}
            onClick={() => setPlateMode("portrait")}
            className={`px-2 py-1 transition-colors cursor-pointer ${
              plateMode === "portrait"
                ? "bg-[var(--band-accent)] text-[#151312] font-bold"
                : "text-[var(--band-muted)] hover:text-[var(--band-ink)]"
            }`}
          >
            {t.home.plate.tabPortrait}
          </button>
        </div>
      </div>

      {/* Plate Frame */}
      <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#1a1816]">
        {plateMode === "construct" ? (
          <svg
            viewBox="0 0 400 500"
            className="w-full h-full block"
            role="img"
            aria-label={t.home.plate.captionConstruct}
          >
            <title>{t.home.plate.captionConstruct}</title>
            <defs>
              <pattern id="plate-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#f2ede2"
                  strokeOpacity="0.08"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            {/* Ground + architectural grid */}
            <rect width="400" height="500" fill="#181513" />
            <rect width="400" height="500" fill="url(#plate-grid)" />

            {/* Heavy brutalist border slab */}
            <rect x="20" y="20" width="360" height="460" fill="none" stroke="#f2ede2" strokeOpacity="0.22" strokeWidth="1.5" />

            {/* Top constructivist header bar */}
            <rect x="36" y="36" width="136" height="10" fill="#f05445" />
            <text
              x="364"
              y="46"
              textAnchor="end"
              fill="#b8b0a2"
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="2"
            >
              TOMO I · N° 01
            </text>

            {/* Split brutalist monolith block behind center */}
            <rect x="48" y="96" width="172" height="250" fill="#24201d" stroke="#f2ede2" strokeOpacity="0.18" strokeWidth="1" />
            <rect x="64" y="114" width="140" height="12" fill="#f2ede2" fillOpacity="0.9" />
            <rect x="64" y="136" width="96" height="4" fill="#b8b0a2" fillOpacity="0.6" />
            <rect x="64" y="148" width="118" height="4" fill="#b8b0a2" fillOpacity="0.4" />

            {/* Lissitzky hollow circle + inner sphere */}
            <circle cx="244" cy="212" r="102" fill="none" stroke="#f2ede2" strokeWidth="3" strokeOpacity="0.88" />
            <circle cx="244" cy="212" r="70" fill="#12100e" stroke="#f05445" strokeWidth="2" />
            <path d="M 244 142 A 70 70 0 0 1 314 212 L 244 212 Z" fill="#f2ede2" fillOpacity="0.92" />

            {/* Vermilion Constructivist Wedge piercing upward-right */}
            <polygon points="44,398 330,118 286,298 118,398" fill="#f05445" fillOpacity="0.94" />

            {/* Counterbalance crisp bone diagonal bar */}
            <polygon points="88,286 352,286 352,300 88,300" fill="#f2ede2" />

            {/* Architectural plumb line & measurement crosshairs */}
            <line x1="244" y1="68" x2="244" y2="424" stroke="#f2ede2" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.45" />
            <line x1="48" y1="212" x2="352" y2="212" stroke="#f2ede2" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
            <circle cx="244" cy="212" r="5" fill="#151312" stroke="#f2ede2" strokeWidth="2" />

            {/* Bottom stepped typography & Cyrillic press stamp */}
            <rect x="36" y="424" width="328" height="36" fill="#12100e" stroke="#f2ede2" strokeOpacity="0.35" strokeWidth="1" />
            <rect x="36" y="424" width="84" height="36" fill="#f05445" />
            <text
              x="78"
              y="447"
              textAnchor="middle"
              fill="#151312"
              fontSize="14"
              fontWeight="700"
              fontFamily="monospace"
              letterSpacing="1.5"
              lang="ru"
            >
              К.В.Р.М.
            </text>
            <text
              x="136"
              y="446"
              fill="#f2ede2"
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="1.8"
            >
              COCHABAMBA · 2021—2026
            </text>
          </svg>
        ) : (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-[#181513] drafting-grid">
            <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.16em] text-[var(--band-muted)] border-b border-[var(--band-border)] pb-3">
              <span>EX LIBRIS // SLOT</span>
              <span className="text-[var(--band-accent)]">B&amp;W ARCHIVE</span>
            </div>

            <div className="my-auto border-2 border-dashed border-[var(--band-border)] p-6 text-center space-y-4 bg-[#141210]/90">
              <div className="w-16 h-16 mx-auto border-2 border-[var(--band-accent)] flex items-center justify-center font-display font-bold text-2xl text-[var(--band-accent)]">
                CR
              </div>
              <p className="font-mono text-xs font-bold tracking-[0.14em] uppercase text-[var(--band-ink)]">
                {t.home.plate.portraitPlaceholderTitle}
              </p>
              <p className="font-serif text-sm italic text-[var(--band-muted)] leading-relaxed">
                {t.home.plate.portraitPlaceholderDesc}
              </p>
            </div>

            <div className="border-t border-[var(--band-border)] pt-3 flex justify-between font-mono text-[10px] tracking-[0.12em] text-[var(--band-muted)]">
              <span>4 : 5 ASPECT</span>
              <span>HIGH CONTRAST</span>
            </div>
          </div>
        )}
      </div>

      {/* Monograph Caption */}
      <figcaption className="px-4 py-3 border-t border-[var(--band-border)] font-serif italic text-xs sm:text-sm text-[var(--band-muted)] leading-snug bg-[#110f0e]">
        {plateMode === "construct"
          ? t.home.plate.captionConstruct
          : t.home.plate.captionPortrait}
      </figcaption>
    </figure>
  );
}

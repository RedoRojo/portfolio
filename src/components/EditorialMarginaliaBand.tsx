"use client";

import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function EditorialMarginaliaBand() {
  const { t } = useLanguage();
  const items = t.home.marginalia.items;
  const [activeIndex, setActiveIndex] = useState(0);

  const safeIndex = activeIndex % items.length;
  const current = items[safeIndex];

  function handleNextNote() {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }

  return (
    <section
      aria-labelledby="marginalia-heading"
      className="band-monolith drafting-grid border-y-2 border-[var(--band-border)] py-16 md:py-24"
    >
      <div className="site-wrap space-y-12">
        {/* Heading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b border-[var(--band-border)] pb-8">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--band-accent)] inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--band-accent)]">
                {t.home.marginalia.eyebrow}
              </span>
            </div>
            <h2
              id="marginalia-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--band-ink)] leading-[0.95]"
            >
              {t.home.marginalia.title}
            </h2>
          </div>
          <p className="lg:col-span-4 font-serif text-base text-[var(--band-muted)] leading-relaxed">
            {t.home.marginalia.subtitle}
          </p>
        </div>

        {/* Interactive Reader + Shelf Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Foundational Shelf (Selectable Author Spines) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--band-muted)] block">
              {t.home.marginalia.canonTitle}
            </span>

            <ul className="space-y-3" role="list">
              {items.map((item, idx) => {
                const isSelected = idx === safeIndex;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-pressed={isSelected}
                      className={`w-full text-left p-4 border-2 transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        isSelected
                          ? "bg-[var(--band-surface)] border-[var(--band-accent)] text-[var(--band-ink)]"
                          : "bg-[#12100e] border-[var(--band-border)] text-[var(--band-muted)] hover:border-[var(--band-ink)] hover:text-[var(--band-ink)]"
                      }`}
                    >
                      <div className="space-y-1 min-w-0">
                        <span
                          className={`font-mono text-[10px] tracking-[0.16em] uppercase block ${
                            isSelected ? "text-[var(--band-accent)] font-bold" : "text-[var(--band-muted)]"
                          }`}
                        >
                          {item.code} · {item.year}
                        </span>
                        <span className="font-serif font-semibold text-base sm:text-lg block truncate text-[var(--band-ink)]">
                          {item.work}
                        </span>
                        <span className="font-serif italic text-xs text-[var(--band-muted)] block">
                          {item.author}
                        </span>
                      </div>
                      <span
                        aria-hidden="true"
                        className={`w-3 h-3 mt-1 shrink-0 border ${
                          isSelected
                            ? "bg-[var(--band-accent)] border-[var(--band-accent)]"
                            : "border-[var(--band-border)]"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: Live Archive Readout */}
          <div className="lg:col-span-7 flex flex-col justify-between border-2 border-[var(--band-border-strong)] bg-[var(--band-surface)] p-6 sm:p-10 space-y-8">
            <div className="space-y-6" aria-live="polite">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--band-border)] pb-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--band-accent)] font-bold">
                  <BookOpen aria-hidden="true" className="w-4 h-4" />
                  <span>{t.home.marginalia.readoutLabel}</span>
                </div>
                <span className="font-mono text-xs text-[var(--band-muted)] border border-[var(--band-border)] px-2.5 py-1">
                  {t.home.marginalia.verifiedStamp} {safeIndex + 1} / {items.length}
                </span>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--band-muted)]">
                  {current.author} ({current.year})
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--band-ink)]">
                  {current.work}
                </h3>
              </div>

              <blockquote className="border-l-4 border-[var(--band-accent)] pl-5 font-serif text-lg sm:text-xl leading-[1.65] text-[var(--band-ink)] max-w-[58ch]">
                {current.reflection}
              </blockquote>

              <p className="font-mono text-xs sm:text-sm text-[var(--band-accent)] bg-[#110f0e] border border-[var(--band-border)] px-4 py-3">
                {current.tieIn}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--band-border)]">
              <button
                type="button"
                onClick={handleNextNote}
                className="btn-monolith-primary text-xs uppercase tracking-[0.14em]"
              >
                <span>{t.home.marginalia.nextButton}</span>
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </button>

              <span className="font-mono text-[11px] text-[var(--band-muted)] tracking-wider">
                [ {current.code} ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

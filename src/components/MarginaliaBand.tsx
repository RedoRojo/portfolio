"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MarginaliaBand() {
  const { t } = useLanguage();
  const items = t.home.readings.items;
  const [activeIndex, setActiveIndex] = useState(0);

  const safeIndex = activeIndex % items.length;
  const current = items[safeIndex];

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }

  return (
    <section
      aria-labelledby="readings-heading"
      className="band-ink py-20 md:py-28"
    >
      <div className="editorial-wrap space-y-12">
        {/* Cabecera abierta */}
        <div className="space-y-3 max-w-[44ch]">
          <span className="font-mono text-xs text-[var(--band-accent)] tracking-widest uppercase block">
            {t.home.readings.eyebrow}
          </span>
          <h2
            id="readings-heading"
            className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--band-ink)] leading-[1.15]"
          >
            {t.home.readings.title}
          </h2>
          <p className="font-serif text-base text-[var(--band-muted)] leading-relaxed">
            {t.home.readings.subtitle}
          </p>
        </div>

        {/* Índice literario sin recuadros */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pt-4 border-t border-[var(--band-border)]">
          {/* Selector de autores a la izquierda */}
          <ul className="md:col-span-4 space-y-1 pt-2" role="list">
            {items.map((item, idx) => {
              const isSelected = idx === safeIndex;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-pressed={isSelected}
                    className={`w-full text-left py-2.5 pl-3 border-l-2 transition-colors cursor-pointer flex items-baseline gap-3 ${
                      isSelected
                        ? "border-[var(--band-accent)] text-[var(--band-ink)]"
                        : "border-transparent text-[var(--band-muted)] hover:text-[var(--band-ink)]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] shrink-0 ${
                        isSelected
                          ? "text-[var(--band-accent)]"
                          : "text-[var(--band-muted)]"
                      }`}
                    >
                      {item.index}
                    </span>
                    <span className="font-serif text-base">{item.author}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Nota abierta a la derecha */}
          <div className="md:col-span-8 space-y-6 pt-2" aria-live="polite">
            <div className="flex items-baseline justify-between gap-4 border-b border-[var(--band-border)] pb-3">
              <h3 className="font-serif italic text-2xl sm:text-3xl text-[var(--band-ink)] font-normal">
                {current.work}
              </h3>
              <span className="font-mono text-xs text-[var(--band-muted)] shrink-0">
                {current.year}
              </span>
            </div>

            <p className="font-serif text-lg sm:text-xl leading-[1.7] text-[var(--band-ink)] max-w-[52ch]">
              {current.note}
            </p>

            <p className="font-mono text-xs text-[var(--band-accent)] leading-relaxed">
              &rarr; {current.practice}
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-[var(--band-border)]">
              <button
                type="button"
                onClick={handleNext}
                className="font-mono text-xs text-[var(--band-ink)] hover:text-[var(--band-accent)] py-2 transition-colors cursor-pointer"
              >
                {t.home.readings.nextButton}
              </button>
              <span className="font-mono text-[11px] text-[var(--band-muted)]">
                {t.home.readings.counterPrefix} {safeIndex + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

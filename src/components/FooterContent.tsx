"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function FooterContent() {
  const { t } = useLanguage();

  return (
    <footer className="band-monolith border-t-4 border-[var(--band-accent)] pt-14 pb-10 print:hidden">
      <div className="site-wrap space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 border-b border-[var(--band-border)]">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--band-accent)]">
              <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--band-accent)] inline-block" />
              <span>REDOPORTFOLIO // 2026</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--band-ink)] leading-[0.95]">
              {t.footer.title}
            </h2>
            <p className="font-serif text-base sm:text-lg text-[var(--band-muted)] max-w-[46ch] leading-relaxed">
              {t.footer.lead}
            </p>
          </div>

          <div className="lg:col-span-5 lg:text-right space-y-4">
            <a
              href={`mailto:${t.footer.email}`}
              className="inline-block font-serif italic text-xl sm:text-2xl text-[var(--band-accent)] underline decoration-2 underline-offset-4 hover:text-[var(--band-ink)] transition-colors break-all"
            >
              {t.footer.email}
            </a>
            <ul className="flex flex-wrap lg:justify-end gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
              <li>
                <a
                  href="https://github.com/RedoRojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center text-[var(--band-ink)] hover:text-[var(--band-accent)] underline underline-offset-4 transition-colors"
                >
                  {t.footer.github}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/rojasredo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center text-[var(--band-ink)] hover:text-[var(--band-accent)] underline underline-offset-4 transition-colors"
                >
                  {t.footer.linkedin}
                </a>
              </li>
              <li>
                <a
                  href="/CV_Cristhian_Rojas.pdf"
                  download="CV_Cristhian_Rojas.pdf"
                  className="inline-flex min-h-[36px] items-center text-[var(--band-ink)] hover:text-[var(--band-accent)] underline underline-offset-4 transition-colors"
                >
                  {t.footer.cvPdf}
                </a>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="inline-flex min-h-[36px] items-center text-[var(--band-muted)] hover:text-[var(--band-accent)] transition-colors"
                >
                  {t.nav.resume}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 font-mono text-[11px] text-[var(--band-muted)] tracking-wider">
          <span>
            {t.footer.role} &bull; &copy; {new Date().getFullYear()} Cristhian Victor Rojas Marquez
          </span>
          <span>{t.footer.editionNote}</span>
        </div>
      </div>
    </footer>
  );
}

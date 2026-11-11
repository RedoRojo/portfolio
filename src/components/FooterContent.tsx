"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function FooterContent() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] py-14 text-sm text-[var(--text-secondary)] print:hidden">
      <div className="editorial-wrap space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2 max-w-[44ch]">
            <p className="font-serif text-base text-[var(--text-secondary)]">
              {t.footer.lead}
            </p>
            <a
              href={`mailto:${t.footer.email}`}
              className="inline-block font-serif italic text-xl sm:text-2xl text-[var(--text-primary)] hover:text-[var(--accent)] underline decoration-[var(--border-subtle)] hover:decoration-[var(--accent)] underline-offset-4 transition-colors break-all"
            >
              {t.footer.email}
            </a>
          </div>

          <ul role="list" className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs">
            <li>
              <a
                href="https://github.com/RedoRojo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center hover:text-[var(--accent)] transition-colors"
              >
                {t.footer.github}
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rojasredo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center hover:text-[var(--accent)] transition-colors"
              >
                {t.footer.linkedin}
              </a>
            </li>
            <li>
              <a
                href="/CV_Cristhian_Rojas.pdf"
                download="CV_Cristhian_Rojas.pdf"
                className="inline-flex min-h-[36px] items-center hover:text-[var(--accent)] transition-colors"
              >
                {t.footer.cvPdf}
              </a>
            </li>
            <li>
              <Link
                href="/resume"
                className="inline-flex min-h-[36px] items-center hover:text-[var(--accent)] transition-colors"
              >
                {t.nav.resume}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-6 border-t border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)]">
          <span>
            Cristhian Victor Rojas Marquez &middot; {t.footer.role} &middot; &copy;{" "}
            {new Date().getFullYear()}
          </span>
          <span>{t.footer.colophon}</span>
        </div>
      </div>
    </footer>
  );
}

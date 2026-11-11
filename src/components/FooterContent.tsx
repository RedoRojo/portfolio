"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function FooterContent() {
  const { t } = useLanguage();

  return (
    <footer className="band-ink border-t-[6px] border-[var(--band-accent)] py-14 text-sm print:hidden">
      <div className="site-wrap space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-2.5 max-w-[46ch]">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--band-accent)]">
              {t.footer.signature}
            </p>
            <p className="font-serif text-base text-[var(--band-muted)]">
              {t.footer.lead}
            </p>
            <a
              href={`mailto:${t.footer.email}`}
              className="inline-block font-serif font-semibold text-xl sm:text-2xl text-[var(--band-ink)] hover:text-[var(--band-accent)] underline decoration-[var(--band-accent)] underline-offset-4 transition-colors break-all"
            >
              {t.footer.email}
            </a>
          </div>

          <ul
            role="list"
            className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider"
          >
            <li>
              <a
                href="https://github.com/RedoRojo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center px-3.5 border border-[var(--band-border)] text-[var(--band-ink)] hover:bg-[var(--band-accent)] hover:border-[var(--band-accent)] hover:text-[#121110] font-semibold transition-colors"
              >
                {t.footer.github}
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rojasredo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center px-3.5 border border-[var(--band-border)] text-[var(--band-ink)] hover:bg-[var(--band-accent)] hover:border-[var(--band-accent)] hover:text-[#121110] font-semibold transition-colors"
              >
                {t.footer.linkedin}
              </a>
            </li>
            <li>
              <a
                href="/CV_Cristhian_Rojas.pdf"
                download="CV_Cristhian_Rojas.pdf"
                className="inline-flex min-h-[38px] items-center px-3.5 border border-[var(--band-border)] text-[var(--band-ink)] hover:bg-[var(--band-accent)] hover:border-[var(--band-accent)] hover:text-[#121110] font-semibold transition-colors"
              >
                {t.footer.cvPdf}
              </a>
            </li>
            <li>
              <Link
                href="/resume"
                className="inline-flex min-h-[38px] items-center px-3.5 bg-[var(--band-ink)] text-[#121110] hover:bg-[var(--band-accent)] hover:text-[#121110] font-bold transition-colors"
              >
                {t.nav.resume}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-6 border-t border-[var(--band-border)] font-mono text-[11px] uppercase tracking-wider text-[var(--band-muted)]">
          <span>{t.footer.role}</span>
          <span>&copy; {new Date().getFullYear()} {t.footer.signature}</span>
        </div>
      </div>
    </footer>
  );
}

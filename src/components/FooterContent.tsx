"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function FooterContent() {
  const { t } = useLanguage();

  return (
    <footer className="band-ink border-t-2 border-[var(--accent)] py-14 text-sm print:hidden">
      <div className="editorial-wrap space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2 max-w-[46ch]">
            <p className="font-serif italic text-base text-[var(--band-gilt)]">
              {t.footer.signature}
            </p>
            <p className="font-serif text-base text-[var(--band-muted)]">
              {t.footer.lead}
            </p>
            <a
              href={`mailto:${t.footer.email}`}
              className="inline-block font-serif italic text-xl sm:text-2xl text-[var(--band-ink)] hover:text-[var(--band-accent)] underline decoration-[var(--band-accent)]/70 underline-offset-4 transition-colors break-all"
            >
              {t.footer.email}
            </a>
          </div>

          <ul
            role="list"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 font-serif text-sm"
          >
            <li>
              <a
                href="https://github.com/RedoRojo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center text-[var(--band-ink)] hover:text-[var(--band-accent)] transition-colors"
              >
                {t.footer.github}
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rojasredo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center text-[var(--band-ink)] hover:text-[var(--band-accent)] transition-colors"
              >
                {t.footer.linkedin}
              </a>
            </li>
            <li>
              <a
                href="/CV_Cristhian_Rojas.pdf"
                download="CV_Cristhian_Rojas.pdf"
                className="inline-flex min-h-[36px] items-center text-[var(--band-ink)] hover:text-[var(--band-accent)] transition-colors"
              >
                {t.footer.cvPdf}
              </a>
            </li>
            <li>
              <Link
                href="/resume"
                className="inline-flex min-h-[36px] items-center text-[var(--band-gilt)] hover:text-[var(--band-accent)] underline underline-offset-4 transition-colors"
              >
                {t.nav.resume}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-6 border-t border-[var(--band-border)] font-serif italic text-xs text-[var(--band-muted)]">
          <span>{t.footer.role}</span>
          <span>
            &copy; {new Date().getFullYear()} {t.footer.signature}
          </span>
        </div>
      </div>
    </footer>
  );
}

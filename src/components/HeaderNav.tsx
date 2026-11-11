"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

export default function HeaderNav() {
  const { language, t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/resume", label: t.nav.resume },
    { href: "/blog", label: t.nav.blog },
  ];

  return (
    <header className="band-monolith border-b-2 border-[var(--band-border)] sticky top-0 z-50 print:hidden">
      <div className="site-wrap py-3.5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3.5">
        {/* Brand Plaquette */}
        <div className="flex items-center gap-3.5">
          <Link
            href="/"
            className="group flex items-center gap-3.5 min-w-0"
          >
            <span className="w-10 h-10 shrink-0 bg-[var(--band-accent)] text-[#151312] font-display font-bold text-lg tracking-wider flex items-center justify-center border border-[var(--band-border-strong)] group-hover:bg-[var(--band-ink)] transition-colors">
              {t.header.monogram}
            </span>

            <span className="min-w-0 block">
              <span className="font-display font-bold text-base sm:text-lg tracking-[0.06em] uppercase text-[var(--band-ink)] group-hover:text-[var(--band-accent)] transition-colors block">
                {t.header.name}
              </span>
              <span className="font-mono text-[11px] text-[var(--band-muted)] tracking-wider truncate block">
                {t.header.role}
              </span>
            </span>
          </Link>
          <span className="visually-hidden">{t.header.status}</span>
        </div>

        {/* Navigation + Toggles */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4 flex-wrap">
          <nav
            aria-label={language === "es" ? "Principal" : "Primary"}
            className="flex items-center flex-wrap gap-1 sm:gap-2 font-mono text-xs uppercase tracking-[0.1em]"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`min-h-[36px] inline-flex items-center px-2.5 py-1.5 border-b-2 transition-colors ${
                    isActive
                      ? "border-[var(--band-accent)] text-[var(--band-accent)] font-bold"
                      : "border-transparent text-[var(--band-muted)] hover:text-[var(--band-ink)] hover:border-[var(--band-border)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

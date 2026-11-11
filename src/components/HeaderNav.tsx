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
    <header className="border-b-2 border-[var(--border-strong)] sticky top-0 bg-[var(--bg-primary)]/95 backdrop-blur-sm z-50 transition-colors duration-200 print:hidden">
      <div className="site-wrap py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="min-w-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-serif font-bold text-lg sm:text-xl tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
          >
            <span
              aria-hidden="true"
              className="w-3 h-3 bg-[var(--accent)] inline-block shrink-0"
            />
            <span>{t.header.name}</span>
          </Link>
          <span className="visually-hidden">{t.header.status}</span>
        </div>

        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-5 flex-wrap">
          <nav
            aria-label={language === "es" ? "Principal" : "Primary"}
            className="flex items-center flex-wrap gap-5 font-mono text-xs uppercase tracking-wider"
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
                  className={`py-1.5 min-h-[36px] inline-flex items-center gap-1.5 border-b-2 transition-colors ${
                    isActive
                      ? "border-[var(--accent)] text-[var(--text-primary)] font-bold"
                      : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-control)]"
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 bg-[var(--accent)] inline-block shrink-0"
                    />
                  )}
                  <span>{item.label}</span>
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

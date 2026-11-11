"use client";

import Link from "next/link";
import { Post } from "@prisma/client";
import Markdown from "@/components/Markdown";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

interface BlogDetailContentProps {
  post: Post & {
    project?: {
      id: string;
      title: string;
      titleEs?: string | null;
      slug: string;
    } | null;
  };
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const { language, t } = useLanguage();

  const locale = language === "es" ? "es-ES" : "en-US";
  const displayTitle =
    language === "es" && post.titleEs ? post.titleEs : post.title;
  const displaySummary =
    language === "es" && post.summaryEs ? post.summaryEs : post.summary;
  const displayContent =
    language === "es" && post.contentEs ? post.contentEs : post.content;

  const projectTitle =
    post.project &&
    (language === "es" && post.project.titleEs
      ? post.project.titleEs
      : post.project.title);

  return (
    <div className="w-full">
      {/* Monolith Frontispiece */}
      <section className="band-monolith drafting-grid border-b-2 border-[var(--band-border)] py-12 md:py-16">
        <div className="site-wrap max-w-4xl space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.14em]">
            <Link
              href="/blog"
              className="text-[var(--band-accent)] hover:underline font-bold"
            >
              {t.blogPage.backLink}
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 bg-[var(--band-accent)] text-[#151312]">
              {t.blogPage.publishedOn}{" "}
              {new Date(post.publishedAt).toLocaleDateString(locale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {post.project && (
              <Link
                href={`/projects/${post.project.slug || post.project.id}`}
                className="font-mono text-[11px] uppercase tracking-[0.12em] px-2.5 py-1 border border-[var(--band-border-strong)] text-[var(--band-ink)] hover:border-[var(--band-accent)] hover:text-[var(--band-accent)] transition-colors"
              >
                {language === "es" ? "Obra:" : "Work:"} {projectTitle}
              </Link>
            )}
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl tracking-tight leading-[1.1] text-[var(--band-ink)]">
            {displayTitle}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[var(--band-muted)] border-l-4 border-[var(--band-accent)] pl-5 leading-relaxed max-w-[58ch]">
            {displaySummary}
          </p>

          {post.tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.split(",").map((tag) => (
                <span
                  key={tag.trim()}
                  className="font-mono text-[11px] px-2.5 py-1 border border-[var(--band-border)] bg-[var(--band-surface)] text-[var(--band-muted)]"
                >
                  #{tag.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Book Essay Body */}
      <AnimatedSection immediate className="band-paper paper-grid py-14 md:py-20">
        <div className="site-wrap max-w-4xl">
          <article className="border-2 border-[var(--border-strong)] bg-[var(--bg-card)] p-6 sm:p-12">
            <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.16em] border-b border-[var(--border-subtle)] pb-3 mb-8 flex justify-between">
              <span>
                {language === "es" ? "ENSAYO TÉCNICO" : "TECHNICAL ESSAY"}
              </span>
              <span className="text-[var(--accent)] font-bold">
                /{post.slug}
              </span>
            </div>
            <Markdown content={displayContent} />
          </article>
        </div>
      </AnimatedSection>
    </div>
  );
}

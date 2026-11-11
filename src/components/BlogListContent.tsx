"use client";

import Link from "next/link";
import { Post } from "@prisma/client";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

interface BlogListContentProps {
  posts: (Post & {
    project?: {
      id: string;
      title: string;
      titleEs?: string | null;
      slug: string;
    } | null;
  })[];
}

export default function BlogListContent({ posts }: BlogListContentProps) {
  const { language, t } = useLanguage();
  const locale = language === "es" ? "es-ES" : "en-US";

  return (
    <div className="w-full">
      {/* Monolith Periodical Header */}
      <section className="band-monolith drafting-grid border-b-2 border-[var(--band-border)] py-14 md:py-20">
        <div className="site-wrap space-y-5">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--band-accent)] inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--band-accent)]">
              {t.blogPage.badge}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[var(--band-ink)] leading-[0.95]">
            {t.blogPage.title}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[var(--band-muted)] max-w-[56ch] leading-relaxed">
            {t.blogPage.subtitle}
          </p>
        </div>
      </section>

      {/* Archival Essay Index on Paper */}
      <AnimatedSection immediate className="band-paper paper-grid py-14 md:py-20">
        <div className="site-wrap max-w-4xl">
          {posts.length === 0 ? (
            <Card className="p-12 text-center border-2 border-dashed border-[var(--border-subtle)]">
              <p className="font-mono text-sm text-[var(--text-muted)]">
                {t.blogPage.empty}
              </p>
              <div className="mt-6">
                <Button href="/admin">{t.blogPage.adminButton}</Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              {posts.map((post, index) => {
                const displayTitle =
                  language === "es" && post.titleEs ? post.titleEs : post.title;
                const displaySummary =
                  language === "es" && post.summaryEs
                    ? post.summaryEs
                    : post.summary;
                const projectTitle =
                  post.project &&
                  (language === "es" && post.project.titleEs
                    ? post.project.titleEs
                    : post.project.title);

                return (
                  <Card
                    key={post.id}
                    delay={0.08 * index}
                    accent={index === 0}
                    className="border-2 border-[var(--border-strong)] space-y-4 p-6 sm:p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-[var(--accent)]">
                          §{String(index + 1).padStart(2, "0")}
                        </span>
                        <Badge variant="black">
                          {new Date(post.publishedAt).toLocaleDateString(locale, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </Badge>
                        {post.project && (
                          <Link
                            href={`/projects/${post.project.slug || post.project.id}`}
                            className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-border)] hover:underline"
                          >
                            {projectTitle}
                          </Link>
                        )}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-mono text-xs text-[var(--accent)] font-bold uppercase tracking-wider hover:underline self-start sm:self-auto"
                      >
                        {t.blogPage.readArticle}
                      </Link>
                    </div>

                    <h2 className="font-serif font-bold text-2xl leading-snug text-[var(--text-primary)]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        {displayTitle}
                      </Link>
                    </h2>

                    <p className="text-base font-serif text-[var(--text-secondary)] leading-relaxed max-w-[62ch]">
                      {displaySummary}
                    </p>

                    {post.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {post.tags.split(",").map((tag) => (
                          <Tag key={tag.trim()}>#{tag.trim()}</Tag>
                        ))}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}

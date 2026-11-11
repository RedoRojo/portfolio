"use client";

import Link from "next/link";
import { Post } from "@prisma/client";
import Button from "@/components/Button";
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
    <div className="editorial-wrap py-16 md:py-24 space-y-14 max-w-4xl">
      <AnimatedSection immediate className="space-y-4 border-b border-[var(--border-subtle)] pb-10">
        <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block">
          {t.blogPage.badge}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
          {t.blogPage.title}
        </h1>
        <p className="font-serif text-lg text-[var(--text-secondary)] leading-relaxed max-w-[54ch]">
          {t.blogPage.subtitle}
        </p>
      </AnimatedSection>

      {posts.length === 0 ? (
        <div className="py-12 space-y-5">
          <p className="font-serif italic text-[var(--text-muted)]">
            {t.blogPage.empty}
          </p>
          <Button href="/admin">{t.blogPage.adminButton}</Button>
        </div>
      ) : (
        <ul role="list" className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)]">
          {posts.map((post) => {
            const displayTitle =
              language === "es" && post.titleEs ? post.titleEs : post.title;
            const displaySummary =
              language === "es" && post.summaryEs ? post.summaryEs : post.summary;
            const projectTitle =
              post.project &&
              (language === "es" && post.project.titleEs
                ? post.project.titleEs
                : post.project.title);

            return (
              <li
                key={post.id}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline"
              >
                <div className="md:col-span-3 space-y-1 font-mono text-xs text-[var(--text-muted)]">
                  <span className="block">
                    {new Date(post.publishedAt).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  {post.project && (
                    <Link
                      href={`/projects/${post.project.slug || post.project.id}`}
                      className="inline-block text-[var(--accent)] hover:underline"
                    >
                      {projectTitle}
                    </Link>
                  )}
                </div>

                <div className="md:col-span-7 space-y-2">
                  <h2 className="font-serif text-2xl font-medium text-[var(--text-primary)] leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {displayTitle}
                    </Link>
                  </h2>
                  <p className="font-serif text-base text-[var(--text-secondary)] leading-relaxed max-w-[54ch]">
                    {displaySummary}
                  </p>
                </div>

                <div className="md:col-span-2 md:text-right font-mono text-xs">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[var(--accent)] hover:underline"
                  >
                    {t.blogPage.readArticle}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

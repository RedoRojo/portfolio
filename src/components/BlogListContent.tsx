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
    <div className="site-wrap py-16 md:py-24 space-y-14 max-w-5xl">
      <AnimatedSection
        immediate
        className="space-y-4 border-b-2 border-[var(--border-strong)] pb-10"
      >
        <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--accent)] tracking-widest uppercase">
          <span
            aria-hidden="true"
            className="w-2.5 h-2.5 bg-[var(--accent)] inline-block"
          />
          {t.blogPage.badge}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.02]">
          {t.blogPage.title}
        </h1>
        <p className="font-serif text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-[54ch]">
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
        <ul
          role="list"
          className="divide-y-2 divide-[var(--border-strong)] border-b-2 border-[var(--border-strong)]"
        >
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
                className="py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-3 border-l-4 border-[var(--accent)] pl-4 space-y-1.5 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  <span className="block font-bold text-[var(--text-primary)]">
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
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-snug">
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

                <div className="md:col-span-2 md:text-right font-mono text-xs uppercase tracking-wider">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-center min-h-[36px] px-3.5 border-2 border-[var(--text-primary)] font-bold text-[var(--text-primary)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--on-accent)] transition-colors"
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

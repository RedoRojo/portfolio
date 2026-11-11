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
    <div className="editorial-wrap py-14 md:py-20 space-y-12 max-w-3xl">
      <div className="font-mono text-xs">
        <Link href="/blog" className="text-[var(--accent)] link-underline">
          {t.blogPage.backLink}
        </Link>
      </div>

      <AnimatedSection immediate className="space-y-6 border-b border-[var(--border-subtle)] pb-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-muted)]">
          <span>
            {t.blogPage.publishedOn}{" "}
            {new Date(post.publishedAt).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {post.project && (
            <>
              <span aria-hidden="true">&middot;</span>
              <Link
                href={`/projects/${post.project.slug || post.project.id}`}
                className="text-[var(--accent)] hover:underline"
              >
                {projectTitle}
              </Link>
            </>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[var(--text-primary)]">
          {displayTitle}
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-[var(--text-secondary)] border-l-2 border-[var(--accent)] pl-5 leading-relaxed max-w-[54ch]">
          {displaySummary}
        </p>

        {post.tags && (
          <p className="font-mono text-xs text-[var(--text-muted)]">
            {post.tags
              .split(",")
              .map((tag) => `#${tag.trim()}`)
              .join(" · ")}
          </p>
        )}
      </AnimatedSection>

      <article className="pt-2">
        <Markdown content={displayContent} />
      </article>
    </div>
  );
}

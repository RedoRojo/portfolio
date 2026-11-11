"use client";

import Link from "next/link";
import { Project, Post } from "@prisma/client";
import Markdown from "@/components/Markdown";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailContentProps {
  project: Project & {
    posts?: Post[];
  };
}

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  const { language, t } = useLanguage();

  const displayTitle =
    language === "es" && project.titleEs ? project.titleEs : project.title;
  const displayDescription =
    language === "es" && project.descriptionEs
      ? project.descriptionEs
      : project.description;
  const displayContent =
    language === "es" && project.contentEs ? project.contentEs : project.content;

  const locale = language === "es" ? "es-ES" : "en-US";

  return (
    <div className="editorial-wrap py-14 md:py-20 space-y-14 max-w-3xl">
      <div className="font-serif italic text-sm">
        <Link href="/projects" className="text-[var(--accent)] link-underline">
          {t.projectsPage.backLink}
        </Link>
      </div>

      {/* Cabecera editorial */}
      <AnimatedSection
        immediate
        className="space-y-6 border-b border-[var(--border-subtle)] pb-10"
      >
        <div className="flex flex-wrap items-center gap-3 font-serif italic text-sm text-[var(--text-muted)]">
          <span>
            {project.status === "COMPLETED"
              ? language === "es"
                ? "Completado"
                : "Completed"
              : language === "es"
              ? "En desarrollo"
              : "In progress"}
          </span>
          {project.featured && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span className="text-[var(--accent)]">
                {language === "es" ? "Destacado" : "Featured"}
              </span>
            </>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[var(--text-primary)] leading-[1.08]">
          {displayTitle}
        </h1>

        <p className="font-serif text-lg sm:text-xl text-[var(--text-secondary)] border-l-2 border-[var(--accent)] pl-5 leading-relaxed max-w-[54ch]">
          {displayDescription}
        </p>

        {project.techStack && (
          <p className="font-mono text-xs text-[var(--text-muted)]">
            {project.techStack
              .split(",")
              .map((tech) => tech.trim())
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}

        {(project.repoUrl || project.liveUrl) && (
          <div className="flex flex-wrap gap-5 pt-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t.projectsPage.sourceCode}
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {t.projectsPage.liveDemo}
              </a>
            )}
          </div>
        )}
      </AnimatedSection>

      {/* Monografía técnica */}
      <article className="space-y-6">
        {displayContent ? (
          <Markdown content={displayContent} />
        ) : (
          <p className="font-serif italic text-[var(--text-muted)]">
            {language === "es"
              ? "No hay documentación adicional registrada para este proyecto."
              : "No additional documentation recorded for this project."}
          </p>
        )}
      </article>

      {/* Artículos relacionados */}
      {project.posts && project.posts.length > 0 && (
        <section className="border-t border-[var(--border-subtle)] pt-10 space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif font-normal text-2xl text-[var(--text-primary)]">
              {language === "es" ? "Artículos Relacionados" : "Related Articles"}
            </h2>
            <span className="font-serif italic text-sm text-[var(--text-muted)]">
              {project.posts.length}
            </span>
          </div>

          <ul
            role="list"
            className="divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)]"
          >
            {project.posts.map((post) => {
              const postTitle =
                language === "es" && post.titleEs ? post.titleEs : post.title;
              const postSummary =
                language === "es" && post.summaryEs ? post.summaryEs : post.summary;

              return (
                <li key={post.id} className="py-5 space-y-1.5">
                  <div className="flex items-center justify-between font-serif italic text-xs text-[var(--text-muted)]">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString(locale, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[var(--accent)] hover:underline"
                    >
                      {t.blogPage.readArticle}
                    </Link>
                  </div>
                  <h3 className="font-serif font-medium text-xl text-[var(--text-primary)]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {postTitle}
                    </Link>
                  </h3>
                  <p className="font-serif text-sm text-[var(--text-secondary)] max-w-[54ch]">
                    {postSummary}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}

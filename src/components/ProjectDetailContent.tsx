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
    <div className="site-wrap py-14 md:py-20 space-y-14 max-w-4xl">
      <div className="font-mono text-xs uppercase tracking-wider">
        <Link href="/projects" className="text-[var(--accent)] link-underline">
          {t.projectsPage.backLink}
        </Link>
      </div>

      {/* Cabecera constructivista */}
      <AnimatedSection
        immediate
        className="space-y-6 border-b-2 border-[var(--border-strong)] pb-10"
      >
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
          <span className="px-2.5 py-1 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold">
            {project.status === "COMPLETED"
              ? language === "es"
                ? "Completado"
                : "Completed"
              : language === "es"
              ? "En desarrollo"
              : "In progress"}
          </span>
          {project.featured && (
            <span className="px-2.5 py-1 bg-[var(--accent)] text-[var(--on-accent)] font-bold">
              {language === "es" ? "Destacado" : "Featured"}
            </span>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.06]">
          {displayTitle}
        </h1>

        <p className="font-serif text-lg sm:text-xl text-[var(--text-secondary)] border-l-4 border-[var(--accent)] pl-5 leading-relaxed max-w-[54ch]">
          {displayDescription}
        </p>

        {project.techStack && (
          <p className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
            {project.techStack
              .split(",")
              .map((tech) => tech.trim())
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}

        {(project.repoUrl || project.liveUrl) && (
          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs uppercase tracking-wider">
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
        <section className="border-t-2 border-[var(--border-strong)] pt-10 space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif font-bold text-2xl text-[var(--text-primary)]">
              {language === "es" ? "Artículos Relacionados" : "Related Articles"}
            </h2>
            <span className="font-mono text-xs font-bold text-[var(--accent)]">
              {String(project.posts.length).padStart(2, "0")}
            </span>
          </div>

          <ul
            role="list"
            className="divide-y divide-[var(--border-control)] border-t-2 border-b-2 border-[var(--border-strong)]"
          >
            {project.posts.map((post) => {
              const postTitle =
                language === "es" && post.titleEs ? post.titleEs : post.title;
              const postSummary =
                language === "es" && post.summaryEs ? post.summaryEs : post.summary;

              return (
                <li key={post.id} className="py-6 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString(locale, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[var(--accent)] font-bold hover:underline"
                    >
                      {t.blogPage.readArticle}
                    </Link>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[var(--text-primary)]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {postTitle}
                    </Link>
                  </h3>
                  <p className="font-serif text-base text-[var(--text-secondary)] max-w-[56ch]">
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

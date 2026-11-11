"use client";

import Link from "next/link";
import { Project, Post } from "@prisma/client";
import Markdown from "@/components/Markdown";
import Card from "@/components/Card";
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
    <div className="w-full">
      {/* Monolith Project Frontispiece */}
      <section className="band-monolith drafting-grid border-b-2 border-[var(--band-border)] py-12 md:py-16">
        <div className="site-wrap max-w-4xl space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.14em]">
            <Link
              href="/projects"
              className="text-[var(--band-accent)] hover:underline font-bold"
            >
              {t.projectsPage.backLink}
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 bg-[var(--band-accent)] text-[#151312]">
              {project.status === "COMPLETED"
                ? language === "es"
                  ? "COMPLETADO"
                  : "COMPLETED"
                : language === "es"
                ? "EN DESARROLLO"
                : "IN PROGRESS"}
            </span>
            {project.featured && (
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 border border-[var(--band-border-strong)] text-[var(--band-ink)]">
                {language === "es" ? "OBRA DESTACADA" : "FEATURED WORK"}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--band-ink)] leading-[0.98]">
            {displayTitle}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[var(--band-muted)] border-l-4 border-[var(--band-accent)] pl-5 leading-relaxed max-w-[60ch]">
            {displayDescription}
          </p>

          {project.techStack && (
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono text-[var(--band-muted)] uppercase tracking-[0.14em] block">
                {t.projectsPage.techStackLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.split(",").map((tech) => (
                  <span
                    key={tech.trim()}
                    className="px-2.5 py-1 text-xs font-mono border border-[var(--band-border)] bg-[var(--band-surface)] text-[var(--band-ink)]"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(project.repoUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-4 pt-3 font-mono text-xs uppercase tracking-[0.12em]">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-monolith-primary"
                >
                  {t.projectsPage.sourceCode}
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-monolith-secondary"
                >
                  {t.projectsPage.liveDemo}
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Monograph Documentation & Devlogs on Paper */}
      <AnimatedSection immediate className="band-paper paper-grid py-14 md:py-20">
        <div className="site-wrap max-w-4xl space-y-12">
          {/* Technical Monograph Body */}
          <article className="border-2 border-[var(--border-strong)] bg-[var(--bg-card)] p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.16em] border-b border-[var(--border-subtle)] pb-3">
              <span>
                {language === "es"
                  ? "DOCUMENTACIÓN TÉCNICA"
                  : "TECHNICAL MONOGRAPH"}
              </span>
              <span className="text-[var(--accent)] font-bold">
                /{project.slug}
              </span>
            </div>

            {displayContent ? (
              <Markdown content={displayContent} />
            ) : (
              <div className="border border-dashed border-[var(--border-subtle)] p-8 text-center bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-muted)]">
                {language === "es"
                  ? "No hay detalles adicionales disponibles para este proyecto."
                  : "No further details available for this project."}
              </div>
            )}
          </article>

          {/* Related Essays */}
          {project.posts && project.posts.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[var(--border-strong)] pb-3">
                <h2 className="font-display font-bold uppercase text-2xl text-[var(--text-primary)]">
                  {language === "es"
                    ? "Crónicas y Devlogs Relacionados"
                    : "Related Devlogs & Essays"}
                </h2>
                <span className="font-mono text-xs text-[var(--accent)] font-bold uppercase">
                  {project.posts.length}{" "}
                  {language === "es"
                    ? project.posts.length === 1
                      ? "ensayo"
                      : "ensayos"
                    : project.posts.length === 1
                    ? "essay"
                    : "essays"}
                </span>
              </div>

              <div className="space-y-4">
                {project.posts.map((post) => {
                  const postTitle =
                    language === "es" && post.titleEs ? post.titleEs : post.title;
                  const postSummary =
                    language === "es" && post.summaryEs
                      ? post.summaryEs
                      : post.summary;

                  return (
                    <Card
                      key={post.id}
                      className="space-y-3 border-2 border-[var(--border-strong)]"
                    >
                      <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2">
                        <span className="font-mono text-xs text-[var(--text-muted)] uppercase">
                          {new Date(post.publishedAt).toLocaleDateString(locale, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="font-mono text-xs text-[var(--accent)] font-bold hover:underline"
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
                      <p className="text-sm font-serif text-[var(--text-secondary)] leading-relaxed">
                        {postSummary}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}

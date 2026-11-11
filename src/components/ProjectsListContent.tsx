"use client";

import { Project } from "@prisma/client";
import Link from "next/link";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectsListContentProps {
  projects: Project[];
}

export default function ProjectsListContent({
  projects,
}: ProjectsListContentProps) {
  const { language, t } = useLanguage();

  return (
    <div className="w-full">
      {/* Dark Monolith Page Header */}
      <section className="band-monolith drafting-grid border-b-2 border-[var(--band-border)] py-14 md:py-20">
        <div className="site-wrap space-y-5">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--band-accent)] inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--band-accent)]">
              {t.projectsPage.badge}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[var(--band-ink)] leading-[0.95]">
            {t.projectsPage.title}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[var(--band-muted)] max-w-[56ch] leading-relaxed">
            {t.projectsPage.subtitle}
          </p>
        </div>
      </section>

      {/* Catalog Grid on Archival Paper */}
      <AnimatedSection immediate className="band-paper paper-grid py-14 md:py-20">
        <div className="site-wrap">
          {projects.length === 0 ? (
            <Card className="p-12 text-center border-2 border-dashed border-[var(--border-subtle)]">
              <p className="font-mono text-sm text-[var(--text-muted)]">
                {t.projectsPage.empty}
              </p>
              <div className="mt-6">
                <Button href="/admin">{t.projectsPage.adminButton}</Button>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const displayTitle =
                  language === "es" && project.titleEs
                    ? project.titleEs
                    : project.title;
                const displayDescription =
                  language === "es" && project.descriptionEs
                    ? project.descriptionEs
                    : project.description;
                const plateIndex = String(index + 1).padStart(2, "0");

                return (
                  <Card
                    key={project.id}
                    delay={0.08 * index}
                    accent={project.featured}
                    className="flex flex-col justify-between border-2 border-[var(--border-strong)] p-7 sm:p-8"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                        <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-[0.14em]">
                          {language === "es" ? `LÁMINA ${plateIndex}` : `PLATE ${plateIndex}`}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.featured && (
                            <Badge variant="red">
                              {language === "es" ? "DESTACADO" : "FEATURED"}
                            </Badge>
                          )}
                          <Badge variant="black">
                            {project.status === "COMPLETED"
                              ? language === "es"
                                ? "COMPLETADO"
                                : "COMPLETED"
                              : language === "es"
                              ? "EN CURSO"
                              : "IN PROGRESS"}
                          </Badge>
                        </div>
                      </div>

                      <h2 className="font-serif font-bold text-2xl leading-snug text-[var(--text-primary)]">
                        <Link
                          href={`/projects/${project.slug || project.id}`}
                          className="hover:text-[var(--accent)] transition-colors"
                        >
                          {displayTitle}
                        </Link>
                      </h2>

                      <p className="font-serif text-base leading-relaxed text-[var(--text-secondary)]">
                        {displayDescription}
                      </p>

                      {project.techStack && (
                        <div className="space-y-2 pt-1">
                          <span className="text-[11px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-[0.14em] block">
                            {t.projectsPage.techStackLabel}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.split(",").map((tech) => (
                              <Tag key={tech.trim()}>{tech.trim()}</Tag>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-5 mt-6 border-t border-[var(--border-subtle)] font-mono text-xs uppercase tracking-wider">
                      <Link
                        href={`/projects/${project.slug || project.id}`}
                        className="text-[var(--text-primary)] font-bold hover:text-[var(--accent)] transition-colors"
                      >
                        {t.projectsPage.inspectDetails}
                      </Link>
                      <div className="flex items-center gap-4">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] font-bold hover:underline"
                          >
                            {t.projectsPage.sourceCode}
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline"
                          >
                            {t.projectsPage.liveDemo}
                          </a>
                        )}
                      </div>
                    </div>
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

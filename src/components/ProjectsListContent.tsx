"use client";

import { Project } from "@prisma/client";
import Link from "next/link";
import Button from "@/components/Button";
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
    <div className="editorial-wrap py-16 md:py-24 space-y-14">
      <AnimatedSection immediate className="space-y-4 border-b border-[var(--border-subtle)] pb-10 max-w-[46rem]">
        <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block">
          {t.projectsPage.badge}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[var(--text-primary)]">
          {t.projectsPage.title}
        </h1>
        <p className="font-serif text-lg text-[var(--text-secondary)] leading-relaxed">
          {t.projectsPage.subtitle}
        </p>
      </AnimatedSection>

      {projects.length === 0 ? (
        <div className="py-12 space-y-5">
          <p className="font-serif italic text-[var(--text-muted)]">
            {t.projectsPage.empty}
          </p>
          <Button href="/admin">{t.projectsPage.adminButton}</Button>
        </div>
      ) : (
        <ul role="list" className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)]">
          {projects.map((project, index) => {
            const displayTitle =
              language === "es" && project.titleEs
                ? project.titleEs
                : project.title;
            const displayDescription =
              language === "es" && project.descriptionEs
                ? project.descriptionEs
                : project.description;

            return (
              <li
                key={project.id}
                className="py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
              >
                <div className="md:col-span-2 flex md:flex-col justify-between gap-1 font-mono text-xs text-[var(--text-muted)]">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    {project.status === "COMPLETED"
                      ? language === "es"
                        ? "Completado"
                        : "Completed"
                      : language === "es"
                      ? "En curso"
                      : "In progress"}
                  </span>
                </div>

                <div className="md:col-span-7 space-y-2.5">
                  <h2 className="font-serif text-2xl font-medium text-[var(--text-primary)]">
                    <Link
                      href={`/projects/${project.slug || project.id}`}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {displayTitle}
                    </Link>
                  </h2>
                  <p className="font-serif text-base text-[var(--text-secondary)] leading-relaxed max-w-[54ch]">
                    {displayDescription}
                  </p>
                  {project.techStack && (
                    <p className="font-mono text-xs text-[var(--text-muted)] pt-1">
                      {project.techStack
                        .split(",")
                        .map((tech) => tech.trim())
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  )}
                </div>

                <div className="md:col-span-3 md:text-right flex flex-wrap md:justify-end gap-5 font-mono text-xs pt-2 md:pt-0">
                  <Link
                    href={`/projects/${project.slug || project.id}`}
                    className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {t.projectsPage.readMore}
                  </Link>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      {t.projectsPage.sourceCode}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                    >
                      {t.projectsPage.liveDemo}
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

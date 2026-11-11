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
    <div className="site-wrap py-16 md:py-24 space-y-14">
      <AnimatedSection
        immediate
        className="space-y-4 border-b-2 border-[var(--border-strong)] pb-10 max-w-[48rem]"
      >
        <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--accent)] tracking-widest uppercase">
          <span
            aria-hidden="true"
            className="w-2.5 h-2.5 bg-[var(--accent)] inline-block"
          />
          {t.projectsPage.badge}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.02]">
          {t.projectsPage.title}
        </h1>
        <p className="font-serif text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
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
        <ul
          role="list"
          className="divide-y-2 divide-[var(--border-strong)] border-b-2 border-[var(--border-strong)]"
        >
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
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start"
              >
                <div className="md:col-span-2 border-l-4 border-[var(--accent)] pl-4 space-y-1">
                  <span className="font-serif font-bold text-4xl leading-none text-[var(--text-primary)] tabular-nums block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] block">
                    {project.status === "COMPLETED"
                      ? language === "es"
                        ? "Completado"
                        : "Completed"
                      : language === "es"
                      ? "En curso"
                      : "In progress"}
                  </span>
                </div>

                <div className="md:col-span-7 space-y-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                    <Link
                      href={`/projects/${project.slug || project.id}`}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {displayTitle}
                    </Link>
                  </h2>
                  <p className="font-serif text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-[54ch]">
                    {displayDescription}
                  </p>
                  {project.techStack && (
                    <p className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)] pt-1">
                      {project.techStack
                        .split(",")
                        .map((tech) => tech.trim())
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  )}
                </div>

                <div className="md:col-span-3 flex flex-wrap md:flex-col md:items-end gap-3 pt-2 md:pt-0">
                  <Link
                    href={`/projects/${project.slug || project.id}`}
                    className="inline-flex items-center justify-center min-h-[38px] px-4 border-2 border-[var(--text-primary)] font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--on-accent)] transition-colors"
                  >
                    {t.projectsPage.readMore}
                  </Link>
                  <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-wider">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-1"
                      >
                        {t.projectsPage.sourceCode}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline transition-colors py-1"
                      >
                        {t.projectsPage.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

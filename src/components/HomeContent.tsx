"use client";

import Link from "next/link";
import { Project } from "@prisma/client";
import type { RecentPostItem } from "@/app/page";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

interface HomeContentProps {
  featuredProjects: Project[];
  recentPosts: RecentPostItem[];
}

const ROMAN = ["I.", "II.", "III.", "IV.", "V.", "VI."];

export default function HomeContent({
  featuredProjects,
  recentPosts,
}: HomeContentProps) {
  const { language, t } = useLanguage();
  const locale = language === "es" ? "es-ES" : "en-US";

  return (
    <div className="w-full">
      {/* PORTADA CLÁSICA: Tipografía editorial y ficha biográfica fáctica */}
      <section className="editorial-wrap py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-8 space-y-6">
            <p className="font-serif italic text-base text-[var(--accent)]">
              {t.home.location}
            </p>

            <h1 className="font-serif font-normal text-[clamp(2.5rem,1.4rem+3.8vw,4.75rem)] leading-[1.04] tracking-[-0.02em] text-[var(--text-primary)]">
              {t.home.heroName}
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[var(--accent)] leading-snug">
              {t.home.heroSubtitle}
            </p>

            <div aria-hidden="true" className="w-16 h-px bg-[var(--accent)] my-2" />

            <p className="font-serif text-lg sm:text-[1.15rem] leading-[1.78] text-[var(--text-secondary)] max-w-[54ch]">
              {t.home.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <Button href="/resume" variant="primary">
                {t.home.viewResume}
              </Button>
              <Link
                href="/projects"
                className="font-serif text-base link-underline py-2"
              >
                {t.home.exploreProjects}
              </Link>
              <span
                aria-hidden="true"
                className="text-[var(--border-control)] hidden sm:inline"
              >
                &middot;
              </span>
              <div className="flex items-center gap-4 font-serif text-sm text-[var(--text-secondary)]">
                <a
                  href="https://github.com/RedoRojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] underline decoration-[var(--border-subtle)] hover:decoration-[var(--accent)] underline-offset-4 transition-colors py-1"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/rojasredo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] underline decoration-[var(--border-subtle)] hover:decoration-[var(--accent)] underline-offset-4 transition-colors py-1"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 border-t border-b border-[var(--border-subtle)] py-5">
            <h2 className="font-serif italic text-base text-[var(--accent)] pb-3 border-b border-[var(--border-subtle)]">
              {t.home.coordinatesTitle}
            </h2>
            <dl className="divide-y divide-[var(--border-subtle)]">
              {t.home.coordinates.map((coord) => (
                <div key={coord.label} className="py-3 space-y-0.5">
                  <dt className="font-serif italic text-xs text-[var(--text-muted)]">
                    {coord.label}
                  </dt>
                  <dd className="font-serif text-sm sm:text-base text-[var(--text-primary)]">
                    {coord.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* I. EXPERIENCIA Y TRAYECTORIA: Banda burdeos soviética encuadernada */}
      <AnimatedSection
        id="trajectory"
        className="band-ink border-t border-[var(--accent)]/60 py-20 md:py-28"
      >
        <div className="editorial-wrap space-y-12">
          <div className="flex items-baseline gap-3 border-b border-[var(--band-border)] pb-5">
            <span className="font-serif italic text-xl sm:text-2xl text-[var(--band-gilt)]">
              {t.home.trajectory.numeral}
            </span>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl tracking-tight text-[var(--band-ink)]">
              {t.home.trajectory.title}
            </h2>
          </div>

          <ol
            role="list"
            className="divide-y divide-[var(--band-border)] border-b border-[var(--band-border)]"
          >
            {t.home.trajectory.milestones.map((item) => (
              <li
                key={item.numeral}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
              >
                <div className="md:col-span-3 space-y-1">
                  <span className="font-serif italic text-2xl text-[var(--band-gilt)] block">
                    {item.numeral}.
                  </span>
                  <span className="font-mono text-xs text-[var(--band-muted)] block">
                    {item.period}
                  </span>
                </div>

                <div className="md:col-span-9 space-y-2">
                  <h3 className="font-serif font-medium text-xl sm:text-2xl text-[var(--band-ink)]">
                    {item.role}
                  </h3>
                  <p className="font-serif italic text-base text-[var(--band-accent)]">
                    {item.org}
                  </p>
                  <p className="font-serif text-base sm:text-[1.05rem] text-[var(--band-muted)] leading-[1.75] max-w-[58ch] pt-1">
                    {item.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </AnimatedSection>

      {/* II. PROYECTOS SELECCIONADOS */}
      <AnimatedSection className="editorial-wrap py-20 md:py-28 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl sm:text-2xl text-[var(--accent)]">
              {t.home.featuredProjects.numeral}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--text-primary)]">
              {t.home.featuredProjects.title}
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-serif italic text-base link-underline self-start sm:self-auto"
          >
            {t.home.featuredProjects.viewAll}
          </Link>
        </div>

        {featuredProjects.length === 0 ? (
          <p className="font-serif italic text-[var(--text-muted)] py-8">
            {t.home.featuredProjects.empty}
          </p>
        ) : (
          <ul
            role="list"
            className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)]"
          >
            {featuredProjects.map((project, idx) => {
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
                  <div className="md:col-span-2 space-y-1">
                    <span className="font-serif italic text-xl text-[var(--accent)] block">
                      {ROMAN[idx] || `${idx + 1}.`}
                    </span>
                    <span className="font-serif italic text-xs text-[var(--text-muted)] block">
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
                    <h3 className="font-serif text-2xl sm:text-[1.7rem] font-medium text-[var(--text-primary)]">
                      <Link
                        href={`/projects/${project.slug || project.id}`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        {displayTitle}
                      </Link>
                    </h3>
                    <p className="font-serif text-base text-[var(--text-secondary)] leading-[1.75] max-w-[54ch]">
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

                  <div className="md:col-span-3 md:text-right flex flex-wrap md:justify-end gap-5 font-serif text-sm pt-2 md:pt-0">
                    <Link
                      href={`/projects/${project.slug || project.id}`}
                      className="text-[var(--accent)] hover:underline underline-offset-4 py-1"
                    >
                      {t.home.featuredProjects.inspect}
                    </Link>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--accent)] py-1 transition-colors"
                      >
                        {t.home.featuredProjects.github}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--accent)] py-1 transition-colors"
                      >
                        {t.home.featuredProjects.liveDemo}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </AnimatedSection>

      {/* III. STACK TÉCNICO: Lino cálido editorial */}
      <AnimatedSection className="bg-[var(--bg-secondary)] border-t border-b border-[var(--border-subtle)] py-20 md:py-24">
        <div className="editorial-wrap space-y-12">
          <div className="flex items-baseline gap-3 border-b border-[var(--border-subtle)] pb-5">
            <span className="font-serif italic text-xl sm:text-2xl text-[var(--accent)]">
              {t.home.stack.numeral}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--text-primary)]">
              {t.home.stack.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {t.home.stack.pillars.map((pillar) => (
              <div key={pillar.numeral} className="space-y-4">
                <div className="border-b border-[var(--border-control)] pb-3 space-y-1">
                  <span className="font-serif italic text-sm text-[var(--accent)] block">
                    {pillar.numeral}.
                  </span>
                  <h3 className="font-serif font-medium text-xl text-[var(--text-primary)]">
                    {pillar.title}
                  </h3>
                </div>

                <ul role="list" className="space-y-2 pt-1">
                  {pillar.items.map((tech) => (
                    <li
                      key={tech}
                      className="font-serif text-base text-[var(--text-secondary)] flex items-baseline gap-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[var(--accent)] select-none"
                      >
                        &mdash;
                      </span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* IV. ARTÍCULOS RECIENTES (Se muestra cuando existen posts publicados) */}
      {recentPosts.length > 0 && (
        <AnimatedSection className="editorial-wrap py-20 md:py-24 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-5">
            <div className="flex items-baseline gap-3">
              <span className="font-serif italic text-xl sm:text-2xl text-[var(--accent)]">
                {t.home.recentArticles.numeral}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--text-primary)]">
                {t.home.recentArticles.title}
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-serif italic text-base link-underline self-start sm:self-auto"
            >
              {t.home.recentArticles.viewAll}
            </Link>
          </div>

          <ul
            role="list"
            className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)]"
          >
            {recentPosts.map((post) => {
              const postTitle =
                language === "es" && post.titleEs ? post.titleEs : post.title;
              const postSummary =
                language === "es" && post.summaryEs
                  ? post.summaryEs
                  : post.summary;
              const formattedDate = new Date(
                post.publishedAt
              ).toLocaleDateString(locale, {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
                  >
                    <span className="md:col-span-2 font-serif italic text-sm text-[var(--text-muted)]">
                      {formattedDate}
                    </span>
                    <div className="md:col-span-8 space-y-1">
                      <h3 className="font-serif font-medium text-xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {postTitle}
                      </h3>
                      <p className="font-serif text-base text-[var(--text-secondary)] line-clamp-2 max-w-[56ch]">
                        {postSummary}
                      </p>
                    </div>
                    <span className="md:col-span-2 md:text-right font-serif italic text-sm text-[var(--accent)]">
                      {t.home.recentArticles.read}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </AnimatedSection>
      )}
    </div>
  );
}

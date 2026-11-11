"use client";

import Link from "next/link";
import { Project } from "@prisma/client";
import type { RecentPostItem } from "@/app/page";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import MarginaliaBand from "@/components/MarginaliaBand";
import { useLanguage } from "@/context/LanguageContext";

interface HomeContentProps {
  featuredProjects: Project[];
  recentPosts: RecentPostItem[];
}

export default function HomeContent({
  featuredProjects,
  recentPosts,
}: HomeContentProps) {
  const { language, t } = useLanguage();
  const locale = language === "es" ? "es-ES" : "en-US";

  return (
    <div className="w-full">
      {/* 1. HERO ABIERTO: TIPOGRAFÍA Y AIRE */}
      <section className="editorial-wrap pt-16 pb-20 md:pt-28 md:pb-32">
        <div className="max-w-[46rem] space-y-8">
          <p className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
            {t.home.location}
          </p>

          <h1 className="font-serif font-normal text-[clamp(2.4rem,1.25rem+3.6vw,4.6rem)] leading-[1.06] tracking-tight text-[var(--text-primary)]">
            {t.home.heroHeadlineStart}{" "}
            <em className="italic text-[var(--accent)]">
              {t.home.heroHeadlineEmphasis}
            </em>{" "}
            {t.home.heroHeadlineEnd}
          </h1>

          <p className="font-serif text-lg sm:text-xl leading-[1.7] text-[var(--text-secondary)] max-w-[52ch]">
            {t.home.heroDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Button href="/resume" variant="primary">
              {t.home.viewResume}
            </Button>
            <Link
              href="/projects"
              className="font-mono text-xs tracking-wide link-underline py-2"
            >
              {t.home.exploreProjects}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. I. PRÓLOGO (Dos columnas limpias sin cajas) */}
      <AnimatedSection
        id="prologue"
        className="border-t border-[var(--border-subtle)] py-16 md:py-24"
      >
        <div className="editorial-wrap grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Margen izquierdo: índice y coordenadas simples */}
          <aside className="md:col-span-4 space-y-6">
            <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block">
              {t.home.prologue.eyebrow}
            </span>

            <dl className="divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)] text-sm">
              {t.home.prologue.coordinates.map((coord) => (
                <div key={coord.label} className="py-3 space-y-0.5">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    {coord.label}
                  </dt>
                  <dd className="font-serif text-[var(--text-primary)]">
                    {coord.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          {/* Columna principal: prosa editorial + epígrafe abierto */}
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-5 font-serif text-lg leading-[1.8] text-[var(--text-secondary)] max-w-[56ch]">
              {t.home.prologue.paragraphs.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-[var(--text-primary)]" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <figure className="border-l-2 border-[var(--accent)] pl-6 py-1 space-y-2 max-w-[46ch]">
              <blockquote className="space-y-1">
                <p className="font-serif italic text-2xl sm:text-3xl text-[var(--text-primary)] leading-snug">
                  {t.home.prologue.epigraph}
                </p>
                <p lang="ru" className="font-serif text-sm text-[var(--accent)]">
                  {t.home.prologue.epigraphOriginal}
                </p>
              </blockquote>
              <figcaption className="font-mono text-xs text-[var(--text-muted)]">
                — {t.home.prologue.epigraphAuthor}
              </figcaption>
            </figure>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. II. BANDA OSCURA ÚNICA: MARGINALIA LITERARIA */}
      <MarginaliaBand />

      {/* 4. III. OBRAS SELECTAS (Lista editorial en filas sin tarjetas) */}
      <AnimatedSection className="editorial-wrap py-20 md:py-28 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block">
              {t.home.featuredProjects.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--text-primary)]">
              {t.home.featuredProjects.title}
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-xs tracking-wide link-underline self-start sm:self-auto"
          >
            {t.home.featuredProjects.viewAll}
          </Link>
        </div>

        {featuredProjects.length === 0 ? (
          <p className="font-serif italic text-[var(--text-muted)] py-8">
            {t.home.featuredProjects.empty}
          </p>
        ) : (
          <ul role="list" className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)]">
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
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
                >
                  <span className="md:col-span-1 font-mono text-xs text-[var(--text-muted)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="md:col-span-8 space-y-2.5">
                    <h3 className="font-serif text-2xl font-medium text-[var(--text-primary)]">
                      <Link
                        href={`/projects/${project.slug || project.id}`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        {displayTitle}
                      </Link>
                    </h3>
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
                      {t.home.featuredProjects.inspect}
                    </Link>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        {t.home.featuredProjects.github}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </AnimatedSection>

      {/* 5. IV. ENSAYOS RECIENTES (Se muestra cuando existen ensayos publicados) */}
      {recentPosts.length > 0 && (
        <AnimatedSection className="border-t border-[var(--border-subtle)] py-16 md:py-24">
          <div className="editorial-wrap space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
              <div className="space-y-1.5">
                <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block">
                  {t.home.recentEssays.eyebrow}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--text-primary)]">
                  {t.home.recentEssays.title}
                </h2>
              </div>
              <Link
                href="/blog"
                className="font-mono text-xs tracking-wide link-underline self-start sm:self-auto"
              >
                {t.home.recentEssays.viewAll}
              </Link>
            </div>

            <ul role="list" className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)]">
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
                      className="group py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
                    >
                      <span className="md:col-span-2 font-mono text-xs text-[var(--text-muted)]">
                        {formattedDate}
                      </span>
                      <div className="md:col-span-8 space-y-1">
                        <h3 className="font-serif text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {postTitle}
                        </h3>
                        <p className="font-serif text-sm text-[var(--text-secondary)] line-clamp-2 max-w-[54ch]">
                          {postSummary}
                        </p>
                      </div>
                      <span className="md:col-span-2 md:text-right font-mono text-xs text-[var(--accent)]">
                        {t.home.recentEssays.read}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </AnimatedSection>
      )}

      {/* 6. V. MATERIAL DE TRABAJO (Tres columnas tipográficas abiertas sin cajas) */}
      <AnimatedSection className="border-t border-[var(--border-subtle)] py-16 md:py-24">
        <div className="editorial-wrap space-y-10">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block">
              {t.home.craft.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[var(--text-primary)]">
              {t.home.craft.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.home.craft.columns.map((col) => (
              <div key={col.title} className="space-y-2 border-t border-[var(--border-subtle)] pt-4">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)]">
                  {col.title}
                </h3>
                <p className="font-serif text-base text-[var(--text-secondary)] leading-relaxed">
                  {col.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

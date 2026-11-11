"use client";

import Link from "next/link";
import { Project } from "@prisma/client";
import type { RecentPostItem } from "@/app/page";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import ConstructivistComposition from "@/components/ConstructivistComposition";
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
      {/* HERO: Monumental Classical Serif + Geometría Constructivista */}
      <section className="site-wrap py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
              <span
                aria-hidden="true"
                className="w-2.5 h-2.5 bg-[var(--accent)] inline-block shrink-0"
              />
              <span>{t.home.location}</span>
            </p>

            <h1 className="font-serif font-bold text-[clamp(2.5rem,1.45rem+3.8vw,4.9rem)] leading-[0.98] tracking-[-0.025em] text-[var(--text-primary)]">
              <span className="block">{t.home.heroFirstName}</span>
              <span className="block">{t.home.heroLastName}</span>
            </h1>

            <div aria-hidden="true" className="flex items-center gap-2 pt-1">
              <span className="h-2.5 w-24 bg-[var(--accent)] block" />
              <span className="h-2.5 w-8 bg-[var(--text-primary)] block" />
              <span className="h-2.5 w-2.5 bg-[var(--border-control)] block" />
            </div>

            <p className="font-serif text-lg sm:text-xl leading-[1.6] text-[var(--text-secondary)] max-w-[52ch]">
              {t.home.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/resume" variant="primary">
                {t.home.viewResume}
              </Button>
              <Button href="/projects" variant="secondary">
                {t.home.exploreProjects}
              </Button>
              <div className="flex items-center gap-5 pl-1 sm:pl-3 font-mono text-xs uppercase tracking-wider">
                <a
                  href="https://github.com/RedoRojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] hover:text-[var(--accent)] link-underline py-2"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/rojasredo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] hover:text-[var(--accent)] link-underline py-2"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ConstructivistComposition />
          </div>
        </div>
      </section>

      {/* 01 // PERFIL Y TRAYECTORIA: Banda monolítica oscura */}
      <AnimatedSection
        id="trajectory"
        className="band-ink border-t-[6px] border-[var(--band-accent)] py-20 md:py-28"
      >
        <div className="site-wrap space-y-12">
          <div className="border-b border-[var(--band-border)] pb-6 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--band-accent)] block">
              {t.home.trajectory.eyebrow}
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl tracking-tight text-[var(--band-ink)]">
              {t.home.trajectory.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Credenciales Fácticas */}
            <aside className="lg:col-span-4 space-y-5">
              <span className="inline-block bg-[var(--band-accent)] text-[#121110] px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider">
                {t.home.trajectory.coordinatesTitle}
              </span>

              <dl className="divide-y divide-[var(--band-border)] border-t-2 border-b-2 border-[var(--band-ink)]">
                {t.home.trajectory.coordinates.map((coord) => (
                  <div key={coord.label} className="py-3.5 space-y-1">
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--band-muted)]">
                      {coord.label}
                    </dt>
                    <dd className="font-serif font-medium text-base text-[var(--band-ink)]">
                      {coord.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>

            {/* Hitos Técnicos */}
            <div className="lg:col-span-8">
              <ol
                role="list"
                className="divide-y divide-[var(--band-border)] border-t-2 border-b-2 border-[var(--band-ink)]"
              >
                {t.home.trajectory.milestones.map((item) => (
                  <li
                    key={item.index}
                    className="py-7 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start"
                  >
                    <span className="sm:col-span-2 font-serif font-bold text-4xl sm:text-5xl leading-none text-[var(--band-accent)] tabular-nums">
                      {item.index}
                    </span>

                    <div className="sm:col-span-10 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="font-serif font-semibold text-xl sm:text-2xl text-[var(--band-ink)]">
                          {item.role}
                        </h3>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-wider text-[var(--band-accent)]">
                        {item.org}{" "}
                        <span className="text-[var(--band-muted)]">
                          {"·"} {item.period}
                        </span>
                      </p>
                      <p className="font-serif text-base text-[var(--band-muted)] leading-relaxed max-w-[58ch] pt-1">
                        {item.summary}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 02 // PROYECTOS DESTACADOS: Estructura brutalista abierta */}
      <AnimatedSection className="site-wrap py-20 md:py-28 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[var(--border-strong)] pb-5">
          <div className="space-y-1.5">
            <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-widest uppercase block">
              {t.home.featuredProjects.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.home.featuredProjects.title}
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-wider link-underline self-start sm:self-auto"
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
            className="divide-y-2 divide-[var(--border-strong)] border-b-2 border-[var(--border-strong)]"
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
                  className="py-9 md:py-11 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start"
                >
                  <div className="md:col-span-2 border-l-4 border-[var(--accent)] pl-4 space-y-1">
                    <span className="font-serif font-bold text-4xl leading-none text-[var(--text-primary)] tabular-nums block">
                      {String(idx + 1).padStart(2, "0")}
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
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                      <Link
                        href={`/projects/${project.slug || project.id}`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        {displayTitle}
                      </Link>
                    </h3>
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
                      {t.home.featuredProjects.inspect}
                    </Link>
                    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-wider">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-1"
                        >
                          {t.home.featuredProjects.github}
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent)] hover:underline transition-colors py-1"
                        >
                          {t.home.featuredProjects.liveDemo}
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </AnimatedSection>

      {/* 03 // STACK TÉCNICO: Tríada Constructivista sobre hormigón */}
      <AnimatedSection className="bg-[var(--bg-secondary)] border-t-2 border-[var(--border-strong)] py-20 md:py-24">
        <div className="site-wrap space-y-12">
          <div className="border-b-2 border-[var(--border-strong)] pb-5 space-y-1.5">
            <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-widest uppercase block">
              {t.home.stack.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.home.stack.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {t.home.stack.pillars.map((pillar, idx) => {
              const headerStyles =
                idx === 0
                  ? "bg-[var(--accent)] text-[var(--on-accent)]"
                  : idx === 1
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                  : "bg-[var(--bg-primary)] text-[var(--text-primary)] border-2 border-[var(--text-primary)]";

              return (
                <div key={pillar.code} className="space-y-5">
                  <div className={`px-4 py-3.5 space-y-1 ${headerStyles}`}>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest opacity-85 block">
                      {pillar.code}
                    </span>
                    <h3 className="font-serif font-bold text-xl leading-snug">
                      {pillar.title}
                    </h3>
                  </div>

                  <ul role="list" className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)]">
                    {pillar.items.map((tech) => (
                      <li
                        key={tech}
                        className="py-2.5 font-mono text-xs sm:text-[13px] text-[var(--text-primary)] flex items-center gap-2.5"
                      >
                        <span
                          aria-hidden="true"
                          className="w-1.5 h-1.5 bg-[var(--accent)] inline-block shrink-0"
                        />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* 04 // ARTÍCULOS RECIENTES (Se muestra cuando existen posts publicados) */}
      {recentPosts.length > 0 && (
        <AnimatedSection className="border-t-2 border-[var(--border-strong)] py-20 md:py-24">
          <div className="site-wrap space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[var(--border-strong)] pb-5">
              <div className="space-y-1.5">
                <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-widest uppercase block">
                  {t.home.recentArticles.eyebrow}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  {t.home.recentArticles.title}
                </h2>
              </div>
              <Link
                href="/blog"
                className="font-mono text-xs uppercase tracking-wider link-underline self-start sm:self-auto"
              >
                {t.home.recentArticles.viewAll}
              </Link>
            </div>

            <ul
              role="list"
              className="divide-y divide-[var(--border-control)] border-b-2 border-[var(--border-strong)]"
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
                      <span className="md:col-span-2 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                        {formattedDate}
                      </span>
                      <div className="md:col-span-8 space-y-1">
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {postTitle}
                        </h3>
                        <p className="font-serif text-base text-[var(--text-secondary)] line-clamp-2 max-w-[56ch]">
                          {postSummary}
                        </p>
                      </div>
                      <span className="md:col-span-2 md:text-right font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                        {t.home.recentArticles.read}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}

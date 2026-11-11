"use client";

import Link from "next/link";
import { Project } from "@prisma/client";
import type { RecentPostItem } from "@/app/page";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import ConstructivistPlate from "@/components/ConstructivistPlate";
import EditorialMarginaliaBand from "@/components/EditorialMarginaliaBand";
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

  const skillColumns = [
    {
      title: t.home.annex.skills.frontendCategory,
      items: t.home.annex.skills.frontendItems,
    },
    {
      title: t.home.annex.skills.backendCategory,
      items: t.home.annex.skills.backendItems,
    },
    {
      title: t.home.annex.skills.qaCategory,
      items: t.home.annex.skills.qaItems,
    },
  ];

  return (
    <div className="w-full">
      {/* BAND 1: MONUMENTAL HERO PROSPECTUS (Permanent Dark Monolith) */}
      <section className="band-monolith drafting-grid border-b-2 border-[var(--band-border)]">
        {/* Top Archival Ledger Strip */}
        <div className="border-b border-[var(--band-border)]">
          <div className="site-wrap py-2.5 flex flex-wrap justify-between items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[var(--band-muted)]">
            <span>{t.home.ledgerStrip}</span>
            <span className="text-[var(--band-accent)] font-bold">
              {t.home.location}
            </span>
          </div>
        </div>

        <div className="site-wrap py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Hero Left: Literary Display Typography */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-3">
                <span className="bg-[var(--band-accent)] text-[#151312] font-mono text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1.5">
                  {t.home.roleBadge}
                </span>
                <span aria-hidden="true" className="h-[2px] w-10 bg-[var(--band-border-strong)] inline-block" />
              </div>

              <h1 className="space-y-1 text-[clamp(2.75rem,1.4rem+4.2vw,5.4rem)] leading-[0.94] tracking-tight text-[var(--band-ink)]">
                <span className="font-display font-bold uppercase block">
                  {t.home.heroTitleFirst}
                </span>
                <span className="font-serif italic font-normal text-[var(--band-accent)] block">
                  {t.home.heroTitleLast}
                </span>
              </h1>

              <div className="flex items-stretch gap-4">
                <span aria-hidden="true" className="w-1.5 bg-[var(--band-accent)] shrink-0" />
                <p className="font-serif text-lg sm:text-xl text-[var(--band-muted)] max-w-[54ch] leading-[1.6]">
                  {t.home.heroDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button href="/resume" variant="monolith-primary">
                  {t.home.viewResume}
                </Button>
                <Button href="/projects" variant="monolith-secondary">
                  {t.home.exploreProjects}
                </Button>
              </div>
            </div>

            {/* Hero Right: Constructivist SVG Plate */}
            <div className="lg:col-span-5">
              <ConstructivistPlate />
            </div>
          </div>
        </div>
      </section>

      {/* BAND 2: I. PROLOGUE & LITERARY EPIGRAPH (Archival Rag Paper) */}
      <AnimatedSection
        id="prologue"
        className="band-paper paper-grid border-b border-[var(--border-subtle)] py-16 md:py-24"
      >
        <div className="site-wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Section Index & Specification Colophon */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2 border-b-2 border-[var(--border-strong)] pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)] block">
                {t.home.prologue.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)] leading-none">
                {t.home.prologue.title}
              </h2>
            </div>

            <div className="border border-[var(--border-strong)] bg-[var(--bg-card)]">
              <div className="px-4 py-2.5 border-b border-[var(--border-strong)] bg-[var(--bg-secondary)] font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-primary)]">
                {t.home.prologue.specHeading}
              </div>
              <dl className="divide-y divide-[var(--border-subtle)] text-sm">
                {t.home.prologue.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="px-4 py-3 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-3"
                  >
                    <dt className="sm:col-span-4 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                      {spec.label}
                    </dt>
                    <dd className="sm:col-span-8 font-serif font-medium text-[var(--text-primary)]">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right Column: Literary Narrative + Epigraph */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 font-serif text-lg sm:text-[1.15rem] leading-[1.72] text-[var(--text-secondary)] max-w-[60ch]">
              {t.home.prologue.paragraphs.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "drop-cap text-[var(--text-primary)]" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Classical Russian Epigraph Plate */}
            <figure className="border-2 border-[var(--border-strong)] bg-[var(--bg-card)] p-6 sm:p-8 relative">
              <div aria-hidden="true" className="h-1.5 w-24 bg-[var(--accent)] mb-5" />
              <blockquote className="space-y-2">
                <p className="font-serif italic text-2xl sm:text-3xl text-[var(--text-primary)] leading-snug">
                  {t.home.prologue.epigraphQuote}
                </p>
                <p
                  lang="ru"
                  className="font-serif text-base sm:text-lg text-[var(--accent)] tracking-wide"
                >
                  {t.home.prologue.epigraphCyrillic}
                </p>
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-[var(--border-subtle)] font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                — {t.home.prologue.epigraphAuthor}
              </figcaption>
            </figure>
          </div>
        </div>
      </AnimatedSection>

      {/* BAND 3: II. TECHNICAL ANNEX — CONSTRAINTS & STACK (Aged Linen) */}
      <AnimatedSection
        id="annex"
        className="band-linen border-b border-[var(--border-subtle)] py-16 md:py-24"
      >
        <div className="site-wrap space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[var(--border-strong)] pb-5">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)] block">
                {t.home.annex.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)] leading-none">
                {t.home.annex.title}
              </h2>
            </div>
            <p className="font-serif text-base text-[var(--text-secondary)] max-w-[44ch]">
              {t.home.annex.subtitle}
            </p>
          </div>

          {/* Part A: Engineering Axioms Grid */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {t.home.annex.axiomsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-[var(--border-strong)] bg-[var(--bg-card)]">
              {t.home.annex.axioms.map((axiom, idx) => (
                <div
                  key={axiom.formula}
                  className={`p-6 space-y-2 border-[var(--border-subtle)] ${
                    idx % 2 === 0 ? "md:border-r" : ""
                  } ${idx < 2 ? "border-b" : idx === 2 ? "border-b md:border-b-0" : ""}`}
                >
                  <p className="font-mono text-lg sm:text-xl font-bold text-[var(--accent)] tracking-tight">
                    {axiom.formula}
                  </p>
                  <p className="font-serif text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {axiom.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Part B: Three-Column Technical Inventory */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {t.home.annex.categoriesTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-[var(--border-strong)] bg-[var(--bg-card)] divide-y md:divide-y-0 md:divide-x divide-[var(--border-strong)]">
              {skillColumns.map((group) => (
                <div key={group.title} className="p-6 space-y-4">
                  <h4 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2.5">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* BAND 4: III. INTERACTIVE MARGINALIA & RUSSIAN LITERATURE CANON (Dark Monolith) */}
      <EditorialMarginaliaBand />

      {/* BAND 5: IV. FEATURED WORKS & V. RECENT ESSAYS (Archival Paper) */}
      <AnimatedSection className="band-paper paper-grid py-16 md:py-24">
        <div className="site-wrap space-y-20">
          {/* IV. Published Works */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[var(--border-strong)] pb-5">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)] block">
                  {t.home.featuredProjects.eyebrow}
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)] leading-none">
                  {t.home.featuredProjects.title}
                </h2>
              </div>
              <Link
                href="/projects"
                className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)] font-bold link-underline self-start sm:self-auto"
              >
                {t.home.featuredProjects.viewAll}
              </Link>
            </div>

            {featuredProjects.length === 0 ? (
              <div className="p-12 text-center border-2 border-dashed border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <p className="font-serif italic text-[var(--text-muted)]">
                  {t.home.featuredProjects.empty}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-[var(--border-strong)] bg-[var(--bg-card)] divide-y md:divide-y-0 md:divide-x divide-[var(--border-strong)]">
                {featuredProjects.map((project, index) => {
                  const displayTitle =
                    language === "es" && project.titleEs
                      ? project.titleEs
                      : project.title;
                  const displayDescription =
                    language === "es" && project.descriptionEs
                      ? project.descriptionEs
                      : project.description;
                  const plateNum = String(index + 1).padStart(2, "0");

                  return (
                    <article
                      key={project.id}
                      className="p-6 sm:p-7 flex flex-col justify-between gap-6 hover:bg-[var(--bg-secondary)]/55 transition-colors"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5 font-mono text-[11px] uppercase tracking-[0.14em]">
                          <span className="font-bold text-[var(--accent)]">
                            {t.home.featuredProjects.platePrefix} {plateNum}
                          </span>
                          <span className="text-[var(--text-muted)]">
                            {project.status === "COMPLETED" ? "FIN" : "WIP"}
                          </span>
                        </div>

                        <h3 className="font-serif font-bold text-xl leading-snug text-[var(--text-primary)]">
                          <Link
                            href={`/projects/${project.slug || project.id}`}
                            className="hover:text-[var(--accent)] transition-colors"
                          >
                            {displayTitle}
                          </Link>
                        </h3>

                        <p className="text-sm font-serif text-[var(--text-secondary)] leading-relaxed line-clamp-4">
                          {displayDescription}
                        </p>

                        {project.techStack && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.techStack
                              .split(",")
                              .slice(0, 4)
                              .map((tech) => (
                                <Tag key={tech.trim()}>{tech.trim()}</Tag>
                              ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                        <Link
                          href={`/projects/${project.slug || project.id}`}
                          className="text-[var(--text-primary)] font-bold hover:text-[var(--accent)] transition-colors"
                        >
                          {t.home.featuredProjects.inspectPlate}
                        </Link>
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] hover:underline"
                          >
                            {t.home.featuredProjects.github}
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          {/* V. Technical Essays Table of Contents */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[var(--border-strong)] pb-5">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)] block">
                  {t.home.recentEssays.eyebrow}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)] leading-none">
                  {t.home.recentEssays.title}
                </h2>
                <p className="font-serif text-sm sm:text-base text-[var(--text-secondary)] max-w-[54ch]">
                  {t.home.recentEssays.subtitle}
                </p>
              </div>
              <Link
                href="/blog"
                className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)] font-bold link-underline self-start sm:self-auto"
              >
                {t.home.recentEssays.viewAll}
              </Link>
            </div>

            {recentPosts.length === 0 ? (
              <div className="p-10 text-center border border-dashed border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <p className="font-serif italic text-[var(--text-muted)]">
                  {t.home.recentEssays.empty}
                </p>
              </div>
            ) : (
              <ul className="border-t border-b border-[var(--border-strong)] divide-y divide-[var(--border-subtle)] bg-[var(--bg-card)]">
                {recentPosts.map((post, idx) => {
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
                        className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 px-5 py-5 hover:bg-[var(--bg-secondary)] transition-colors items-baseline"
                      >
                        <span className="md:col-span-2 font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                          <span className="text-[var(--accent)] font-bold mr-2">
                            §{String(idx + 1).padStart(2, "0")}
                          </span>
                          {formattedDate}
                        </span>
                        <div className="md:col-span-8 space-y-1">
                          <h3 className="font-serif font-bold text-lg sm:text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                            {postTitle}
                          </h3>
                          <p className="font-serif text-sm text-[var(--text-secondary)] line-clamp-2 max-w-[60ch]">
                            {postSummary}
                          </p>
                        </div>
                        <span className="md:col-span-2 md:text-right font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
                          {t.home.recentEssays.readEntry}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

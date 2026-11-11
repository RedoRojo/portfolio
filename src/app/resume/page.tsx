"use client";

import React from "react";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function ResumePage() {
  const { t } = useLanguage();

  function handlePrint() {
    window.print();
  }

  return (
    <div className="w-full">
      {/* Monolith Dossier Header & Print/PDF Controls */}
      <section className="band-monolith drafting-grid border-b-2 border-[var(--band-border)] py-12 md:py-16 print:hidden">
        <div className="site-wrap flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--band-accent)] inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--band-accent)]">
                {t.resume.pageEyebrow}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[var(--band-ink)] leading-[0.95]">
              {t.resume.pageTitle}
            </h1>
            <p className="font-serif text-base sm:text-lg text-[var(--band-muted)] max-w-[54ch]">
              {t.resume.pageSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="/CV_Cristhian_Rojas.pdf"
              download="CV_Cristhian_Rojas.pdf"
              className="btn-monolith-primary text-xs uppercase tracking-[0.12em]"
            >
              {t.resume.downloadPdfButton}
            </a>
            <Button onClick={handlePrint} variant="monolith-secondary">
              {t.resume.printButton}
            </Button>
          </div>
        </div>
      </section>

      {/* Formal Archival Paper Dossier */}
      <AnimatedSection
        immediate
        className="band-paper paper-grid py-12 md:py-16 print:bg-white print:py-0"
      >
        <div className="site-wrap max-w-4xl print:max-w-none print:px-0">
          <article className="bg-[var(--bg-card)] border-2 border-[var(--border-strong)] p-7 sm:p-14 space-y-10 print:bg-white print:border-none print:p-0">
            {/* Document Masthead */}
            <header className="border-b-2 border-[var(--border-strong)] pb-8 space-y-4">
              <div className="flex flex-wrap justify-between items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)] print:hidden">
                <span className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-2.5 py-1 font-bold">
                  {t.resume.cvBadge}
                </span>
                <span>{t.resume.pdfReady}</span>
              </div>

              <div className="text-center space-y-3 pt-2">
                <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)] print:text-black leading-none">
                  {t.resume.name}
                </h2>
                <p className="font-serif italic text-base sm:text-lg font-medium text-[var(--accent)] print:text-black">
                  {t.resume.roleTitle}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 font-mono text-xs text-[var(--text-secondary)] pt-1">
                  <span>{t.resume.contactLocation}</span>
                  <span aria-hidden="true" className="text-[var(--border-subtle)]">/</span>
                  <a
                    href="tel:+59168301052"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {t.resume.contactPhone}
                  </a>
                  <span aria-hidden="true" className="text-[var(--border-subtle)]">/</span>
                  <a
                    href={`mailto:${t.resume.contactEmail}`}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {t.resume.contactEmail}
                  </a>
                  <span aria-hidden="true" className="text-[var(--border-subtle)]">/</span>
                  <a
                    href="https://linkedin.com/in/rojasredo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {t.resume.contactLinkedin}
                  </a>
                  <span aria-hidden="true" className="text-[var(--border-subtle)]">/</span>
                  <a
                    href="https://github.com/RedoRojo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {t.resume.contactGithub}
                  </a>
                </div>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="space-y-3">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.1em] border-b-2 border-[var(--border-strong)] pb-2 text-[var(--text-primary)] flex items-center gap-2.5">
                <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--accent)] inline-block print:bg-black" />
                {t.resume.summaryTitle}
              </h3>
              <p className="font-serif text-base sm:text-[1.0625rem] leading-[1.7] text-[var(--text-secondary)]">
                {t.resume.summaryText}
              </p>
            </section>

            {/* Technical Skills Matrix */}
            <section className="space-y-4">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.1em] border-b-2 border-[var(--border-strong)] pb-2 text-[var(--text-primary)] flex items-center gap-2.5">
                <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--accent)] inline-block print:bg-black" />
                {t.resume.skillsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.resume.skillsCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className={`space-y-1.5 border-l-4 ${
                      cat.accent ? "border-[var(--accent)]" : "border-[var(--border-subtle)]"
                    } pl-4`}
                  >
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] block">
                      {cat.label}
                    </span>
                    <p className="font-serif text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                      {cat.items}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Experience */}
            <section className="space-y-5">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.1em] border-b-2 border-[var(--border-strong)] pb-2 text-[var(--text-primary)] flex items-center gap-2.5">
                <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--accent)] inline-block print:bg-black" />
                {t.resume.experienceTitle}
              </h3>

              <div className="space-y-7">
                {t.resume.experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`border-l-4 ${
                      idx === 0 ? "border-[var(--accent)]" : "border-[var(--border-subtle)]"
                    } pl-5 space-y-3`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                          {exp.role}
                        </h4>
                        <p className="text-[var(--accent)] font-mono text-xs sm:text-sm font-semibold">
                          {exp.company}{" "}
                          <span className="text-[var(--text-muted)] font-normal">
                            &bull; {exp.location}
                          </span>
                        </p>
                      </div>
                      <span className="px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-xs font-mono font-semibold shrink-0">
                        {exp.dates}
                      </span>
                    </div>
                    <ul className="list-[square] pl-5 font-serif text-sm sm:text-base text-[var(--text-secondary)] space-y-1.5 leading-relaxed">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Technical Projects */}
            <section className="space-y-5">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.1em] border-b-2 border-[var(--border-strong)] pb-2 text-[var(--text-primary)] flex items-center gap-2.5">
                <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--accent)] inline-block print:bg-black" />
                {t.resume.projectsTitle}
              </h3>
              <div className="space-y-5">
                {t.resume.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="border border-[var(--border-strong)] p-5 sm:p-6 bg-[var(--bg-secondary)]/45 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-lg text-[var(--text-primary)]">
                          {proj.title}
                        </h4>
                        <p className="font-mono text-xs text-[var(--text-muted)] mt-0.5">
                          {proj.tech}
                        </p>
                      </div>
                      {proj.repoUrl && (
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs font-bold text-[var(--accent)] hover:underline shrink-0"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>
                    <ul className="list-[square] pl-5 font-serif text-sm sm:text-base text-[var(--text-secondary)] space-y-1.5 leading-relaxed">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="space-y-4">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.1em] border-b-2 border-[var(--border-strong)] pb-2 text-[var(--text-primary)] flex items-center gap-2.5">
                <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--accent)] inline-block print:bg-black" />
                {t.resume.educationTitle}
              </h3>
              <div className="border-l-4 border-[var(--accent)] pl-5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[var(--text-primary)]">
                      {t.resume.educationDegree}
                    </h4>
                    <p className="text-[var(--text-muted)] font-mono text-xs sm:text-sm mt-1">
                      {t.resume.educationUniversity}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 border border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs font-mono font-semibold bg-[var(--bg-secondary)] shrink-0">
                    {t.resume.educationDates}
                  </span>
                </div>
              </div>
            </section>

            {/* Achievements & Leadership */}
            <section className="space-y-4">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.1em] border-b-2 border-[var(--border-strong)] pb-2 text-[var(--text-primary)] flex items-center gap-2.5">
                <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--accent)] inline-block print:bg-black" />
                {t.resume.achievementsTitle}
              </h3>
              <div className="space-y-4">
                {t.resume.achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[var(--border-subtle)] pl-5 space-y-1"
                  >
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[var(--text-primary)]">
                      {item.title}
                    </h4>
                    <p className="font-serif text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </AnimatedSection>
    </div>
  );
}

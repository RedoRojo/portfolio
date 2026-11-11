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
    <div className="site-wrap py-12 md:py-20 space-y-12 max-w-4xl print:max-w-none print:px-0 print:py-0">
      {/* Barra superior brutalista */}
      <AnimatedSection
        immediate
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-[var(--border-strong)] pb-6 print:hidden"
      >
        <div className="space-y-1">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--accent)] tracking-widest uppercase">
            <span
              aria-hidden="true"
              className="w-2.5 h-2.5 bg-[var(--accent)] inline-block"
            />
            {t.resume.pageEyebrow}
          </span>
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
            {t.resume.cvBadge} {"/"} {t.resume.pdfReady}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/CV_Cristhian_Rojas.pdf"
            download="CV_Cristhian_Rojas.pdf"
            className="btn-primary font-mono text-xs uppercase tracking-wider"
          >
            {t.resume.downloadPdfButton}
          </a>
          <Button onClick={handlePrint} variant="secondary">
            {t.resume.printButton}
          </Button>
        </div>
      </AnimatedSection>

      {/* Expediente ATS formal */}
      <article className="space-y-12 print:space-y-8">
        <header className="border-b-2 border-[var(--border-strong)] pb-8 space-y-3">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] print:text-black">
            {t.resume.name}
          </h1>
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--accent)] print:text-black">
            {t.resume.roleTitle}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-[var(--text-secondary)] pt-1">
            <span>{t.resume.contactLocation}</span>
            <span aria-hidden="true" className="text-[var(--border-control)]">
              &middot;
            </span>
            <a
              href="tel:+59168301052"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {t.resume.contactPhone}
            </a>
            <span aria-hidden="true" className="text-[var(--border-control)]">
              &middot;
            </span>
            <a
              href={`mailto:${t.resume.contactEmail}`}
              className="hover:text-[var(--accent)] transition-colors"
            >
              {t.resume.contactEmail}
            </a>
            <span aria-hidden="true" className="text-[var(--border-control)]">
              &middot;
            </span>
            <a
              href="https://linkedin.com/in/rojasredo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {t.resume.contactLinkedin}
            </a>
            <span aria-hidden="true" className="text-[var(--border-control)]">
              &middot;
            </span>
            <a
              href="https://github.com/RedoRojo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {t.resume.contactGithub}
            </a>
          </div>
        </header>

        {/* Resumen Profesional */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
            {t.resume.summaryTitle}
          </h2>
          <p className="font-serif text-base sm:text-lg leading-[1.75] text-[var(--text-secondary)] max-w-[64ch]">
            {t.resume.summaryText}
          </p>
        </section>

        {/* Habilidades Técnicas */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
            {t.resume.skillsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t-2 border-[var(--border-strong)] pt-5">
            {t.resume.skillsCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`space-y-1.5 border-l-4 ${
                  cat.accent
                    ? "border-[var(--accent)]"
                    : "border-[var(--text-primary)]"
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

        {/* Experiencia Técnica */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
            {t.resume.experienceTitle}
          </h2>

          <div className="divide-y divide-[var(--border-control)] border-t-2 border-b-2 border-[var(--border-strong)]">
            {t.resume.experiences.map((exp, idx) => (
              <div key={idx} className="py-6 space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs font-semibold text-[var(--accent)] mt-0.5">
                      {exp.company}{" "}
                      <span className="text-[var(--text-muted)] font-normal">
                        &middot; {exp.location}
                      </span>
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                    {exp.dates}
                  </span>
                </div>
                <ul className="list-[square] pl-5 font-serif text-sm sm:text-base text-[var(--text-secondary)] space-y-1.5 leading-relaxed max-w-[64ch]">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos Técnicos */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
            {t.resume.projectsTitle}
          </h2>
          <div className="divide-y divide-[var(--border-control)] border-t-2 border-b-2 border-[var(--border-strong)]">
            {t.resume.projects.map((proj, idx) => (
              <div key={idx} className="py-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[var(--text-primary)]">
                      {proj.title}
                    </h3>
                    <p className="font-mono text-xs text-[var(--text-muted)] mt-0.5">
                      {proj.tech}
                    </p>
                  </div>
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent)] hover:underline shrink-0"
                    >
                      GitHub &rarr;
                    </a>
                  )}
                </div>
                <ul className="list-[square] pl-5 font-serif text-sm sm:text-base text-[var(--text-secondary)] space-y-1.5 leading-relaxed max-w-[64ch]">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Educación */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
            {t.resume.educationTitle}
          </h2>
          <div className="border-l-4 border-[var(--accent)] pl-5 py-1 flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
            <div>
              <h3 className="font-serif font-bold text-lg text-[var(--text-primary)]">
                {t.resume.educationDegree}
              </h3>
              <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                {t.resume.educationUniversity}
              </p>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
              {t.resume.educationDates}
            </span>
          </div>
        </section>

        {/* Logros y Liderazgo */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
            {t.resume.achievementsTitle}
          </h2>
          <div className="divide-y divide-[var(--border-control)] border-t-2 border-b-2 border-[var(--border-strong)]">
            {t.resume.achievements.map((item, idx) => (
              <div key={idx} className="py-4 space-y-1">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="font-serif text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-[64ch]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

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
    <div className="space-y-12 max-w-4xl mx-auto print:max-w-none print:px-0">
      {/* Print Action & Quick Info Header */}
      <AnimatedSection
        immediate
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-sm print:hidden bg-[var(--bg-card)] p-5 rounded-2xl border border-[var(--border-subtle)] shadow-sm"
      >
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-xs font-mono font-medium rounded-md">
            {t.resume.cvBadge}
          </span>
          <span className="text-[var(--text-muted)] text-xs">• {t.resume.pdfReady}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/CV_Cristhian_Rojas.pdf"
            download="CV_Cristhian_Rojas.pdf"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-sans font-medium rounded-xl transition-all duration-200 bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-xs"
          >
            {t.resume.downloadPdfButton}
          </a>
          <Button onClick={handlePrint} variant="secondary">
            {t.resume.printButton}
          </Button>
        </div>
      </AnimatedSection>

      {/* Resume Document Paper Card */}
      <article className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-8 sm:p-14 space-y-10 shadow-sm print:bg-white print:border-none print:shadow-none print:p-0">
        {/* Header */}
        <AnimatedSection
          immediate
          className="text-center space-y-4 border-b border-[var(--border-subtle)] pb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-[var(--text-primary)] print:text-black">
            {t.resume.name}
          </h1>
          <p className="font-sans text-sm font-semibold text-[var(--accent)] tracking-wider uppercase">
            {t.resume.roleTitle}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 font-mono text-xs sm:text-sm text-[var(--text-secondary)]">
            <span>{t.resume.contactLocation}</span>
            <span className="text-[var(--border-subtle)]">&bull;</span>
            <a
              href="tel:+59168301052"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {t.resume.contactPhone}
            </a>
            <span className="text-[var(--border-subtle)]">&bull;</span>
            <a
              href={`mailto:${t.resume.contactEmail}`}
              className="hover:text-[var(--accent)] transition-colors"
            >
              {t.resume.contactEmail}
            </a>
            <span className="text-[var(--border-subtle)]">&bull;</span>
            <a
              href="https://linkedin.com/in/rojasredo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {t.resume.contactLinkedin}
            </a>
            <span className="text-[var(--border-subtle)]">&bull;</span>
            <a
              href="https://github.com/RedoRojo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {t.resume.contactGithub}
            </a>
          </div>
        </AnimatedSection>

        {/* Professional Summary */}
        <AnimatedSection delay={0.3} className="space-y-4">
          <h2 className="text-base font-sans font-bold border-b border-[var(--border-subtle)] pb-2 uppercase text-[var(--text-primary)] tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            {t.resume.summaryTitle}
          </h2>
          <p className="text-base font-sans leading-relaxed text-[var(--text-secondary)]">
            {t.resume.summaryText}
          </p>
        </AnimatedSection>

        {/* Technical Skills Matrix */}
        <AnimatedSection delay={0.4} className="space-y-4">
          <h2 className="text-base font-sans font-bold border-b border-[var(--border-subtle)] pb-2 uppercase text-[var(--text-primary)] tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            {t.resume.skillsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-sm">
            {t.resume.skillsCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`space-y-2 border-l-2 ${
                  cat.accent ? "border-[var(--accent)]" : "border-[var(--border-subtle)]"
                } pl-4`}
              >
                <span className="font-bold font-sans text-[var(--text-primary)] block">
                  {cat.label}
                </span>
                <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                  {cat.items}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Technical Experience Timeline */}
        <AnimatedSection delay={0.5} className="space-y-6">
          <h2 className="text-base font-sans font-bold border-b border-[var(--border-subtle)] pb-2 uppercase text-[var(--text-primary)] tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            {t.resume.experienceTitle}
          </h2>

          <div className="space-y-8">
            {t.resume.experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`border-l-2 ${
                  idx === 0 ? "border-[var(--accent)]" : "border-[var(--border-subtle)]"
                } pl-5 space-y-3`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h3 className="font-bold font-sans text-lg text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="text-[var(--accent)] font-mono text-sm font-medium">
                      {exp.company}{" "}
                      <span className="text-[var(--text-muted)] font-normal">
                        • {exp.location}
                      </span>
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-xs font-mono font-medium rounded-md shrink-0">
                    {exp.dates}
                  </span>
                </div>
                <ul className="list-disc pl-5 font-sans text-sm sm:text-base text-[var(--text-secondary)] space-y-2 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Key Technical Projects */}
        <AnimatedSection delay={0.6} className="space-y-4">
          <h2 className="text-base font-sans font-bold border-b border-[var(--border-subtle)] pb-2 uppercase text-[var(--text-primary)] tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            {t.resume.projectsTitle}
          </h2>
          <div className="space-y-6">
            {t.resume.projects.map((proj, idx) => (
              <div
                key={idx}
                className="border border-[var(--border-subtle)] p-6 rounded-xl bg-[var(--bg-secondary)]/40 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-bold font-sans text-lg text-[var(--text-primary)] flex items-center gap-2">
                      <span className="text-[var(--accent)]">&bull;</span> {proj.title}
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
                      className="font-mono text-xs text-[var(--accent)] hover:underline shrink-0"
                    >
                      GitHub Repository →
                    </a>
                  )}
                </div>
                <ul className="list-disc pl-5 font-sans text-sm text-[var(--text-secondary)] space-y-1.5 leading-relaxed">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.7} className="space-y-4">
          <h2 className="text-base font-sans font-bold border-b border-[var(--border-subtle)] pb-2 uppercase text-[var(--text-primary)] tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            {t.resume.educationTitle}
          </h2>
          <div className="border-l-2 border-[var(--accent)] pl-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="font-bold font-sans text-lg text-[var(--text-primary)]">
                  {t.resume.educationDegree}
                </h3>
                <p className="text-[var(--text-muted)] font-mono text-sm mt-1">
                  {t.resume.educationUniversity}
                </p>
              </div>
              <span className="px-3 py-1 border border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs font-mono font-medium rounded-md bg-[var(--bg-secondary)] shrink-0">
                {t.resume.educationDates}
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Achievements & Leadership */}
        <AnimatedSection delay={0.8} className="space-y-4">
          <h2 className="text-base font-sans font-bold border-b border-[var(--border-subtle)] pb-2 uppercase text-[var(--text-primary)] tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            {t.resume.achievementsTitle}
          </h2>
          <div className="space-y-4">
            {t.resume.achievements.map((item, idx) => (
              <div
                key={idx}
                className="border-l-2 border-[var(--border-subtle)] pl-5 space-y-1"
              >
                <h3 className="font-bold font-sans text-base text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </article>
    </div>
  );
}

import "dotenv/config";
import prisma from "../src/lib/db";

async function main() {
  console.log("Seeding database with bilingual portfolio data aligned with CV...");

  // Clear existing data
  await prisma.project.deleteMany({});
  await prisma.post.deleteMany({});

  // Seed Projects aligned with CV_Cristhian_Rojas.tex & GitHub (@RedoRojo)
  const projects = [
    {
      title: "Librerías Bolivia — Book Price Aggregator & API",
      titleEs: "Librerías Bolivia — Agregador de Precios de Libros y API",
      slug: "librerias-bolivia",
      description:
        "Full-stack web platform and RESTful API consolidating real-time book pricing and availability across 14 Bolivian bookstores and publishers with 4-level cascade deduplication and PostgreSQL fuzzy search.",
      descriptionEs:
        "Plataforma web full-stack y API RESTful que consolida precios y disponibilidad de libros en tiempo real de 14 librerías y editoriales de Bolivia, con deduplicación en cascada de 4 niveles y búsqueda difusa en PostgreSQL.",
      content: `# Librerías Bolivia — Book Price Aggregator & API

A full-stack web platform and **RESTful API** consolidating real-time book pricing and availability across **14 Bolivian bookstores and publishers**.

## System Architecture

- **Automated Data Ingestion**: Modular adapters consuming **Shopify** and **WooCommerce REST APIs** across heterogeneous bookstore catalogs.
- **4-Level Cascade Deduplication Engine**: Normalizes ISBNs, titles, authors, and publisher names to merge duplicate editions accurately across stores.
- **Fuzzy Search in PostgreSQL**: Uses \`pg_trgm\` and \`unaccent\` extensions to handle typos, accents, and partial queries with sub-second latency.
- **Responsive Frontend**: Built with **Next.js (React, TypeScript, Tailwind CSS)**, backed by automated unit tests for API endpoints and data normalizers.
`,
      contentEs: `# Librerías Bolivia — Agregador de Precios de Libros y API

Una plataforma web full-stack y **API RESTful** que consolida precios y disponibilidad de libros en tiempo real en **14 librerías y editoriales bolivianas**.

## Arquitectura del Sistema

- **Ingesta Automatizada de Datos**: Adaptadores modulares que consumen **APIs REST de Shopify y WooCommerce** de catálogos heterogéneos.
- **Motor de Deduplicación en Cascada de 4 Niveles**: Normaliza códigos ISBN, títulos, autores y editoriales para unificar ediciones equivalentes entre distintas tiendas.
- **Búsqueda Difusa en PostgreSQL**: Aprovecha las extensiones \`pg_trgm\` y \`unaccent\` para tolerar errores tipográficos y tildes con baja latencia.
- **Frontend Responsivo**: Desarrollado con **Next.js (React, TypeScript, Tailwind CSS)** y respaldado por pruebas unitarias automatizadas para endpoints y normalizadores.
`,
      techStack: "FastAPI, Next.js, TypeScript, PostgreSQL, Python, Tailwind CSS",
      repoUrl: "https://github.com/RedoRojo/librerias-bolivia-api",
      liveUrl: null,
      featured: true,
      status: "COMPLETED",
    },
    {
      title: "Escriba — AI Spanish Linguistic Analyzer",
      titleEs: "Escriba — Analizador Lingüístico con IA para Español",
      slug: "escriba-ai",
      description:
        "AI-native web application integrating Google GenAI SDK (Gemini 2.5 Flash) via FastAPI to analyze Spanish texts and classify errors across spelling, grammar, punctuation, semantics, and style.",
      descriptionEs:
        "Aplicación web nativa de IA que integra Google GenAI SDK (Gemini 2.5 Flash) mediante FastAPI para analizar textos en español y clasificar errores de ortografía, gramática, puntuación, semántica y estilo.",
      content: `# Escriba — AI Spanish Linguistic Analyzer

An AI-native web application integrating the **Google GenAI SDK (Gemini 2.5 Flash)** via a **FastAPI** REST backend to analyze Spanish texts and provide structured linguistic feedback.

## Engineering Highlights

- **Multi-Dimensional Error Classification**: Categorizes issues across spelling, grammar, punctuation, semantics, and stylistic register.
- **Structured JSON Output Schemas**: Enforces deterministic schema validation and research-grounded system prompts (*arXiv:2511.01615*).
- **Production Safeguards**: Includes IP-based rate limiting and an interactive inline correction UI styled with Tailwind CSS.
`,
      contentEs: `# Escriba — Analizador Lingüístico con IA para Español

Una aplicación web nativa de IA que integra **Google GenAI SDK (Gemini 2.5 Flash)** mediante un backend REST en **FastAPI** para analizar textos en español y ofrecer retroalimentación lingüística estructurada.

## Aspectos Técnicos Destacados

- **Clasificación Multidimensional de Errores**: Detecta y clasifica errores de ortografía, gramática, puntuación, semántica y estilo.
- **Esquemas JSON Estructurados**: Garantiza respuestas deterministas mediante validación de esquemas y prompts de sistema basados en investigación (*arXiv:2511.01615*).
- **Protección y UX Interactiva**: Incorpora limitación de tasa por IP y una interfaz interactiva de corrección en línea con Tailwind CSS.
`,
      techStack: "Python, FastAPI, Gemini 2.5 SDK, Tailwind CSS",
      repoUrl: "https://github.com/RedoRojo/escriba",
      liveUrl: null,
      featured: true,
      status: "COMPLETED",
    },
    {
      title: "Tools Hub & Local Developer Suite",
      titleEs: "Tools Hub y Suite de Herramientas Web Locales",
      slug: "tools-hub",
      description:
        "Centralized dashboard and suite of self-hosted web utilities for PDF processing, Kindle article conversion, QR generation, and YouTube/audio transcription.",
      descriptionEs:
        "Panel centralizado y suite de utilidades web locales para procesamiento de PDFs, conversión de artículos para Kindle, generación de códigos QR y transcripción de video/audio.",
      content: `# Tools Hub & Local Developer Suite

A modular ecosystem of focused web tools orchestrated through a central dashboard:

- **Tools Hub**: Central dashboard and launcher for the personal utility suite.
- **PDF Toolbox**: Local web toolkit for merging, splitting, and optimizing PDF documents.
- **Kindle Toolbox**: Web article and PDF converter tailored for e-reader formatting.
- **Transcript**: YouTube video and local audio/video transcription utility.
- **QR Code Generator**: Instant high-contrast QR code generator.
`,
      contentEs: `# Tools Hub y Suite de Herramientas Web Locales

Un ecosistema modular de utilidades web enfocadas en productividad, integradas en un panel central:

- **Tools Hub**: Dashboard central y lanzador de aplicaciones.
- **PDF Toolbox**: Kit de herramientas web locales para manipular y optimizar documentos PDF.
- **Kindle Toolbox**: Conversor de artículos web y PDFs optimizado para lectores electrónicos.
- **Transcript**: Utilidad de transcripción para videos de YouTube y archivos de audio/video locales.
- **QR Code Generator**: Generador instantáneo de códigos QR.
`,
      techStack: "TypeScript, Next.js, Python, React, Tailwind CSS",
      repoUrl: "https://github.com/RedoRojo/tools-hub",
      liveUrl: null,
      featured: true,
      status: "COMPLETED",
    },
    {
      title: "Brutalist Stack — Bilingual Portfolio & Minimalist CMS",
      titleEs: "Brutalist Stack — Portafolio Bilingüe y CMS Minimalista",
      slug: "brutalist-stack-portfolio",
      description:
        "High-contrast brutalist developer portfolio and technical blog built with Next.js 16 App Router, PostgreSQL, Prisma ORM, and a live split-screen Markdown admin panel.",
      descriptionEs:
        "Portafolio de desarrollador y blog técnico con estética brutalista de alto contraste, construido con Next.js 16 App Router, PostgreSQL, Prisma ORM y panel de administración con vista previa en vivo.",
      content: `# Brutalist Stack — Bilingual Portfolio & Minimalist CMS

The source code powering this personal website, engineering portfolio, and technical blog.

## Key Features

- **Next.js 16 App Router**: Server Components, Server Actions, and fluid transitions.
- **PostgreSQL & Prisma ORM**: Relational persistence for bilingual projects and devlogs.
- **Split-Screen Admin Editor**: Real-time Markdown preview and instant publishing workflow.
`,
      contentEs: `# Brutalist Stack — Portafolio Bilingüe y CMS Minimalista

El código fuente que impulsa este sitio web personal, portafolio de ingeniería y blog técnico.

## Características Principales

- **Next.js 16 App Router**: Server Components, Server Actions y transiciones fluidas.
- **PostgreSQL y Prisma ORM**: Persistencia relacional para proyectos y artículos bilingües.
- **Editor Admin a Pantalla Dividida**: Vista previa en vivo de Markdown y publicación instantánea.
`,
      techStack: "Next.js 16, TypeScript, PostgreSQL, Prisma ORM, Tailwind CSS",
      repoUrl: "https://github.com/RedoRojo/brutalist-stack",
      liveUrl: "https://brutalist-stack.vercel.app",
      featured: false,
      status: "COMPLETED",
    },
  ];

  const createdProjects: Record<string, string> = {};
  for (const project of projects) {
    const created = await prisma.project.create({
      data: project,
    });
    createdProjects[project.slug] = created.id;
    console.log(`- Created project: ${created.title} (ID: ${created.id})`);
  }

  // Seed Blog Posts aligned with CV experience & projects
  const posts = [
    {
      title: "Detecting Silent Test Failures with Dynamic Code Analysis in Python",
      titleEs: "Detectando Fallos Silenciosos en Pruebas con Análisis Dinámico en Python",
      slug: "detecting-silent-test-failures-dynamic-analysis",
      summary:
        "Lessons from building runtime execution tracing tools to measure test suite effectiveness and catch assertions that fail to verify actual program behavior.",
      summaryEs:
        "Lecciones aprendidas construyendo herramientas de trazado en tiempo de ejecución para medir la efectividad de suites de pruebas y detectar aserciones débiles.",
      content: `# Detecting Silent Test Failures with Dynamic Code Analysis

High line coverage does not guarantee that a test suite actually verifies program correctness. During my research assistantship at Pontificia Universidad Católica de Chile, I focused on **dynamic code analysis** in Python to evaluate test reliability.

## What is a Silent Test Failure?

A test passes green, executes the target function, and contributes to coverage metrics—yet its assertions never inspect the mutated state or side effects that matter.

## Runtime Tracing & Metric Extraction

By hooking into Python's runtime execution trace:

1. **Execution Tracing**: Record actual state transitions and return values during test runs.
2. **Assertion Alignment**: Compare runtime behavior against what test assertions explicitly check.
3. **Automated Diagnostics**: Flag test cases with weak or mismatched assertions so developers can harden their test suites.
`,
      contentEs: `# Detectando Fallos Silenciosos en Pruebas con Análisis Dinámico

Una alta cobertura de líneas no garantiza que una suite de pruebas verifique realmente el comportamiento del software. Durante mi etapa como Asistente de Investigación en la Pontificia Universidad Católica de Chile, trabajé en **análisis dinámico de código** en Python para evaluar la confiabilidad de suites de pruebas automatizadas.

## ¿Qué es un Fallo Silencioso?

Una prueba pasa en verde, ejecuta la función objetivo y suma porcentaje de cobertura, pero sus aserciones nunca verifican el estado modificado o el resultado crítico.

## Trazado en Tiempo de Ejecución

Mediante la instrumentación y trazado de ejecución en Python:

1. **Trazado de Ejecución**: Registro de transiciones de estado y valores de retorno reales durante las pruebas.
2. **Alineación de Aserciones**: Contraste entre el comportamiento en tiempo de corrida y lo que las aserciones inspeccionan.
3. **Diagnóstico Automatizado**: Identificación de pruebas débiles para optimizar la depuración y confiabilidad del sistema.
`,
      tags: "Python, Dynamic Analysis, Software Testing, Research",
      published: true,
      projectId: null,
    },
    {
      title: "Multi-Store Book Deduplication & Fuzzy Search with PostgreSQL pg_trgm",
      titleEs: "Deduplicación de Libros y Búsqueda Difusa con PostgreSQL pg_trgm",
      slug: "multi-store-book-deduplication-pg-trgm",
      summary:
        "How Librerías Bolivia ingests heterogeneous Shopify and WooCommerce catalogs across 14 bookstores and resolves duplicate editions using a 4-level cascade engine.",
      summaryEs:
        "Cómo Librerías Bolivia ingiere catálogos heterogéneos de Shopify y WooCommerce de 14 librerías y unifica ediciones mediante un motor en cascada de 4 niveles.",
      content: `# Multi-Store Book Deduplication & Fuzzy Search

When aggregating book catalogs across **14 independent Bolivian bookstores and publishers**, inconsistent metadata is the primary engineering challenge: missing ISBNs, varying title punctuation, and localized author names.

## The 4-Level Cascade Deduplication Engine

To consolidate listings into canonical book records without false positives:

1. **Exact Normalized ISBN-13 / ISBN-10 Match**
2. **Slugified Title + Normalized Primary Author Match**
3. **Trigram Similarity Threshold with Publisher Verification**
4. **Fallback Isolated Listing with Manual Review Hooks**

## Fast Fuzzy Search in PostgreSQL

By combining \`unaccent\` and \`pg_trgm\` GIN indexes in PostgreSQL, users can search across thousands of titles in Spanish with instant tolerance for missing accents and typos.
`,
      contentEs: `# Deduplicación de Libros y Búsqueda Difusa en PostgreSQL

Al consolidar catálogos de **14 librerías y editoriales en Bolivia**, el principal reto de ingeniería es la heterogeneidad de los metadatos: registros sin ISBN, variaciones en signos de puntuación y distintos formatos de autor.

## Motor de Deduplicación en Cascada de 4 Niveles

Para unificar ofertas en un mismo libro canónico sin falsos positivos:

1. **Coincidencia Exacta de ISBN-13 / ISBN-10 Normalizado**
2. **Coincidencia de Título Normalizado + Autor Principal**
3. **Similitud por Trigramas con Verificación de Editorial**
4. **Registro Independiente con Trazabilidad de Origen**

## Búsqueda Difusa con \`pg_trgm\` y \`unaccent\`

Combinando índices GIN de \`pg_trgm\` con \`unaccent\` en PostgreSQL, las consultas toleran errores tipográficos y ausencia de tildes con tiempos de respuesta sub-segundo.
`,
      tags: "FastAPI, PostgreSQL, Next.js, Architecture",
      published: true,
      projectId: createdProjects["librerias-bolivia"],
    },
    {
      title: "Engineering Reliable Structured Outputs with Gemini 2.5 and FastAPI",
      titleEs: "Diseñando Salidas Estructuradas Confiables con Gemini 2.5 y FastAPI",
      slug: "structured-outputs-gemini-fastapi",
      summary:
        "Building Escriba: combining research-grounded system prompts and strict JSON schemas with the Google GenAI SDK for Spanish linguistic analysis.",
      summaryEs:
        "Construyendo Escriba: combinando prompts fundamentados en investigación y esquemas JSON estrictos con Google GenAI SDK para el análisis lingüístico en español.",
      content: `# Engineering Reliable Structured Outputs with Gemini 2.5

When building **Escriba**, an AI Spanish linguistic analyzer, free-form LLM text responses were insufficient—the frontend needed exact character offsets, error categories, and replacement suggestions to render inline interactive corrections.

## Key Design Decisions

- **Strict Schema Enforcement**: Leveraging the Google GenAI SDK (\`gemini-2.5-flash\`) structured output capabilities with Pydantic models in FastAPI.
- **Research-Grounded Prompting**: Incorporating linguistic taxonomy guidelines (*arXiv:2511.01615*) to separate orthographic, grammatical, semantic, and stylistic feedback.
- **Rate Limiting & Latency**: Protecting public endpoints via IP rate limiting while keeping analysis fast and deterministic.
`,
      contentEs: `# Diseñando Salidas Estructuradas Confiables con Gemini 2.5

Al desarrollar **Escriba**, un analizador lingüístico en español asistido por IA, las respuestas de texto libre no eran suficientes: la interfaz requería posiciones exactas, categorías gramaticales y sugerencias estructuradas para renderizar correcciones interactivas en línea.

## Decisiones Clave de Ingeniería

- **Esquemas Estrictos con Pydantic**: Uso de salidas estructuradas del SDK Google GenAI (\`gemini-2.5-flash\`) validadas en un backend FastAPI.
- **Prompts Basados en Investigación**: Aplicación de taxonomías lingüísticas (*arXiv:2511.01615*) para distinguir con precisión entre ortografía, gramática, puntuación, semántica y estilo.
- **Limitación de Tasa y Baja Latencia**: Protección del servicio mediante rate limiting por IP manteniendo respuestas rápidas.
`,
      tags: "AI, Gemini SDK, FastAPI, Python",
      published: true,
      projectId: createdProjects["escriba-ai"],
    },
  ];

  for (const post of posts) {
    const created = await prisma.post.create({
      data: post,
    });
    console.log(`- Created blog post: ${created.title} (Slug: ${created.slug})`);
  }

  console.log("Database seeded successfully with CV-aligned bilingual data!");
}

main()
  .catch((e) => {
    console.error("Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

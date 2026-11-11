import "dotenv/config";
import prisma from "../src/lib/db";

async function main() {
  console.log(
    "Seeding database with bilingual portfolio data aligned with CV and GitHub (@RedoRojo)..."
  );

  // Clear existing data
  await prisma.post.deleteMany({});
  await prisma.project.deleteMany({});

  // Ordered oldest -> newest so `orderBy: { createdAt: "desc" }` showcases
  // the three flagship CV projects first (`Chasqui`, `Librerías Bolivia`, `Escriba`),
  // followed by all public GitHub engineering projects and developer tools.
  const baseTimestamp = new Date("2026-11-11T12:00:00.000Z").getTime();

  const projects = [
    {
      title: "Portfolio & Minimalist Bilingual CMS",
      titleEs: "Portafolio y CMS Minimalista Bilingüe",
      slug: "developer-portfolio-cms",
      description:
        "Bilingual software engineering portfolio, resume, and split-screen Markdown CMS designed with a classical literary aesthetic and Soviet editorial palette on Next.js 16, PostgreSQL, and Prisma.",
      descriptionEs:
        "Portafolio bilingüe de ingeniería de software, currículum y CMS en Markdown a pantalla dividida con estética literaria clásica y paleta soviética, construido con Next.js 16, PostgreSQL y Prisma.",
      content: `# Portfolio & Minimalist Bilingual CMS

The source code powering this personal website, engineering portfolio, live bilingual CV, and technical publication workflow.

## Architecture & Highlights

- **Next.js 16 App Router**: Server Components, Server Actions, and dynamic route metadata (\`sitemap.ts\`, JSON-LD).
- **PostgreSQL & Prisma ORM**: Relational persistence linking featured projects, project detail monographs, and published articles.
- **Editorial Typography & Palette**: Built with *Source Serif 4*, Roman numeral indexing, Soviet archival cream/oxblood/crimson tokens, and full light/dark theme persistence.
- **Split-Screen Admin Editor**: Authenticated Markdown admin panel supporting bilingual ES/EN publishing and live preview.
`,
      contentEs: `# Portafolio y CMS Minimalista Bilingüe

El código fuente que impulsa este sitio web personal, portafolio de ingeniería, CV bilingüe y sistema de publicaciones técnicas.

## Arquitectura y Destacados

- **Next.js 16 App Router**: Server Components, Server Actions y metadatos dinámicos (\`sitemap.ts\`, JSON-LD).
- **PostgreSQL y Prisma ORM**: Persistencia relacional que vincula proyectos destacados, fichas técnicas y artículos publicados.
- **Tipografía y Paleta Editorial**: Construido con *Source Serif 4*, numeración romana, tonos crema archival, burdeos y carmesí soviético, con soporte completo de tema claro y oscuro.
- **Editor Admin a Pantalla Dividida**: Panel autenticado en Markdown con publicación bilingüe ES/EN y vista previa en vivo.
`,
      techStack: "Next.js 16, React 19, TypeScript, PostgreSQL, Prisma ORM, Tailwind CSS",
      repoUrl: "https://github.com/RedoRojo/portfolio",
      liveUrl: "https://redoportfolio.vercel.app",
      featured: false,
      status: "COMPLETED",
    },
    {
      title: "Link to QR — Instant SVG & PNG QR Generator",
      titleEs: "Link to QR — Generador Instantáneo de Códigos QR SVG y PNG",
      slug: "link-to-qr",
      description:
        "Fast, lightweight web utility and CLI tool to generate high-resolution QR codes with real-time preview, one-click clipboard PNG copy, lossless SVG/PNG export, and terminal output.",
      descriptionEs:
        "Utilidad web y herramienta CLI ligera para generar códigos QR en alta resolución con vista previa en tiempo real, copia al portapapeles en PNG, exportación vectorial SVG/PNG y salida en terminal.",
      content: `# Link to QR — Instant SVG & PNG QR Generator

A lightweight local web server and scriptable CLI utility engineered for zero-latency QR code generation.

## Key Capabilities

- **Instant Browser Preview**: Regenerates QR codes live while adjusting resolution, error-correction level, foreground/background contrast, and URL verification.
- **Vector & Raster Exports**: Supports one-click clipboard PNG copying as well as crisp **PNG** and lossless **SVG** file exports.
- **Composable CLI**: Integrated into \`tools qr\`, supporting stdin piping, raw byte stdout streaming, terminal ASCII rendering, and \`--json\` output via Python's \`segno\`.
`,
      contentEs: `# Link to QR — Generador Instantáneo de Códigos QR SVG y PNG

Un servidor web local ultraligero y utilidad CLI diseñada para generar códigos QR sin latencia.

## Capacidades Principales

- **Vista Previa Instantánea**: Regenera códigos QR en tiempo real ajustando tamaño, nivel de corrección de errores y paleta de alto contraste.
- **Exportación Vectorial y Raster**: Permite copiar la imagen PNG directo al portapapeles o descargar archivos **PNG** y **SVG** vectoriales sin pérdida.
- **CLI Composable**: Integrado bajo \`tools qr\`, con soporte de entrada por \`stdin\`, renderizado directo en terminal y salida estructurada \`--json\` con Python y \`segno\`.
`,
      techStack: "Python, Segno, HTML5, CSS3, Vanilla JS, CLI",
      repoUrl: "https://github.com/RedoRojo/qr-code",
      liveUrl: null,
      featured: false,
      status: "COMPLETED",
    },
    {
      title: "PDF Toolbox — Local OCR, Compression & Manipulation",
      titleEs: "PDF Toolbox — OCR Local, Compresión y Edición de PDFs",
      slug: "pdf-toolbox",
      description:
        "Browser and CLI utility for scanned book OCR (Tesseract), PDF compression (Ghostscript/PyMuPDF), page splitting, merging, rotation, metadata editing, and clean Web-to-PDF capture.",
      descriptionEs:
        "Herramienta web y CLI para digitalización con OCR (Tesseract), compresión de PDFs (Ghostscript/PyMuPDF), extracción, fusión, rotación, metadatos y conversión limpia de Web a PDF.",
      content: `# PDF Toolbox

A fast, privacy-first local web toolkit and CLI suite for digitizing, compressing, and organizing PDF documents without external cloud uploads.

## Core Capabilities

- **Multilingual Book & Document OCR**: Uses **Tesseract** (\`spa\`, \`eng\`, \`spa+eng\`) to add invisible selectable text layers to scanned PDFs and naturally sorted photo batches, with spine-shadow contrast cleanup and auto-orientation.
- **Compression & Structural Editing**: Shrinks heavy documents via **Ghostscript** and **PyMuPDF** presets (\`screen\`, \`ebook\`, \`printer\`, grayscale), plus range splitting, merging, rotation, and PDF metadata editing.
- **Clean Web-to-PDF Capture & CLI**: Converts online articles into selectable vector PDFs and exposes scriptable \`tools pdf\` subcommands with JSON diagnostics.
`,
      contentEs: `# PDF Toolbox

Un kit local web y CLI centrado en privacidad y velocidad para digitalizar, comprimir y editar documentos PDF sin depender de servicios en la nube.

## Capacidades Principales

- **OCR Multilingüe para Libros y Escaneos**: Usa **Tesseract** (\`spa\`, \`eng\`, \`spa+eng\`) para añadir capas de texto seleccionable sobre PDFs escaneados o lotes de imágenes, con mejora de contraste y orientación automática.
- **Compresión y Edición Estructural**: Reduce el peso mediante **Ghostscript** y **PyMuPDF** (\`screen\`, \`ebook\`, \`printer\`, escala de grises), junto con extracción por rangos, unión, rotación y edición de metadatos.
- **Captura Web a PDF y CLI**: Convierte artículos web en PDFs vectoriales seleccionables y expone subcomandos \`tools pdf\` automatizables.
`,
      techStack: "Python, FastAPI, Tesseract OCR, Ghostscript, PyMuPDF, CLI",
      repoUrl: "https://github.com/RedoRojo/pdf-toolbox",
      liveUrl: null,
      featured: false,
      status: "COMPLETED",
    },
    {
      title: "Kindle Toolbox — Web & PDF to Reflowable EPUB3",
      titleEs: "Kindle Toolbox — Conversor de Web y PDF a EPUB3 Fluido",
      slug: "kindle-toolbox",
      description:
        "Local converter transforming web articles and complex multi-column PDFs into reflowable EPUB3 e-books optimized for E-Ink displays and Kindle e-readers.",
      descriptionEs:
        "Conversor local que transforma artículos web y PDFs complejos de varias columnas en libros EPUB3 fluidos optimizados para pantallas E-Ink y lectores Kindle.",
      content: `# Kindle Toolbox

A local web app and CLI utility designed to turn web essays and academic/editorial PDFs into crisp, reflowable **EPUB3** editions for E-Ink readers.

## Key Engineering Features

- **Web-to-EPUB Extraction**: Strips ads and site chrome from web articles while downloading, optimizing, and bundling embedded images inside clean EPUB containers.
- **Layout-Aware PDF Reconstruction**: Handles single- and multi-column PDFs, de-hyphenates line-broken words, detects chapter boundaries, filters repetitive running headers/footers, and generates hyperlinked footnotes.
- **E-Ink Editorial Formatting**: Produces typographic stylesheets (\`book\` or \`article\` profiles), auto-generated covers, and dual \`NCX\` / \`EPUB3 Nav\` tables of contents via web UI or \`tools kindle\`.
`,
      contentEs: `# Kindle Toolbox

Una aplicación web local y herramienta CLI diseñada para transformar artículos web y PDFs editoriales en ediciones **EPUB3** limpias y adaptables a pantallas E-Ink y Kindle.

## Características Técnicas

- **Extracción Web a EPUB**: Limpia menús y publicidad de artículos en línea descargando, optimizando y empaquetando las imágenes dentro del libro electrónico.
- **Reconstrucción Inteligente de PDFs**: Detecta diseños de una o múltiples columnas, corrige guiones de salto de línea, identifica capítulos, elimina encabezados repetitivos y enlaza notas al pie.
- **Maquetación E-Ink**: Genera hojas de estilo tipográficas (\`book\` o \`article\`), portadas automáticas y navegación dual \`NCX\` / \`EPUB3 Nav\` desde navegador o CLI (\`tools kindle\`).
`,
      techStack: "Python, EPUB3, PyMuPDF, FastAPI, HTML/CSS, CLI",
      repoUrl: "https://github.com/RedoRojo/kindle-toolbox",
      liveUrl: null,
      featured: false,
      status: "COMPLETED",
    },
    {
      title: "Transcript — Whisper AI Video & Audio Transcriber",
      titleEs: "Transcript — Transcriptor IA para YouTube y Medios Locales",
      slug: "transcript",
      description:
        "AI transcription web app and CLI powered by Faster-Whisper for YouTube URLs and local audio/video files, with INT8 CPU acceleration, timestamp-synced playback, and multi-format export.",
      descriptionEs:
        "Aplicación web y CLI impulsada por Faster-Whisper para transcribir videos de YouTube y archivos locales de audio o video, con reproducción sincronizada y exportación multiformato.",
      content: `# Transcript — YouTube & Local Media AI Transcriber

A self-hosted web tool and CLI utility combining YouTube transcript extraction with local **Whisper (\`faster-whisper\`)** inference for accurate offline transcription.

## Highlights

- **Dual Input Pipeline**: Extracts transcripts from YouTube URLs/IDs/Shorts or processes local media (\`MP4\`, \`MKV\`, \`MP3\`, \`WAV\`, \`M4A\`, \`FLAC\`) with FFmpeg.
- **Local CPU-Accelerated Whisper**: Runs \`faster-whisper\` (\`tiny\` to \`medium\`) with **INT8 quantization**, Voice Activity Detection (VAD), and automatic language detection.
- **Synced Player & Multi-Format Export**: Synchronizes playback with interactive searchable timestamps and exports cleanly to \`.txt\`, \`.srt\`, \`.vtt\`, \`.md\`, \`.pdf\`, \`.json\`, and \`.csv\`.
`,
      contentEs: `# Transcript — Transcriptor IA para YouTube y Medios Locales

Una herramienta web autohospedada y CLI que combina extracción directa desde YouTube con inferencia local mediante **Whisper (\`faster-whisper\`)**.

## Características Principales

- **Doble Fuente de Entrada**: Procesa URLs, IDs o Shorts de YouTube así como archivos locales (\`MP4\`, \`MKV\`, \`MP3\`, \`WAV\`, \`M4A\`, \`FLAC\`) apoyándose en FFmpeg.
- **Inferencia Local Optimizada**: Ejecuta \`faster-whisper\` (\`tiny\` a \`medium\`) en CPU mediante cuantización **INT8**, detección de actividad de voz (VAD) e idioma automático.
- **Reproductor Sincronizado y Exportación**: Sincroniza el medio con marcas de tiempo buscables y exporta a \`.txt\`, \`.srt\`, \`.vtt\`, \`.md\`, \`.pdf\`, \`.json\` y \`.csv\`.
`,
      techStack: "Python, Faster-Whisper, FastAPI, FFmpeg, Vanilla JS, CLI",
      repoUrl: "https://github.com/RedoRojo/transcript",
      liveUrl: null,
      featured: false,
      status: "COMPLETED",
    },
    {
      title: "Tools Hub — Unified Dashboard & CLI Dispatcher",
      titleEs: "Tools Hub — Panel Central y Despachador CLI Unificado",
      slug: "tools-hub",
      description:
        "Central web dashboard and unified process manager orchestrating modular productivity utilities (PDF Toolbox, Kindle Toolbox, Transcript, Link to QR) with a single global CLI.",
      descriptionEs:
        "Panel web central y gestor unificado de procesos que orquesta utilidades modulares de productividad (PDF Toolbox, Kindle Toolbox, Transcript, Link to QR) junto a un CLI global unificado.",
      content: `# Tools Hub — Unified Dashboard & CLI Dispatcher

A modular suite orchestrating independent local web utilities under a single FastAPI dashboard (\`localhost:7777\`) and unified \`tools\` command-line dispatcher.

## Ecosystem Architecture

- **[PDF Toolbox](https://github.com/RedoRojo/pdf-toolbox)**: Multilingual Tesseract OCR, Ghostscript/PyMuPDF compression, split/merge/rotate, and Web-to-PDF.
- **[Kindle Toolbox](https://github.com/RedoRojo/kindle-toolbox)**: Web articles and multi-column PDFs converted into reflowable E-Ink EPUB3 books.
- **[Transcript](https://github.com/RedoRojo/transcript)**: YouTube & local media AI transcription with \`faster-whisper\`.
- **[Link to QR](https://github.com/RedoRojo/qr-code)**: Real-time PNG/SVG and terminal QR generation.
- **Agent-Ready CLI**: Every module supports scriptable flags and \`--json\` output via a shared global \`tools\` dispatcher.
`,
      contentEs: `# Tools Hub — Panel Central y Despachador CLI Unificado

Una suite modular que orquesta herramientas web independientes desde un dashboard central en **FastAPI** (\`localhost:7777\`) y un despachador CLI global (\`tools\`).

## Ecosistema Integrado

- **[PDF Toolbox](https://github.com/RedoRojo/pdf-toolbox)**: OCR multilingüe con Tesseract, compresión Ghostscript/PyMuPDF, edición estructural y Web-to-PDF.
- **[Kindle Toolbox](https://github.com/RedoRojo/kindle-toolbox)**: Conversión de artículos web y PDFs complejos a libros EPUB3 optimizados para E-Ink.
- **[Transcript](https://github.com/RedoRojo/transcript)**: Transcripción de YouTube y audio/video local con \`faster-whisper\`.
- **[Link to QR](https://github.com/RedoRojo/qr-code)**: Generación instantánea de códigos QR en PNG, SVG y terminal.
- **CLI Automatizable**: Cada utilidad expone salidas \`--json\` e integración directa con flujos de agentes.
`,
      techStack: "Python, FastAPI, Vanilla JS, Shell, CLI",
      repoUrl: "https://github.com/RedoRojo/tools-hub",
      liveUrl: null,
      featured: false,
      status: "COMPLETED",
    },
    {
      title: "NFC Attendance Sync Microservice",
      titleEs: "Microservicio de Sincronización de Asistencia NFC-to-Core",
      slug: "nfc-attendance-sync",
      description:
        "NestJS and TypeScript microservice for processing raw NFC hardware check-ins with debounce idempotency, strict UTC shift state tracking, raw audit logging, and TypeORM persistence.",
      descriptionEs:
        "Microservicio en NestJS y TypeScript para procesar lecturas crudas de dispositivos NFC con idempotencia anti-rebote, seguimiento de turnos en UTC, logs de auditoría y persistencia con TypeORM.",
      content: `# NFC Attendance Sync Microservice (NFC-to-Core)

A backend microservice built with **NestJS**, **TypeScript**, **TypeORM**, and **SQLite** to decouple high-frequency NFC reader events from core payroll ERP systems.

## Architectural Design

- **Hardware Debounce Idempotency & Audit Isolation**: Stores every incoming \`POST /attendance\` scan inside \`raw_logs\` with an \`is_duplicate\` flag so double hardware taps are safely audited without corrupting shift transitions.
- **Shift Lifecycle State Machine**: Consolidates verified events into \`processed_shifts\` tracking check-in/check-out timestamps and \`OPEN\`, \`COMPLETED\`, or \`INCOMPLETE\` states.
- **Strict UTC Timezone Normalization**: Normalizes client offset timestamps to ISO 8601 UTC on ingestion, leaving display localization to downstream consumers.
- **Event-Driven ERP Integration**: Designed around asynchronous message broker publishing (\`RabbitMQ\` / \`SQS\`) so attendance marking stays instantaneous even when the core ERP is offline.
`,
      contentEs: `# Microservicio de Sincronización de Asistencia (NFC-to-Core)

Microservicio backend desarrollado con **NestJS**, **TypeScript**, **TypeORM** y **SQLite** para desacoplar las lecturas frecuentes de lectores NFC del ERP central de nómina.

## Decisiones de Arquitectura

- **Idempotencia Anti-Rebote y Auditoría**: Persiste cada petición entrante en \`POST /attendance\` dentro de \`raw_logs\` con bandera \`is_duplicate\`, protegiendo la lógica de negocio frente a lecturas repetidas del hardware.
- **Máquina de Estados de Jornadas**: Consolida eventos válidos en \`processed_shifts\` registrando entrada, salida y estado (\`OPEN\`, \`COMPLETED\`, \`INCOMPLETE\`).
- **Normalización Estricta en UTC**: Convierte marcas horarias entrantes a formato ISO 8601 UTC absoluto para garantizar consistencia temporal.
- **Desacoplamiento por Mensajería**: Diseñado para emitir eventos asíncronos mediante cola de mensajes (\`RabbitMQ\` / \`SQS\`) cuando finaliza un turno sin bloquear la respuesta inmediata al lector.
`,
      techStack: "NestJS, TypeScript, TypeORM, SQLite, RESTful APIs",
      repoUrl:
        "https://github.com/RedoRojo/Microservicio-de-Sincronizaci-n-de-Asistencia-NFC-to-Core-",
      liveUrl: null,
      featured: false,
      status: "COMPLETED",
    },
    {
      title: "Escriba — AI Spanish Linguistic Analyzer",
      titleEs: "Escriba — Analizador Lingüístico con IA para Español",
      slug: "escriba-ai",
      description:
        "AI-native web application integrating Google GenAI SDK (Gemini 2.5 Flash) via FastAPI to classify Spanish linguistic errors across spelling, grammar, punctuation, semantics, and style.",
      descriptionEs:
        "Aplicación web nativa de IA que integra Google GenAI SDK (Gemini 2.5 Flash) mediante FastAPI para analizar textos en español y clasificar errores de ortografía, gramática, puntuación, semántica y estilo.",
      content: `# Escriba — AI Spanish Linguistic Analyzer

An AI-native web application integrating the **Google GenAI SDK (Gemini 2.5 Flash)** via a **FastAPI** REST backend (\`POST /analyze\`) to evaluate Spanish essays and return inline, interactive linguistic corrections.

## Engineering Highlights

- **Multi-Dimensional Error Classification**: Categorizes deviations into \`ortografía\`, \`gramática\`, \`puntuación\`, \`semántica\`, and \`estilo\`, guided by linguistic taxonomy research (*arXiv:2511.01615*).
- **Structured JSON Output Schemas**: Enforces deterministic schema payloads containing error spans, explanations, corrected draft previews, and category statistics.
- **Interactive Review & Safeguards**: Pairs IP-based rate limiting with a Vanilla JS + Tailwind CSS inline review interface supporting per-error *Accept* / *Ignore* resolution.
`,
      contentEs: `# Escriba — Analizador Lingüístico con IA para Español

Una aplicación web nativa de IA que integra **Google GenAI SDK (Gemini 2.5 Flash)** mediante un backend REST en **FastAPI** (\`POST /analyze\`) para analizar textos en español y ofrecer correcciones interactivas en línea.

## Aspectos Técnicos Destacados

- **Clasificación Multidimensional de Errores**: Agrupa desviaciones en \`ortografía\`, \`gramática\`, \`puntuación\`, \`semántica\` y \`estilo\`, inspirado en taxonomías de investigación lingüística (*arXiv:2511.01615*).
- **Esquemas JSON Estructurados**: Garantiza respuestas deterministas con fragmentos originales, sugerencias, explicaciones y estadísticas por categoría.
- **Interfaz Interactiva y Protección**: Combina limitación de tasa por IP con un flujo en línea para aceptar o ignorar cada sugerencia con Tailwind CSS.
`,
      techStack: "Python, FastAPI, Gemini 2.5 SDK, TypeScript, Tailwind CSS",
      repoUrl: "https://github.com/RedoRojo/escriba",
      liveUrl: null,
      featured: true,
      status: "COMPLETED",
    },
    {
      title: "Librerías Bolivia — Book Price Aggregator & API",
      titleEs: "Librerías Bolivia — Agregador de Precios de Libros y API",
      slug: "librerias-bolivia",
      description:
        "Full-stack web platform and RESTful API consolidating real-time book pricing and availability across 14 Bolivian bookstores and publishers with 4-level cascade deduplication and PostgreSQL fuzzy search.",
      descriptionEs:
        "Plataforma web full-stack y API RESTful que consolida precios y disponibilidad de libros en tiempo real de 14 librerías y editoriales de Bolivia, con deduplicación en cascada de 4 niveles y búsqueda difusa en PostgreSQL.",
      content: `# Librerías Bolivia — Book Price Aggregator & API

A decoupled full-stack price comparison platform uniting **[librerias-bolivia-api](https://github.com/RedoRojo/librerias-bolivia-api)** (FastAPI + PostgreSQL) and **[librerias-bolivia-web](https://github.com/RedoRojo/librerias-bolivia-web)** (Next.js + TypeScript) across **14 Bolivian bookstores and publishers**.

## System Architecture

- **Automated Data Ingestion**: Modular adapters consuming **Shopify** (\`/products.json\`), **WooCommerce REST API**, and BeautifulSoup scrapers across heterogeneous store catalogs.
- **4-Level Cascade Deduplication Engine**: Normalizes ISBNs, titles, authors, and publisher names to merge identical editions sold across stores into canonical comparison listings.
- **Fuzzy Search in PostgreSQL**: Uses \`pg_trgm\` and \`unaccent\` GIN indexes to tolerate typos and missing accents with sub-second query latency.
- **Responsive Frontend & Tests**: Built with **Next.js (React, TypeScript, Tailwind CSS)** and backed by automated \`pytest\` unit suites for normalizers and API routes.
`,
      contentEs: `# Librerías Bolivia — Agregador de Precios de Libros y API

Una plataforma full-stack desacoplada que une **[librerias-bolivia-api](https://github.com/RedoRojo/librerias-bolivia-api)** (FastAPI + PostgreSQL) y **[librerias-bolivia-web](https://github.com/RedoRojo/librerias-bolivia-web)** (Next.js + TypeScript) sobre **14 librerías y editoriales de Bolivia**.

## Arquitectura del Sistema

- **Ingesta Automatizada de Datos**: Adaptadores modulares que consumen **Shopify** (\`/products.json\`), **WooCommerce REST API** y extractores BeautifulSoup sobre catálogos heterogéneos.
- **Motor de Deduplicación en Cascada de 4 Niveles**: Normaliza ISBN, títulos, autores y editoriales para consolidar múltiples ofertas bajo una ficha única ordenada por precio.
- **Búsqueda Difusa en PostgreSQL**: Emplea índices \`pg_trgm\` y \`unaccent\` para tolerar errores tipográficos y ausencia de tildes en milisegundos.
- **Frontend Responsivo y Pruebas**: Desarrollado en **Next.js (React, TypeScript, Tailwind CSS)** con pruebas unitarias automatizadas para endpoints y normalizadores.
`,
      techStack: "FastAPI, Next.js, React, TypeScript, PostgreSQL, SQLAlchemy, Tailwind CSS",
      repoUrl: "https://github.com/RedoRojo/librerias-bolivia-api",
      liveUrl: null,
      featured: true,
      status: "COMPLETED",
    },
    {
      title: "Chasqui — Longitudinal News & Blindspot Intelligence",
      titleEs: "Chasqui — Inteligencia Informativa Longitudinal y Puntos Ciegos",
      slug: "chasqui",
      description:
        "Longitudinal news aggregation and media blindspot intelligence platform monitoring 46 Bolivian news sources across all 9 departments with a two-stage semantic clustering engine (FastAPI, Next.js 15, pgvector).",
      descriptionEs:
        "Plataforma de agregación longitudinal de noticias e inteligencia sobre puntos ciegos mediáticos que monitorea 46 fuentes de Bolivia en los 9 departamentos mediante clustering semántico en dos etapas (FastAPI, Next.js 15, pgvector).",
      content: `# Chasqui — Longitudinal News Aggregation & Media Blindspot Intelligence Platform

A full-stack news intelligence and longitudinal tracking observatory built to address **media fragmentation, regional underrepresentation, and short-term news amnesia in Bolivia**.

## System Architecture

- **Three-Tier Temporal Model**: Organizes coverage as \`Articles\` → \`StoryEvents\` (±96h clusters) → \`StoryThreads\` (evolving multi-week timelines).
- **Two-Stage Semantic & Entity Clustering**: Combines Spanish morphological stem normalization, 128d semantic embeddings (\`pgvector\`), named-entity overlap, and Bolivian geographic department weighting.
- **Media Blindspot Detection**: Classifies **46 verified Bolivian news outlets** across 4 editorial tiers (\`mainstream\`, \`alternative\`, \`community\`, \`regional\`) to quantify coverage asymmetry and surface underreported developments.
- **High-Concurrency Collector & Editorial UI**: Parallel \`httpx\` + \`ThreadPoolExecutor\` RSS/DOM pipeline scheduled via GitHub Actions / \`APScheduler\`, paired with a **Next.js 15 + React 19 + TypeScript** frontend.
`,
      contentEs: `# Chasqui — Plataforma de Inteligencia Informativa y Puntos Ciegos Mediáticos

Un observatorio full-stack de inteligencia informativa y seguimiento longitudinal diseñado para abordar la **fragmentación mediática, la subrepresentación regional y la amnesia informativa en Bolivia**.

## Arquitectura del Sistema

- **Modelo Temporal en Tres Niveles**: Estructura las coberturas como \`Articles\` → \`StoryEvents\` (clústeres de ±96h) → \`StoryThreads\` (líneas temporales evolutivas).
- **Motor de Clustering Semántico en Dos Etapas**: Combina normalización morfológica en español, embeddings de 128 dimensiones (\`pgvector\`), coincidencia de entidades nombradas y ponderación departamental.
- **Detección de Puntos Ciegos Mediáticos**: Clasifica **46 medios bolivianos verificados** en 4 niveles editoriales (\`mainstream\`, \`alternative\`, \`community\`, \`regional\`) para medir asimetrías de cobertura.
- **Scraper Concurrente y UI Editorial**: Colector paralelo con \`httpx\` + \`ThreadPoolExecutor\`, ejecución diaria automatizada y frontend en **Next.js 15 + React 19 + TypeScript**.
`,
      techStack:
        "FastAPI, Next.js 15, React 19, TypeScript, Python, PostgreSQL, pgvector, Docker",
      repoUrl: "https://github.com/RedoRojo/Chasqui",
      liveUrl: null,
      featured: true,
      status: "COMPLETED",
    },
  ];

  const createdProjects: Record<string, string> = {};
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const created = await prisma.project.create({
      data: {
        ...project,
        createdAt: new Date(baseTimestamp + i * 60_000),
      },
    });
    createdProjects[project.slug] = created.id;
    console.log(`- Created project: ${created.title} (Slug: ${created.slug})`);
  }

  // Seed Blog Posts aligned with CV experience & flagship projects
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
      publishedAt: new Date("2026-09-10T14:00:00.000Z"),
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
      publishedAt: new Date("2026-09-25T14:00:00.000Z"),
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
      publishedAt: new Date("2026-10-15T14:00:00.000Z"),
      projectId: createdProjects["escriba-ai"],
    },
    {
      title: "Two-Stage Semantic Clustering & Media Blindspot Detection in Chasqui",
      titleEs: "Clustering Semántico en Dos Etapas y Puntos Ciegos Mediáticos en Chasqui",
      slug: "chasqui-semantic-clustering-media-blindspots",
      summary:
        "How Chasqui monitors 46 Bolivian news sources and chains daily reports into longitudinal story threads using pgvector embeddings and entity overlap.",
      summaryEs:
        "Cómo Chasqui monitorea 46 fuentes informativas en Bolivia y encadena reportes diarios en hilos longitudinales usando embeddings en pgvector y coincidencia de entidades.",
      content: `# Two-Stage Semantic Clustering & Media Blindspot Detection

Standard news aggregators treat each headline as an isolated event. When building **Chasqui**, the core challenge was turning daily dispatches from **46 Bolivian news portals** into coherent, evolving timelines.

## Three-Tier Temporal Model

1. **\`Article\`**: Enriched with Bolivian department geo-tagging, named entities, and 128-dimensional semantic vectors (\`pgvector\`).
2. **\`StoryEvent\`**: Intra-window clustering (±96 hours) grouping multi-outlet reports covering the same occurrence.
3. **\`StoryThread\`**: Longitudinal chaining linking sequential events over weeks or months to track public issues end to end.

## Quantifying Media Blindspots

By tagging every source into \`mainstream\`, \`alternative\`, \`community\`, or \`regional\` tiers, Chasqui automatically flags **Blindspot Events** covered by local or independent press with zero mainstream visibility.
`,
      contentEs: `# Clustering Semántico en Dos Etapas y Puntos Ciegos Mediáticos

Los agregadores tradicionales muestran titulares aislados. Al construir **Chasqui**, el desafío principal fue transformar reportes diarios de **46 portales de Bolivia** en líneas de tiempo evolutivas y coherentes.

## Modelo Temporal en Tres Niveles

1. **\`Article\`**: Enriquecido con detección geográfica departamental, entidades nombradas y vectores semánticos de 128 dimensiones (\`pgvector\`).
2. **\`StoryEvent\`**: Agrupación temporal (±96 horas) que reúne notas de múltiples medios sobre un mismo acontecimiento.
3. **\`StoryThread\`**: Encadenamiento longitudinal de eventos secuenciales a lo largo de semanas o meses.

## Detección de Puntos Ciegos

Clasificando cada fuente en niveles \`mainstream\`, \`alternative\`, \`community\` o \`regional\`, Chasqui identifica automáticamente eventos cubiertos por prensa regional o independiente sin visibilidad en medios masivos.
`,
      tags: "FastAPI, pgvector, NLP, Next.js 15",
      published: true,
      publishedAt: new Date("2026-11-11T14:00:00.000Z"),
      projectId: createdProjects["chasqui"],
    },
  ];

  for (const post of posts) {
    const created = await prisma.post.create({
      data: post,
    });
    console.log(`- Created blog post: ${created.title} (Slug: ${created.slug})`);
  }

  console.log("Database seeded successfully with CV & GitHub bilingual data!");
}

main()
  .catch((e) => {
    console.error("Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "Home",
      projects: "Projects",
      resume: "Resume",
      blog: "Blog",
    },
    header: {
      name: "Cristhian V. Rojas",
      role: "Software Engineer",
      status: "Cochabamba, Bolivia",
    },
    footer: {
      role: "Cochabamba, Bolivia · Systems & Full-Stack Engineering",
      lead: "Open to full-stack, AI-native engineering, and backend systems roles.",
      email: "cristhiabnvictorrm@gmail.com",
      github: "GitHub",
      linkedin: "LinkedIn",
      cvPdf: "PDF",
      signature: "Cristhian Victor Rojas Marquez",
    },
    home: {
      location: "Cochabamba, Bolivia",
      heroName: "Cristhian Victor Rojas Marquez",
      heroSubtitle: "Software Engineer — Algorithmic Systems & AI-Native Development",
      heroDescription:
        "Systems Engineering Honors graduate (UCB), University Lecturer in Data Structures, and 3x ICPC national finalist. I architect full-stack systems, RESTful APIs, and AI-native workflows across TypeScript, React, NestJS, Python, FastAPI, and PostgreSQL.",
      viewResume: "Read Resume",
      exploreProjects: "Selected projects →",
      coordinatesTitle: "Biographical Record",
      coordinates: [
        { label: "University", value: 'UCB "San Pablo" · Graduation by Excellence' },
        { label: "Faculty", value: "Lecturer · Data Structures (Aug 2026–Present)" },
        { label: "Research", value: "PUC Chile · Dynamic Code Analysis" },
        { label: "ICPC", value: "3x National Finalist · 4th Nationwide (2025)" },
        { label: "Leadership", value: "President · SCEIS & Digital Brain UCB" },
      ],
      trajectory: {
        numeral: "I.",
        title: "Experience & Trajectory",
        milestones: [
          {
            numeral: "I",
            role: "University Lecturer — Data Structures",
            org: 'Universidad Católica Boliviana "San Pablo"',
            period: "Aug 2026 — Present",
            summary:
              "Lead undergraduate instruction for Data Structures, designing lectures, algorithmic evaluations, and coding labs focused on complexity analysis, trees, graphs, and memory-efficient design.",
          },
          {
            numeral: "II",
            role: "Independent AI Engineer Consultant",
            org: "Video Game Venture & Investment Fund",
            period: "Aug 2026 — Sep 2026",
            summary:
              "Engineered an AI-powered investment decision-support platform synthesizing multi-source market intelligence with LLMs through agentic Claude Code and Codex engineering workflows.",
          },
          {
            numeral: "III",
            role: "Research Assistant — Software Testing & Dynamic Analysis",
            org: "Pontificia Universidad Católica de Chile",
            period: "Aug 2025 — Dec 2025",
            summary:
              "Engineered a Python dynamic code analysis tool to trace runtime execution and uncover silent assertion mismatches where passing suites masked inaccurate program behavior.",
          },
          {
            numeral: "IV",
            role: "Full-Stack Software Developer (Freelance)",
            org: "Enterprise Administration System",
            period: "Jul 2025 — Nov 2025",
            summary:
              "Built modular REST APIs and end-to-end business workflows in React, NestJS, and TypeScript with strict domain validation and relational persistence.",
          },
          {
            numeral: "V",
            role: "Teaching Assistant & Competitive Programming Mentor",
            org: 'Universidad Católica Boliviana "San Pablo"',
            period: "Feb 2023 — Dec 2025",
            summary:
              "Led undergraduate labs across six semesters in Data Structures and Object-Oriented Programming, mentored over 20 students for ICPC, and co-organized four contests.",
          },
        ],
      },
      featuredProjects: {
        numeral: "II.",
        title: "Selected Projects",
        viewAll: "All projects →",
        empty: "No projects published yet.",
        inspect: "Read details →",
        github: "GitHub",
        liveDemo: "Live",
      },
      stack: {
        numeral: "III.",
        title: "Technical Stack",
        pillars: [
          {
            numeral: "I",
            title: "Languages & Frontend",
            items: [
              "TypeScript",
              "JavaScript (ES6+)",
              "Python",
              "C++",
              "Java",
              "SQL",
              "React",
              "Next.js",
              "Tailwind CSS",
            ],
          },
          {
            numeral: "II",
            title: "Backend & Databases",
            items: [
              "NestJS",
              "FastAPI",
              "Node.js",
              "PostgreSQL",
              "pgvector",
              "SQLite",
              "SQLAlchemy",
              "TypeORM",
              "Prisma ORM",
            ],
          },
          {
            numeral: "III",
            title: "AI, Testing & Engineering",
            items: [
              "Google GenAI SDK (Gemini)",
              "Claude Code",
              "OpenAI Codex",
              "Cursor & Copilot",
              "Unit & Dynamic Testing",
              "Algorithms & Data Structures",
              "Docker",
              "Linux",
              "Git",
            ],
          },
        ],
      },
      recentArticles: {
        numeral: "IV.",
        title: "Recent Articles",
        viewAll: "All articles →",
        read: "Read →",
      },
    },
    resume: {
      pageEyebrow: "Curriculum Vitae",
      printButton: "Print",
      downloadPdfButton: "Download PDF",
      cvBadge: "Official Record",
      pdfReady: "Print & ATS Edition",
      name: "Cristhian Victor Rojas Marquez",
      roleTitle: "Software Engineer — Algorithmic Problem Solver & AI-Native Developer",
      contactLocation: "Cochabamba, Bolivia",
      contactPhone: "+591 68301052",
      contactEmail: "cristhiabnvictorrm@gmail.com",
      contactGithub: "github.com/RedoRojo",
      contactLinkedin: "linkedin.com/in/rojasredo",
      summaryTitle: "Professional Summary",
      summaryText:
        "Systems Engineering Honors graduate and competitive programmer (3x ICPC National Finalist in 2023, 2024, and 2025) driven by complex algorithmic problem-solving and analytical thinking. Focused on high-level system design, critical reasoning, and orchestrating AI-native and agentic workflows to solve hard engineering problems beyond routine code generation.",
      skillsTitle: "Technical Skills",
      skillsCategories: [
        {
          label: "Programming Languages",
          items: "TypeScript, JavaScript (ES6+), Python, C++, Java, SQL",
          accent: true,
        },
        {
          label: "Frameworks & Databases",
          items:
            "React, Next.js, NestJS, FastAPI, Node.js, Tailwind CSS, PostgreSQL, SQLite, SQLAlchemy, TypeORM",
          accent: false,
        },
        {
          label: "AI & Agentic Workflows",
          items:
            "Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Google GenAI SDK (Gemini API), LLMs",
          accent: false,
        },
        {
          label: "Core Engineering & Languages",
          items:
            "Data Structures & Algorithms, RESTful APIs, OOP, Unit & Dynamic Testing, Debugging, Git, Docker, Linux • Spanish (Native), English (Advanced)",
          accent: true,
        },
      ],
      experienceTitle: "Technical Experience",
      experiences: [
        {
          role: "University Lecturer — Data Structures",
          company: 'Universidad Católica Boliviana "San Pablo"',
          location: "Cochabamba, Bolivia",
          dates: "Aug 2026 — Present",
          bullets: [
            "Lead undergraduate instruction for the Data Structures course, designing lectures, algorithmic evaluations, and coding labs focused on time/space complexity, trees, graphs, and memory-efficient design.",
            "Previously served 6 semesters (Feb 2023 — Dec 2025) as Teaching Assistant for Data Structures, Programming I (OOP), and Introduction to Programming, conducting lab sessions and code reviews.",
          ],
        },
        {
          role: "Independent AI Engineer Consultant",
          company: "Video Game Venture & Investment Fund (Independent Contract)",
          location: "Remote",
          dates: "Aug 2026 — Sep 2026",
          bullets: [
            "Engineered and maintained an AI-powered investment decision-support system that processes and synthesizes multi-source gaming market intelligence through Large Language Models (LLMs) to guide investor evaluations.",
            "Leveraged agentic coding workflows (Claude Code and Codex) across the entire development and maintenance lifecycle to rapidly ship data processing pipelines and analytical modules.",
          ],
        },
        {
          role: "Research Assistant — Software Testing & Dynamic Analysis",
          company: "Pontificia Universidad Católica de Chile",
          location: "Remote",
          dates: "Aug 2025 — Dec 2025",
          bullets: [
            "Developed a Python-based dynamic code analysis tool to evaluate software reliability and automated test suite efficacy.",
            "Automated runtime execution tracing and metric extraction to detect silent assertion mismatches where test assumptions diverged from actual program behavior.",
          ],
        },
        {
          role: "Full-Stack Software Developer (Freelance)",
          company: "Enterprise Administration System",
          location: "Cochabamba, Bolivia",
          dates: "Jul 2025 — Nov 2025",
          bullets: [
            "Collaborated within an agile team to build a full-stack enterprise administration platform using React, NestJS, and TypeScript.",
            "Designed and consumed modular REST APIs applying strict OOP principles, implementing validation layers and relational data persistence.",
          ],
        },
      ],
      projectsTitle: "Technical Projects",
      projects: [
        {
          title: "Chasqui — Longitudinal News & Blindspot Intelligence",
          tech: "FastAPI, Next.js 15, pgvector, Docker",
          repoUrl: "https://github.com/RedoRojo/Chasqui",
          bullets: [
            "Built a full-stack news intelligence platform ingesting daily reports from 46 Bolivian outlets across all 9 departments using concurrent RSS/DOM scrapers, NLP geo-tagging, and GitHub Actions CI.",
            "Engineered a two-stage semantic clustering pipeline (Articles -> Events -> Story Threads) backed by 128d embeddings in PostgreSQL + pgvector to track evolving timelines and quantify media blindspots.",
          ],
        },
        {
          title: "Librerías Bolivia — Book Price Aggregator & API",
          tech: "FastAPI, Next.js, TypeScript, PostgreSQL",
          repoUrl: "https://github.com/RedoRojo/librerias-bolivia-api",
          bullets: [
            "Built a full-stack platform and RESTful API consolidating real-time book pricing across 14 Bolivian bookstores and publishers via Shopify and WooCommerce REST APIs with a 4-level cascade deduplication engine.",
            "Implemented a responsive Next.js (React, TypeScript) frontend and accent-insensitive fuzzy search in PostgreSQL (pg_trgm, unaccent), backed by automated unit tests.",
          ],
        },
        {
          title: "Escriba — AI Spanish Linguistic Analyzer",
          tech: "Python, FastAPI, Gemini 2.5 SDK, Tailwind CSS",
          repoUrl: "https://github.com/RedoRojo/escriba",
          bullets: [
            "Developed an AI-native web tool integrating the Google GenAI SDK (Gemini 2.5 Flash) via a FastAPI REST backend to classify errors across spelling, grammar, punctuation, semantics, and style using structured JSON schemas (arXiv:2511.01615).",
          ],
        },
      ],
      educationTitle: "Education",
      educationDegree:
        "Bachelor of Science in Systems Engineering — Graduated with Honors (Graduation by Excellence, Mar 2026)",
      educationUniversity: 'Universidad Católica Boliviana "San Pablo" • Cochabamba, Bolivia',
      educationDates: "Feb 2021 — Feb 2026",
      achievementsTitle: "Volunteering, Leadership & Honors",
      achievements: [
        {
          title: "Deep Learning Tutor (Training Team) — Bolivian Delegation IOAI (Jul 2026)",
          description:
            "Supported the preparation of Bolivia's national team for the International Olympiad in Artificial Intelligence (IOAI), teaching Deep Learning foundations, neural network architectures, and practical model training.",
        },
        {
          title: "President — Digital Brain Neurotechnology Student Society (Jan 2025 — Jan 2026)",
          description:
            "Led the university's neurotechnology student society at UCB Cochabamba, organizing interdisciplinary study groups, technical workshops, and student research activities.",
        },
        {
          title: "President — Systems Engineering Scientific Society, SCEIS UCB (Feb 2024 — Dec 2025)",
          description:
            "Directed organizational leadership, student activities, and academic engineering events across the Systems Engineering department.",
        },
        {
          title: "Competitive Programming Honors & ICPC Mentorship (2023 — 2025)",
          description:
            '3x ICPC National Finalist (2023, 2024, 2025); 4th Place Nationwide at the 2025 ICPC South America South Finals (Nov 2025); Silver Medal at "SanSi Cup 2023" (Dec 2023); 7th Place at 2023 ICPC Bolivia Preliminary (Sep 2023). Mentored 20+ students and organized 4 internal UCB programming contests.',
        },
      ],
    },
    projectsPage: {
      badge: "Catalog of Works",
      title: "Selected Projects & Open Source",
      subtitle:
        "Full-stack web platforms, RESTful APIs, microservices, AI linguistic analyzers, and local developer utilities.",
      empty: "No projects published yet.",
      adminButton: "Admin Dashboard",
      techStackLabel: "Stack",
      sourceCode: "GitHub",
      liveDemo: "Live Demo",
      backLink: "← Back to projects",
      readMore: "Read details →",
    },
    blogPage: {
      badge: "Archive",
      title: "Technical Blog & Notes",
      subtitle:
        "Articles on software testing, semantic clustering, backend architecture, full-stack systems, and structured AI tools.",
      empty: "No articles published yet.",
      adminButton: "Admin Dashboard",
      readArticle: "Read article →",
      backLink: "← Back to articles",
      publishedOn: "Published",
    },
  },
  es: {
    nav: {
      about: "Inicio",
      projects: "Proyectos",
      resume: "CV",
      blog: "Blog",
    },
    header: {
      name: "Cristhian V. Rojas",
      role: "Ingeniero de Software",
      status: "Cochabamba, Bolivia",
    },
    footer: {
      role: "Cochabamba, Bolivia · Ingeniería de Sistemas y Full-Stack",
      lead: "Disponible para roles en desarrollo full-stack, ingeniería AI-native y sistemas backend.",
      email: "cristhiabnvictorrm@gmail.com",
      github: "GitHub",
      linkedin: "LinkedIn",
      cvPdf: "PDF",
      signature: "Cristhian Victor Rojas Marquez",
    },
    home: {
      location: "Cochabamba, Bolivia",
      heroName: "Cristhian Victor Rojas Marquez",
      heroSubtitle: "Ingeniero de Software — Sistemas Algorítmicos y Desarrollo AI-Native",
      heroDescription:
        "Graduado con honores en Ingeniería de Sistemas (UCB), Docente Universitario de Estructuras de Datos y 3x finalista nacional ICPC. Diseño sistemas full-stack, APIs RESTful y flujos con IA en TypeScript, React, NestJS, Python, FastAPI y PostgreSQL.",
      viewResume: "Abrir CV",
      exploreProjects: "Proyectos seleccionados →",
      coordinatesTitle: "Ficha Académica y Técnica",
      coordinates: [
        { label: "Universidad", value: 'UCB "San Pablo" · Titulación por Excelencia' },
        { label: "Docencia", value: "Docente · Estructuras de Datos (Ago 2026–Hoy)" },
        { label: "Investigación", value: "PUC Chile · Análisis Dinámico" },
        { label: "ICPC", value: "3x Finalista Nacional · 4to Lugar (2025)" },
        { label: "Liderazgo", value: "Presidente · SCEIS y Digital Brain UCB" },
      ],
      trajectory: {
        numeral: "I.",
        title: "Experiencia y Trayectoria",
        milestones: [
          {
            numeral: "I",
            role: "Docente Universitario — Estructuras de Datos",
            org: 'Universidad Católica Boliviana "San Pablo"',
            period: "Ago 2026 — Presente",
            summary:
              "Responsable de la cátedra de Estructuras de Datos en pregrado, diseñando clases, evaluaciones algorítmicas y laboratorios centrados en complejidad, árboles, grafos y diseño eficiente en memoria.",
          },
          {
            numeral: "II",
            role: "Consultor Independiente en Ingeniería de IA",
            org: "Fondo de Inversión y Venture de Videojuegos",
            period: "Ago 2026 — Sep 2026",
            summary:
              "Desarrollé una plataforma de apoyo a decisiones de inversión basada en LLMs para sintetizar inteligencia de mercado, aplicando flujos agénticos con Claude Code y Codex en todo el ciclo de entrega.",
          },
          {
            numeral: "III",
            role: "Asistente de Investigación — Pruebas y Análisis Dinámico",
            org: "Pontificia Universidad Católica de Chile",
            period: "Ago 2025 — Dic 2025",
            summary:
              "Desarrollé una herramienta en Python para trazar ejecución en tiempo de corrida y detectar aserciones silenciosas donde las suites aprobadas ocultaban errores reales.",
          },
          {
            numeral: "IV",
            role: "Desarrollador Full-Stack (Freelance)",
            org: "Sistema de Administración Empresarial",
            period: "Jul 2025 — Nov 2025",
            summary:
              "Construí APIs REST modulares y flujos empresariales en React, NestJS y TypeScript aplicando validación de dominio estricta y persistencia relacional.",
          },
          {
            numeral: "V",
            role: "Auxiliar de Docencia y Mentor de Programación",
            org: 'Universidad Católica Boliviana "San Pablo"',
            period: "Feb 2023 — Dic 2025",
            summary:
              "Dirigí laboratorios de Estructuras de Datos y POO durante seis semestres, mentoricé a más de 20 estudiantes para ICPC y co-organicé cuatro competencias.",
          },
        ],
      },
      featuredProjects: {
        numeral: "II.",
        title: "Proyectos Seleccionados",
        viewAll: "Ver todos →",
        empty: "Aún no hay proyectos publicados.",
        inspect: "Leer detalle →",
        github: "GitHub",
        liveDemo: "En vivo",
      },
      stack: {
        numeral: "III.",
        title: "Stack Técnico",
        pillars: [
          {
            numeral: "I",
            title: "Lenguajes y Frontend",
            items: [
              "TypeScript",
              "JavaScript (ES6+)",
              "Python",
              "C++",
              "Java",
              "SQL",
              "React",
              "Next.js",
              "Tailwind CSS",
            ],
          },
          {
            numeral: "II",
            title: "Backend y Bases de Datos",
            items: [
              "NestJS",
              "FastAPI",
              "Node.js",
              "PostgreSQL",
              "pgvector",
              "SQLite",
              "SQLAlchemy",
              "TypeORM",
              "Prisma ORM",
            ],
          },
          {
            numeral: "III",
            title: "IA, Testing e Ingeniería",
            items: [
              "Google GenAI SDK (Gemini)",
              "Claude Code",
              "OpenAI Codex",
              "Cursor y Copilot",
              "Pruebas Unitarias y Dinámicas",
              "Algoritmos y Estructuras",
              "Docker",
              "Linux",
              "Git",
            ],
          },
        ],
      },
      recentArticles: {
        numeral: "IV.",
        title: "Artículos Recientes",
        viewAll: "Ver todos →",
        read: "Leer →",
      },
    },
    resume: {
      pageEyebrow: "Curriculum Vitae",
      printButton: "Imprimir",
      downloadPdfButton: "Descargar PDF",
      cvBadge: "Expediente Oficial",
      pdfReady: "Edición ATS e Impresión",
      name: "Cristhian Victor Rojas Marquez",
      roleTitle: "Ingeniero de Software — Resolución Algorítmica y Desarrollo AI-Native",
      contactLocation: "Cochabamba, Bolivia",
      contactPhone: "+591 68301052",
      contactEmail: "cristhiabnvictorrm@gmail.com",
      contactGithub: "github.com/RedoRojo",
      contactLinkedin: "linkedin.com/in/rojasredo",
      summaryTitle: "Resumen Profesional",
      summaryText:
        "Graduado con honores en Ingeniería de Sistemas y programador competitivo (3x Finalista Nacional ICPC en 2023, 2024 y 2025) orientado a la resolución algorítmica compleja y al pensamiento analítico. Enfocado en diseño de sistemas de alto nivel, razonamiento crítico y orquestación de flujos AI-native y agénticos para resolver retos complejos de ingeniería más allá de la generación rutinaria de código.",
      skillsTitle: "Habilidades Técnicas",
      skillsCategories: [
        {
          label: "Lenguajes de Programación",
          items: "TypeScript, JavaScript (ES6+), Python, C++, Java, SQL",
          accent: true,
        },
        {
          label: "Frameworks y Bases de Datos",
          items:
            "React, Next.js, NestJS, FastAPI, Node.js, Tailwind CSS, PostgreSQL, SQLite, SQLAlchemy, TypeORM",
          accent: false,
        },
        {
          label: "IA y Flujos Agénticos",
          items:
            "Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Google GenAI SDK (Gemini API), LLMs",
          accent: false,
        },
        {
          label: "Ingeniería Base e Idiomas",
          items:
            "Estructuras de Datos y Algoritmos, APIs RESTful, POO, Pruebas Unitarias y Dinámicas, Depuración, Git, Docker, Linux • Español (Nativo), Inglés (Avanzado)",
          accent: true,
        },
      ],
      experienceTitle: "Experiencia Técnica",
      experiences: [
        {
          role: "Docente Universitario — Estructuras de Datos",
          company: 'Universidad Católica Boliviana "San Pablo"',
          location: "Cochabamba, Bolivia",
          dates: "Ago 2026 — Presente",
          bullets: [
            "Dirijo la enseñanza de pregrado en la materia de Estructuras de Datos, diseñando clases, evaluaciones algorítmicas y laboratorios centrados en complejidad temporal/espacial, árboles, grafos y diseño eficiente en memoria.",
            "Previamente ejercí durante 6 semestres (Feb 2023 — Dic 2025) como Auxiliar de Docencia en Estructuras de Datos, Programación I (POO) e Introducción a la Programación, dirigiendo laboratorios y revisiones de código.",
          ],
        },
        {
          role: "Consultor Independiente en Ingeniería de IA",
          company: "Fondo de Inversión y Venture de Videojuegos (Contrato Independiente)",
          location: "Remoto",
          dates: "Ago 2026 — Sep 2026",
          bullets: [
            "Diseñé y mantuve un sistema de apoyo a decisiones de inversión impulsado por IA que procesa y sintetiza inteligencia del mercado de videojuegos mediante LLMs para guiar evaluaciones.",
            "Apliqué flujos agénticos de programación (Claude Code y Codex) en todo el ciclo de desarrollo y mantenimiento para entregar pipelines de procesamiento y módulos analíticos con rapidez.",
          ],
        },
        {
          role: "Asistente de Investigación — Pruebas de Software y Análisis Dinámico",
          company: "Pontificia Universidad Católica de Chile",
          location: "Remoto",
          dates: "Ago 2025 — Dic 2025",
          bullets: [
            "Desarrollé una herramienta de análisis dinámico de código basada en Python para evaluar la confiabilidad del software y la eficacia de suites de pruebas automatizadas.",
            "Automaticé el trazado de ejecución en tiempo de corrida y la extracción de métricas para detectar discrepancias silenciosas entre las aserciones y el comportamiento real del programa.",
          ],
        },
        {
          role: "Desarrollador de Software Full-Stack (Freelance)",
          company: "Sistema de Administración Empresarial",
          location: "Cochabamba, Bolivia",
          dates: "Jul 2025 — Nov 2025",
          bullets: [
            "Colaboré dentro de un equipo ágil para diseñar y construir una plataforma empresarial de administración full-stack usando React, NestJS y TypeScript.",
            "Diseñé y consumí APIs REST modulares aplicando principios estrictos de POO, capas de validación y persistencia relacional.",
          ],
        },
      ],
      projectsTitle: "Proyectos Técnicos",
      projects: [
        {
          title: "Chasqui — Inteligencia Informativa Longitudinal y Puntos Ciegos",
          tech: "FastAPI, Next.js 15, pgvector, Docker",
          repoUrl: "https://github.com/RedoRojo/Chasqui",
          bullets: [
            "Construí una plataforma full-stack de inteligencia informativa que ingiere reportes diarios de 46 medios de los 9 departamentos de Bolivia mediante scrapers concurrentes RSS/DOM, geo-etiquetado NLP y CI en GitHub Actions.",
            "Diseñé un pipeline de clustering semántico en dos etapas (Artículos -> Eventos -> Hilos Históricos) respaldado por embeddings de 128 dimensiones en PostgreSQL + pgvector para detectar puntos ciegos mediáticos.",
          ],
        },
        {
          title: "Librerías Bolivia — Agregador de Precios de Libros y API",
          tech: "FastAPI, Next.js, TypeScript, PostgreSQL",
          repoUrl: "https://github.com/RedoRojo/librerias-bolivia-api",
          bullets: [
            "Construí una plataforma web full-stack y API RESTful que consolida precios en tiempo real de 14 librerías y editoriales de Bolivia mediante APIs REST de Shopify y WooCommerce con un motor de deduplicación en cascada de 4 niveles.",
            "Implementé un frontend responsivo en Next.js (React, TypeScript) y búsqueda difusa insensible a tildes en PostgreSQL (pg_trgm, unaccent), respaldado por pruebas unitarias automatizadas.",
          ],
        },
        {
          title: "Escriba — Analizador Lingüístico con IA para Español",
          tech: "Python, FastAPI, Gemini 2.5 SDK, Tailwind CSS",
          repoUrl: "https://github.com/RedoRojo/escriba",
          bullets: [
            "Desarrollé una aplicación web nativa de IA integrando Google GenAI SDK (Gemini 2.5 Flash) mediante un backend REST en FastAPI para clasificar errores de ortografía, gramática, puntuación, semántica y estilo con esquemas JSON estructurados (arXiv:2511.01615).",
          ],
        },
      ],
      educationTitle: "Educación",
      educationDegree:
        "Licenciatura en Ingeniería de Sistemas — Graduado con Honores (Titulación por Excelencia, Mar 2026)",
      educationUniversity: 'Universidad Católica Boliviana "San Pablo" • Cochabamba, Bolivia',
      educationDates: "Feb 2021 — Feb 2026",
      achievementsTitle: "Voluntariado, Liderazgo y Reconocimientos",
      achievements: [
        {
          title: "Tutor de Deep Learning (Equipo de Entrenamiento) — Delegación Boliviana IOAI (Jul 2026)",
          description:
            "Apoyé la preparación del equipo nacional de Bolivia rumbo a la International Olympiad in Artificial Intelligence (IOAI), enseñando fundamentos de Deep Learning, arquitecturas neuronales y entrenamiento práctico.",
        },
        {
          title: "Presidente — Sociedad Estudiantil de Neurotecnología Digital Brain (Ene 2025 — Ene 2026)",
          description:
            "Lideré la sociedad estudiantil de neurotecnología en la UCB Cochabamba, organizando grupos interdisciplinarios, talleres técnicos y actividades de investigación.",
        },
        {
          title: "Presidente — Sociedad Científica de Ingeniería de Sistemas, SCEIS UCB (Feb 2024 — Dic 2025)",
          description:
            "Dirigí la gestión organizacional, actividades estudiantiles y eventos académicos de ingeniería en el departamento de Ingeniería de Sistemas.",
        },
        {
          title: "Distinciones en Programación Competitiva y Mentoría ICPC (2023 — 2025)",
          description:
            '3x Finalista Nacional ICPC (2023, 2024, 2025); 4to Lugar Nacional en la Final Sudamericana ICPC Sur 2025 (Nov 2025); Medalla de Plata en "SanSi Cup 2023" (Dic 2023); 7mo Lugar en la Preliminar Boliviana ICPC 2023 (Sep 2023). Mentoricé a más de 20 estudiantes y organicé 4 concursos internos.',
        },
      ],
    },
    projectsPage: {
      badge: "Catálogo de Proyectos",
      title: "Proyectos y Software Open Source",
      subtitle:
        "Plataformas web full-stack, APIs RESTful, microservicios, analizadores lingüísticos con IA y herramientas de productividad.",
      empty: "Aún no hay proyectos publicados.",
      adminButton: "Panel de Administración",
      techStackLabel: "Tecnologías",
      sourceCode: "GitHub",
      liveDemo: "En vivo",
      backLink: "← Volver a proyectos",
      readMore: "Leer detalle →",
    },
    blogPage: {
      badge: "Archivo",
      title: "Blog Técnico y Notas",
      subtitle:
        "Artículos sobre pruebas de software, clustering semántico, arquitectura backend, sistemas full-stack y herramientas con IA.",
      empty: "Aún no hay artículos publicados.",
      adminButton: "Panel de Administración",
      readArticle: "Leer artículo →",
      backLink: "← Volver al blog",
      publishedOn: "Publicado",
    },
  },
};

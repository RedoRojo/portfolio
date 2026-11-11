export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "Prologue",
      projects: "Works",
      resume: "CV",
      blog: "Essays",
    },
    header: {
      name: "Cristhian V. Rojas",
      role: "Systems Engineering & Literature",
      status: "Available for engineering opportunities",
    },
    footer: {
      role: "Cochabamba, Bolivia",
      lead: "Software engineering, backend systems, and language tooling. Direct correspondence:",
      email: "cristhiabnvictorrm@gmail.com",
      github: "GitHub",
      linkedin: "LinkedIn",
      cvPdf: "PDF",
      colophon: "Set in Source Serif 4 & JetBrains Mono.",
    },
    home: {
      location: "Cochabamba, Bolivia · Systems Engineering",
      heroHeadlineStart: "Writing software that endures, between",
      heroHeadlineEmphasis: "stark structure",
      heroHeadlineEnd: "and classical prose.",
      heroDescription:
        "Systems Engineering Honors graduate (UCB) and ICPC national finalist. I build full-stack web applications, dynamic analysis tools, and AI linguistic utilities—guided by the clarity of nineteenth-century Russian literature and unornamented architecture.",
      viewResume: "Read CV",
      exploreProjects: "Selected works →",
      prologue: {
        eyebrow: "I. Prologue",
        coordinates: [
          { label: "Origin", value: "Cochabamba, Bolivia" },
          { label: "Education", value: 'UCB "San Pablo" · Excellence Honors' },
          { label: "Research", value: "PUC Chile · Dynamic Code Analysis" },
          { label: "Standing", value: "4th Nationwide · ICPC Bolivia 2025" },
          { label: "Languages", value: "Spanish (Native) · English (C1)" },
        ],
        paragraphs: [
          "Behind any lasting system lies quiet discipline: explicit data models, minimal surface area, and zero tolerance for decorative complexity. The same restraint draws me to nineteenth-century Russian prose and brutalist form—nothing extraneous survives scrutiny.",
          "At Universidad Católica Boliviana I spent six semesters teaching Data Structures and Object-Oriented Programming and leading the Systems Engineering Scientific Society. Later, researching Python dynamic analysis at Pontificia Universidad Católica de Chile taught me how easily a green test suite hides real runtime behavior.",
          "Most of my personal work circles back to written language and books: unifying 14 Bolivian bookstores under one API in Librerías Bolivia, parsing Spanish prose with Escriba, and building distraction-free reading tools.",
        ],
        epigraph: "“Manuscripts don't burn.”",
        epigraphOriginal: "«Рукописи не горят.»",
        epigraphAuthor: "Mikhail Bulgakov, The Master and Margarita",
      },
      readings: {
        eyebrow: "II. Marginalia",
        title: "Four books behind how I write code.",
        subtitle:
          "Notes from classical Russian literature paired with real engineering constraints.",
        nextButton: "Next note →",
        counterPrefix: "Note",
        items: [
          {
            id: "bulgakov",
            index: "01",
            author: "Mikhail Bulgakov",
            work: "The Master and Margarita",
            year: "1940",
            note: "Bulgakov's premise holds in software just as in prose: explicit schemas, honest boundaries, and verifiable abstractions outlive frameworks and rushed rewrites.",
            practice: "Applied in Escriba — deterministic JSON output contracts via Gemini & FastAPI.",
          },
          {
            id: "dostoevsky",
            index: "02",
            author: "Fyodor Dostoevsky",
            work: "Crime and Punishment",
            year: "1866",
            note: "Dostoevsky strips away rationalization until a single overlooked contradiction exposes everything. Runtime tracing demands the same patience when tests pass for the wrong reasons.",
            practice: "Applied at PUC Chile — instrumenting Python execution traces to expose silent assertions.",
          },
          {
            id: "tolstoy",
            index: "03",
            author: "Leo Tolstoy",
            work: "War and Peace",
            year: "1869",
            note: "Tolstoy moves effortlessly between intimate detail and continental scale. Backend architecture requires both: tight algorithmic complexity serving straightforward domain clarity.",
            practice: "Applied in Librerías Bolivia — 4-stage cascade deduplication across 14 heterogeneous catalogs.",
          },
          {
            id: "chekhov",
            index: "04",
            author: "Anton Chekhov",
            work: "Collected Stories",
            year: "1899",
            note: "Chekhov's refusal to waste a single adjective mirrors structural brutalism: every rule, boundary, and interface element should stay only if it carries real weight.",
            practice: "Applied across all UI and API contracts — minimalism without ornamentation.",
          },
        ],
      },
      featuredProjects: {
        eyebrow: "III. Selected Works",
        title: "Systems & Open Source",
        viewAll: "All works →",
        empty: "No works archived yet.",
        inspect: "Read monograph →",
        github: "GitHub",
        liveDemo: "Live",
      },
      recentEssays: {
        eyebrow: "IV. Recent Essays",
        title: "Engineering Notes",
        viewAll: "All essays →",
        read: "Read →",
      },
      craft: {
        eyebrow: "V. Instrumentarium",
        title: "Technical Material",
        columns: [
          {
            title: "Languages & UI",
            items: "TypeScript, JavaScript, Python, C++, Java, SQL, React, Next.js, Tailwind CSS",
          },
          {
            title: "Backend & Data",
            items: "NestJS, FastAPI, Node.js, PostgreSQL, SQLite, SQLAlchemy, TypeORM, Prisma, RESTful APIs",
          },
          {
            title: "Analysis, AI & Craft",
            items: "Google GenAI SDK, Claude Code, Cursor, Unit & Dynamic Testing, OOP, Algorithms, Docker, Linux, Git",
          },
        ],
      },
    },
    resume: {
      pageEyebrow: "Curriculum Vitae",
      printButton: "Print",
      downloadPdfButton: "Download PDF",
      cvBadge: "OFFICIAL RECORD",
      pdfReady: "Print & ATS Edition",
      name: "Cristhian Victor Rojas Marquez",
      roleTitle: "Software Engineer | Full-Stack & AI-Assisted Development",
      contactLocation: "Cochabamba, Bolivia",
      contactPhone: "+591 68301052",
      contactEmail: "cristhiabnvictorrm@gmail.com",
      contactGithub: "github.com/RedoRojo",
      contactLinkedin: "linkedin.com/in/rojasredo",
      summaryTitle: "Professional Summary",
      summaryText:
        "Systems Engineering Honors graduate and ICPC national finalist with hands-on experience building full-stack web applications, RESTful APIs, and automated code analysis tools. Strong foundation in Object-Oriented Programming (OOP), data structures, unit/dynamic testing, and modern frameworks (React, Next.js, NestJS, FastAPI). Adept at leveraging AI-assisted development workflows and LLM SDKs to ship clean, tested, and maintainable software at high velocity within agile teams.",
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
          label: "AI & Developer Tools",
          items:
            "Cursor, GitHub Copilot, Claude Code, Google GenAI SDK (Gemini API), Git, Docker, Linux",
          accent: false,
        },
        {
          label: "Engineering Practices & Languages",
          items:
            "RESTful APIs, OOP, Unit & Dynamic Testing, Debugging, Data Structures & Algorithms, CI/CD, Scrum • Spanish (Native), English (Advanced)",
          accent: true,
        },
      ],
      experienceTitle: "Technical Experience",
      experiences: [
        {
          role: "Research Assistant — Software Testing & Dynamic Analysis",
          company: "Pontificia Universidad Católica de Chile",
          location: "Remote",
          dates: "Aug 2025 — Dec 2025",
          bullets: [
            "Engineered a Python-based dynamic code analysis tool to evaluate software reliability and measure the effectiveness of automated test suites.",
            "Automated runtime execution tracing and metric extraction to detect silent test failures where assertions did not match actual program behavior, streamlining debugging workflows.",
          ],
        },
        {
          role: "Full-Stack Software Developer (Freelance)",
          company: "Enterprise Administration System",
          location: "Cochabamba, Bolivia",
          dates: "Jul 2025 — Nov 2025",
          bullets: [
            "Collaborated within an agile development team to design and build a full-stack enterprise administration platform using React, NestJS, and TypeScript.",
            "Architected and consumed modular REST APIs applying strict OOP design principles, implementing end-to-end business workflows, validation layers, and relational data persistence.",
          ],
        },
        {
          role: "Teaching Assistant & Competitive Programming Mentor",
          company: 'Universidad Católica Boliviana "San Pablo"',
          location: "Cochabamba, Bolivia",
          dates: "Feb 2023 — Dec 2025",
          bullets: [
            "Instructed undergraduate laboratory sessions and conducted code reviews for Data Structures, Programming I (OOP), and Introduction to Programming across 6 semesters.",
            "Mentored 20+ engineering students in algorithmic problem-solving, complexity analysis, and systematic debugging for competitive programming.",
            "Co-organized 4 internal university programming contests, designing algorithmic problem statements, edge-case test suites, and automated grading setups.",
          ],
        },
      ],
      projectsTitle: "Technical Projects",
      projects: [
        {
          title: "Librerías Bolivia — Book Price Aggregator & API",
          tech: "FastAPI, Next.js, TypeScript, PostgreSQL",
          repoUrl: "https://github.com/RedoRojo/librerias-bolivia-api",
          bullets: [
            "Built a full-stack web platform and RESTful API consolidating real-time book pricing and availability across 14 Bolivian bookstores and publishers.",
            "Developed automated data ingestion adapters consuming Shopify and WooCommerce REST APIs, paired with a 4-level cascade deduplication and publisher-normalization engine.",
            "Implemented a responsive Next.js (React, TypeScript, Tailwind CSS) frontend and fuzzy-search queries in PostgreSQL (pg_trgm, unaccent), backed by automated unit tests for API endpoints and data normalizers.",
          ],
        },
        {
          title: "Escriba — AI Spanish Linguistic Analyzer",
          tech: "Python, FastAPI, Gemini 2.5 SDK, Tailwind CSS",
          repoUrl: "https://github.com/RedoRojo/escriba",
          bullets: [
            "Developed an AI-native web application integrating the Google GenAI SDK (Gemini 2.5 Flash) via a FastAPI REST backend to analyze texts and classify errors across spelling, grammar, punctuation, semantics, and style.",
            "Engineered structured JSON output schemas and research-grounded system prompts (arXiv:2511.01615) with IP rate limiting and an interactive inline correction UI.",
          ],
        },
      ],
      educationTitle: "Education",
      educationDegree:
        "Bachelor of Science in Systems Engineering — Graduated with Honors (Graduation by Excellence)",
      educationUniversity: 'Universidad Católica Boliviana "San Pablo" • Cochabamba, Bolivia',
      educationDates: "Feb 2021 — Feb 2026",
      achievementsTitle: "Achievements & Leadership",
      achievements: [
        {
          title: "4th Place Nationwide — ICPC South America South Finals (Nov 2025)",
          description:
            "Ranked among the top university competitive programming teams in Bolivia solving complex algorithmic problems under strict time constraints.",
        },
        {
          title: "President — Systems Engineering Scientific Society, SCEIS UCB (Feb 2024 — Dec 2025)",
          description:
            "Led student research initiatives, technical workshops, and academic programming events for the Systems Engineering department.",
        },
        {
          title: "Competitive Programming Honors",
          description:
            'Silver Medal at "SanSi Cup 2023" Programming Contest (Dec 2023) & 7th Place Nationwide at the 2023 ICPC Bolivia Preliminary Contest (Sep 2023).',
        },
      ],
    },
    projectsPage: {
      badge: "Catalog of Works",
      title: "Selected Projects & Open Source",
      subtitle:
        "Full-stack applications, AI linguistic analyzers, RESTful APIs, and local engineering utilities.",
      empty: "No projects published yet.",
      adminButton: "Admin Dashboard",
      techStackLabel: "Stack",
      sourceCode: "GitHub",
      liveDemo: "Live →",
      backLink: "← Back to works",
      readMore: "Read details →",
    },
    blogPage: {
      badge: "Technical Essays",
      title: "Notes on Systems & Writing",
      subtitle:
        "Investigations on runtime testing, backend architecture, full-stack engineering, and structured AI tools.",
      empty: "No essays published yet.",
      adminButton: "Admin Dashboard",
      readArticle: "Read essay →",
      backLink: "← Back to essays",
      publishedOn: "Published",
    },
  },
  es: {
    nav: {
      about: "Prólogo",
      projects: "Obras",
      resume: "CV",
      blog: "Ensayos",
    },
    header: {
      name: "Cristhian V. Rojas",
      role: "Ingeniería de Sistemas y Literatura",
      status: "Disponible para oportunidades",
    },
    footer: {
      role: "Cochabamba, Bolivia",
      lead: "Ingeniería de software, arquitectura backend y herramientas lingüísticas. Contacto directo:",
      email: "cristhiabnvictorrm@gmail.com",
      github: "GitHub",
      linkedin: "LinkedIn",
      cvPdf: "PDF",
      colophon: "Compuesto en Source Serif 4 y JetBrains Mono.",
    },
    home: {
      location: "Cochabamba, Bolivia · Ingeniería de Sistemas",
      heroHeadlineStart: "Construir software que perdura, entre",
      heroHeadlineEmphasis: "estructura austera",
      heroHeadlineEnd: "y prosa clásica.",
      heroDescription:
        "Graduado con honores en Ingeniería de Sistemas (UCB) y finalista nacional ICPC. Diseño aplicaciones full-stack, motores de análisis dinámico y herramientas con IA—entre la contención de la literatura rusa clásica y la arquitectura sin adornos.",
      viewResume: "Abrir CV",
      exploreProjects: "Ver obras →",
      prologue: {
        eyebrow: "I. Prólogo",
        coordinates: [
          { label: "Origen", value: "Cochabamba, Bolivia" },
          { label: "Formación", value: 'UCB "San Pablo" · Titulación por Excelencia' },
          { label: "Investigación", value: "PUC Chile · Análisis Dinámico" },
          { label: "Mérito", value: "4to Nacional · ICPC Bolivia 2025" },
          { label: "Idiomas", value: "Español (Nativo) · Inglés (C1)" },
        ],
        paragraphs: [
          "Detrás de todo sistema duradero hay una disciplina silenciosa: modelos de datos claros, superficie mínima y cero tolerancia por el adorno innecesario. Esa misma austeridad es la que me atrae de la novela rusa del siglo XIX y la arquitectura brutalista.",
          "Durante seis semestres en la Universidad Católica Boliviana fui auxiliar de Estructuras de Datos y POO, además de presidir la Sociedad Científica SCEIS. Luego, investigando análisis dinámico en Python en la Pontificia Universidad Católica de Chile, confirmé lo fácil que es que una suite en verde oculte el comportamiento real en ejecución.",
          "Fuera del código corporativo, mis proyectos vuelven casi siempre a los libros y la palabra: unificar 14 librerías bolivianas bajo una sola API en Librerías Bolivia, analizar sintaxis española con Escriba y construir herramientas de lectura sobrias.",
        ],
        epigraph: "«Los manuscritos no arden.»",
        epigraphOriginal: "«Рукописи не горят.»",
        epigraphAuthor: "Mijaíl Bulgákov, El Maestro y Margarita",
      },
      readings: {
        eyebrow: "II. Marginalia",
        title: "Cuatro libros detrás de cómo escribo código.",
        subtitle:
          "Notas breves de literatura rusa clásica conectadas con decisiones reales de ingeniería.",
        nextButton: "Siguiente nota →",
        counterPrefix: "Nota",
        items: [
          {
            id: "bulgakov",
            index: "01",
            author: "Mijaíl Bulgákov",
            work: "El Maestro y Margarita",
            year: "1940",
            note: "La convicción de Bulgákov vale igual en el software: los esquemas explícitos, las fronteras limpias y las pruebas honestas sobreviven a modas y reescrituras apuradas.",
            practice: "En práctica: contratos JSON deterministas en Escriba con Gemini y FastAPI.",
          },
          {
            id: "dostoevsky",
            index: "02",
            author: "Fiódor Dostoievski",
            work: "Crimen y Castigo",
            year: "1866",
            note: "Dostoievski desarma toda excusa hasta que una mínima contradicción revela la verdad. Trazar código en ejecución exige esa misma lucidez cuando los tests pasan sin comprobar el fondo.",
            practice: "En práctica: trazado de ejecución en Python en la PUC Chile para detectar fallos silenciosos.",
          },
          {
            id: "tolstoy",
            index: "03",
            author: "León Tolstói",
            work: "Guerra y Paz",
            year: "1869",
            note: "Tolstói pasa sin esfuerzo del gesto íntimo a la escala continental. Un buen backend exige ambas escalas: rigor algorítmico al servicio de un dominio simple.",
            practice: "En práctica: deduplicación en cascada de 4 niveles entre 14 librerías bolivianas.",
          },
          {
            id: "chekhov",
            index: "04",
            author: "Antón Chéjov",
            work: "Cuentos Completos",
            year: "1899",
            note: "El rechazo de Chéjov a todo adjetivo sobrante conversa con el brutalismo: cada línea, borde o pieza en pantalla debe justificar su lugar por necesidad real.",
            practice: "En práctica: interfaces sobrias y APIs sin ruido decorativo.",
          },
        ],
      },
      featuredProjects: {
        eyebrow: "III. Obras Selectas",
        title: "Sistemas y Software",
        viewAll: "Catálogo completo →",
        empty: "Aún no hay obras archivadas.",
        inspect: "Leer detalle →",
        github: "GitHub",
        liveDemo: "En vivo",
      },
      recentEssays: {
        eyebrow: "IV. Ensayos Recientes",
        title: "Cuaderno Técnico",
        viewAll: "Todos los ensayos →",
        read: "Leer →",
      },
      craft: {
        eyebrow: "V. Instrumentario",
        title: "Material de Trabajo",
        columns: [
          {
            title: "Lenguajes e Interfaz",
            items: "TypeScript, JavaScript, Python, C++, Java, SQL, React, Next.js, Tailwind CSS",
          },
          {
            title: "Backend y Datos",
            items: "NestJS, FastAPI, Node.js, PostgreSQL, SQLite, SQLAlchemy, TypeORM, Prisma, APIs RESTful",
          },
          {
            title: "Análisis, IA y Oficio",
            items: "Google GenAI SDK, Claude Code, Cursor, Unit & Dynamic Testing, POO, Algoritmos, Docker, Linux, Git",
          },
        ],
      },
    },
    resume: {
      pageEyebrow: "Curriculum Vitae",
      printButton: "Imprimir",
      downloadPdfButton: "Descargar PDF",
      cvBadge: "EXPEDIENTE OFICIAL",
      pdfReady: "Edición ATS e Impresión",
      name: "Cristhian Victor Rojas Marquez",
      roleTitle: "Ingeniero de Software | Desarrollo Full-Stack y Asistido por IA",
      contactLocation: "Cochabamba, Bolivia",
      contactPhone: "+591 68301052",
      contactEmail: "cristhiabnvictorrm@gmail.com",
      contactGithub: "github.com/RedoRojo",
      contactLinkedin: "linkedin.com/in/rojasredo",
      summaryTitle: "Resumen Profesional",
      summaryText:
        "Graduado con honores en Ingeniería de Sistemas (Titulación por Excelencia) y finalista nacional de ICPC con experiencia práctica construyendo aplicaciones web full-stack, APIs RESTful y herramientas automatizadas de análisis de código. Sólida base en Programación Orientada a Objetos (POO), estructuras de datos, pruebas unitarias/dinámicas y frameworks modernos (React, Next.js, NestJS, FastAPI). Especializado en flujos de desarrollo asistidos por IA y SDKs de LLMs para entregar software limpio, probado y mantenible a alta velocidad en equipos ágiles.",
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
          label: "IA y Herramientas de Desarrollo",
          items:
            "Cursor, GitHub Copilot, Claude Code, Google GenAI SDK (Gemini API), Git, Docker, Linux",
          accent: false,
        },
        {
          label: "Prácticas de Ingeniería e Idiomas",
          items:
            "APIs RESTful, POO, Pruebas Unitarias y Dinámicas, Depuración, Estructuras de Datos y Algoritmos, CI/CD, Scrum • Español (Nativo), Inglés (Avanzado)",
          accent: true,
        },
      ],
      experienceTitle: "Experiencia Técnica",
      experiences: [
        {
          role: "Asistente de Investigación — Pruebas de Software y Análisis Dinámico",
          company: "Pontificia Universidad Católica de Chile",
          location: "Remoto",
          dates: "Ago 2025 — Dic 2025",
          bullets: [
            "Desarrollé una herramienta de análisis dinámico de código basada en Python para evaluar la confiabilidad del software y medir la efectividad de suites de pruebas automatizadas.",
            "Automaticé el trazado de ejecución en tiempo de corrida y la extracción de métricas para detectar fallos silenciosos donde las aserciones no coincidían con el comportamiento real del programa.",
          ],
        },
        {
          role: "Desarrollador de Software Full-Stack (Freelance)",
          company: "Sistema de Administración Empresarial",
          location: "Cochabamba, Bolivia",
          dates: "Jul 2025 — Nov 2025",
          bullets: [
            "Colaboré dentro de un equipo de desarrollo ágil para diseñar y construir una plataforma empresarial de administración full-stack usando React, NestJS y TypeScript.",
            "Diseñé y consumí APIs REST modulares aplicando principios estrictos de POO, implementando flujos de negocio de extremo a extremo, capas de validación y persistencia de datos relacional.",
          ],
        },
        {
          role: "Auxiliar de Docencia y Mentor de Programación Competitiva",
          company: 'Universidad Católica Boliviana "San Pablo"',
          location: "Cochabamba, Bolivia",
          dates: "Feb 2023 — Dic 2025",
          bullets: [
            "Impartí sesiones de laboratorio de pregrado y revisiones de código para Estructuras de Datos, Programación I (POO) e Introducción a la Programación durante 6 semestres.",
            "Mentoricé a más de 20 estudiantes de ingeniería en resolución de problemas algorítmicos, análisis de complejidad y depuración sistemática para programación competitiva.",
            "Co-organicé 4 competencias internas de programación universitaria, diseñando problemas algorítmicos, casos de prueba borde y sistemas de calificación automatizada.",
          ],
        },
      ],
      projectsTitle: "Proyectos Técnicos",
      projects: [
        {
          title: "Librerías Bolivia — Agregador de Precios de Libros y API",
          tech: "FastAPI, Next.js, TypeScript, PostgreSQL",
          repoUrl: "https://github.com/RedoRojo/librerias-bolivia-api",
          bullets: [
            "Construí una plataforma web full-stack y API RESTful que consolida precios y disponibilidad de libros en tiempo real de 14 librerías y editoriales de Bolivia.",
            "Desarrollé adaptadores automatizados de ingesta de datos consumiendo APIs REST de Shopify y WooCommerce, junto con un motor de deduplicación en cascada de 4 niveles y normalización de editoriales.",
            "Implementé un frontend responsivo en Next.js (React, TypeScript, Tailwind CSS) y búsquedas difusas en PostgreSQL (pg_trgm, unaccent), respaldado por pruebas unitarias automatizadas.",
          ],
        },
        {
          title: "Escriba — Analizador Lingüístico con IA para Español",
          tech: "Python, FastAPI, Gemini 2.5 SDK, Tailwind CSS",
          repoUrl: "https://github.com/RedoRojo/escriba",
          bullets: [
            "Desarrollé una aplicación web nativa de IA integrando Google GenAI SDK (Gemini 2.5 Flash) mediante un backend REST en FastAPI para analizar textos y clasificar errores de ortografía, gramática, puntuación, semántica y estilo.",
            "Diseñé esquemas de salida JSON estructurados y prompts de sistema fundamentados en investigación (arXiv:2511.01615) con limitación de tasa por IP e interfaz interactiva de corrección en línea.",
          ],
        },
      ],
      educationTitle: "Educación",
      educationDegree:
        "Licenciatura en Ingeniería de Sistemas — Graduado con Honores (Titulación por Excelencia)",
      educationUniversity: 'Universidad Católica Boliviana "San Pablo" • Cochabamba, Bolivia',
      educationDates: "Feb 2021 — Feb 2026",
      achievementsTitle: "Logros y Liderazgo",
      achievements: [
        {
          title: "4to Lugar Nacional — Final Sudamericana ICPC Sur (Nov 2025)",
          description:
            "Clasificado entre los mejores equipos universitarios de programación competitiva de Bolivia resolviendo problemas algorítmicos complejos bajo estrictos límites de tiempo.",
        },
        {
          title: "Presidente — Sociedad Científica de Ingeniería de Sistemas, SCEIS UCB (Feb 2024 — Dic 2025)",
          description:
            "Lideré iniciativas de investigación estudiantil, talleres técnicos y eventos académicos de programación para el departamento de Ingeniería de Sistemas.",
        },
        {
          title: "Reconocimientos en Programación Competitiva",
          description:
            'Medalla de Plata en el concurso de programación "SanSi Cup 2023" (Dic 2023) y 7mo Lugar Nacional en la Preliminar Boliviana de ICPC 2023 (Sep 2023).',
        },
      ],
    },
    projectsPage: {
      badge: "Catálogo de Obras",
      title: "Proyectos y Software Open Source",
      subtitle:
        "Aplicaciones full-stack, analizadores lingüísticos con IA, APIs RESTful y herramientas de ingeniería.",
      empty: "Aún no hay proyectos publicados.",
      adminButton: "Panel de Administración",
      techStackLabel: "Tecnologías",
      sourceCode: "GitHub",
      liveDemo: "En vivo →",
      backLink: "← Volver a obras",
      readMore: "Leer detalle →",
    },
    blogPage: {
      badge: "Ensayos Técnicos",
      title: "Notas sobre Sistemas y Escritura",
      subtitle:
        "Artículos sobre pruebas dinámicas, arquitectura backend, desarrollo full-stack e ingeniería con LLMs.",
      empty: "Aún no hay artículos publicados.",
      adminButton: "Panel de Administración",
      readArticle: "Leer ensayo →",
      backLink: "← Volver a ensayos",
      publishedOn: "Publicado",
    },
  },
};

export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      resume: "CV",
      blog: "Blog",
    },
    header: {
      name: "CRISTHIAN V. ROJAS MARQUEZ",
      role: "Software Engineer | Full-Stack & AI",
      status: "Available for opportunities",
    },
    footer: {
      role: "Software Engineer | Full-Stack & AI-Assisted Development",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    home: {
      roleBadge: "SOFTWARE ENGINEER • FULL-STACK & AI",
      location: "Cochabamba, Bolivia",
      heroTitle: "Cristhian Victor\nRojas Marquez",
      heroDescription:
        "Systems Engineering Honors graduate and ICPC national finalist building full-stack web applications, RESTful APIs, AI-native tools, and automated dynamic code analysis engines.",
      viewResume: "View Resume",
      exploreProjects: "Explore Projects",
      recruiter: {
        title: "Recruiter Overview",
        badge: "Available Immediately",
        targetRolesLabel: "Target Roles",
        targetRolesValue: "Full-Stack / Backend / AI Engineer",
        educationLabel: "Education",
        educationDegree: "B.S. Systems Engineering (Honors)",
        educationSchool: "Universidad Católica Boliviana (UCB)",
        locationLabel: "Location",
        locationValue: "Cochabamba, BO",
        locationModality: "Open to Remote",
        contactLabel: "Contact & Languages",
        contactLanguages: "Spanish (Native) / English (Advanced)",
        contactAction: "cristhiabnvictorrm@gmail.com",
      },
      skills: {
        title: "Technical Stack",
        subtitle: "Core technologies, frameworks, and engineering practices",
        frontendCategory: "Languages & Frontend",
        backendCategory: "Backend & Databases",
        qaCategory: "AI, Tooling & Practices",
      },
      featuredProjects: {
        title: "Featured Projects",
        viewAll: "View All →",
        empty: "No projects published yet.",
        github: "GitHub",
        liveDemo: "Live Demo",
      },
    },
    resume: {
      printButton: "Print View",
      downloadPdfButton: "Download Official PDF",
      cvBadge: "CURRICULUM VITAE",
      pdfReady: "ATS & Print Ready",
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
      badge: "ENGINEERING PORTFOLIO",
      title: "Projects & Open Source Contributions",
      subtitle:
        "A comprehensive showcase of full-stack web applications, AI-native tools, RESTful APIs, and developer utilities.",
      empty: "No projects published yet in database.",
      adminButton: "Admin Dashboard",
      techStackLabel: "Tech Stack",
      sourceCode: "Source Code (GitHub)",
      liveDemo: "Live Demo →",
      backLink: "← Back to Projects",
    },
    blogPage: {
      badge: "TECHNICAL WRITING",
      title: "Development Journal & Notes",
      subtitle:
        "Technical write-ups, architecture deep-dives, and engineering notes on full-stack systems, AI workflows, and software analysis.",
      empty: "No posts published yet.",
      adminButton: "Admin Dashboard",
      readArticle: "Read Article →",
      backLink: "← Back to Blog",
      publishedOn: "Published on",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      resume: "Currículum",
      blog: "Blog",
    },
    header: {
      name: "CRISTHIAN V. ROJAS MARQUEZ",
      role: "Ingeniero de Software | Full-Stack e IA",
      status: "Disponible para oportunidades",
    },
    footer: {
      role: "Ingeniero de Software | Desarrollo Full-Stack y Asistido por IA",
      email: "Correo",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    home: {
      roleBadge: "INGENIERO DE SOFTWARE • FULL-STACK E IA",
      location: "Cochabamba, Bolivia",
      heroTitle: "Cristhian Victor\nRojas Marquez",
      heroDescription:
        "Graduado con honores en Ingeniería de Sistemas y finalista nacional ICPC, especializado en aplicaciones web full-stack, APIs RESTful, herramientas nativas con IA y análisis dinámico automatizado de código.",
      viewResume: "Ver Currículum",
      exploreProjects: "Explorar Proyectos",
      recruiter: {
        title: "Resumen para Reclutadores",
        badge: "Disponibilidad Inmediata",
        targetRolesLabel: "Roles Objetivo",
        targetRolesValue: "Ingeniero Full-Stack / Backend / IA",
        educationLabel: "Educación",
        educationDegree: "Ing. de Sistemas (Con Honores)",
        educationSchool: "Universidad Católica Boliviana (UCB)",
        locationLabel: "Ubicación",
        locationValue: "Cochabamba, Bolivia",
        locationModality: "Abierto a Remoto",
        contactLabel: "Contacto e Idiomas",
        contactLanguages: "Español (Nativo) / Inglés (Avanzado)",
        contactAction: "cristhiabnvictorrm@gmail.com",
      },
      skills: {
        title: "Stack Técnico",
        subtitle: "Tecnologías principales, frameworks y prácticas de ingeniería",
        frontendCategory: "Lenguajes y Frontend",
        backendCategory: "Backend y Bases de Datos",
        qaCategory: "IA, Herramientas y Prácticas",
      },
      featuredProjects: {
        title: "Proyectos Destacados",
        viewAll: "Ver Todos →",
        empty: "Aún no hay proyectos publicados.",
        github: "GitHub",
        liveDemo: "Demostración",
      },
    },
    resume: {
      printButton: "Imprimir Vista",
      downloadPdfButton: "Descargar PDF Oficial",
      cvBadge: "CURRÍCULUM VITAE",
      pdfReady: "Optimizado para ATS e Impresión",
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
      badge: "PORTAFOLIO DE INGENIERÍA",
      title: "Proyectos y Contribuciones Open Source",
      subtitle:
        "Muestra completa de aplicaciones web full-stack, herramientas con IA, APIs RESTful y utilidades para desarrolladores.",
      empty: "Aún no hay proyectos publicados en la base de datos.",
      adminButton: "Panel de Administración",
      techStackLabel: "Stack Tecnológico",
      sourceCode: "Código Fuente (GitHub)",
      liveDemo: "Ver Demo →",
      backLink: "← Volver a Proyectos",
    },
    blogPage: {
      badge: "PUBLICACIONES TÉCNICAS",
      title: "Diario de Desarrollo y Notas",
      subtitle:
        "Artículos técnicos, arquitectura de software y notas de desarrollo sobre sistemas full-stack, flujos con IA y análisis de código.",
      empty: "Aún no hay artículos publicados.",
      adminButton: "Panel de Administración",
      readArticle: "Leer Artículo →",
      backLink: "← Volver al Blog",
      publishedOn: "Publicado el",
    },
  },
};

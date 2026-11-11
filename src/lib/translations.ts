export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "I. Prologue",
      projects: "II. Works",
      resume: "III. Dossier",
      blog: "IV. Essays",
    },
    header: {
      monogram: "CR",
      name: "CRISTHIAN V. ROJAS MARQUEZ",
      role: "Archive Vol. I • Systems Engineering & Literature",
      status: "Available for engineering roles",
    },
    footer: {
      title: "Colophon & Correspondence",
      lead: "Open to full-stack engineering, backend architecture, and AI tooling. Direct dispatch—no intermediary noise.",
      role: "Edited in Cochabamba, Bolivia • Type, Concrete & Code",
      email: "cristhiabnvictorrm@gmail.com",
      github: "GitHub",
      linkedin: "LinkedIn",
      cvPdf: "PDF Dossier",
      editionNote: "Printed in digital rag paper & monolithic basalt. Typefaces: Source Serif 4, Oswald, JetBrains Mono.",
    },
    home: {
      ledgerStrip: "VOL. I // BILINGUAL EDITION // COCHABAMBA, BOLIVIA // 17°23′S 66°09′W",
      roleBadge: "N° 01 • SOFTWARE ENGINEER",
      location: "Cochabamba, Bolivia",
      heroTitleFirst: "Cristhian Victor",
      heroTitleLast: "Rojas Marquez",
      heroDescription:
        "Honors Systems Engineering graduate and ICPC national finalist. I build full-stack platforms, RESTful APIs, dynamic analysis engines, and AI linguistic tools—drawn equally to classical Russian prose, brutalist concrete, and Soviet Constructivism.",
      viewResume: "Open Dossier (CV)",
      exploreProjects: "Index of Works",
      plate: {
        tabConstruct: "Plate I · Construct",
        tabPortrait: "Plate II · Portrait Slot",
        captionConstruct:
          'Plate I — Geometric composition "The Manuscript & The Wedge" (Lissitzky Study), Cochabamba, 2026.',
        captionPortrait:
          "Plate II — Architectural frame reserved for high-contrast author portrait (monochrome press edition).",
        portraitPlaceholderTitle: "MONOCHROME PORTRAIT SLOT",
        portraitPlaceholderDesc:
          "Drop a high-contrast black & white photograph at public/portrait.jpg to replace this archival framing plate.",
      },
      prologue: {
        eyebrow: "I. Prologue",
        title: "Expedient of the Author",
        specHeading: "Technical Colophon",
        specs: [
          { label: "Origin", value: "Cochabamba, Bolivia" },
          { label: "Formation", value: 'UCB "San Pablo" — Graduation by Excellence' },
          { label: "Discipline", value: "Full-Stack, Dynamic Analysis & AI Systems" },
          { label: "Standing", value: "4th Nationwide — ICPC Bolivia (2025)" },
          { label: "Languages", value: "Spanish (Native), English (C1/Advanced)" },
          { label: "Repository", value: "github.com/RedoRojo" },
        ],
        paragraphs: [
          "Every durable program resembles a well-edited nineteenth-century novel: behind a stark, unornamented facade sits an exacting structural blueprint where every module earns its keep.",
          "Across five years at Universidad Católica Boliviana—three of them teaching Data Structures and OOP, and two presiding over the Systems Engineering Scientific Society—I learned to value clarity under strict constraints. Later, researching dynamic code analysis at PUC Chile taught me not to trust green test suites blindly when runtime traces tell another story.",
          "Outside systems work, my projects gravitate naturally toward books and written language: unifying 14 Bolivian bookstores under one API in Librerías Bolivia, parsing Spanish syntax with Escriba, and shaping digital reading tools.",
        ],
        epigraphQuote: "«Manuscripts don't burn.»",
        epigraphCyrillic: "«Рукописи не горят.»",
        epigraphAuthor: "Mikhail Bulgakov — The Master and Margarita",
      },
      annex: {
        eyebrow: "II. Technical Annex",
        title: "Axioms & Material Inventory",
        subtitle: "Verified engineering coordinates alongside the stack used to build them.",
        axiomsTitle: "Verified Constraints",
        axioms: [
          { formula: "ICPC ≡ Top 4", detail: "Ranked 4th nationwide in the ICPC South America South Finals (Nov 2025) & Silver at SanSi Cup." },
          { formula: "PUC ∈ {Trace}", detail: "Research Assistant in Python dynamic analysis—catching silent test failures via runtime tracing." },
          { formula: "UCB · 6 sem.", detail: "Taught Data Structures & OOP laboratories; mentored 20+ students and presided over SCEIS UCB." },
          { formula: "14 Shops → 1", detail: "Consolidated 14 Bolivian bookstores with a 4-level cascade deduplicator and pg_trgm search." },
        ],
        categoriesTitle: "Instrumentarium",
        skills: {
          frontendCategory: "01 / Languages & Interface",
          frontendItems: ["TypeScript", "JavaScript (ES6+)", "Python", "C++", "Java", "SQL", "React", "Next.js", "Tailwind CSS"],
          backendCategory: "02 / Engine & Persistence",
          backendItems: ["NestJS", "FastAPI", "Node.js", "PostgreSQL", "SQLite", "SQLAlchemy", "TypeORM", "Prisma ORM", "RESTful APIs"],
          qaCategory: "03 / AI, Analysis & Press",
          qaItems: ["Google GenAI SDK", "Claude Code", "Cursor", "Unit & Dynamic Testing", "OOP", "Algorithms", "Docker", "Linux", "Git"],
        },
      },
      marginalia: {
        eyebrow: "III. Author's Marginalia",
        title: "Field Notes on Literature & Brutal Form",
        subtitle:
          "How classical Russian fiction and concrete architecture shape the way I write, debug, and structure software.",
        canonTitle: "Foundational Reading Shelf",
        readoutLabel: "Archive Dispatch",
        nextButton: "Consult Next Note",
        verifiedStamp: "Record",
        items: [
          {
            id: "bulgakov",
            code: "NOTE 01",
            work: "The Master and Margarita",
            author: "Mikhail Bulgakov",
            year: "1940",
            reflection:
              "Bulgakov's premise that enduring work survives fire resonates directly with software craft: clean abstractions, explicit schemas, and honest tests outlive trends, frameworks, and urgent rewrites.",
            tieIn: "Engineering echo: Structuring deterministic JSON schemas in Escriba.",
          },
          {
            id: "dostoevsky",
            code: "NOTE 02",
            work: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            year: "1866",
            reflection:
              "Dostoevsky dissects guilt down to a single overlooked contradiction. Dynamic code analysis requires the same patience: a test suite can return all green while an uninspected mutation quietly betrays the program's intent.",
            tieIn: "Engineering echo: Tracing silent test failures at PUC Chile.",
          },
          {
            id: "tolstoy",
            code: "NOTE 03",
            work: "War and Peace",
            author: "Leo Tolstoy",
            year: "1869",
            reflection:
              "Tolstoy moves without friction between intimate human decisions and the geometry of vast campaigns. Good backend architecture demands that exact double vision—micro-level algorithmic rigor serving macro-level domain simplicity.",
            tieIn: "Engineering echo: 4-level deduplication across 14 heterogeneous bookstores.",
          },
          {
            id: "chekhov",
            code: "NOTE 04",
            work: "Collected Short Stories",
            author: "Anton Chekhov",
            year: "1899",
            reflection:
              "Chekhov's structural austerity meets brutalist architecture: every visible load-bearing rule, square edge, and line of code on screen should justify its presence by structural necessity—not decorative habit.",
            tieIn: "Engineering echo: Zero ornamental bloat in typographic & API design.",
          },
        ],
      },
      featuredProjects: {
        eyebrow: "IV. Published Works",
        title: "Selected Works & Systems",
        viewAll: "Open Full Catalog →",
        empty: "No works archived yet in catalog.",
        github: "Source Repository",
        liveDemo: "Live Edition",
        inspectPlate: "Read Monograph →",
        platePrefix: "WORK",
      },
      recentEssays: {
        eyebrow: "V. Technical Essays",
        title: "Table of Recent Notes",
        subtitle: "Long-form devlogs on runtime tracing, search indexing, and structured LLM engineering.",
        viewAll: "All Essays →",
        empty: "No essays cataloged yet.",
        readEntry: "Read →",
      },
    },
    resume: {
      pageEyebrow: "III // TECHNICAL DOSSIER",
      pageTitle: "Curriculum Vitae",
      pageSubtitle: "Formal record of formation, software research, production systems, and competitive programming.",
      printButton: "Print Dossier",
      downloadPdfButton: "Download Official PDF",
      cvBadge: "OFFICIAL RECORD",
      pdfReady: "ATS & Print Edition",
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
      badge: "II // CATALOG OF WORKS",
      title: "Engineered Systems & Open Source",
      subtitle:
        "Full-stack platforms, linguistic AI analyzers, RESTful APIs, and local tooling cataloged as technical plates.",
      empty: "No projects published yet in database.",
      adminButton: "Admin Dashboard",
      techStackLabel: "Instrumentarium",
      sourceCode: "Repository (GitHub)",
      liveDemo: "Live Edition →",
      backLink: "← Return to Catalog",
      inspectDetails: "Open Monograph →",
    },
    blogPage: {
      badge: "IV // CRITICAL ESSAYS & LOGS",
      title: "Engineering Chronicles & Notes",
      subtitle:
        "Architectural deep-dives, dynamic testing investigations, and dispatches from full-stack and AI development.",
      empty: "No posts published yet.",
      adminButton: "Admin Dashboard",
      readArticle: "Read Essay →",
      backLink: "← Return to Index",
      publishedOn: "Published",
    },
  },
  es: {
    nav: {
      about: "I. Prólogo",
      projects: "II. Obras",
      resume: "III. Expediente",
      blog: "IV. Crónicas",
    },
    header: {
      monogram: "CR",
      name: "CRISTHIAN V. ROJAS MARQUEZ",
      role: "Archivo Tomo I • Ingeniería de Sistemas y Literatura",
      status: "Disponible para oportunidades de ingeniería",
    },
    footer: {
      title: "Colofón y Correspondencia",
      lead: "Abierto a proyectos de ingeniería full-stack, arquitectura backend y herramientas con IA. Contacto directo, sin rodeos.",
      role: "Editado en Cochabamba, Bolivia • Tipografía, Concreto y Código",
      email: "cristhiabnvictorrm@gmail.com",
      github: "GitHub",
      linkedin: "LinkedIn",
      cvPdf: "Expediente PDF",
      editionNote: "Compuesto en papel de archivo digital y basalto monolítico. Familias: Source Serif 4, Oswald, JetBrains Mono.",
    },
    home: {
      ledgerStrip: "TOMO I // EDICIÓN BILINGÜE // COCHABAMBA, BOLIVIA // 17°23′S 66°09′O",
      roleBadge: "N° 01 • INGENIERO DE SOFTWARE",
      location: "Cochabamba, Bolivia",
      heroTitleFirst: "Cristhian Victor",
      heroTitleLast: "Rojas Marquez",
      heroDescription:
        "Graduado con honores en Ingeniería de Sistemas y finalista nacional ICPC. Diseño plataformas full-stack, APIs RESTful, motores de análisis dinámico y herramientas lingüísticas con IA—entre la novela rusa clásica, el hormigón brutalista y el constructivismo soviético.",
      viewResume: "Abrir Expediente (CV)",
      exploreProjects: "Índice de Obras",
      plate: {
        tabConstruct: "Lámina I · Constructo",
        tabPortrait: "Lámina II · Retrato",
        captionConstruct:
          'Lámina I — Composición geométrica «El Manuscrito y la Cuña» (Estudio Lissitzky), Cochabamba, 2026.',
        captionPortrait:
          "Lámina II — Marco arquitectónico reservado para retrato en blanco y negro de alto contraste.",
        portraitPlaceholderTitle: "MARCO PARA RETRATO DE PRENSA",
        portraitPlaceholderDesc:
          "Coloca una fotografía tuya en alto contraste en public/portrait.jpg cuando desees reemplazar esta lámina geométrica.",
      },
      prologue: {
        eyebrow: "I. Prólogo",
        title: "Expediente del Autor",
        specHeading: "Colofón Técnico",
        specs: [
          { label: "Origen", value: "Cochabamba, Bolivia" },
          { label: "Formación", value: 'UCB "San Pablo" — Titulación por Excelencia' },
          { label: "Disciplina", value: "Full-Stack, Análisis Dinámico e IA" },
          { label: "Mérito", value: "4to Lugar Nacional — ICPC Bolivia (2025)" },
          { label: "Idiomas", value: "Español (Nativo), Inglés (Avanzado)" },
          { label: "Archivo", value: "github.com/RedoRojo" },
        ],
        paragraphs: [
          "Todo programa duradero se parece a una novela clásica bien editada: detrás de una fachada austera y sin adornos gratuitos existe una estructura implacable donde cada pieza cumple un propósito.",
          "Durante cinco años en la Universidad Católica Boliviana—tres como auxiliar de Estructuras de Datos y POO, y dos presidiendo la Sociedad Científica SCEIS—aprendí a valorar la claridad bajo restricciones estrictas. Luego, investigando análisis dinámico en la PUC de Chile, confirmé que una suite en verde puede mentir si no se traza la ejecución real.",
          "Fuera del código corporativo, mis proyectos regresan siempre a los libros y la palabra: unificar 14 librerías bolivianas bajo una sola API en Librerías Bolivia, analizar prosa española con Escriba y fabricar herramientas de lectura.",
        ],
        epigraphQuote: "«Los manuscritos no arden.»",
        epigraphCyrillic: "«Рукописи не горят.»",
        epigraphAuthor: "Mijaíl Bulgákov — El Maestro y Margarita",
      },
      annex: {
        eyebrow: "II. Anexo Técnico",
        title: "Axiomas e Inventario Material",
        subtitle: "Coordenadas verificables de ingeniería junto al stack con el que toman forma.",
        axiomsTitle: "Restricciones Verificadas",
        axioms: [
          { formula: "ICPC ≡ Top 4", detail: "4to lugar nacional en la Final Sudamericana ICPC Sur (Nov 2025) y Plata en SanSi Cup." },
          { formula: "PUC ∈ {Traza}", detail: "Asistente de Investigación en Python para detectar fallos silenciosos mediante trazado dinámico." },
          { formula: "UCB · 6 sem.", detail: "Auxiliar en Estructuras de Datos y POO; mentor de +20 estudiantes y Presidente de SCEIS UCB." },
          { formula: "14 Tiendas → 1", detail: "Catálogo unificado de 14 librerías bolivianas con deduplicación en cascada y PostgreSQL pg_trgm." },
        ],
        categoriesTitle: "Instrumentario",
        skills: {
          frontendCategory: "01 / Lenguajes e Interfaz",
          frontendItems: ["TypeScript", "JavaScript (ES6+)", "Python", "C++", "Java", "SQL", "React", "Next.js", "Tailwind CSS"],
          backendCategory: "02 / Motor y Persistencia",
          backendItems: ["NestJS", "FastAPI", "Node.js", "PostgreSQL", "SQLite", "SQLAlchemy", "TypeORM", "Prisma ORM", "RESTful APIs"],
          qaCategory: "03 / IA, Pruebas y Prensa",
          qaItems: ["Google GenAI SDK", "Claude Code", "Cursor", "Unit & Dynamic Testing", "POO", "Algoritmos", "Docker", "Linux", "Git"],
        },
      },
      marginalia: {
        eyebrow: "III. Marginalia del Autor",
        title: "Notas sobre Literatura Rusa y Forma Brutalista",
        subtitle:
          "Cómo los clásicos rusos y la arquitectura sin concesiones moldean mi manera de diseñar y depurar software.",
        canonTitle: "Estante Fundacional",
        readoutLabel: "Despacho de Archivo",
        nextButton: "Consultar Siguiente Ficha",
        verifiedStamp: "Ficha",
        items: [
          {
            id: "bulgakov",
            code: "FICHA 01",
            work: "El Maestro y Margarita",
            author: "Mijaíl Bulgákov",
            year: "1940",
            reflection:
              "La convicción de Bulgákov de que la obra honesta sobrevive al fuego aplica intacta a la ingeniería: las abstracciones limpias, los esquemas explícitos y las pruebas rigurosas sobreviven a modas y reescrituras.",
            tieIn: "Eco técnico: Esquemas JSON deterministas en Escriba.",
          },
          {
            id: "dostoevsky",
            code: "FICHA 02",
            work: "Crimen y Castigo",
            author: "Fiódor Dostoievski",
            year: "1866",
            reflection:
              "Dostoievski desnuda la falla moral hasta una contradicción oculta. El análisis dinámico exige idéntica lucidez: una suite de tests puede pasar en verde mientras el estado interno traiciona al sistema.",
            tieIn: "Eco técnico: Detección de fallos silenciosos en la PUC Chile.",
          },
          {
            id: "tolstoy",
            code: "FICHA 03",
            work: "Guerra y Paz",
            author: "León Tolstói",
            year: "1869",
            reflection:
              "Tolstói alterna sin fricción entre el gesto mínimo de un personaje y la geometría de un frente entero. Una buena arquitectura exige esa doble escala: precisión algorítmica al servicio del dominio.",
            tieIn: "Eco técnico: Motor de deduplicación en cascada en Librerías Bolivia.",
          },
          {
            id: "chekhov",
            code: "FICHA 04",
            work: "Cuentos Completos",
            author: "Antón Chéjov",
            year: "1899",
            reflection:
              "La economía narrativa de Chéjov dialoga con el brutalismo: cada muro de hormigón visto, cada borde recto y cada línea de código deben sostener estructura real, nunca maquillaje decorativo.",
            tieIn: "Eco técnico: Minimalismo tipográfico y APIs sin ruido.",
          },
        ],
      },
      featuredProjects: {
        eyebrow: "IV. Obras Publicadas",
        title: "Obras y Sistemas Selectos",
        viewAll: "Abrir Catálogo Completo →",
        empty: "Aún no hay obras archivadas en el catálogo.",
        github: "Código Fuente",
        liveDemo: "Edición en Vivo",
        inspectPlate: "Leer Monografía →",
        platePrefix: "OBRA",
      },
      recentEssays: {
        eyebrow: "V. Crónicas Técnicas",
        title: "Índice de Artículos Recientes",
        subtitle: "Ensayos breves sobre trazado en tiempo de ejecución, búsqueda difusa e ingeniería con LLMs.",
        viewAll: "Todas las Crónicas →",
        empty: "Aún no hay crónicas catalogadas.",
        readEntry: "Leer →",
      },
    },
    resume: {
      pageEyebrow: "III // EXPEDIENTE TÉCNICO",
      pageTitle: "Curriculum Vitae",
      pageSubtitle: "Registro formal de trayectoria académica, investigación, sistemas en producción y competencias algorítmicas.",
      printButton: "Imprimir Expediente",
      downloadPdfButton: "Descargar PDF Oficial",
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
      badge: "II // CATÁLOGO DE OBRAS",
      title: "Sistemas y Software Open Source",
      subtitle:
        "Plataformas full-stack, analizadores lingüísticos con IA, APIs RESTful y herramientas catalogadas en formato de monografía.",
      empty: "Aún no hay proyectos publicados en la base de datos.",
      adminButton: "Panel de Administración",
      techStackLabel: "Instrumentario",
      sourceCode: "Repositorio (GitHub)",
      liveDemo: "Edición en Vivo →",
      backLink: "← Volver al Catálogo",
      inspectDetails: "Abrir Monografía →",
    },
    blogPage: {
      badge: "IV // CRÓNICAS Y ENSAYOS TÉCNICOS",
      title: "Cuaderno de Ingeniería y Notas",
      subtitle:
        "Artículos sobre arquitectura de software, análisis dinámico de pruebas e ingeniería asistida por modelos de lenguaje.",
      empty: "Aún no hay artículos publicados.",
      adminButton: "Panel de Administración",
      readArticle: "Leer Ensayo →",
      backLink: "← Volver al Índice",
      publishedOn: "Publicado",
    },
  },
};

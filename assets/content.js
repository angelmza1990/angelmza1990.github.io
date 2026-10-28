/*
 * Todo el contenido del sitio vive acá. Cada texto visible tiene su versión
 * en español (es) y en inglés (en). Las fechas van como "AAAA-MM"; `end: null`
 * significa "actualidad".
 *
 * Para agregar un trabajo o un proyecto, copiá un bloque existente de la
 * lista correspondiente y editalo. No hace falta tocar el HTML.
 */
window.CONTENT = {
  name: "Angel Villanueva",
  headline: {
    es: "Doctor en Matemáticas · Científico de Datos · Desarrollador de sistemas de IA",
    en: "PhD in Mathematics · Data Scientist · AI Systems Developer",
  },
  location: { es: "Mendoza, Argentina", en: "Mendoza, Argentina" },
  summary: {
    es: "Matemático y científico de datos con más de 10 años de experiencia combinando docencia universitaria, investigación académica y ciencia de datos aplicada. Hoy desarrollo software para sistemas de inteligencia artificial, y antes lideré un equipo en Scale AI dedicado a producir datos de entrenamiento de alta calidad para modelos de lenguaje. Me apasiona traducir teoría rigurosa en soluciones prácticas.",
    en: "Mathematician and data scientist with over 10 years of combined experience in university teaching, academic research and applied data science. I currently build software for artificial intelligence systems, and previously led a team at Scale AI producing high-quality training data for language models. I enjoy turning rigorous theory into practical solutions.",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/villanuevaangel",
    github: "https://github.com/angelmza1990",
    email: "angelmza1990@gmail.com",
    // Ruta a un PDF dentro de la carpeta (ej. "assets/cv-en.pdf") para mostrar
    // el botón "Descargar CV". Revisá que el PDF no tenga datos que no quieras
    // publicar (por ejemplo, el teléfono).
    cv: { es: null, en: null },
  },

  experience: [
    {
      group: "industry",
      role: { es: "Desarrollador de Software (Sistemas de IA)", en: "Software Developer (AI Systems)" },
      org: "micro1",
      location: { es: "San Francisco, EE.UU. · Remoto", en: "San Francisco, USA · Remote" },
      start: "2025-11", end: null,
      bullets: [],
    },
    {
      group: "industry",
      role: { es: "Jefe de Equipo de Desarrollo", en: "Development Team Lead" },
      org: "Scale AI",
      location: { es: "San Francisco, EE.UU. · Remoto", en: "San Francisco, USA · Remote" },
      start: "2025-02", end: "2025-11",
      bullets: [
        {
          es: "Liderazgo de un equipo de desarrollo dedicado a producir datos de entrenamiento de alta calidad para modelos de lenguaje.",
          en: "Led a development team producing high-quality training data for large language models.",
        },
        {
          es: "Aplicación de razonamiento matemático en tareas de evaluación STEM.",
          en: "Applied mathematical reasoning to STEM evaluation tasks.",
        },
      ],
    },
    {
      group: "industry",
      role: { es: "Desarrollador de Software para Entrenamiento de IA", en: "Software Developer for AI Training" },
      org: "Scale AI",
      location: { es: "San Francisco, EE.UU. · Remoto", en: "San Francisco, USA · Remote" },
      start: "2023-08", end: "2025-03",
      bullets: [],
    },
    {
      group: "industry",
      role: { es: "Desarrollador Backend", en: "Backend Developer" },
      org: "Quinto Impacto",
      location: { es: "Argentina", en: "Argentina" },
      start: "2023-06", end: "2023-08",
      bullets: [],
    },
    {
      group: "industry",
      role: { es: "Científico de Datos", en: "Data Scientist" },
      org: "Egg Cooperation",
      location: { es: "Argentina", en: "Argentina" },
      start: "2021-09", end: "2023-06",
      bullets: [
        {
          es: "Desarrollo de pipelines de machine learning y sistemas de análisis de datos con Python.",
          en: "Built machine learning pipelines and data analysis systems in Python.",
        },
        {
          es: "Construcción de flujos ETL y tableros interactivos en Power BI.",
          en: "Built ETL workflows and interactive Power BI dashboards.",
        },
      ],
    },
    {
      group: "teaching",
      role: { es: "Profesor Universitario de Matemática y Física", en: "University Professor of Mathematics and Physics" },
      org: "Universidad Nacional de Cuyo",
      location: { es: "Mendoza, Argentina", en: "Mendoza, Argentina" },
      start: "2020-03", end: "2024-03",
      bullets: [
        {
          es: "Docencia en Análisis Real, Álgebra Abstracta, Álgebra Lineal, Probabilidad y Estadística y Estructuras Matemáticas para Física.",
          en: "Taught Real Analysis, Abstract Algebra, Linear Algebra, Probability and Statistics, and Mathematical Structures for Physics.",
        },
        {
          es: "Codirección de 2 tesis doctorales; miembro de las comisiones académicas de doctorado y de profesorado.",
          en: "Co-supervised 2 doctoral theses; member of the doctoral and teacher-training academic committees.",
        },
        {
          es: "Diseño de programas de estudio y materiales de evaluación.",
          en: "Designed course syllabi and assessment materials.",
        },
      ],
    },
    {
      group: "teaching",
      role: { es: "Profesor — Ciencia de Datos y Analítica de Negocios", en: "Lecturer — Data Science and Business Analytics" },
      org: "ADEN University",
      location: { es: "Argentina", en: "Argentina" },
      start: "2023-09", end: "2023-10",
      bullets: [
        {
          es: "Módulo intensivo sobre toma de decisiones basada en datos y métodos cuantitativos para estudiantes de negocios.",
          en: "Intensive module on data-driven decision making and quantitative methods for business students.",
        },
      ],
    },
    {
      group: "teaching",
      role: { es: "Profesor Universitario de Matemática", en: "University Professor of Mathematics" },
      org: "Universidad Nacional de Córdoba",
      location: { es: "Córdoba, Argentina", en: "Córdoba, Argentina" },
      start: "2014-04", end: "2020-03",
      bullets: [
        {
          es: "Docencia en Cálculo, Análisis Real y Complejo, Teoría de Números, Álgebra y Matemática Discreta.",
          en: "Taught Calculus, Real and Complex Analysis, Number Theory, Algebra and Discrete Mathematics.",
        },
        {
          es: "Colaboración en diseño curricular y mesas examinadoras.",
          en: "Contributed to curriculum design and examination boards.",
        },
      ],
    },
    {
      group: "teaching",
      role: { es: "Docente Auxiliar de Matemática", en: "Teaching Assistant in Mathematics" },
      org: "Universidad Nacional de San Luis",
      location: { es: "San Luis, Argentina", en: "San Luis, Argentina" },
      start: "2011-05", end: "2013-03",
      bullets: [
        { es: "Clases prácticas de Cálculo y Álgebra Lineal.", en: "Led problem sessions in Calculus and Linear Algebra." },
      ],
    },
    {
      group: "research",
      role: { es: "Investigador Posdoctoral", en: "Postdoctoral Researcher" },
      org: "CONICET",
      location: { es: "Córdoba, Argentina", en: "Córdoba, Argentina" },
      start: "2018-04", end: "2021-04",
      bullets: [
        {
          es: "Investigación en teoría algebraica de números: representaciones de Galois de curvas superelípticas y distribución de autovalores de operadores de Hecke y Casimir.",
          en: "Research in algebraic number theory: Galois representations of superelliptic curves and the distribution of Hecke and Casimir eigenvalues.",
        },
      ],
    },
    {
      group: "research",
      role: { es: "Becario Doctoral", en: "Doctoral Fellow" },
      org: "CONICET / Universidad Nacional de Córdoba",
      location: { es: "Córdoba, Argentina", en: "Córdoba, Argentina" },
      start: "2013-04", end: "2018-03",
      bullets: [
        {
          es: "Investigación en formas automorfas, formas de Hilbert–Maass y aritmética de representaciones de Galois, con publicaciones con referato.",
          en: "Research on automorphic forms, Hilbert–Maass forms and the arithmetic of Galois representations, leading to peer-reviewed publications.",
        },
      ],
    },
  ],

  // Proyectos personales. `tags` son tecnologías; `repo` y `demo` son opcionales.
  projects: [
    {
      title: { es: "Market History", en: "Market History" },
      description: {
        es: "Historia de largo plazo de los mercados y la economía: rendimientos año por año de los principales índices, bonos, commodities, Bitcoin, Ethereum y sectores de EE.UU., contra inflación, tasas, desempleo y recesiones. Datos actualizados automáticamente.",
        en: "A long-run history of markets and the economy: calendar-year returns for major indices, bonds, commodities, Bitcoin, Ethereum and US sectors, set against inflation, interest rates, unemployment and recessions. Data refreshed automatically.",
      },
      tags: ["Python", "D3.js", "Finance", "Data Viz"],
      repo: "https://github.com/angelmza1990/market-history",
      demo: "https://angelmza1990.github.io/market-history/",
    },
    {
      title: { es: "Hold'em Lab", en: "Hold'em Lab" },
      description: {
        es: "Herramientas para la matemática del Texas Hold'em: rangos preflop editables, calculadora de equity de manos y rangos (enumeración exacta o Monte Carlo), pot odds, apuestas máximas pagables y sizing de apuestas.",
        en: "Tools for the math of Texas Hold'em: editable preflop ranges, an equity calculator for hands and ranges (exact enumeration or Monte Carlo), pot odds, the largest callable bet and bet sizing.",
      },
      tags: ["JavaScript", "Probability", "Game Theory"],
      repo: "https://github.com/angelmza1990/holdem-lab",
      demo: "https://angelmza1990.github.io/holdem-lab/",
    },
    {
      title: { es: "World Atlas", en: "World Atlas" },
      description: {
        es: "Población, demografía y economía de 217 países y seis continentes desde 1960: distribución de la población, natalidad, fecundidad, esperanza de vida, pirámides, densidad, superficie y PBI, en mapas, rankings y fichas por país.",
        en: "Population, demography and economy of 217 countries and six continents since 1960: population distribution, birth rates, fertility, life expectancy, pyramids, density, area and GDP, in maps, rankings and country profiles.",
      },
      tags: ["Python", "D3.js", "Demography", "Data Viz"],
      repo: "https://github.com/angelmza1990/world-atlas",
      demo: "https://angelmza1990.github.io/world-atlas/",
    },
    {
      title: { es: "Medical Imaging Lab", en: "Medical Imaging Lab" },
      description: {
        es: "Simulaciones interactivas de cómo se forman las imágenes de resonancia magnética y tomografía: ecuaciones de Bloch, contraste de tejidos, k-space, compressed sensing y reconstrucción por retroproyección filtrada, verificadas contra resultados analíticos.",
        en: "Interactive simulations of how MRI and CT images are made: Bloch equations, tissue contrast, k-space, compressed sensing and filtered back-projection, tested against analytic results.",
      },
      tags: ["JavaScript", "Signal Processing", "Inverse Problems", "Medical Imaging"],
      repo: "https://github.com/angelmza1990/medical-imaging-lab",
      demo: "https://angelmza1990.github.io/medical-imaging-lab/",
    },
    {
      title: { es: "LLM desde cero", en: "LLM from Scratch" },
      description: {
        es: "Ejercicios, experimentos y notas basados en el libro Build a Large Language Model (From Scratch) de Sebastian Raschka: implementación paso a paso de un modelo de lenguaje.",
        en: "Exercises, experiments and notes based on Sebastian Raschka's book Build a Large Language Model (From Scratch): a step-by-step implementation of a language model.",
      },
      tags: ["Python", "LLMs"],
      repo: "https://github.com/angelmza1990/LLM-from-scratch---exercises",
      demo: null,
    },
    {
      title: { es: "Bar chart race: campeones de poker", en: "Poker champions bar chart race" },
      description: {
        es: "Visualización animada de los campeonatos de poker ganados por cada jugador a lo largo del tiempo.",
        en: "Animated visualization of poker championships won by each player over time.",
      },
      tags: ["Python", "Data Viz"],
      repo: "https://github.com/angelmza1990/Bar-chart-race-poker",
      demo: null,
    },
  ],

  education: [
    {
      degree: { es: "Doctor en Matemáticas", en: "PhD in Mathematics" },
      org: "Universidad Nacional de Córdoba",
      start: "2013-04", end: "2018-03",
      detail: {
        es: "Teoría de Números y Geometría Algebraica. Tesis sobre formas automorfas, representaciones de Galois y curvas superelípticas. Beca doctoral CONICET.",
        en: "Number Theory and Algebraic Geometry. Thesis on automorphic forms, Galois representations and superelliptic curves. CONICET doctoral fellowship.",
      },
    },
    {
      degree: { es: "Licenciado en Ciencias Matemáticas", en: "Licentiate Degree in Mathematical Sciences" },
      org: "Universidad Nacional de San Luis",
      start: "2009-03", end: "2012-12",
      detail: {
        es: "Abanderado (máximo honor académico de la carrera).",
        en: "Graduated as flag bearer (Abanderado), the program's highest academic honor.",
      },
    },
    {
      degree: { es: "Especialización en Finance Management", en: "Specialization in Finance Management" },
      org: "The George Washington University School of Business",
      start: "2023-08", end: "2023-08",
      detail: null,
    },
    {
      degree: { es: "Especialización en Finanzas Corporativas", en: "Specialization in Corporate Finance" },
      org: "ADEN Business School",
      start: "2023-01", end: "2023-05",
      detail: null,
    },
  ],

  publications: [
    {
      authors: "A. Villanueva, A. Pacetti",
      title: "On Galois Representations of Superelliptic Curves",
      venue: "Glasgow Mathematical Journal 65(2), 356–382",
      year: 2023,
      url: null,
    },
    {
      authors: "A. Villanueva, R. Miatello",
      title: "Joint distribution of eigenvalues of Hecke and Casimir operators for Hilbert Maass forms",
      venue: "Preprint, arXiv:2002.05144",
      year: 2020,
      url: "https://arxiv.org/abs/2002.05144",
    },
    {
      authors: "A. Villanueva",
      title: "Todo camino puede andar, todo puede andar",
      venue: "Noticiero de la Unión Matemática Argentina 2(60)",
      year: 2025,
      url: null,
    },
    {
      authors: "A. Villanueva, R. Miatello",
      title: "Matemática en azar y juegos",
      venue: "Revista de Educación Matemática 33",
      year: 2018,
      url: null,
    },
  ],

  talks: [
    { es: "Galois representations of superelliptic curves over a local field — Linfoot Number Theory Seminar, University of Bristol (virtual), 2020", en: "Galois representations of superelliptic curves over a local field — Linfoot Number Theory Seminar, University of Bristol (virtual), 2020" },
    { es: "Representaciones de Galois de curvas superelípticas sobre cuerpos locales — VIRTUMA 2020 y LATEN, 2020", en: "Galois representations of superelliptic curves over local fields — VIRTUMA 2020 and LATEN, 2020" },
    { es: "Aritmética de curvas superelípticas sobre cuerpos locales — SUMA 2019, Mendoza", en: "Arithmetic of superelliptic curves over local fields — SUMA 2019, Mendoza" },
    { es: "Joint Distribution of Hecke and Casimir Eigenvalues for Automorphic Forms — Universität Ulm, Alemania, 2019", en: "Joint Distribution of Hecke and Casimir Eigenvalues for Automorphic Forms — Universität Ulm, Germany, 2019" },
    { es: "Distribución de autovalores de Hecke en formas modulares de Hilbert — RSME-UMA 2017, Buenos Aires", en: "Distribution of Hecke eigenvalues for Hilbert modular forms — RSME-UMA 2017, Buenos Aires" },
    { es: "Geometría hiperbólica — VI Encuentro Regional de Teoría de Números, UBA, 2015", en: "Hyperbolic geometry — 6th Regional Number Theory Meeting, UBA, 2015" },
  ],

  awards: [
    { es: "Beca Posdoctoral CONICET (3 años)", en: "CONICET Postdoctoral Fellowship (3 years)" },
    { es: "Beca Doctoral CONICET (5 años)", en: "CONICET Doctoral Fellowship (5 years)" },
    { es: "Beca de viaje y estadía ICTP — Trieste Algebraic Geometry Summer School, Italia", en: "ICTP travel grant — Trieste Algebraic Geometry Summer School, Italy" },
    { es: "Beca Escuela de Verano IMPA — Río de Janeiro, Brasil", en: "IMPA Summer School scholarship — Rio de Janeiro, Brazil" },
    { es: "Abanderado — Universidad Nacional de San Luis", en: "Flag bearer (Abanderado) — Universidad Nacional de San Luis" },
  ],

  skills: [
    { label: { es: "Programación", en: "Programming" }, items: ["Python", "SQL", "JavaScript", "Git", "Linux"] },
    { label: { es: "Datos e IA", en: "Data & AI" }, items: ["Machine Learning", "pandas", "scikit-learn", "ETL", "Power BI", "SSIS", { es: "Datos de entrenamiento para LLMs", en: "LLM training data" }] },
    { label: { es: "Matemática", en: "Mathematics" }, items: [
      { es: "Teoría de Números", en: "Number Theory" },
      { es: "Geometría Algebraica", en: "Algebraic Geometry" },
      { es: "Probabilidad y Estadística", en: "Probability & Statistics" },
      { es: "Análisis Real y Complejo", en: "Real & Complex Analysis" },
      "LaTeX",
    ] },
  ],

  languages: [
    { es: "Español — nativo", en: "Spanish — native" },
    { es: "Inglés — profesional", en: "English — professional" },
  ],
};

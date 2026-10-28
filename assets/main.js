// Arma el sitio a partir de window.CONTENT en el idioma elegido.
(function () {
  const C = window.CONTENT;

  const UI = {
    es: {
      "nav.experience": "Experiencia",
      "nav.projects": "Proyectos",
      "nav.hobbies": "Hobbies",
      "nav.research": "Investigación",
      "nav.education": "Formación",
      "nav.contact": "Contacto",
      skip: "Ir al contenido",
      industry: "Industria",
      teaching: "Docencia universitaria",
      research: "Investigación",
      publications: "Publicaciones",
      talks: "Charlas y exposiciones seleccionadas",
      skills: "Habilidades",
      awards: "Becas y distinciones",
      languages: "Idiomas",
      present: "actualidad",
      code: "Código",
      demo: "Ver sitio",
      live: "EN VIVO",
      cv: "Descargar CV",
      email: "Email",
      source: "Código de este sitio",
      projectsSub: "Todos son públicos: el código está en GitHub y los sitios corren en el navegador.",
      "tab.work": "Ciencia y datos",
      "tab.hobby": "Hobbies",
      "note.work": "Análisis de datos, simulación y matemática aplicada: finanzas, demografía, imágenes médicas y modelos de lenguaje.",
      "note.hobby": "Proyectos que nacen de lo que me gusta fuera del trabajo: el deporte y el poker, mirados con datos y probabilidad.",
      noProjects: "Pronto voy a sumar proyectos acá.",
      contactText: "¿Querés conversar sobre un proyecto, una posición o una colaboración? Escribime.",
      "fact.phd": "Formación",
      "fact.phdValue": "Doctor en Matemáticas",
      "fact.years": "Experiencia",
      "fact.yearsValue": (n) => `${n}+ años`,
      "fact.yearsNote": "Industria, docencia e investigación",
      "fact.pubs": "Publicaciones",
      "fact.pubsNote": "Teoría de números y divulgación",
      "fact.projects": "Proyectos públicos",
      "fact.projectsNote": (w, h) => `${w} de ciencia y datos, ${h} hobbies`,
      year: (n) => (n === 1 ? "1 año" : `${n} años`),
      month: (n) => (n === 1 ? "1 mes" : `${n} meses`),
    },
    en: {
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.hobbies": "Hobbies",
      "nav.research": "Research",
      "nav.education": "Education",
      "nav.contact": "Contact",
      skip: "Skip to content",
      industry: "Industry",
      teaching: "University teaching",
      research: "Research",
      publications: "Publications",
      talks: "Selected talks",
      skills: "Skills",
      awards: "Fellowships & honors",
      languages: "Languages",
      present: "present",
      code: "Code",
      demo: "Open site",
      live: "LIVE",
      cv: "Download CV",
      email: "Email",
      source: "Source of this site",
      projectsSub: "All of them are public: the code is on GitHub and the sites run in the browser.",
      "tab.work": "Science & data",
      "tab.hobby": "Hobbies",
      "note.work": "Data analysis, simulation and applied mathematics: finance, demography, medical imaging and language models.",
      "note.hobby": "Projects that grow out of what I enjoy outside work: sport and poker, seen through data and probability.",
      noProjects: "Projects coming soon.",
      contactText: "Want to talk about a project, a role or a collaboration? Get in touch.",
      "fact.phd": "Education",
      "fact.phdValue": "PhD in Mathematics",
      "fact.years": "Experience",
      "fact.yearsValue": (n) => `${n}+ years`,
      "fact.yearsNote": "Industry, teaching and research",
      "fact.pubs": "Publications",
      "fact.pubsNote": "Number theory and outreach",
      "fact.projects": "Public projects",
      "fact.projectsNote": (w, h) => `${w} in science & data, ${h} hobbies`,
      year: (n) => (n === 1 ? "1 yr" : `${n} yrs`),
      month: (n) => (n === 1 ? "1 mo" : `${n} mos`),
    },
  };

  const ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13v5.42h-4v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.84 1.25-1.84 2.54v4.88h-4.03v-11Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M3.5 5.5h17v13h-17zM4 6l8 6.5L20 6"/></svg>',
    cv: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M14 5h5v5M19 5l-8 8M17 14v5H5V7h5"/></svg>',
  };

  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } },
  };

  let lang = pickLang();
  let tab = location.hash === "#hobbies" ? "hobby" : "work";

  function pickLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "es" || fromUrl === "en") return fromUrl;
    const saved = store.get("lang");
    if (saved === "es" || saved === "en") return saved;
    return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
  }

  const monthIndex = (ym) => { const [y, m] = ym.split("-").map(Number); return y * 12 + m - 1; };
  const now = new Date();
  const nowIndex = now.getFullYear() * 12 + now.getMonth();

  function render() {
    const t = (k) => UI[lang][k];
    const L = (obj) => (obj && typeof obj === "object" ? obj[lang] : obj);
    const fmtMonth = (ym) => {
      const [y, m] = ym.split("-").map(Number);
      return new Intl.DateTimeFormat(lang === "es" ? "es-AR" : "en-US", { month: "short", year: "numeric" })
        .format(new Date(y, m - 1, 1));
    };
    const range = (a, b) => (a === b ? fmtMonth(a) : `${fmtMonth(a)} – ${b ? fmtMonth(b) : t("present")}`);
    const duration = (a, b) => {
      const n = (b ? monthIndex(b) : nowIndex) - monthIndex(a) + 1;
      if (n < 1) return "";
      const y = Math.floor(n / 12), m = n % 12;
      return [y ? t("year")(y) : "", m ? t("month")(m) : ""].filter(Boolean).join(" ");
    };

    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $("#theme-toggle").setAttribute("aria-label", lang === "es" ? "Cambiar tema claro u oscuro" : "Toggle light or dark theme");

    $("#name").textContent = C.name;
    $("#headline").textContent = L(C.headline);
    $("#location").textContent = L(C.location);
    $("#summary").textContent = L(C.summary);

    const links = [
      { key: "linkedin", href: C.links.linkedin, label: "LinkedIn", primary: true },
      { key: "github", href: C.links.github, label: "GitHub" },
      { key: "email", href: `mailto:${C.links.email}`, label: t("email") },
    ];
    const cv = L(C.links.cv);
    if (cv) links.push({ key: "cv", href: cv, label: t("cv"), download: true });
    const linkHtml = links.map((l) =>
      `<a class="btn${l.primary ? " btn-primary" : ""}" href="${esc(l.href)}"${l.download ? " download" : ' target="_blank" rel="noopener"'}>${ICONS[l.key]}<span>${esc(l.label)}</span></a>`
    ).join("");
    $("#links").innerHTML = linkHtml;
    $("#contact-links").innerHTML = linkHtml;

    // Datos de la portada, calculados del contenido.
    const work = C.projects.filter((p) => p.category !== "hobby").length;
    const hobby = C.projects.length - work;
    const phd = C.education[0];
    const facts = [
      [t("fact.phd"), t("fact.phdValue"), phd.org],
      [t("fact.years"), t("fact.yearsValue")(C.experienceYears), t("fact.yearsNote")],
      [t("fact.pubs"), String(C.publications.length), t("fact.pubsNote")],
      [t("fact.projects"), String(C.projects.length), t("fact.projectsNote")(work, hobby)],
    ];
    $("#facts").innerHTML = facts.map(([k, v, n]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}<small>${esc(n)}</small></dd></div>`).join("");

    $("#experience-groups").innerHTML = ["industry", "teaching", "research"].map((g) => {
      const items = C.experience.filter((e) => e.group === g);
      if (!items.length) return "";
      return `<h3>${t(g)}</h3><ol class="timeline">${items.map((e) => `
        <li${e.end ? "" : ' class="current"'}>
          <div class="item-head">
            <div><strong>${esc(L(e.role))}</strong><span class="org">${esc(e.org)}</span></div>
            <div class="meta">${range(e.start, e.end)}<span class="dur">${duration(e.start, e.end)}</span>${esc(L(e.location))}</div>
          </div>
          ${e.bullets.length ? `<ul>${e.bullets.map((b) => `<li>${esc(L(b))}</li>`).join("")}</ul>` : ""}
        </li>`).join("")}</ol>`;
    }).join("");

    renderProjects();

    $("#publication-list").innerHTML = C.publications.map((p) => `
      <li>
        <span class="year">${p.year}</span>
        ${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)}</a>` : `<span class="pub-title">${esc(p.title)}</span>`}
        <span class="muted">${esc(p.authors)} · <em>${esc(p.venue)}</em></span>
      </li>`).join("");
    $("#talk-list").innerHTML = C.talks.map((x) => `<li>${esc(L(x))}</li>`).join("");

    $("#education-list").innerHTML = `<ol class="timeline">${C.education.map((e) => `
      <li>
        <div class="item-head">
          <div><strong>${esc(L(e.degree))}</strong><span class="org">${esc(e.org)}</span></div>
          <div class="meta">${range(e.start, e.end)}</div>
        </div>
        ${e.detail ? `<p>${esc(L(e.detail))}</p>` : ""}
      </li>`).join("")}</ol>`;

    $("#skill-list").innerHTML = C.skills.map((s) => `
      <p class="skill-label">${esc(L(s.label))}</p>
      <div class="tags">${s.items.map((x) => `<span>${esc(L(x))}</span>`).join("")}</div>`).join("");
    $("#award-list").innerHTML = C.awards.map((x) => `<li>${esc(L(x))}</li>`).join("");
    $("#language-list").innerHTML = C.languages.map((x) => `<li>${esc(L(x))}</li>`).join("");
    $("#year").textContent = now.getFullYear();
  }

  function renderProjects() {
    const t = (k) => UI[lang][k];
    const L = (obj) => (obj && typeof obj === "object" ? obj[lang] : obj);
    document.querySelectorAll("#project-tabs button").forEach((b) => {
      const n = C.projects.filter((p) => (p.category === "hobby" ? "hobby" : "work") === b.dataset.tab).length;
      b.innerHTML = `${esc(t(`tab.${b.dataset.tab}`))}<span class="count">${n}</span>`;
      b.setAttribute("aria-selected", String(b.dataset.tab === tab));
      b.tabIndex = b.dataset.tab === tab ? 0 : -1;
    });
    $("#project-list").setAttribute("aria-labelledby", `tab-${tab}`);
    $("#tab-note").textContent = t(`note.${tab}`);
    const list = C.projects.filter((p) => (p.category === "hobby" ? "hobby" : "work") === tab);
    $("#project-list").innerHTML = list.length
      ? list.map((p) => {
        const href = p.demo || p.repo;
        const thumb = p.image
          ? `<img src="${esc(p.image)}" alt="" loading="lazy" decoding="async" width="800" height="500">`
          : `<span>${esc(p.glyph || L(p.title).charAt(0))}</span>`;
        return `
        <article class="card">
          <a class="thumb${p.image ? "" : " glyph"}" href="${esc(href)}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
            ${thumb}${p.demo ? `<span class="live">${t("live")}</span>` : ""}
          </a>
          <div class="card-body">
            <h3>${esc(L(p.title))}</h3>
            <p>${esc(L(p.description))}</p>
            <div class="tags">${p.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div>
            <div class="card-links">
              ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">${ICONS.external}${t("demo")}</a>` : ""}
              ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">${ICONS.github}${t("code")}</a>` : ""}
            </div>
          </div>
        </article>`;
      }).join("")
      : `<p class="muted">${t("noProjects")}</p>`;
  }

  function setTab(next, focus) {
    tab = next;
    renderProjects();
    if (focus) $(`#tab-${tab}`).focus();
  }

  function setLang(next) {
    lang = next;
    store.set("lang", lang);
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    render();
  }

  // Pestañas: clic y flechas del teclado.
  document.querySelectorAll("#project-tabs button").forEach((b) => b.addEventListener("click", () => setTab(b.dataset.tab)));
  $("#project-tabs").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    setTab(tab === "work" ? "hobby" : "work", true);
  });
  // El enlace "Hobbies" del menú abre esa pestaña; "Proyectos", la otra.
  document.querySelectorAll('a[href="#hobbies"]').forEach((a) => a.addEventListener("click", () => setTab("hobby")));
  document.querySelectorAll('a[href="#projects"]').forEach((a) => a.addEventListener("click", () => setTab("work")));
  window.addEventListener("hashchange", () => { if (location.hash === "#hobbies") setTab("hobby"); });

  // Tema: sigue al sistema hasta que se elige uno.
  $("#theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    store.set("theme", root.dataset.theme);
  });

  // Sección visible resaltada en el menú.
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = en.target.id === "projects" && tab === "hobby" ? "hobbies" : en.target.id;
        navLinks.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === `#${id}`)));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main > section[id]").forEach((s) => io.observe(s));
  }

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  render();
})();

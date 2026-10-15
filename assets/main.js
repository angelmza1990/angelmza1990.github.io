// Arma el sitio a partir de window.CONTENT en el idioma elegido.
(function () {
  const C = window.CONTENT;

  const UI = {
    es: {
      "nav.experience": "Experiencia",
      "nav.projects": "Proyectos",
      "nav.research": "Investigación",
      "nav.education": "Formación",
      "nav.contact": "Contacto",
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
      demo: "Demo",
      cv: "Descargar CV",
      email: "Email",
      noProjects: "Pronto voy a sumar proyectos personales acá.",
      contactText: "¿Querés conversar sobre un proyecto, una posición o una colaboración? Escribime.",
    },
    en: {
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.research": "Research",
      "nav.education": "Education",
      "nav.contact": "Contact",
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
      demo: "Demo",
      cv: "Download CV",
      email: "Email",
      noProjects: "Personal projects coming soon.",
      contactText: "Want to talk about a project, a role or a collaboration? Get in touch.",
    },
  };

  const ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13v5.42h-4v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.84 1.25-1.84 2.54v4.88h-4.03v-11Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M3.5 5.5h17v13h-17zM4 6l8 6.5L20 6"/></svg>',
    cv: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14"/></svg>',
  };

  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function pickLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "es" || fromUrl === "en") return fromUrl;
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "es" || saved === "en") return saved;
    } catch (e) { /* sin almacenamiento: se usa el idioma del navegador */ }
    return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
  }

  function render(lang) {
    const t = (k) => UI[lang][k];
    const L = (obj) => (obj && typeof obj === "object" ? obj[lang] : obj);
    const fmtMonth = (ym) => {
      const [y, m] = ym.split("-").map(Number);
      return new Intl.DateTimeFormat(lang === "es" ? "es-AR" : "en-US", { month: "short", year: "numeric" })
        .format(new Date(y, m - 1, 1));
    };
    const range = (a, b) => (a === b ? fmtMonth(a) : `${fmtMonth(a)} – ${b ? fmtMonth(b) : t("present")}`);

    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

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

    $("#experience-groups").innerHTML = ["industry", "teaching", "research"].map((g) => {
      const items = C.experience.filter((e) => e.group === g);
      if (!items.length) return "";
      return `<h3>${t(g)}</h3><ol class="timeline">${items.map((e) => `
        <li>
          <div class="item-head">
            <div><strong>${esc(L(e.role))}</strong><span class="org">${esc(e.org)}</span></div>
            <div class="meta">${range(e.start, e.end)}<br>${esc(L(e.location))}</div>
          </div>
          ${e.bullets.length ? `<ul>${e.bullets.map((b) => `<li>${esc(L(b))}</li>`).join("")}</ul>` : ""}
        </li>`).join("")}</ol>`;
    }).join("");

    $("#project-list").innerHTML = C.projects.length
      ? C.projects.map((p) => `
        <article class="card">
          <h3>${esc(L(p.title))}</h3>
          <p>${esc(L(p.description))}</p>
          <div class="tags">${p.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div>
          <div class="card-links">
            ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">${ICONS.github}${t("code")}</a>` : ""}
            ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">↗ ${t("demo")}</a>` : ""}
          </div>
        </article>`).join("")
      : `<p class="muted">${t("noProjects")}</p>`;

    $("#publication-list").innerHTML = C.publications.map((p) => `
      <li>
        ${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)}</a>` : `<span class="pub-title">${esc(p.title)}</span>`}
        <span class="muted">${esc(p.authors)} · <em>${esc(p.venue)}</em> · ${p.year}</span>
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
    $("#year").textContent = new Date().getFullYear();
  }

  function setLang(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignorar */ }
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    render(lang);
  }

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  render(pickLang());
})();

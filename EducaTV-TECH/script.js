// Ano dinâmico no rodapé
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

// Menu mobile
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu-principal");

if (nav && toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });
});

// Fallback caso o banner não carregue
const banner = document.querySelector(".institutional-banner");
if (banner) {
  banner.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "banner-fallback";
    fallback.innerHTML = "<strong>EducaTV Campinas</strong><span>Tecnologia e educação conectando pessoas</span>";
    banner.replaceWith(fallback);
  });
}
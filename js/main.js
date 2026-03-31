document.addEventListener("DOMContentLoaded", () => {

    // ======================
    // SELECTORES GENERALES
    // ======================
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close-btn");

    const cards = document.querySelectorAll(".card");
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

// ======================
// SMOOTH SCROLL (FIX DEFINITIVO)
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        // Ignorar links vacíos o placeholder
        if (!href || href === "#") return;

        // Buscar target real
        const target = document.querySelector(href);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

    // ======================
    // NAVBAR ACTIVA
    // ======================
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

// FILTRO DE PROYECTOS
filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {
            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Estado inicial seguro
cards.forEach(card => {
    card.style.display = "block";
});

// ======================
// MODAL (FINAL FIX)
// ======================
const modalImage = document.getElementById("modal-image");
const modalLink = document.getElementById("modal-link");
const modalContent = document.querySelector(".modal-content");

// Estado inicial seguro
modal.style.display = "none";

// Abrir modal
cards.forEach(card => {
    card.addEventListener("click", (e) => {

        if (!card.dataset.title) return;
        if (e.target.tagName === "A") return;

        modalTitle.textContent = card.dataset.title || "";
        modalDescription.textContent = card.dataset.description || "";

        modalImage.src = card.dataset.image || "";
        modalLink.href = card.dataset.link || "";

        modal.style.display = "flex";
    });
});

// Evita que clicks dentro del modal cierren o bloqueen
modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Link repositorio (no interferir)
modalLink.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Cerrar con botón
closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.style.display = "none";
});

// Cerrar clickeando fuera
modal.addEventListener("click", () => {
    modal.style.display = "none";
});

    // ======================
    // ANIMACIONES SCROLL
    // ======================
    const elements = document.querySelectorAll(".card, .about, .hero");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    elements.forEach(el => observer.observe(el));

});

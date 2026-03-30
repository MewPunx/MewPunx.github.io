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
    // SMOOTH SCROLL
    // ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
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
    // MODAL
    // ======================
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.dataset.title;
            const description = card.dataset.description;

            modalTitle.textContent = title;
            modalDescription.textContent = description;

            modal.style.display = "block";
        });
    });

    // cerrar botón
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // cerrar afuera
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
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
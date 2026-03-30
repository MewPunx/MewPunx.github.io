document.addEventListener("DOMContentLoaded", () => {

    // SELECTORES
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close-btn");
    const cards = document.querySelectorAll(".card");

    // ABRIR MODAL
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.dataset.title;
            const description = card.dataset.description;

            modalTitle.textContent = title;
            modalDescription.textContent = description;

            modal.style.display = "block";
        });
    });

    // CERRAR CON BOTÓN
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // CERRAR HACIENDO CLICK AFUERA
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});
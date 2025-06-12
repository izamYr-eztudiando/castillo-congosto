document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("legal-modal");
    const modalText = document.getElementById("modal-text");
    const closeBtn = modal.querySelector(".close-btn");

    const texts = {
        "Área legal": "<h2>Área Legal</h2><p>Contenido legal</p>",
        "Política de privacidad": "<h2>Política de privacidad</h2><p>Contenido de la politica de privacidad</p>",
        "Cookies": "<h2>Política de Cookies</h2><p>Explicación del uso de cookies</p>",
    };

    document.querySelectorAll(".political-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const content = texts[link.textContent.trim()];
            if (content) {
                modalText.innerHTML = content;
                modal.style.display = "flex";
            }
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
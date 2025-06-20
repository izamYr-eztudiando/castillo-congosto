document.addEventListener("DOMContentLoaded", function () {
    const tarjetas = document.querySelectorAll(".tarjeta-servicio");
    const modal = document.getElementById("modal-servicio");
    const modalImg = document.getElementById("modal-img-servicio");
    const close = document.querySelector(".close-servicio");

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function () {
            console.log("Click en la tarjeta:", this)
            const imgSrc = this.getAttribute("data-img");
            if (imgSrc) {
                modal.style.display = "block";   // Mostrar modal
                modalImg.src = imgSrc;            // Cambiar la imagen
            }
        });
    });

    close.addEventListener("click", function () {
        modal.style.display = "none";           // Ocultar modal al cerrar
        modalImg.src = "";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";       // Ocultar si haces click fuera
            modalImg.src = "";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("mostrar-autor");
    const info = document.getElementById("info-autor");
    const box = document.getElementById("crossfade-box");
    const nombre = document.getElementById("nombre");
    const estudio = document.getElementById("estudio");

    btn.addEventListener("click", () => {
        info.classList.add("mostrar");
        setTimeout(() => {
            box.classList.add("cambiar");
        }, 6000)

        nombre.style.opacity = 0;
        setTimeout(() => {
            nombre.classList.add("cambiar")
            nombre.textContent = "Isamir Valencia López";
            nombre.style.opacity = 1;
        }, 8000)

        estudio.style.opacity = 0;
        setTimeout(() => {
            estudio.classList.add("cambiar")
            estudio.textContent = "Desarrollo de Aplicaciones Multiplataforma";
            estudio.style.opacity = 1;
        }, 10500)

        btn.style.display = "none";
    });
});
function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje-descarga');
    mensaje.style.display = 'block';
    mensaje.style.opacity = 0;
    mensaje.style.transition = 'opacity 0.6s ease';

    setTimeout(() => {
        mensaje.style.opacity = 1;
    }, 10);

    setTimeout(() => {
        mensaje.style.opacity = 0;
        setTimeout(() => {
            mensaje.style.display = 'none';
        }, 600);
    }, 4000)
}
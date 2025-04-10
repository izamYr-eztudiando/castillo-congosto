document.querySelectorAll('.lista-servicios a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const imgSrc = this.dataset.img;
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');

        modal.style.display = "flex";
        modalImg.src = imgSrc;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = "none"
    }
});
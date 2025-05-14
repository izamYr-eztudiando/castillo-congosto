// document.querySelectorAll('.navbar-logo img').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         const imgSrc = this.dataset.img;
//         const modal = document.getElementById('modal');
//         const modalImg = document.getElementById('modal-img');

//         modal.style.display = "flex";
//         modalImg.src = imgSrc;
//     });
// });

// document.querySelector('.close').addEventListener('click', () => {
//     document.getElementById('modal').style.display = "none";
// });

// document.getElementById('modal').addEventListener('click', (e) => {
//     if (e.target === e.currentTarget) {
//         e.currentTarget.style.display = "none"
//     }
// })

// Espera al DOM
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo-expandible');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    if (logo && modal && modalImg && closeBtn) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = logo.dataset.img;
            modal.style.display = 'flex';
            modalImg.src = imgSrc;
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

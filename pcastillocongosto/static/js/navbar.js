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

// const toggleBtn = document.querySelector('.toggle_btn')
// const toggleBtnIcon = document.querySelector('.toggle_btn i')
// const dropDownMenu = document.querySelector('.dropdown_menu')

// toggleBtn.onclick = function () {
//     dropDownMenu.classList.toggle('open')
//     const isOpen = dropDownMenu.classList.contains('open')
//     dropDownMenu.style.display = 'block'
//     toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const toggleBtn = document.querySelector('.toggle_btn');
//     const toggleBtnIcon = document.querySelector('.toggle_btn i');
//     const dropDownMenu = document.querySelector('.dropdown_menu');

//     function handleToggle() {
//         const isMobile = window.innerWidth <= 860;

//         if (!isMobile) return; // Solo funciona en pantallas pequeñas

//         const isOpen = dropDownMenu.classList.contains('open');

//         if (!isOpen) {
//             dropDownMenu.classList.add('open');
//             dropDownMenu.style.display = 'block';
//             toggleBtnIcon.className = 'fa-solid fa-xmark';
//         } else {
//             dropDownMenu.classList.remove('open');
//             dropDownMenu.style.display = 'none';
//             toggleBtnIcon.className = 'fa-solid fa-bars';
//         }

//         // dropDownMenu.classList.toggle('open');

//         // const isOpen = dropDownMenu.classList.contains('open');
//         // toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

//         // // Mostrar u ocultar con display
//         // dropDownMenu.style.display = isOpen ? 'block' : 'none';
//     }

//     toggleBtn.addEventListener('click', handleToggle);

//     // Cuando se redimensiona la ventana, aseguramos que todo se actualice correctamente
//     window.addEventListener('resize', () => {
//         if (window.innerWidth > 860) {
//             dropDownMenu.classList.remove('open');
//             dropDownMenu.style.display = 'none';
//             toggleBtnIcon.className = 'fa-solid fa-bars';
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const toggleBtn = document.querySelector('.toggle_btn');
//     const toggleBtnIcon = toggleBtn.querySelector('i');
//     const dropDownMenu = document.querySelector('.dropdown_menu');

//     let isOpen = false;
//     let hasInteracted = false;

//     function updateDropdown() {
//         if (window.innerWidth <= 860) {
//             if (hasInteracted) {
//                 dropDownMenu.classList.add('animated');
//             }

//             if (isOpen) {
//                 dropDownMenu.classList.add('open');
//                 toggleBtnIcon.className = 'fa-solid fa-xmark';
//             } else {
//                 dropDownMenu.classList.remove('open');
//                 toggleBtnIcon.className = 'fa-solid fa-bars';
//             }
//         } else {
//             dropDownMenu.classList.remove('open', 'animated');
//             toggleBtnIcon.className = 'fa-solid fa-bars';
//         }
//     }

//     toggleBtn.addEventListener('click', function () {
//         if (window.innerWidth <= 860) {
//             isOpen = !isOpen;
//             hasInteracted = true;
//             updateDropdown();
//         }
//     });

//     window.addEventListener('resize', () => {
//         // Si cambiamos a desktop, cerramos el menú
//         if (window.innerWidth > 860) {
//             isOpen = false;
//             hasInteracted = false;
//             updateDropdown();
//         }
//     });

//     // Inicializa correctamente en primer render
//     updateDropdown();
// });

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = toggleBtn.querySelector('i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    let isOpen = false;
    let hasInteracted = false;

    function updateDropdown() {
        const isMobile = window.innerWidth <= 860;

        if (!isMobile) {
            dropDownMenu.classList.remove('open', 'animated');
            dropDownMenu.style.display = 'none';
            toggleBtnIcon.className = 'fa-solid fa-bars';
            return;
        }

        if (hasInteracted) {
            dropDownMenu.classList.add('animated');
        }

        if (isOpen) {
            dropDownMenu.classList.add('open');
            dropDownMenu.style.display = 'block';
            toggleBtnIcon.className = 'fa-solid fa-xmark';
        } else {
            dropDownMenu.classList.remove('open');
            dropDownMenu.style.display = 'none';
            toggleBtnIcon.className = 'fa-solid fa-bars';
        }
    }

    toggleBtn.addEventListener('click', function () {
        if (window.innerWidth <= 860) {
            isOpen = !isOpen;
            hasInteracted = true;
            updateDropdown();
        }
    });

    window.addEventListener('resize', () => {
        isOpen = false;
        hasInteracted = false;
        updateDropdown();
    });

    updateDropdown(); // Ensure it’s hidden on initial load
});

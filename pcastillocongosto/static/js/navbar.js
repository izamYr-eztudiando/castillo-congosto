document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo-expandible');
    const modal = document.getElementById('modal-logo');
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
    let isFirstLoad = true;

    function updateDropdown() {
        const isMobile = window.innerWidth <= 860;

        if (!isMobile) {
            // dropDownMenu.classList.remove('open', 'animated');
            dropDownMenu.classList.remove('animated', 'closing')
            // dropDownMenu.style.display = 'none';
            dropDownMenu.style.opacity = 0;
            dropDownMenu.style.visibility = 'hidden'
            // toggleBtnIcon.className = 'fa-solid fa-bars';
            return;
        }

        if (isFirstLoad) {
            dropDownMenu.classList.remove('animated', 'closing');
            dropDownMenu.style.opacity = 0;
            dropDownMenu.style.visibility = 'hidden';
            isFirstLoad = false;
            return
        }

        if (hasInteracted) {
            dropDownMenu.classList.add('animated');
        }

        if (isOpen) {
            // dropDownMenu.classList.add('open');
            dropDownMenu.classList.add('animated');
            // dropDownMenu.style.display = 'block';
            dropDownMenu.style.opacity = 1;
            dropDownMenu.style.visibility = 'visible';
            // toggleBtnIcon.className = 'fa-solid fa-xmark';
        } else {
            // dropDownMenu.classList.remove('open');
            dropDownMenu.classList.remove('animated');
            dropDownMenu.classList.add('closing');
            // dropDownMenu.style.display = 'none';
            // dropDownMenu.style.opacity = 0;
            setTimeout(() => {
                dropDownMenu.classList.remove('closing');
                dropDownMenu.style.opacity = 0;
                dropDownMenu.style.visibility = 'hidden';
            }, 500)
            // dropDownMenu.style.visibility = 'hidden';
            // toggleBtnIcon.className = 'fa-solid fa-bars';
        }
    }

    toggleBtn.addEventListener('click', function () {
        if (window.innerWidth <= 860) {
            toggleBtn.classList.toggle('open');
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

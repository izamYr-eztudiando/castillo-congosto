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

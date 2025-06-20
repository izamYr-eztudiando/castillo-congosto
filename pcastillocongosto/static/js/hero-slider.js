document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");
  let index = 0;
  let auto;

  /* Crea dots dinámicamente */
  slides.forEach((_s, i) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll("button");

  function activateSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

  function goToSlide(i) {
    index = (i + slides.length) % slides.length;
    activateSlide(index);
    resetAuto();          // reinicia autoplay
  }

  function nextSlide() { goToSlide(index + 1); }
  function prevSlide() { goToSlide(index - 1); }

  /* Auto‑play */
  function startAuto() { auto = setInterval(nextSlide, 6000); }
  function resetAuto() { clearInterval(auto); startAuto(); }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  activateSlide(index);
  startAuto();
});

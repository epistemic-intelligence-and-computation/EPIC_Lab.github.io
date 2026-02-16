// assets/js/gallery-carousel.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-carousel]").forEach((carouselEl) => {
    const imagesEl = carouselEl.querySelector("[data-carousel-images]");
    const prevBtn = carouselEl.querySelector("[data-carousel-prev]");
    const nextBtn = carouselEl.querySelector("[data-carousel-next]");
    const currentEl = carouselEl.querySelector("[data-carousel-current]");
    const totalEl = carouselEl.querySelector("[data-carousel-total]");
    const slides = carouselEl.querySelectorAll(".carousel-slide");

    if (!imagesEl || !prevBtn || !nextBtn || slides.length === 0) return;

    let index = 0;
    const total = slides.length;
    if (totalEl) totalEl.textContent = String(total);

    const show = (i) => {
      index = (i + total) % total;
      imagesEl.style.transform = `translateX(${-index * 100}%)`;
      if (currentEl) currentEl.textContent = String(index + 1);
    };

    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      show(index - 1);
    });

    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      show(index + 1);
    });

    // autoslide
    let timer = setInterval(() => show(index + 1), 5000);

    carouselEl.addEventListener("mouseenter", () => clearInterval(timer));
    carouselEl.addEventListener("mouseleave", () => {
      timer = setInterval(() => show(index + 1), 5000);
    });

    // keyboard (only when user is on page)
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") show(index - 1);
      if (event.key === "ArrowRight") show(index + 1);
    });

    show(0);
  });
});
class ProductGallerySection {
  constructor() {
    const swiper = new Swiper(".gallery__container", {
      speed: 400,
      slidesPerView: 6,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ProductGallerySection();
});

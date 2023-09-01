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
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    new ProductGallerySection();
  });
  
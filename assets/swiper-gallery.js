class ProductGallery {
  constructor() {
    console.log("product-page");
    const swiper = new Swiper(".swiper-container", {
      speed: 400,
      spaceBetween: 5,
      slidesPerView: 2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ProductGallery();
});

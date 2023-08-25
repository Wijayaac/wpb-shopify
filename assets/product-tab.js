class ProductNav {
  static init() {
    const e = document.querySelector(".product-tab__links");
    if (e) return new ProductNav(e);
  }
  constructor(e) {
    this.nav = e;
    this.sections = new Map();
    this.tabs = new Map();
    Array.from(document.querySelectorAll(".product-tab__item")).forEach((e) => {
      this.sections.set(e.id, e);
    });
    this.nav.querySelectorAll("a.product-tab__link").forEach((e) => {
      this.tabs.set(e.hash.replace(/^#\//, ""), e);
    });
    window.addEventListener("hashchange", () => this.update());
    this.update();
  }
  update() {
    const e = window.location.hash.replace(/^#?\//, "");
    this.sections.has(e) &&
      (this.sections.forEach((t) => {
        t.classList.toggle("active", t.id === e);
      }),
      this.tabs.forEach((t, s) => {
        t.parentNode.classList.toggle("active", s === e);
        t.classList.toggle("active", s === e);
      }));
  }
}

class SubnavDropdown {
  static init() {
    const toggle = document.querySelector("a.subnav-toggle");
    if (toggle) return new SubnavDropdown(toggle);
  }

  constructor(toggle) {
    this.toggle = toggle;
    this.parentToggle = this.toggle.closest("nav.product-tab__links");
    this.heightNavigation = 0;
    this.heightToggle = 0;

    this.toggle.addEventListener("click", this.handleToggleClick.bind(this));

    const resizeObserver = new ResizeObserver((entries) => {
      let width;
      entries.forEach((e) => (width = e.borderBoxSize[0].inlineSize));
      return width <= 992 ? this.calculateDropdown() : null;
    });

    resizeObserver.observe(this.toggle);
  }

  handleToggleClick() {
    if (!this.parentToggle.classList.contains("active")) {
      this.parentToggle.style.setProperty(
        "--height",
        `${this.heightNavigation}px`
      );
      this.parentToggle.classList.add("active");
    } else {
      this.parentToggle.style.setProperty("--height", `${this.heightToggle}px`);
      this.parentToggle.classList.remove("active");
    }
  }

  calculateDropdown() {
    this.heightNavigation = 0;
    this.heightToggle = this.toggle.getBoundingClientRect().height;

    this.parentToggle.querySelectorAll("a").forEach((nav) => {
      this.heightNavigation += nav.getBoundingClientRect().height;
    });

    this.parentToggle.style.setProperty("--height", `${this.heightToggle}px`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ProductNav.init();
  SubnavDropdown.init();
});

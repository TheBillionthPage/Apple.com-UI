////////////////////////////////////////////////////////////////
////////////////////////// HEADER /////////////////////////////

const nav = document.querySelector("header");
const dropdown = document.getElementsByClassName("dropdown");

window.addEventListener("scroll", function () {
  if (window.scrollY >= nav.getBoundingClientRect().top) {
    nav.classList.add("sticky");
  } else nav.classList.remove("sticky");
});

const setDynamicHeight = function (e) {
  const dropdownContent = e.currentTarget.querySelector(".dropdown-content");
  const height = !dropdownContent.clientHeight
    ? dropdownContent.scrollHeight
    : 0;
  dropdownContent.style.height = `${height}px`;
};

[...dropdown].forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    setDynamicHeight(e);
    document.querySelector(".overlay").style.visibility = "visible";
    document.querySelector(".overlay").style.opacity = 1;
  });
  item.addEventListener("mouseleave", (e) => {
    setDynamicHeight(e);
    document.querySelector(".overlay").style.opacity = 0;
    document.querySelector(".overlay").style.visibility = "hidden";
  });
});

////////////////////////////////////////////////////////////////

const splider = new Swiper(".splider", {
  loop: true,
  lazyloading: true,
  speed: 1200,
  spaceBetween: 9,
  slidesPerView: "auto",
  centeredSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper = new Swiper("#entertainment-swiper", {
  loop: true,
  lazyloading: true,
  centeredSlides: true,
  speed: 1200,
  spaceBetween: 15,
  slidesPerView: 1.02,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

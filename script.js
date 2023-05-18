// 水紋
$(document).ready(function () {
  $("#back").ripples({
    resolution: 516,
    dropRadius: 30,
    perturbance: 0.03,
  });

  setInterval(function () {
    const $el = $("#back");
    let x = Math.random() * $el.outerWidth();
    let y = Math.random() * $el.outerHeight();
    const dropRadius = 20;
    let strength = 0.04 + Math.random() * 0.04;

    $el.ripples("drop", x, y, dropRadius, strength);
  }, 1000);
});

// 波
let wave1 = $("#feel-the-wave").wavify({
  height: 80,
  bones: 4,
  amplitude: 20,
  color: "rgba(0, 153, 255, .7)",
  speed: 0.15,
});

let wave2 = $("#feel-the-wave-two").wavify({
  height: 60,
  bones: 3,
  amplitude: 20,
  color: "rgba(0, 153, 255, .5)",
  speed: 0.25,
});

// スライド
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

if (window.matchMedia("(max-width: 768px)").matches) {
  const child = document.querySelector(".swiper");
  const cb = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).toggleClass("hovered");
      } else {
        $(entry.target).toggleClass("hovered");
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const io = new IntersectionObserver(cb, options);
  io.observe(child);
}

$(document).ready(function () {
  $("#back").ripples({
    resolution: 516,
    dropRadius: 30,
    perturbance: 0.08,
  });

  setInterval(function () {
    const $el = $("#back");
    let x = Math.random() * $el.outerWidth();
    let y = Math.random() * $el.outerHeight();
    const dropRadius = 20;
    let strength = 0.08 + Math.random() * 0.08;

    $el.ripples("drop", x, y, dropRadius, strength);
  }, 1000);
});

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

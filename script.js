// $("#wave").wavify({
//   height: 60,
//   bones: 3,
//   amplitude: 40,
//   color: "#0bd",
//   speed: 0.25,
// });

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

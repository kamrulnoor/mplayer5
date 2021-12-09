$(".action").on("click", function () {
  $("html")
    .find(".vol1, .vol2, .vol3, .vol4, .vol5, .vol6, .vol7")
    .toggleClass("is-paused");
});

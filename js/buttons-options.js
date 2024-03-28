document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(
    ".product-single__info-sizes-size-item"
  );

  var colors = document.querySelectorAll(
    ".product-single__info-colors-color-item"
  );

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  colors.forEach((color) => {
    color.addEventListener("click", function () {
      colors.forEach((color) => {
        color.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});

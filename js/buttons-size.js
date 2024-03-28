document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(
    ".product-single__info-sizes-size-item"
  );

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var mainImagen = document.getElementById("main-imagen");
  var modal = document.getElementById("modal-image");
  var imagenModal = document.getElementById("image-modal");
  const body = document.getElementById("body");
  var images = document.querySelectorAll(".product-single__images-thumbs-img");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      mainImagen.src = this.src;
    });
  });

  mainImagen.addEventListener("click", function () {
    modal.style.display = "block";
    body.classList.add("active");
    imagenModal.src = this.src;
  });

  // Cerrar el modal cuando se haga clic en el botón de cerrar
  var close = document.getElementById("close-modal");
  close.addEventListener("click", function () {
    body.classList.remove("active");
    modal.style.display = "none";
  });
});

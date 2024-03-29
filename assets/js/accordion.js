document.addEventListener("DOMContentLoaded", function () {
  var accordionHeaders = document.querySelectorAll(".accordion-header");

  // Agregar un evento click a cada encabezado del acordeón
  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      // Obtener el contenido asociado al encabezado
      var content = this.nextElementSibling;

      // Alternar la clase 'active' para mostrar u ocultar el contenido
      content.classList.toggle("active");
      header.classList.toggle("active");
      // Si la clase 'active' está presente, establece la altura máxima para mostrar el contenido
      if (content.classList.contains("active")) {
        content.style.height = content.scrollHeight + "px";
      } else {
        // Si no, establece la altura máxima en 0 para ocultar el contenido
        content.style.height = 0;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Ocultar todos los contenidos de las pestañas
      tabContents.forEach(function (content) {
        content.style.display = "none";
      });

      // Desactivar todas las pestañas
      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Mostrar el contenido de la pestaña seleccionada
      document.getElementById(tabId).style.display = "flex";

      // Activar el botón de la pestaña seleccionada
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".scroll-reveal", {
    delay: 200, // Retardo antes de que comience la animación (en milisegundos)
    distance: "10px", // Distancia desde la que se deslizarán los elementos
    duration: 1000, // Duración de la animación (en milisegundos)
    origin: "bottom", // Desde dónde se originará la animación
    easing: "ease-out", // Curva de aceleración de la animación
    reset: false, // Reveal una vez y luego se restablece cuando el elemento está fuera de la vista
  });
});

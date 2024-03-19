document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    // Cambiar a la siguiente diapositiva al hacer clic en el botón Siguiente
    nextBtn.addEventListener("click", nextSlide);
  
    // Cambiar a la diapositiva anterior al hacer clic en el botón Anterior
    prevBtn.addEventListener("click", prevSlide);
  
    // Cambiar automáticamente a la siguiente diapositiva cada 3 segundos
    setInterval(nextSlide, 5000);
  });
  
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
    //setInterval(nextSlide, 5000);

    document.addEventListener("DOMContentLoaded", function() {
        var lazyImages = document.querySelectorAll('.lazy');
      
        function lazyLoad() {
          lazyImages.forEach(function(img) {
            if (img.getBoundingClientRect().top < window.innerHeight && img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
          });
        }
      
        // Cargar las imágenes visibles al cargar la página
        lazyLoad();
      
        // Cargar las imágenes restantes al hacer scroll
        window.addEventListener('scroll', lazyLoad);
      });

  });
  
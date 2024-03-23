
document.addEventListener("DOMContentLoaded", function() {
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints:{
            320:{
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1000:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1250:{
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
});

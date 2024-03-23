//Seleccionamos el documento y le decimos que cuando este listo ejecute la funcion
$(document).ready(function(){
    
    var btnHamburger = $('#button-hamburger');
    const icon = document.getElementById('icon-hamburger');
    const nav = document.getElementById('navbar');


    btnHamburger.click(function(){
        if(nav.classList.contains("active")){
           closeNav();
        }else{
            openNav(); 
        }
    });


    function openNav() {
        nav.classList.add("active");
        icon.classList.remove("bx-menu");
        icon.classList.add("bx-x");
    }
    
    function closeNav() {
        nav.classList.remove("active");
        icon.classList.remove("bx-x");
        icon.classList.add("bx-menu");
    }

});
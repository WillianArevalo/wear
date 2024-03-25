//Seleccionamos el documento y le decimos que cuando este listo ejecute la funcion
$(document).ready(function(){
    
    var btnHamburger = $('#button-hamburger');
    const icon = document.getElementById('icon-hamburger');
    const nav = document.getElementById('navbar');
    const body = document.getElementById('body');

    btnHamburger.click(function(){
        if(nav.classList.contains("active")){
           closeNav();
        }else{
            openNav(); 
        }
    });


    function openNav() {
        body.classList.add("active");
        nav.classList.add("active");
        icon.classList.remove("bx-menu");
        icon.classList.add("bx-x");
    }
    
    function closeNav() {
        body.classList.remove("active");
        nav.classList.remove("active");
        icon.classList.remove("bx-x");
        icon.classList.add("bx-menu");
    }

});
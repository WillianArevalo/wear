//Seleccionamos el documento y le decimos que cuando este listo ejecute la funcion
$(document).ready(function(){
    $("#container").html("Hola");
    $(".container").text("Selección por clase");
    //$("input[required]").addClass("border");
    // show() hide() toggle()
    $("#btn_click").click(function(){
        $("#container").slideToggle();
    });

});
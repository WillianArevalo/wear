document.addEventListener("DOMContentLoaded", function () {
  //Obtiene el elemento seleccionado
  var select = document.querySelector(".custom-select__content");

  // Agrega el evento click al elemento seleccionado
  if (select) {
    select.addEventListener("click", function () {
      //Obtiene las opciones del select
      var selectItems = this.parentNode.querySelector(".select-items");

      // Agrega la clase select-hide al elemento select-items
      selectItems.classList.toggle("select-hide");

      /*Mostrar las opciones
        Si el elemento select-items no tiene la clase select-hide
        entonces se muestra las opciones del select */
      if (!selectItems.classList.contains("select-hide")) {
        selectItems.style.display = "block";
      } else {
        selectItems.style.display = "none";
      }
    });
  }

  // Obtiene las opciones del select, obtiene los divs
  var options = document.querySelectorAll(".select-items div");

  // Recorre las opciones del select y agrega el evento click
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      // Obtiene el elemento select-selected y le asigna el texto de la opción seleccionada
      var select =
        this.closest(".custom-select").querySelector(".select-selected");
      select.textContent = this.textContent;
      // Cierra todas las opciones del select
      closeAllSelects(select);
    });
  }

  document.addEventListener("click", function (e) {
    var selects = document.querySelectorAll(".custom-select");
    for (var i = 0; i < selects.length; i++) {
      if (!selects[i].contains(e.target)) {
        var selectItems = selects[i].querySelector(".select-items");
        selectItems.style.display = "none";
        selectItems.classList.toggle("select-hide");
      }
    }
  });

  function closeAllSelects(element) {
    // Obtiene todos los elementos con la clase custom-select
    var selects = document.getElementsByClassName("custom-select");
    // Recorre los elementos custom-select
    for (var i = 0; i < selects.length; i++) {
      // Obtiene los elementos select-items
      var selectItems = selects[i].getElementsByClassName("select-items");

      // Si el elemento select-items no tiene la clase select-hide entonces se cierra
      // el elemento select-items y se agrega la clase select-hide al elemento select-items
      if (element !== selects[i] && element !== selectItems[0]) {
        for (var j = 0; j < selectItems.length; j++) {
          selectItems[j].style.display = "none";
          selectItems[j].classList.toggle("select-hide");
        }
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var select = document.querySelector(".select__content");

  select.addEventListener("click", function () {
    //Obtiene las opciones del select
    var selectItems = this.parentNode.querySelector(".select-items-tel");

    selectItems.classList.toggle("select-hide");

    if (!selectItems.classList.contains("select-hide")) {
      selectItems.style.display = "block";
    } else {
      selectItems.style.display = "none";
    }
  });

  var options = document.querySelectorAll(".select-items-tel div");

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      var select = this.closest(".select").querySelector(".select-selected");
      select.innerHTML = this.innerHTML;
      closeAllSelects(select);
    });
  }

  document.addEventListener("click", function (e) {
    var selects = document.querySelectorAll(".select");
    for (var i = 0; i < selects.length; i++) {
      if (!selects[i].contains(e.target)) {
        var selectItems = selects[i].querySelector(".select-items-tel");
        selectItems.style.display = "none";
        selectItems.classList.toggle("select-hide");
      }
    }
  });

  function closeAllSelects(element) {
    var selects = document.getElementsByClassName("select");

    for (var i = 0; i < selects.length; i++) {
      var selectItems = selects[i].getElementsByClassName("select-items-tel");
      if (element !== selects[i] && element !== selectItems[0]) {
        for (var j = 0; j < selectItems.length; j++) {
          selectItems[j].style.display = "none";
          selectItems[j].classList.toggle("select-hide");
        }
      }
    }
  }
});

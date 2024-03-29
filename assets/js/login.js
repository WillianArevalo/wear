document.addEventListener("DOMContentLoaded", function () {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var login = document.getElementById("form-login");

  login.addEventListener("submit", function (event) {
    event.preventDefault();

    if (email.value === "" || password.value === "") {
      if (email.value === "") {
        $("#input-validation-email")
          .show()
          .addClass("error")
          .text("El correo es requerido");
      } else {
        $("#input-validation-email").hide().removeClass("error").text("");
      }
      if (password.value === "") {
        $("#input-validation-password")
          .show()
          .addClass("error")
          .text("La contraseña es requerida");
      } else {
        $("#input-validation-password").hide().removeClass("error").text("");
      }
      return false;
    } else {
      $("#input-validation-email").hide().removeClass("error").text("");
      $("#input-validation-password").hide().removeClass("error").text("");
    }
  });
});

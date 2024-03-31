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

    var user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      if (user.email != email.value || user.password != password.value) {
        showToast("Usuario o contraseña incorrecta", "error");
      } else {
        showToast("Inicio de sesión exitoso", "success");
        user.session = true;
        localStorage.setItem("user", JSON.stringify(user));
        setTimeout(function () {
          location.href = "../index.html";
        }, 3000);
      }
    } else {
      showToast("Usuario no registrado", "error");
    }

    function showToast(message, status) {
      const toastcontainer = document.getElementById("toast-container");
      const toast = document.createElement("div");
      toast.classList.add("toast");

      const contentToast = document.createElement("div");
      contentToast.classList.add("toastContent");
      var svgCheck = "";
      if (status == "error") {
        svgCheck = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M11.992 15H12.001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 12L12 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
 </svg>`;
      } else {
        svgCheck = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
        <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;
      }

      contentToast.innerHTML = svgCheck;

      const toastText = document.createElement("p");
      toastText.textContent = message;
      contentToast.appendChild(toastText);

      toast.appendChild(contentToast);
      toastcontainer.appendChild(toast);
      toastcontainer.classList.remove("hidden");

      setTimeout(function () {
        toastcontainer.removeChild(toast);
      }, 3000);
    }
  });
});

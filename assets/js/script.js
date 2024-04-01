$(document).ready(function () {
  var btnHamburger = $("#button-hamburger");
  const icon = document.getElementById("icon-hamburger");
  const nav = document.getElementById("navbar");
  const body = document.getElementById("body");
  const btnLogin = document.querySelector(".link__login");
  const btnProfile = document.querySelector(".link__perfil");

  btnHamburger.click(function () {
    if (nav.classList.contains("active")) {
      closeNav();
    } else {
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

  var user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    if (user.session == true) {
      btnLogin.style.display = "none";
      btnProfile.style.display = "flex";
      $("#user-name").text(user.name);
    }
  }

  $(".btn-close-session").on("click", function () {
    user.session = false;
    localStorage.setItem("user", JSON.stringify(user));

    if (window.location.pathname.includes("pages")) {
      location.href = "../index.html";
    } else {
      location.href = "index.html";
    }
  });
});

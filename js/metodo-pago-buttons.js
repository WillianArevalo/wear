document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".metodo-pago-button");
  var metodoPagoInput = document.getElementById("metodo-pago");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const metodoPagoId = this.getAttribute("data-metodo");

      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      this.classList.add("active");
      metodoPagoInput.value = metodoPagoId;
    });
  });
});

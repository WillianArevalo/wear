document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".metodo-pago-button");
  var metodoPagoInput = document.getElementById("metodo-pago");
  var totalPagar = document.getElementById("total-pagar");
  var cantidadCart = document.querySelectorAll(".total-productos");

  var productos = JSON.parse(localStorage.getItem("products")) || [];
  var totalCantidad = 0;
  var totalPrice = 0;

  productos.forEach((producto) => {
    var precio = producto.price.replace("$", "");
    totalPrice += parseFloat(precio) * producto.quantity;
  });

  productos.forEach((producto) => {
    totalCantidad += producto.quantity;
  });

  totalPagar.innerText = "$" + totalPrice.toFixed(2);

  cantidadCart.forEach((total) => {
    total.innerText = totalCantidad;
  });

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

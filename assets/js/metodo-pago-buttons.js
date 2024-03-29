document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".metodo-pago-button");
  var metodoPagoInput = document.getElementById("metodo-pago");
  var totalPagar = document.getElementById("total-pagar");
  var totalDescuento = document.getElementById("total-descuento");
  var cantidadCart = document.querySelectorAll(".total-productos");

  var productos = JSON.parse(localStorage.getItem("products")) || [];
  var totalCantidad = 0;
  var totalPrice = 0;
  var subtotal = 0;
  var totalOffer = 0;

  productos.forEach((producto) => {
    var precio = producto.price.replace("$", "");
    var offer = producto.ofert.replace("$", "");
    subtotal += parseFloat(precio) * producto.quantity;
    totalOffer += parseFloat(offer) * producto.quantity;
    totalPrice = subtotal - totalOffer;
  });

  productos.forEach((producto) => {
    totalCantidad += producto.quantity;
  });

  totalDescuento.innerText = "$" + totalOffer.toFixed(2);
  totalPagar.innerText = "$" + totalPrice.toFixed(2);

  cantidadCart.forEach((total) => {
    total.innerText = totalCantidad;
  });

  productos.forEach((producto) => {
    var precio = producto.price.replace("$", "");
    var offer = producto.priceOffer.replace("$", "");
    subtotal += parseFloat(precio) * producto.quantity;
    totalOffer += parseFloat(offer) * producto.quantity;
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

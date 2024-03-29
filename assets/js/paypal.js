document.addEventListener("DOMContentLoaded", () => {
  paypal
    .Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "10.00", // Monto de la transacción
              },
            },
          ],
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          // Mostrar mensaje de éxito
          alert("Pago completado por " + details.payer.name.given_name);
        });
      },
    })
    .render("#paypal");
});

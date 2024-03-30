document.addEventListener("DOMContentLoaded", function () {
  /*   localStorage.clear(); */
  const buttonCart = document.querySelectorAll(".button-add-cart");
  var totalPrice = document.getElementById("total-price");
  var subtotalPrice = document.getElementById("subtotal-price");
  var totalDescuento = document.getElementById("total-descuento");

  $("#cart__items").on("click", ".btnPlus", function () {
    var title = $(this).closest(".cart__item").find("h3").text();
    var cantidad = $(this).closest(".cart__item").find("input");
    var subtotal = $(this)
      .closest(".cart__item")
      .find(".cart__item-subtotal p");

    let products = JSON.parse(localStorage.getItem("products")) || [];

    const existingProductIndex = products.findIndex(
      (item) => item.title === title
    );
    products[existingProductIndex].quantity++;
    localStorage.setItem("products", JSON.stringify(products));
    cantidad.val(parseInt(cantidad.val()) + 1);

    var precio = products[existingProductIndex].price.replace("$", "");
    var result = parseFloat(precio * cantidad.val());

    subtotal.text("$" + result.toFixed(2));

    actualizarTotal();
    actualizartotalPrice();
  });

  $("#cart__items").on("click", ".btnMinus", function () {
    var title = $(this).closest(".cart__item").find("h3").text();
    var cantidad = $(this).closest(".cart__item").find("input");
    var subtotal = $(this)
      .closest(".cart__item")
      .find(".cart__item-subtotal p");

    let products = JSON.parse(localStorage.getItem("products")) || [];

    const existingProductIndex = products.findIndex(
      (item) => item.title === title
    );
    products[existingProductIndex].quantity--;
    localStorage.setItem("products", JSON.stringify(products));
    cantidad.val(parseInt(cantidad.val()) - 1);

    var precio = products[existingProductIndex].price.replace("$", "");
    var result = parseFloat(precio * cantidad.val());

    subtotal.text("$" + result.toFixed(2));

    if (cantidad.val() == 0) {
      $(this).closest(".cart__item").remove();
      products.splice(existingProductIndex, 1);
      localStorage.setItem("products", JSON.stringify(products));
      actualizarTotal();
    }
    actualizarTotal();
    actualizartotalPrice();
  });

  $("#cart__items").on("click", ".btnRemove", function () {
    var title = $(this).closest(".cart__item").find("h3").text();
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const existingProductIndex = products.findIndex(
      (item) => item.title === title
    );
    products.splice(existingProductIndex, 1);
    localStorage.setItem("products", JSON.stringify(products));
    $(this).closest(".cart__item").remove();
    actualizarTotal();
    actualizartotalPrice();
    showToast("Producto eliminado del carrito");
  });

  buttonCart.forEach((btn) => {
    btn.addEventListener("click", function () {
      const card = btn.closest(".card");
      var offer = 0;
      var title = card.querySelector(".card__body-title").innerText;

      if (!card.querySelector(".card__body-price-regular")) {
        var price = card.querySelector(".card__body-price").innerText;
      } else {
        var price = card.querySelector(".card__body-price-regular").innerText;
      }
      var description = card.querySelector(".card__body-text").innerText;
      if (card.querySelector(".card__body-price-offer")) {
        var priceOffer = card.querySelector(
          ".card__body-price-offer"
        ).innerText;
      }
      const img = card.querySelector(".card__header img").src;

      if (!priceOffer) {
        priceOffer = "$0.00";
      }

      var precioNormal = price.replace("$", "");
      var oferta = priceOffer.replace("$", "");
      var offer =
        "$" + (parseFloat(precioNormal) - parseFloat(oferta)).toFixed(2);

      if (offer === price) {
        offer = "$0.00";
      }

      let products = JSON.parse(localStorage.getItem("products")) || [];
      let product = {
        title: title,
        price: price,
        priceOffer: priceOffer,
        ofert: offer,
        description: description,
        quantity: 1,
        img: img,
      };

      // Verificar si el producto ya está en el localStorage
      const existingProductIndex = products.findIndex(
        (item) => item.title === product.title
      );

      if (existingProductIndex !== -1) {
        // Si el producto ya está en el localStorage, aumentar la cantidad en 1
        products[existingProductIndex].quantity++;
      } else {
        // Si el producto no está en el localStorage, agregarlo
        product.quantity = 1;
        products.push(product);
      }

      localStorage.setItem("products", JSON.stringify(products));
      actualizarTotal();
      showToast("Producto agregado al carrito");
    });
  });

  function actualizarTotal() {
    var productos = JSON.parse(localStorage.getItem("products")) || [];
    var total = 0;
    productos.forEach((producto) => {
      total += producto.quantity;
    });

    localStorage.setItem("total-cart", total);
    var totalProductos = localStorage.getItem("total-cart");

    var totalSpan = document.getElementById("total-productos");
    if (totalSpan) {
      totalSpan.innerText = totalProductos;
    }
  }

  function actualizartotalPrice() {
    var productos = JSON.parse(localStorage.getItem("products")) || [];
    var subtotal = 0;
    var totalOffer = 0;
    var total = 0;
    productos.forEach((producto) => {
      var precio = producto.price.replace("$", "");
      var offer = producto.ofert.replace("$", "");
      subtotal += parseFloat(precio) * producto.quantity;
      totalOffer += parseFloat(offer) * producto.quantity;
    });

    total = subtotal - totalOffer;

    if (subtotalPrice) {
      subtotalPrice.innerText = "Subtotal: $" + subtotal.toFixed(2);
    }

    if (totalDescuento) {
      totalDescuento.innerText = "$" + totalOffer.toFixed(2);
    }

    if (totalPrice) {
      totalPrice.innerText = "$" + total.toFixed(2);
    }
  }

  actualizartotalPrice();
  actualizarTotal();

  function showToast(message) {
    const toastcontainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.classList.add("toast");

    const contentToast = document.createElement("div");
    contentToast.classList.add("toastContent");

    const svgCheck = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
        <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;

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

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el contenedor donde agregarás las cards
  function actualizarCarrito() {
    const cart = document.getElementById("cart__items");

    if (cart) {
      const productos = JSON.parse(localStorage.getItem("products")) || [];
      // Iterar sobre el arreglo de productos
      productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("cart__item", "scroll-reveal");

        var precio = producto.price.replace("$", "");
        var cantidad = producto.quantity;
        var subtotal = parseFloat(precio * cantidad).toFixed(2);

        const html = `
     <button
          class="cart__item-minus btnRemove"
          title="button remove-x"
          >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M10.247 6.74032C11.0733 7.56669 11.4865 7.97988 12 7.97988C12.5135 7.97988 12.9267 7.5667 13.753 6.74034L13.753 6.74032L15.5066 4.98681L15.5066 4.9868C15.9142 4.57922 16.1181 4.37536 16.3301 4.25295C17.3964 3.63729 18.2747 4.24833 19.0132 4.98681C19.7517 5.7253 20.3627 6.60358 19.7471 7.66993C19.6246 7.88195 19.4208 8.08575 19.0133 8.49334L17.2599 10.2467C16.4335 11.0731 16.0201 11.4865 16.0201 12C16.0201 12.5135 16.4333 12.9267 17.2597 13.7531L19.0132 15.5066C19.4208 15.9142 19.6246 16.118 19.7471 16.33C20.3627 17.3964 19.7517 18.2747 19.0132 19.0132C18.2748 19.7517 17.3964 20.3627 16.3301 19.747C16.118 19.6247 15.9142 19.4209 15.5066 19.0132L13.7533 17.2599L13.7532 17.2599C12.9271 16.4337 12.5135 16.0201 12 16.0201C11.4865 16.0201 11.0729 16.4337 10.2467 17.2599L10.2467 17.2599L8.49341 19.0132C8.08577 19.4209 7.88196 19.6247 7.66993 19.747C6.60365 20.3627 5.72522 19.7517 4.98681 19.0132C4.24827 18.2747 3.63732 17.3964 4.25295 16.33C4.37537 16.118 4.57918 15.9142 4.98681 15.5066L6.74032 13.7531C7.56669 12.9267 7.97987 12.5135 7.97987 12C7.97987 11.4865 7.56647 11.0731 6.7401 10.2467L4.98673 8.49334C4.57915 8.08575 4.37536 7.88195 4.25295 7.66993C3.63729 6.60358 4.24833 5.7253 4.98681 4.98681C5.7253 4.24833 6.60357 3.63729 7.66993 4.25295C7.88195 4.37536 8.08581 4.57922 8.4934 4.9868L8.49341 4.98681L10.247 6.74032Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="cart__item-producto">
                <div class="cart__item-image">
                  <img
                    src="${producto.img}"
                    alt="Producto cart"
                    decoding="async"
                  />
                </div>
                <div class="cart__item-info">
                  <h3>${producto.title}</h3>
                  <p>${producto.description}</p>
                </div>
              </div>
              <div class="cart__item-content">
                <div class="cart__item-cantidad">
                  <button class="btnPlus" title="button plus cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                    >
                      <path
                        d="M14.2361 5.29178C14.2361 4.77191 14.2361 4.51198 14.1789 4.29871C14.0239 3.71997 13.5718 3.26793 12.9931 3.11285C12.4315 2.96238 11.5685 2.96238 11.0069 3.11285C10.4282 3.26793 9.97615 3.71997 9.82107 4.29871C9.76393 4.51198 9.76393 4.77191 9.76393 5.29178C9.76393 6.34588 9.76393 9.109 9.43647 9.43647C9.109 9.76393 6.34588 9.76393 5.29178 9.76393C4.77191 9.76393 4.51198 9.76393 4.29871 9.82107C3.71997 9.97615 3.26793 10.4282 3.11285 11.0069C2.96238 11.5685 2.96238 12.4315 3.11285 12.9931C3.26793 13.5718 3.71997 14.0239 4.29871 14.1789C4.51198 14.2361 4.77191 14.2361 5.29178 14.2361C6.34588 14.2361 9.109 14.2361 9.43647 14.5635C9.76393 14.891 9.76393 15.418 9.76393 16.4721C9.76393 16.992 9.76393 19.4881 9.82107 19.7013C9.97615 20.28 10.4282 20.7321 11.0069 20.8871C11.5685 21.0376 12.4315 21.0376 12.9931 20.8871C13.5718 20.7321 14.0239 20.28 14.1789 19.7013C14.2361 19.4881 14.2361 16.992 14.2361 16.4721C14.2361 15.418 14.2361 14.891 14.5635 14.5635C14.891 14.2361 17.6541 14.2361 18.7082 14.2361C19.2281 14.2361 19.4881 14.2361 19.7013 14.1789C20.28 14.0239 20.7321 13.5718 20.8871 12.9931C21.0376 12.4315 21.0376 11.5685 20.8871 11.0069C20.7321 10.4282 20.28 9.97615 19.7013 9.82107C19.4881 9.76393 19.2281 9.76393 18.7082 9.76393C17.6541 9.76393 14.891 9.76393 14.5635 9.43647C14.2361 9.109 14.2361 6.34588 14.2361 5.29178Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    readonly
                    value="${producto.quantity}"
                    title="cantidad producto"
                  />
                  <button class="btnMinus" title="button minus cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                    >
                      <path
                        d="M3 12C3 11.4188 3 11.1282 3.0575 10.8897C3.21354 10.2427 3.6684 9.73726 4.25074 9.56389C4.46534 9.5 4.72689 9.5 5.25 9.5H18.75C19.2731 9.5 19.5347 9.5 19.7493 9.56389C20.3316 9.73726 20.7865 10.2427 20.9425 10.8897C21 11.1282 21 11.4188 21 12C21 12.5812 21 12.8718 20.9425 13.1103C20.7865 13.7573 20.3316 14.2627 19.7493 14.4361C19.5347 14.5 19.2731 14.5 18.75 14.5H5.25C4.72689 14.5 4.46534 14.5 4.25074 14.4361C3.6684 14.2627 3.21354 13.7573 3.0575 13.1103C3 12.8718 3 12.5812 3 12Z"
                        stroke-width="1.5"
                      />
                    </svg>
                  </button>
                </div>
                <div class="cart__item-precio">
                    ${
                      producto.priceOffer === "$0.00"
                        ? `<p>$${precio}</p>`
                        : `<p class="precio__regular">$${precio}</p><p class="precio__ofert">${producto.priceOffer}</p>`
                    }
                </div>
                <div class="cart__item-subtotal">
                  <p>$${subtotal}</p>
                </div>
              </div>
        `;
        card.innerHTML = html;
        cart.appendChild(card);
      });
    }
  }
  actualizarCarrito();
});

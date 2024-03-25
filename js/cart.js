document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart__item');


    cartItems.forEach(cartItem => {
        const cantidadInput = cartItem.querySelector('input[type="text"]');
        const precioUnidad = parseFloat(cartItem.querySelector('.cart__item-precio p').innerText.replace('$', ''));
        let cantidad = parseInt(cantidadInput.value);
      

        cartItem.querySelector('.cart__item-subtotal p').innerText = `$${precioUnidad.toFixed(2)}`;
        // Obtener botones de incremento y decremento de cantidad
        const btnPlus = cartItem.querySelector('.btnPlus');
        const btnMinus = cartItem.querySelector('.btnMinus');
        const btnRemove = cartItem.querySelector('.btnRemove');
         
        // Manejar evento de clic en botón de incremento de cantidad
        btnPlus.addEventListener('click', () => {
            cantidad = parseInt(cantidadInput.value);
            cantidad = Math.min(cantidad + 1, 10); // Limitar la cantidad máxima a 10
            cantidadInput.value = cantidad;
            actualizarSubtotal(cantidad, precioUnidad, cartItem);
            actualizarTotalProductos();
        });

        // Manejar evento de clic en botón de decremento de cantidad
        btnMinus.addEventListener('click', () => {

            if(cantidad == 1){
                cartItem.remove();
                actualizarTotalProductos();
            }

            cantidad = parseInt(cantidadInput.value);
            cantidad = Math.max(cantidad - 1, 1); // Limitar la cantidad mínima a 1
            cantidadInput.value = cantidad;
            actualizarSubtotal(cantidad, precioUnidad, cartItem);
            actualizarTotalProductos();
        });

        btnRemove.addEventListener('click', () => {
            cartItem.remove();
            actualizarTotalProductos();
        });

    
        // Función para actualizar el subtotal del artículo
        function actualizarSubtotal(cantidad, precioUnidad, cartItem) {
            const subtotal = cantidad * precioUnidad;
            cartItem.querySelector('.cart__item-subtotal p').innerText = `$${subtotal.toFixed(2)}`;
            // Aquí puedes realizar cualquier otra acción necesaria, como actualizar el total del carrito, etc.
        }
    })

   

    function actualizarTotalProductos() {
        // Obtener todos los elementos cart__item
        const cartItems = document.querySelectorAll('.cart__item');
        const totalProductos = document.getElementById('total-productos');
        const totalP = document.getElementById('total-price');
    
        let total = 0;
        let totalPrice = 0; 
        // Iterar sobre cada cart__item
        cartItems.forEach(cartItem => {
            const cantidadInput = cartItem.querySelector('input[type="text"]');
            const cantidad = parseInt(cantidadInput.value);
    
            // Obtener el precio de cada producto
            const precioProducto = parseFloat(cartItem.querySelector('.cart__item-precio p').innerText.replace('$', ''));
    
            // Calcular el precio total por producto y sumarlo al total
            totalPrice += cantidad * precioProducto;
            total += cantidad;
        });
    
        // Actualizar el contenido del span con el total de productos y el precio total
        totalProductos.innerText = total;
        totalP.innerText = `$${totalPrice.toFixed(2)}`; // Asegurarse de que el precio se muestre con dos decimales
    }
    

    actualizarTotalProductos();

})
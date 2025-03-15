let total = 0;


function agregarAlCarrito(precio) {
    total += precio;
    actualizarTotal();
}

function actualizarTotal() {
    document.getElementById("total").innerText = total.toFixed(2); 
}


function comprar() {
    if (total === 0) {
        alert("El carrito está vacío. Agrega productos antes de comprar.");
    } else {
        alert("Compra realizada. Total: $" + total.toFixed(2));
        vaciarCarrito();
    }
}


function vaciarCarrito() {
    total = 0;
    actualizarTotal();
    alert("Carrito vaciado.");
}

document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);


document.getElementById('comprar').addEventListener('click', comprar);

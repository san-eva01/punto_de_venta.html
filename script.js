let total = 0;

function agregarAlCarrito(precio) {
    total += precio;
    document.getElementById("total").innerText = total;
}

function comprar() {
    alert("Compra realizada. Total: $" + total);
    total = 0;
    document.getElementById("total").innerText = total;
}

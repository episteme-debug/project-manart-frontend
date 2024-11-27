
$(document).ready(function () {
    var producto = JSON.parse(localStorage.getItem("productoById"));

    if (producto) {
        document.getElementById("nombre_Probucto").textContent = producto.nombreProducto;
        document.getElementById("nombreProbucto").textContent = producto.nombreProducto;
        document.getElementById("Precio").textContent = producto.precioProducto;
        document.getElementById("Descripcion").textContent = producto.descripcionProducto;
        document.getElementById("Disponibles").textContent = producto.stockProducto;
        document.getElementById("imagen").src = producto.imagenProducto;
    }
});

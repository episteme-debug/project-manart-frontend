<<<<<<< HEAD

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
=======
$(document).ready(function () {
  var producto = JSON.parse(localStorage.getItem("productoById"));

  if (producto) {
    document.getElementById("nombre_Probucto").textContent =
      producto.nombreProducto;
    document.getElementById("nombreProbucto").textContent =
      producto.nombreProducto;
    document.getElementById("Precio").textContent = producto.precioProducto;
    document.getElementById("Descripcion").textContent =
      producto.descripcionProducto;
    document.getElementById("Disponibles").textContent = producto.stockProducto;
    document.getElementById("imagen").src = producto.imagenProducto;
  }
>>>>>>> 311239852621fc34d870d30ddcf6c27b4c62d615
});

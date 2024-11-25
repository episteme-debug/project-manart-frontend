

fetch("http://localhost:8080/getProductoById/10", {
  method: 'GET'
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json(); // Asume que el servidor devuelve JSON
  })
  .then(data => {
    console.log(data); // Muestra la respuesta en la consola stockProducto  nombre_Probucto
    document.getElementById("nombre_Probucto").textContent = data.nombreProducto;
    document.getElementById("nombreProbucto").textContent = data.nombreProducto;
    document.getElementById("Precio").textContent = data.precioProducto;
    document.getElementById("Descripcion").textContent = data.descripcionProducto;
    document.getElementById("Disponibles").textContent = data.stockProducto;
    document.getElementById("imagen").src = data.imagenProducto;
  })
  .catch(error => {
    console.error('Error al obtener el producto:', error);
  });

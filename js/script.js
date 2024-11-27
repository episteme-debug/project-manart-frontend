

fetch("http://localhost:8080/getProductoById/1", {
  method: 'GET'
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data); 
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

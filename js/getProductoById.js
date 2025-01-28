<<<<<<< HEAD

$(document).ready(function () {
  $(document).on('click', '.card-titulo', function (event) {
    event.preventDefault();
    var idProducto = $(this).attr('id');
=======
$(document).ready(function () {
  $(document).on("click", ".card-titulo", function (event) {
    event.preventDefault();
    var idProducto = $(this).attr("id");
>>>>>>> 311239852621fc34d870d30ddcf6c27b4c62d615
    peticionFetch(idProducto);
  });

  function peticionFetch(idProducto) {
    fetch(`http://localhost:8080/getProductoById/${idProducto}`, {
<<<<<<< HEAD
      method: 'GET'
    })
      .then(response => {
=======
      method: "GET",
    })
      .then((response) => {
>>>>>>> 311239852621fc34d870d30ddcf6c27b4c62d615
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
<<<<<<< HEAD
      .then(data => {
        localStorage.setItem("productoById", JSON.stringify(data));
        window.location.href = "Producto.html";
      })
      .catch(error => {
        console.error('Error al obtener el producto:', error);
      });
  }
});

=======
      .then((data) => {
        localStorage.setItem("productoById", JSON.stringify(data));
        window.location.href = "Producto.html";
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }
});
>>>>>>> 311239852621fc34d870d30ddcf6c27b4c62d615

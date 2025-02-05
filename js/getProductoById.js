$(document).ready(function () {
  $(document).on("click", ".card-titulo", function (event) {
    event.preventDefault();
    var idProducto = $(this).attr("id");
    peticionFetch(idProducto);
  });
  function peticionFetch(idProducto) {
    fetch(`http://localhost:8080/getProductoById/${idProducto}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("productoById", JSON.stringify(data));
        window.location.href = "Producto.html";
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }
})
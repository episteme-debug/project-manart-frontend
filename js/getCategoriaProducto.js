$(document).ready(function () {
  async function getCategoriasProductos() {
    try {
      var respuestaPeticion = await fetch(
        "http://localhost:8080/get_categoria_producto_activa",
        {
          method: "GET",
        }
      );

      var categoriasProductos = await respuestaPeticion.json();

      if (respuestaPeticion.ok) {
        return categoriasProductos;
      } else {
        throw new Error("La petición ha sido rechazada");
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function insertarCategoriasProductoDom() {
    var categoriasProductos = await getCategoriasProductos();

    if (categoriasProductos != null) {
      categoriasProductos.forEach((categoria) => {
        // Creando elementos del DOM
        var li = $("<li></li>").addClass("scrollbar-item");
        var categoriaCard = $("<div></div>").addClass("categorias-card");
        var tituloCard = $("<h2></h2>")
          .addClass("h2 card-titulo")
          .text(categoria.nombreCategoria);
        var linkBtn = $("<a></a>").addClass("btn-link");
        var spanBtn = $("<span></span>").addClass("span").text("Ver Productos");
        var iconBtn = $("<ion-icon></ion-icon>").attr("name", "arrow-forward");
        var divImagen = $("<div></div>").addClass("tiene-bg-image");

        var imagenContenedor = $("<img>")
          .attr("id", `imagen_${categoria.idCategoria}`)
          .attr("width", "100%")
          .attr("height", "100%")
          .css("display", "none");

        divImagen.append(imagenContenedor);
        linkBtn.append(spanBtn, iconBtn);
        categoriaCard.append(tituloCard, linkBtn, divImagen);
        li.append(categoriaCard);

        $(".categorias-lista").append(li);

        fetch(`http://localhost:8080/GetProducto/${categoria.idCategoria}`)
          .then((res) => res.blob())
          .then((imagenBlob) => {
            const imagenUrl = URL.createObjectURL(imagenBlob);
            
            document.getElementById(`imagen_${categoria.idCategoria}`).src = imagenUrl;
            document.getElementById(`imagen_${categoria.idCategoria}`).style.display = "block"; 
          })
          .catch((error) => console.error("Error al cargar la imagen:", error));
      });
    }
  }

  insertarCategoriasProductoDom();
});

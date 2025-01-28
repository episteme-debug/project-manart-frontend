$(document).ready(function name(params) {
  async function getCategoriasProductos(params) {
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
    var li = $("<li></li>").addClass("scrollbar-item");

    if (categoriasProductos != null) {
      for (var i = 0; i < categoriasProductos.length; i++) {
        var categoria = categoriasProductos[i];

        //Creando elementos del DOM
        var li = $("<li></li>").addClass("scrollbar-item");
        var categoriaCard = $("<div></div>").addClass("categorias-card");
        var tituloCard = $("<h2></h2>")
          .addClass("h2 card-titulo")
          .text(categoria.nombreCategoria);
        var linkBtn = $("<a></a>").addClass("btn-link");
        var spanBtn = $("<span></span>").addClass("span").text("Ver Productos");
        var iconBtn = $("<ion-icon></ion-icon>").attr("name", "arrow-forward");
        var divImagen = $("<div></div>")
          .addClass("tiene-bg-image")
          .css(
            "background-image",
            "url(img/" + categoria.imagenCategoria + ")"
          );

        linkBtn.append(spanBtn, iconBtn);
        categoriaCard.append(tituloCard, linkBtn, divImagen);
        li.append(categoriaCard);

        //Agregando elementos al DOM
        $(".categorias-lista").append(li);
      }
    }
  }
  insertarCategoriasProductoDom();
});

$(document).ready(function () {
    $(".disminuir").on("click", function () {
        $(".Cantidad-input").removeAttr("readonly");
        let cantidad = parseInt(document.querySelector(".Cantidad-input").placeholder);
        if(cantidad > 1){
          let nuevo = cantidad - 1;
          $(".Cantidad-input").attr("placeholder",nuevo);
        }
      })
      
      $(".aumentar").on("click", function () {
        $(".Cantidad-input").removeAttr("readonly");
        let cantidad = parseInt(document.querySelector(".Cantidad-input").placeholder);
        if(cantidad < producto.stockProducto){
          let nuevo = cantidad + 1;
        $(".Cantidad-input").attr("placeholder",nuevo);
      }
      });
});

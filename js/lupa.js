$(document).ready(function () {
  $("#imagen").on("click", function () {
    const modalHTML = `
      <div id="image-modal" style="
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
        z-index: 1000;">
        <span id="close-modal" style="
          position: absolute;
          top: 20px;
          right: 30px;
          color: white;
          font-size: 30px;
          cursor: pointer;">&times;</span>
        <div style="
          width: 90%;
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;">
          <img id="modal-image" src="${$(this).attr(
            "src"
          )}" alt="Imagen ampliada" style="
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 10px;">
        </div>
      </div>
    `;

    $("body").append(modalHTML);

    $("#close-modal").on("click", function () {
      $("#image-modal").remove();
    });

    $("#image-modal").on("click", function (e) {
      if (e.target.id == "image-modal") {
        $(this).remove();
      }
    });
  });
});

let NumeroFav = 0;
$("#estrella").on("click", function () {
  let icono = $("#icono").attr("src");
  let btn = document.getElementsByClassName("btn-insignia")[0];
  if (icono == "iconos/star-outline.svg") {
    $("#icono").attr("src", "iconos/star-sharp.svg");
    NumeroFav += 1;
    btn.innerText = NumeroFav;
  } else {
    $("#icono").attr("src", "iconos/star-outline.svg");
    NumeroFav = 0;
    btn.innerText = NumeroFav;
  }
  
localStorage.setItem('numero',NumeroFav);
});
function Favorito() {
  if (NumeroFav==1) {
  window.location.href = "http://127.0.0.1:5501/Favoritos.html";
  }
}
let NumeroCar = 0;
var producto = JSON.parse(localStorage.getItem("productoById"));

$(".carro").on("click", function () {
  if (NumeroCar == 0) {
    NumeroCar += 1;
    $("#Carrito .btn-insignia").text(NumeroCar);
    $(".acciones-header-btn .btn-texto").text(producto.precioProducto);
    $(this).css({
      "background-color": "#c2590f", 
    });
  } else {
    NumeroCar = 0; 
    $("#Carrito .btn-insignia").text(NumeroCar);
    $(".acciones-header-btn .btn-texto").text("0.00");
    $(this).css({
      "background-color": "#8b4513", 
    });
  }
});


function Carrito() {
if (NumeroCar == 1) {
  window.location.href = "http://127.0.0.1:5501/Carrito.html";
}
}
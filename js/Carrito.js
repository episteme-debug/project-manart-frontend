//Movimiento del icono
let alternar = true;
document.getElementById("icono").addEventListener("click", function () {
  if (alternar) {
    $("#icono").html(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="icono" width="100%" height="100%">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        `);
    $("#cupon").css("display", "block");
  } else {
    $("#icono").html(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="icono" width="100%" height="100%">
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
            </svg>
        `);
    $("#cupon").css("display", "none");
  }
  alternar = !alternar;
});

// funcion del traer el producto
var producto = JSON.parse(localStorage.getItem("productoById"));

const Contenedor = document.getElementById("Contenedor");


let dato = localStorage.getItem("numero");

dato = parseInt(dato);

let btn = document.getElementsByClassName("Cartera")[0];
btn.innerText = dato;

var Precio = document.getElementsByClassName("btn-texto");

$(".acciones-header-btn .btn-texto").text(producto.precioProducto);

if (producto) {
  const nuevo = document.createElement("tr");
  nuevo.innerHTML = `
    <td class="Descripcion_imagen">
      <div class="imagen">
        <img src="${producto.imagenProducto}" alt="">
      </div>
    </td>
    <td>
      <p class="Nombre_Producto" >${producto.nombreProducto}</p>
      <button class="link" id="Eliminar"><span>Eliminar</span></button>
    </td>
    <td class="Centar_cantidad">
      <div id="cantidad">
        <button  class="btn-cantidad disminuir">-</button>
        <input type="text" min="0" max="${producto.stockProducto}" class="Cantidad-input"
          readonly placeholder="1">
        <button  class="btn-cantidad aumentar">+</button>
      </div>
    </td>
    <td class="Total_producto">
      <span id="Total1">${producto.precioProducto}</span>
    </td>
  `;

  Contenedor.appendChild(nuevo);

  const eliminar = nuevo.querySelector("#Eliminar");
  eliminar.addEventListener("click", function () {
    nuevo.remove();

    window.location.href = "http://127.0.0.1:5501/index.html";
  });
}

// insertar total parcial
let Total_pacial = document.getElementById("Total_pacial");
Total_pacial.textContent = producto.precioProducto;
//total  real
let Total_real = document.getElementById("Total_real");
Total_real.textContent = producto.precioProducto;


//Funcion de catidad de carrito
// Lo del menos no fuvcionalet precioUnitario = producto.precioProducto; // Precio base del producto
$(".disminuir").on("click", function () {
  $(".Cantidad-input").removeAttr("readonly");

  let cantidad = parseInt(
    document.querySelector(".Cantidad-input").placeholder
  );
  if (cantidad > 1) {
    cantidad--;
    $(".Cantidad-input").attr("placeholder", cantidad);

    let Total = document.getElementById("Total1");
    let precioUnitario = producto.precioProducto;
    let nuevo_Precio = precioUnitario * cantidad;

    Total.innerText = nuevo_Precio.toFixed(); 
    console.log(nuevo_Precio);
    // insertar total parcial
    let Total_pacial = document.getElementById("Total_pacial");
    Total_pacial.textContent = nuevo_Precio;
    
    //total  real
    let Total_real = document.getElementById("Total_real");
    Total_real.textContent = nuevo_Precio;

    
$(".acciones-header-btn .btn-texto").text(nuevo_Precio);
  }
});

$(".aumentar").on("click", function () {
  $(".Cantidad-input").removeAttr("readonly");

  let cantidad = parseInt(
    document.querySelector(".Cantidad-input").placeholder
  );
  if (cantidad < producto.stockProducto) {
    cantidad++;
       $(".Cantidad-input").attr("placeholder", cantidad);

    let Total = document.getElementById("Total1");
    let precioUnitario = producto.precioProducto; 
    let nuevo_Precio = precioUnitario * cantidad; 
    Total.innerText = nuevo_Precio.toFixed();
    console.log(nuevo_Precio);

    // insertar total parcial
    let Total_pacial = document.getElementById("Total_pacial");
    Total_pacial.textContent = nuevo_Precio;

    //total  real
    let Total_real = document.getElementById("Total_real");
    Total_real.textContent = nuevo_Precio;
    console.log(producto.precioProducto);

    
$(".acciones-header-btn .btn-texto").text(nuevo_Precio);
  }
});

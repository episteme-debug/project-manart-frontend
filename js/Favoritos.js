const Contenedor = document.getElementById("Contenedor");
const Agregar = document.getElementById("mas");
let dato = localStorage.getItem("numero");
dato = parseInt(dato);
let btn = document.getElementsByClassName("btn-insignia")[0];
btn.innerText = dato;

var producto = JSON.parse(localStorage.getItem("productoById"));

if (producto) {
  const nuevo = document.createElement("section");
  nuevo.innerHTML = `

            <img src=${producto.imagenProducto} alt="" id="imagenProducto" width="15%" ; max-height="auto" ;>
            <div id="ContenedorProducto">
                <p id="nombreProducto">${producto.nombreProducto}</p>
                <p id="nombreArtesano">Julio Profe</p>
                <p id="PrecioAnterio">$30.000</p>
                <p id="Precio">$${producto.precioProducto}</p>
                <button id="eliminar">Eliminar</button>
            </div>

`;
  Contenedor.appendChild(nuevo);

  const eliminar = nuevo.querySelector("#eliminar");
  eliminar.addEventListener("click", function () {
    btn.innerHTML = dato - 1;
    Contenedor.removeChild(nuevo);
    window.location.href = "http://127.0.0.1:5501/index.html";
  });
}

console.log(dato);

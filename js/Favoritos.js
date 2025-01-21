const Contenedor = document.getElementById("Contenedor");
const Agregar = document.getElementById("mas");

mas.addEventListener("click", function () {
  const nuevo = document.createElement("section");

  nuevo.innerHTML = `

            <img src="img/ProductoTagua.jpg" alt="" id="imagenProducto" width="20%" ; height="auto" ;>
            <div >
                <p id="nombreProducto">Manillas Artesanales</p>
                <p id="nombreArtesano">Julio Profe</p>
                <p id="PrecioAnterio">$30.000</p>
                <p id="Precio">$25.000</p>
                <button id="eliminar">Eliminar</button>
            </div>

`;
  Contenedor.appendChild(nuevo);

  const eliminar = nuevo.querySelector("#eliminar");
  eliminar.addEventListener("click", function () {
    Contenedor.removeChild(nuevo);
  });
});

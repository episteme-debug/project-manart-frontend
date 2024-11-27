$(document).ready(function (params) {
    
    async function getAllProductos() {
        
        try {
            var peticion = await fetch('http://localhost:8080/getAllProductos', {
                method: 'GET'
            });

            var productos = await peticion.json();

            if(peticion.ok){
                return productos;
            } else {
                throw new Error('La petición ha sido rechazada');
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    
    function crearHTMLProducto(producto) {
        const idProducto = producto.idProducto;
        const porcentajeDescuento = 0.2;
        const precioViejoProducto = (producto.precioProducto - (producto.precioProducto * porcentajeDescuento)).toFixed(2);
    
        return `
            <li class="scrollbar-item-producto">
                <div class="compra-card">
                    <div class="card-banner img-holder">
                        <img class="img-cover" loading="lazy" src="${producto.imagenProducto}" alt="${producto.nombreProducto}">
                        <span class="descuento">${(porcentajeDescuento * 100)}%</span>
                        <div class="card-acciones">
                            <button class="btn-accion" aria-label="añadir-al-carrito">
                                <ion-icon name="bag-handle-outline"></ion-icon>
                            </button>
                            <button class="btn-accion" aria-label="añadir-a-favoritos">
                                <ion-icon name="heart-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                    <div class="card-contenido">
                        <div class="precio">
                            <span class="span">$${precioViejoProducto}</span>
                            <del class="del">$${producto.precioProducto.toFixed(2)}</del>
                        </div>
                        <h3>
                            <a class="card-titulo" href="#" id="${idProducto}>${producto.nombreProducto}</a>
                        </h3>
                        <div class="card-valuacion">
                            <div class="valuacion-contenedor">
                                ${'<ion-icon name="star"></ion-icon>'.repeat(5)}
                            </div>
                            <p class="valuacion-texto">500 visitas</p>
                        </div>
                    </div>
                </div>
            </li>
        `;
    }
    
    async function actualizarDatosDom() {
        const productos = await getAllProductos();
        console.log(productos);
        const ul = $(".ulproducto");
        let contenidoHTML = "";
    
        productos.forEach(producto => {
            contenidoHTML += crearHTMLProducto(producto);
        });
        ul.html(contenidoHTML);
    }

    actualizarDatosDom();

})
let alternar = true;
document.getElementById("icono").addEventListener("click", function() {
    if (alternar) {
        $('#icono').html(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="icono" width="100%" height="100%">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        `);
        $('#cupon').css('display', 'block');
    } else {
        $('#icono').html(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="icono" width="100%" height="100%">
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
            </svg>
        `);
        $('#cupon').css('display', 'none');
    }
    alternar = !alternar;
});$(document).ready(function () {

    function actualizarTotales() {
        let totalReal = 0;

        $('.Infomacion_Producto').each(function () {
            let $fila = $(this);
            let precio = parseFloat($fila.find('.masymenos1').data('precio')); 
            let cantidad = parseInt($fila.find('.masymenos-input').val() || $fila.find('.masymenos-input').attr('placeholder')) || 0;

            let totalParcial = precio * cantidad;

            $fila.find('.Total_producto span').text(totalParcial.toFixed(3));

            totalReal += totalParcial;
        });

        $('#Total_real').text(totalReal.toFixed(3));
        $('#Total_pacial').text(totalReal.toFixed(3));
    }

    $('.masymenos').on('click', function () {
        let $input = $(this).closest('.Centar_cantidad').find('.masymenos-input');
        let currentValue = parseInt($input.val() || $input.attr('placeholder')) || 0;

        if (currentValue > 1) {
            $input.val(currentValue - 1);
        }

        actualizarTotales(); 
    });

    $('.masymenos1').on('click', function () {
        let $input = $(this).closest('.Centar_cantidad').find('.masymenos-input');
        let currentValue = parseInt($input.val() || $input.attr('placeholder')) || 0;
        let maxValue = parseInt($('#Disponibles').text()) || 0; 
        if (!maxValue || currentValue < maxValue) {
            $input.val(currentValue + 1);
        }

        actualizarTotales(); 
    });

    $('.Infomacion_Producto').each(function () {
        let precio = parseFloat($(this).find('.Total_producto span').text().replace('$', ''));
        $(this).find('.masymenos1').data('precio', precio);
    });

    actualizarTotales();
     
    $('#Eliminar').on('click', function(){
        //la accion de elimianar no se puede hacer ya que se necesita eliminar con ub fech delect para que se elimine en la api y de hay la pagina se actualize :)
    });
});

$(document).ready(function () {
    $(".masymenos").on("click", function () {
        let $input = $(".masymenos-input");
        $input.attr("type", "number"); // Cambia temporalmente el tipo para obtener el valor
        let currentValue =
            parseInt($input.val() || $input.attr("placeholder")) || 0;

        // Decrementa el valor solo si es mayor a 0
        if (currentValue > 1) {
            $input.val(currentValue - 1);
        }

        $input.attr("type", "text"); // Vuelve a cambiar el tipo
    });

    $(".masymenos1").on("click", function () {
        let $input = $(".masymenos-input");
        $input.attr("type", "number");
        let currentValue =
            parseInt($input.val() || $input.attr("placeholder")) || 1;

        let maxValue = parseInt($("#Disponibles").text()) || 1;

        // Incrementa el valor solo si es menor al máximo permitido
        if (currentValue < maxValue) {
            $input.val(currentValue + 1);
        }

        $input.attr("type", "text");
    });
});

$(document).ready(function () {
    $('.masymenos').on('click', function () {
        let $input = $('.masymenos-input');
        $input.attr('type', 'number');
        let currentValue = parseInt($input.val() || $input.attr('placeholder')) || 0;

     

        $input.attr('type', 'text'); 
    });

    $('.masymenos1').on('click', function () {
        let $input = $('.masymenos-input');
        $input.attr('type', 'number');
        let currentValue = parseInt($input.val() || $input.attr('placeholder')) || 0;

        let maxValue = parseInt($('#Disponibles').text()) || 0;

        if (currentValue < maxValue) {
            $input.val(currentValue + 1);
        }

        $input.attr('type', 'text'); 
    });
});

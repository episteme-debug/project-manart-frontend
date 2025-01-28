$(document).ready(function (param) {
    var main = $(".main");
    var contenedor_card = $("<div></div>").addClass("contenedor_card");
    var card = $("<div></div>").addClass("card");
    var buttons_card = $("<div></div>").addClass("buttons_card")
    var bprimary = $("<button></button>").addClass("button primary").text("Confirmar");
    var bsecondary = $("<button></button>").addClass("button secondary").text("Cancelar");
    buttons_card.append(bsecondary, bprimary);
    contenedor_card.append(card, buttons_card);

    $(".primary").on("click", function(){
        $(".buttons_card").hide();
        main.append(contenedor_card);
    })
})
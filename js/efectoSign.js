$(document).ready(function name(params) {
<<<<<<< HEAD
    $("sign-in").show();
    $("#sign-in").click(function name(params) {
        $(".register").hide();
        $(".hide").css({
            "display": "flex",
            "transform": "translateY(0)",
            "transition": "opacity 0.5s ease, transform 0.5s ease"

        });
    })

    $("#sign-up").click(function name(params) {
        $(".hide").css({
            "display": "none",
            "transform": "translateY(0)",
            "transition": "opacity 0.5s ease, transform 0.5s ease"

        });
        $(".register").show();
    })
})
=======
  $("sign-in").show();
  $("#sign-in").click(function name(params) {
    $(".register").hide();
    $(".hide").css({
      display: "flex",
      transform: "translateY(0)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    });
  });

  $("#sign-up").click(function name(params) {
    $(".hide").css({
      display: "none",
      transform: "translateY(0)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    });
    $(".register").show();
  });
});
>>>>>>> 311239852621fc34d870d30ddcf6c27b4c62d615

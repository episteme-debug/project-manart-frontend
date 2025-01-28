$(document).ready(function () {
<<<<<<< HEAD

    var nombre_objeto;
    var apellido_objeto;
    var telefono_objeto;
    var tipo_usuario_objeto;
    var email_objeto;
    var password_objeto;
    var radios = $(".input_tipo_usuario");

    function obtenerTipoUsuario(params) {
        var usuario = null;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                usuario = radios[i].id;
                break;
            }
        }

        if (usuario != null) {
            switch (usuario) {
                case "comprador":
                    return 1;
                    break;
                case "organizador":
                    return 2;
                    break;
                case "artesano":
                    return 3;
                    break;
                default:
                    break;
            }
        }
        return null;
    }

    function constructor(params) {
        nombre_objeto = $(".input_nombre").val();
        apellido_objeto = $(".input_apellido").val();
        telefono_objeto = $(".input_telefono").val();
        tipo_usuario_objeto = obtenerTipoUsuario();
        email_objeto = $(".input_email").val();
        password_objeto = $(".input_password").val();
    }

    $(".btn_registro").click(function () {
        constructor();
        console.log(
            nombre_objeto,
            apellido_objeto,
            telefono_objeto,
            tipo_usuario_objeto,
            email_objeto,
            password_objeto
        );
        if (comprobarValidezInput() == false) {
            var mensaje = "Querido usuario recuerda que no pueden haber campos vacíos";
            toastError(mensaje);

        } else {
            saveUsuario();
        }
    });

    function comprobarValidezInput() {
        var esValido = true;

        if (!nombre_objeto || !apellido_objeto || !telefono_objeto || !tipo_usuario_objeto || !email_objeto || !password_objeto) {
            esValido = false;
        }

        return esValido;
    }

    async function saveUsuario(params) {

        try {
            var respuestaSolicitud = await fetch("http://localhost:8080/saveUsuario", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombreUsuario: nombre_objeto,
                    apellidoUsuario: apellido_objeto,
                    telefonoUsuario: telefono_objeto,
                    tipoUsuario: tipo_usuario_objeto,
                    emailUsuario: email_objeto,
                    contrasenaUsuario: password_objeto
                })
            });

            var cuerpoRespuesta = await respuestaSolicitud.json();

            if (respuestaSolicitud.ok == true) {
                console.log("La solicitud ha sido aceptada con éxito : " + "\n" 
                    + JSON.stringify(cuerpoRespuesta));
                if(cuerpoRespuesta.error == 1){
                    var mensaje = "El email ingresado ya se encuentra registrado";
                    toastWarning(mensaje);
                    return;
                }else{
                    var mensaje = "Registro exitoso"
                    toastSuccess(mensaje);
                    vaciarInputs();
                }

            } else {
                throw new Error(cuerpoRespuesta.status + cuerpoRespuesta);

            }

        } catch (error) {
            alert("Hubo inconvenientes con la solicitud");
            console.log(error);
        }
    }

    function vaciarInputs() {
        $(".input_nombre").val("");
        $(".input_apellido").val("");
        $(".input_telefono").val("");
        $(".input_email").val("");
        $(".input_password").val("");

        //Vaciar input tipo usuario
        for (var i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }
    }

})
=======
  var nombre_objeto;
  var apellido_objeto;
  var telefono_objeto;
  var tipo_usuario_objeto;
  var email_objeto;
  var password_objeto;
  var radios = $(".input_tipo_usuario");

  function obtenerTipoUsuario(params) {
    var usuario = null;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked == true) {
        usuario = radios[i].id;
        break;
      }
    }

    if (usuario != null) {
      switch (usuario) {
        case "comprador":
          return 1;
          break;
        case "organizador":
          return 2;
          break;
        case "artesano":
          return 3;
          break;
        default:
          break;
      }
    }
    return null;
  }

  function constructor(params) {
    nombre_objeto = $(".input_nombre").val();
    apellido_objeto = $(".input_apellido").val();
    telefono_objeto = $(".input_telefono").val();
    tipo_usuario_objeto = obtenerTipoUsuario();
    email_objeto = $(".input_email").val();
    password_objeto = $(".input_password").val();
  }

  $(".btn_registro").click(function () {
    constructor();
    console.log(
      nombre_objeto,
      apellido_objeto,
      telefono_objeto,
      tipo_usuario_objeto,
      email_objeto,
      password_objeto
    );
    if (comprobarValidezInput() == false) {
      var mensaje =
        "Querido usuario recuerda que no pueden haber campos vacíos";
      toastError(mensaje);
    } else {
      saveUsuario();
    }
  });

  function comprobarValidezInput() {
    var esValido = true;

    if (
      !nombre_objeto ||
      !apellido_objeto ||
      !telefono_objeto ||
      !tipo_usuario_objeto ||
      !email_objeto ||
      !password_objeto
    ) {
      esValido = false;
    }

    return esValido;
  }

  async function saveUsuario(params) {
    try {
      var respuestaSolicitud = await fetch(
        "http://localhost:8080/saveUsuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombreUsuario: nombre_objeto,
            apellidoUsuario: apellido_objeto,
            telefonoUsuario: telefono_objeto,
            tipoUsuario: tipo_usuario_objeto,
            emailUsuario: email_objeto,
            contrasenaUsuario: password_objeto,
          }),
        }
      );

      var cuerpoRespuesta = await respuestaSolicitud.json();

      if (respuestaSolicitud.ok == true) {
        console.log(
          "La solicitud ha sido aceptada con éxito : " +
            "\n" +
            JSON.stringify(cuerpoRespuesta)
        );
        if (cuerpoRespuesta.error == 1) {
          var mensaje = "El email ingresado ya se encuentra registrado";
          toastWarning(mensaje);
          return;
        } else {
          var mensaje = "Registro exitoso";
          toastSuccess(mensaje);
          vaciarInputs();
        }
      } else {
        throw new Error(cuerpoRespuesta.status + cuerpoRespuesta);
      }
    } catch (error) {
      alert("Hubo inconvenientes con la solicitud");
      console.log(error);
    }
  }

  function vaciarInputs() {
    $(".input_nombre").val("");
    $(".input_apellido").val("");
    $(".input_telefono").val("");
    $(".input_email").val("");
    $(".input_password").val("");

    //Vaciar input tipo usuario
    for (var i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
  }
});
>>>>>>> 311239852621fc34d870d30ddcf6c27b4c62d615

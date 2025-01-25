$(document).ready(function name(params) {
  var log_in_email;
  var log_in_password;

  function constructor(params) {
    log_in_email = $(".log_in_email").val();
    log_in_password = $(".log_in_password").val();
  }

  $(".btn_log_in").click(function name(params) {
    constructor();

    if (comprobarValidezInput() == false) {
      var mensaje =
        "Querido usuario recuerda que no pueden haber campos vacíos";
      toastError(mensaje);
    } else {
      console.log("Ingresos válidos");
      loginPersona();
    }
  });

  function comprobarValidezInput() {
    var esValido = true;

    if (!log_in_email || !log_in_password) {
      esValido = false;
    }
    return esValido;
  }

  async function loginPersona(params) {
    try {
      var respuestaSolicitud = await fetch("http://localhost:8080/logIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailUsuario: log_in_email,
          contrasenaUsuario: log_in_password,
        }),
      });

      var cuerpoRespuesta = await respuestaSolicitud.json();

      if (respuestaSolicitud.ok == true) {
        console.log("La solicitud ha sido aceptada con éxito : ");
        console.log(JSON.stringify(cuerpoRespuesta));
        var mensaje;
        switch (cuerpoRespuesta.error) {
          case 0:
            mensaje = "Email Incorrecto. Verifique sus datos.";
            toastWarning(mensaje);
            break;
          case 1:
            mensaje = "Contraseña Incorrecta. Verifique sus datos.";
            toastWarning(mensaje);
            break;
          case 2:
            mensaje = "Inicio de sesión exitoso";
            toastSuccess(mensaje);
            vaciarInputs();
            break;
          default:
            break;
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
    $(".input_fecha_nac").val("");
    $(".input_email").val("");
    $(".input_password").val("");
  }
});

const toastSuccess = (mensaje) => {
  const listToast = $(".container-toast");
  const toast = $("<div></div>").attr("class", "toast toast-success show");
  const icon = $("<i></i>").attr("class", "fa fa-check-circle toast-icon");
  const message = $("<div></div>").text(mensaje);
  const iconClose = $("<i></i>").attr("class", "fa fa-close");
  toast.append(icon, message, iconClose);
  listToast.append(toast);

  iconClose.on("click", () => {
    toast.removeClass("show").addClass("hide");
    setTimeout(() => {
      toast.hide();
    }, 500);
  });

  setTimeout(() => {
    toast.removeClass("show").addClass("hide");
    setTimeout(() => {
      toast.hide();
    }, 500);
  }, 9000);
};

const toastError = (mensaje) => {
  const listToast = $(".container-toast");
  const toast = $("<div></div>").attr("class", "toast toast-error show");
  const icon = $("<i></i>").attr(
    "class",
    "fa-solid fa-triangle-exclamation toast-icon"
  );
  const message = $("<div></div>").text(mensaje);
  const iconClose = $("<i></i>").attr("class", "fa fa-close");
  toast.append(icon, message, iconClose);
  listToast.append(toast);

  iconClose.on("click", () => {
    toast.removeClass("show").addClass("hide");
    setTimeout(() => {
      toast.hide();
    }, 500);
  });

  setTimeout(() => {
    toast.removeClass("show").addClass("hide");
    setTimeout(() => {
      toast.hide();
    }, 500);
  }, 9000);
};

const toastWarning = (mensaje) => {
  const listToast = $(".container-toast");
  const toast = $("<div></div>").attr("class", "toast toast-warning show");
  const icon = $("<i></i>").attr(
    "class",
    "fa-solid fa-circle-exclamation toast-icon"
  );
  const message = $("<div></div>").text(mensaje);
  const iconClose = $("<i></i>").attr("class", "fa fa-close");
  toast.append(icon, message, iconClose);
  listToast.append(toast);

  iconClose.on("click", () => {
    toast.removeClass("show").addClass("hide");
    setTimeout(() => {
      toast.hide();
    }, 500);
  });

  setTimeout(() => {
    toast.removeClass("show").addClass("hide");
    setTimeout(() => {
      toast.hide();
    }, 500);
  }, 9000);
};

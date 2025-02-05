// trae la informacion del formulario y lo hace con un from data 
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(formulario);

  fetch("http://localhost:8080/saveCategoria", {
    method: "POST",
    body: formData,
  })
  //muestra si hay error y si esta bien muestra la alerta
    .then((response) => response.text())
    .then((data) => {
      console.log("Categoría registrada:", data);
      alert("Categoría registrada exitosamente.");
    })
    .catch((error) => {
      console.error("Error al registrar la categoría:", error);
      alert("Hubo un problema al registrar la categoría.");
    });
});

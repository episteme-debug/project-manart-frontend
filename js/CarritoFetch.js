$(document).ready(function () {
  $(".carro").on("click", function () {
    alert("Se agrego al carrito");
  });
});

fetch("http://localhost:8080/GetallCategoria", {
  method: "GET",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const estadoSeleccionado = document.getElementById("estado").value;
    const estado = estadoSeleccionado === "Activo" ? 1 : 0; // Convierte a 1 o 0
    const imagen = document.getElementById("imagen").value.trim();
    const orden = parseInt(document.getElementById("orden").value, 10);

    // Validación básica (opcional)
    if (!nombre || !descripcion || !imagen || isNaN(orden)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    // Envío de datos al servidor
    fetch("http://localhost:8080/saveCategoria", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombreCategoria: nombre,
            descripcionCategoria: descripcion,
            estadoCategoria: estado,
            imagenCategoria: imagen,
            ordenVisualizacionCategoria: orden,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la solicitud. Verifica los datos.");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Categoría registrada:", data);
            alert("Categoría registrada exitosamente.");
        })
        .catch((error) => {
            console.error("Error al registrar la categoría:", error);
            alert("Hubo un problema al registrar la categoría.");
        });
});

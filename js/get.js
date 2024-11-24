fetch("http://localhost:8080/getAllUsuarios", {
  method: 'GET'
})
  .then((response) => {
    if (!response.ok) {
      if (response.status === 204) {
        return []; // Retorna una lista vacía si el servidor devuelve 204 No Content
      }
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (!Array.isArray(data)) {
      console.error("La respuesta no es un array de personas");
      return;
    }

    /*     PersonasTabla.empty(); */
    const PersonasTabla = $(".tbGetUsuario");
    data.forEach((persona) => {
      var rolUsuario;
      switch (persona.tipoUsuario) {
        case 0:
          rolUsuario = "Artesano";
          break;
        case 1:
          rolUsuario = "Comprador";
          break;
        case 2:
          rolUsuario = "Organizador";
          break;
        default:
          break;
      }

      var estadoUsuario;
      switch (persona.estadoUsuario) {
        case true:
          estadoUsuario = "Activo";
          break;
        case false:
          estadoUsuario = "Inactivo"
          break;
        default:
          break;
      }

      let fila = `
        <tr>
          <td>${persona.idUsuario}</td>
          <td>${persona.nombreUsuario}</td>
          <td>${persona.apellidoUsuario}</td>
          <td>${persona.telefonoUsuario}</td>
          <td>${estadoUsuario}</td>
          <td>${rolUsuario}</td>
          <td>${persona.imagenPerfilUsuario}</td>
        </tr>
      `;
      PersonasTabla.append(fila);
    });
  })
  .catch(error => {
    console.error('Error al obtener las personas:', error);
    $('#tabla-personas').html('<p>Error al cargar los datos. Por favor, intenta más tarde.</p>');
  });
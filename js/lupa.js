$(document).ready(function () {
    $("#imagen").on("click", function () {
      const modalHTML = `
        <div id="image-modal" style="
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          justify-content: center;
          align-items: center;
          z-index: 1000;">
          <span id="close-modal" style="
            position: absolute;
            top: 20px;
            right: 30px;
            color: white;
            font-size: 30px;
            cursor: pointer;">&times;</span>
          <img id="modal-image" src="${$(this).attr("src")}" alt="Imagen ampliada" style="
            max-width: 90%;
            max-height: 90%;
            border: 2px solid white;
            border-radius: 10px;">
        </div>
      `;
  
      $("body").append(modalHTML);
  
      $("#close-modal").on("click", function () {
        $("#image-modal").remove();
      });
  
      $("#image-modal").on("click", function (e) {
        if (e.target.id === "image-modal") {
          $(this).remove();
        }
      });
    });
  });
  
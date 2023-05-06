// Función para abrir y cerrar el menú de navegación en dispositivos móviles
function toggleNav() {
    var nav = document.getElementById("nav");
    if (nav.className === "nav") {
      nav.className += " responsive";
    } else {
      nav.className = "nav";
    }
  }
  
  // Función para mostrar y ocultar la descripción de una película o serie
  function toggleDescription() {
    var description = document.getElementById("description");
    if (description.style.display === "block") {
      description.style.display = "none";
    } else {
      description.style.display = "block";
    }
  }
  
  // Función para reproducir un video al hacer clic en su imagen de portada
  function playVideo() {
    var video = document.getElementById("video");
    var cover = document.getElementById("cover");
    cover.style.display = "none";
    video.style.display = "block";
    video.play();
  }
  
  // Función para detener la reproducción de un video al hacer clic en el botón de pausa
  function pauseVideo() {
    var video = document.getElementById("video");
    video.pause();
  }
  
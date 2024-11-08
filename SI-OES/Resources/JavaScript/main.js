function irASeccion(seccionID) {
  var seccion = document.getElementById(seccionID);
  seccion.scrollIntoView({ behavior: "smooth" });
}

const nav = document.querySelector('.navbar');
let footer = document.getElementById('footer');
let lastScrollY = window.scrollY;
let timeout;

// Cambiar la clase de la navbar cuando el usuario se desplace
window.addEventListener('scroll', function () {
  // Cambiar la clase 'active' en la navbar cuando se desplace
  nav.classList.toggle('active', window.scrollY > 0);

  // Lógica para ocultar o mostrar el footer
  if (window.scrollY > lastScrollY) {
    // El usuario está desplazándose hacia abajo, ocultamos el footer
    clearTimeout(timeout); // Cancelamos el timeout si el usuario está desplazándose
    footer.classList.add('hidden'); // Agregamos la clase para ocultar el footer
  } else {
    // El usuario está desplazándose hacia arriba, mostramos el footer
    clearTimeout(timeout); // Cancelamos el timeout
    footer.classList.remove('hidden'); // Elimina la clase para mostrar el footer
    // Configuramos un timeout para ocultarlo después de 3 segundos si el usuario no interactúa
    timeout = setTimeout(function() {
      footer.classList.add('hidden'); // Ocultamos el footer después de 3 segundos
    }, 3000);
  }

  lastScrollY = window.scrollY; // Actualizamos la posición de desplazamiento
});

// Iniciar con el footer visible
footer.classList.remove('hidden');

// Configuración inicial para que se oculte después de un tiempo si no hay interacción
timeout = setTimeout(function() {
  footer.classList.add('hidden');
}, 3000);

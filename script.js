document.addEventListener("DOMContentLoaded", function() {
  // Verifica que la página se esté cargando con HTTPS para mayor seguridad
  if (location.protocol !== 'https:') {
    console.warn("La página no está utilizando HTTPS. Es recomendable utilizar HTTPS para mejorar la seguridad.");
  }
  
  // Validación simple de enlaces internos y externos
  const enlaces = document.querySelectorAll('a');
  enlaces.forEach(function(enlace) {
    if (!enlace.href) {
      console.warn("Se encontró un enlace sin URL definida.");
    }
  });
  
  // Mensaje de confirmación en consola
  console.log("Página cargada y optimizada en SMDE.");
});

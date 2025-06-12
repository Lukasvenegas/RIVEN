// Función para hacer scroll hacia la sección de comentarios
function scrollToComments() {
    const commentsSection = document.getElementById('comentarios');
    commentsSection.scrollIntoView({ behavior: 'smooth' });
}

function toggleTerms() {
    const terminos = document.getElementById("terminos");
    const privacidad = document.getElementById("privacidad");
    privacidad.style.display = "none";
    terminos.style.display = terminos.style.display === "none" ? "block" : "none";
}

function togglePrivacy() {
    const privacidad = document.getElementById("privacidad");
    const terminos = document.getElementById("terminos");
    terminos.style.display = "none";
    privacidad.style.display = privacidad.style.display === "none" ? "block" : "none";
}

// Función para activar la barra de búsqueda con animación
document.querySelector('.search-button').addEventListener('click', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('search');
    searchContainer.classList.toggle('active');

    // Cuando la barra de búsqueda se activa, enfocar el campo de búsqueda
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
});

// Función para filtrar los servicios según el texto ingresado en la barra de búsqueda
document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase(); // Obtener el texto ingresado
    const servicios = document.querySelectorAll('.servicios'); // Obtener todos los servicios
    
    // Iterar sobre todos los servicios y filtrar en base a la búsqueda
    servicios.forEach(function(servicio) {
        const nombre = servicio.querySelector('h2').textContent.toLowerCase(); // Nombre del servicio
        const descripcion = servicio.querySelector('p').textContent.toLowerCase(); // Descripción del servicio
        
        // Si el nombre o la descripción del servicio contiene el texto de búsqueda, mostrarlo
        if (nombre.includes(query) || descripcion.includes(query)) {
            servicio.style.display = ''; // Mostrar el servicio
        } else {
            servicio.style.display = 'none'; // Ocultar el servicio
        }
    });
});
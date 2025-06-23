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

document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase().trim(); // texto buscado
    const servicios = document.querySelectorAll('.servicios'); // todos los bloques de servicios

    servicios.forEach(function(servicio) {
        const nombre = servicio.querySelector('h2').textContent.toLowerCase();
        const descripcion = servicio.querySelector('p').textContent.toLowerCase();
        const keywords = servicio.getAttribute('data-keywords')?.toLowerCase() || "";

        // Mostrar si coincide con nombre, descripción o palabras clave
        if (
            nombre.includes(query) ||
            descripcion.includes(query) ||
            keywords.includes(query)
        ) {
            servicio.style.display = '';
        } else {
            servicio.style.display = 'none';
        }
    });
});
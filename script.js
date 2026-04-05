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

// Función para expandir y contraer categorías
function expandir(elemento) {
  document.querySelectorAll('.categoria').forEach((el) => {
    if (el !== elemento) {
      el.classList.remove('expandido');
    }
  });
  elemento.classList.toggle('expandido');
}

/* ====== MOBILE MENU JS ====== */

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

// Get mobile menu elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const mobileSearchInput = document.getElementById('mobileSearch');
const body = document.body;

/**
 * Toggle Mobile Menu
 */
function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.contains('active');
  
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

/**
 * Open Mobile Menu
 */
function openMobileMenu() {
  mobileMenu.classList.add('active');
  mobileMenuBackdrop.classList.add('active');
  hamburgerBtn.classList.add('active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  body.classList.add('mobile-menu-open');
  
  // Focus first link in menu
  const firstLink = document.querySelector('.mobile-menu-link');
  if (firstLink) firstLink.focus();
}

/**
 * Close Mobile Menu
 */
function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  mobileMenuBackdrop.classList.remove('active');
  hamburgerBtn.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  body.classList.remove('mobile-menu-open');
  
  // Return focus to hamburger button
  hamburgerBtn.focus();
}

/**
 * Hamburger button click event
 */
hamburgerBtn.addEventListener('click', toggleMobileMenu);

/**
 * Close menu when backdrop is clicked
 */
mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

/**
 * Close menu when a link is clicked
 */
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

/**
 * Close menu on ESC key press
 */
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    if (mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  }
});

/**
 * Mobile Search Functionality
 * Syncs with desktop search
 */
mobileSearchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  const servicios = document.querySelectorAll('.servicios');

  servicios.forEach(function(servicio) {
    const nombre = servicio.querySelector('h2').textContent.toLowerCase();
    const descripcion = servicio.querySelector('p').textContent.toLowerCase();
    const keywords = servicio.getAttribute('data-keywords')?.toLowerCase() || "";

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

  // Update desktop search input if it exists
  const desktopSearch = document.getElementById('search');
  if (desktopSearch) {
    desktopSearch.value = query;
  }
});

/**
 * Mobile search button functionality
 */
const mobileSearchButton = document.querySelector('.mobile-search-button');
if (mobileSearchButton) {
  mobileSearchButton.addEventListener('click', function() {
    mobileSearchInput.focus();
    closeMobileMenu();
  });
}

/**
 * Sync desktop search with mobile search
 */
const desktopSearch = document.getElementById('search');
if (desktopSearch) {
  desktopSearch.addEventListener('input', function() {
    mobileSearchInput.value = this.value;
  });
}

}); // Fin del DOMContentLoaded

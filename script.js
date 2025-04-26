// Función para el scroll suave
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces que comienzan con #
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Agregar event listener a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevenir el comportamiento por defecto
            e.preventDefault();
            
            // Obtener el valor del atributo href
            const targetId = this.getAttribute('href');
            
            // Si es un ancla válida (no solo "#")
            if (targetId !== '#') {
                // Obtener el elemento objetivo
                const targetElement = document.querySelector(targetId);
                
                // Si el elemento existe, hacer scroll suave
                if (targetElement) {
                    // Calcular la posición ajustada (restar un poco por el header fijo)
                    const headerOffset = 80; // Altura aproximada del header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    // Ejecutar el scroll suave
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Ya tenemos un carousel funcionando, así que mantenemos ese código
    // Inicializar todos los carruseles en la página
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(function(carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        let currentSlide = 0;
        
        // Asegurarnos de que la primera diapositiva sea visible inicialmente
        slides[0].classList.add('active');
        
        // Función para cambiar a la siguiente diapositiva
        function nextSlide() {
            // Quitar la clase active de la diapositiva actual
            slides[currentSlide].classList.remove('active');
            
            // Pasar a la siguiente diapositiva
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Agregar la clase active a la nueva diapositiva
            slides[currentSlide].classList.add('active');
        }
        
        // Iniciar el carrusel automático
        setInterval(nextSlide, 3000); // Cambiar cada 3 segundos

        // Añade este código dentro de la función existente document.addEventListener('DOMContentLoaded', function() { ... })
// justo después de la inicialización del carrusel de proyectos

// ---- HERO CAROUSEL ----
const heroSlides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.arrow.prev');
const nextButton = document.querySelector('.arrow.next');
let heroCurrentSlide = 0;
let heroInterval;

// Función para cambiar a una diapositiva específica
function goToSlide(index) {
    // Remover la clase active de todas las diapositivas e indicadores
    heroSlides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Añadir la clase active a la diapositiva e indicador actual
    heroSlides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    // Actualizar el índice actual
    heroCurrentSlide = index;
}

// Función para ir a la siguiente diapositiva
function nextSlide() {
    const newIndex = (heroCurrentSlide + 1) % heroSlides.length;
    goToSlide(newIndex);
}

// Función para ir a la diapositiva anterior
function prevSlide() {
    const newIndex = (heroCurrentSlide - 1 + heroSlides.length) % heroSlides.length;
    goToSlide(newIndex);
}

// Iniciar la rotación automática
function startAutoRotation() {
    heroInterval = setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
}

// Detener la rotación automática
function stopAutoRotation() {
    clearInterval(heroInterval);
}

// Event listeners para los botones
nextButton.addEventListener('click', () => {
    nextSlide();
    stopAutoRotation();
    startAutoRotation(); // Reiniciar la rotación
});

prevButton.addEventListener('click', () => {
    prevSlide();
    stopAutoRotation();
    startAutoRotation(); // Reiniciar la rotación
});

// Event listeners para los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
        stopAutoRotation();
        startAutoRotation(); // Reiniciar la rotación
    });
});

// Iniciar la rotación automática al cargar la página
startAutoRotation();

// Pausar la rotación automática cuando el usuario pase el mouse por encima
document.querySelector('.hero').addEventListener('mouseenter', stopAutoRotation);
document.querySelector('.hero').addEventListener('mouseleave', startAutoRotation);
    });
});
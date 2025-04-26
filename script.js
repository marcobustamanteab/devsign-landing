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
    });
});
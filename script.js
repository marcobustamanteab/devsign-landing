document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, initializing carousel');
    
    // Inicializar todos los carruseles en la página
    const carousels = document.querySelectorAll('.carousel-container');
    console.log('Found carousel containers:', carousels.length);
    
    carousels.forEach(function(carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        console.log('Found slides in this carousel:', slides.length);
        
        let currentSlide = 0;
        
        // Asegurarnos de que la primera diapositiva sea visible
        slides[0].classList.add('active');
        
        // Función para cambiar a la siguiente diapositiva
        function nextSlide() {
            console.log('Changing to next slide');
            // Quitar la clase active de la diapositiva actual
            slides[currentSlide].classList.remove('active');
            
            // Pasar a la siguiente diapositiva (volver al principio si es la última)
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Agregar la clase active a la nueva diapositiva
            slides[currentSlide].classList.add('active');
        }
        
        // Iniciar el carrusel automático
        console.log('Setting up interval for slides');
        setInterval(nextSlide, 3000); // Cambiar cada 3 segundos
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos los carruseles en la página
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(function(carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        let currentSlide = 0;
        
        // Función para cambiar a la siguiente diapositiva
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        // Iniciar el carrusel automático
        setInterval(nextSlide, 3000); // Cambiar cada 3 segundos
    });
});
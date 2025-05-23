// Función para el scroll suave
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los enlaces que comienzan con #
  const links = document.querySelectorAll('a[href^="#"]');

  // Agregar event listener a cada enlace
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Prevenir el comportamiento por defecto
      e.preventDefault();

      // Obtener el valor del atributo href
      const targetId = this.getAttribute("href");

      // Si es un ancla válida (no solo "#")
      if (targetId !== "#") {
        // Obtener el elemento objetivo
        const targetElement = document.querySelector(targetId);

        // Si el elemento existe, hacer scroll suave
        if (targetElement) {
          // Calcular la posición ajustada (restar un poco por el header fijo)
          const headerOffset = 80; // Altura aproximada del header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          // Ejecutar el scroll suave
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // ---- CARRUSEL DE PROYECTOS ----
  // Inicializar todos los carruseles en la página
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach(function (carousel) {
    const slides = carousel.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    // Asegurarnos de que la primera diapositiva sea visible inicialmente
    slides[0].classList.add("active");

    // Función para cambiar a la siguiente diapositiva
    function nextSlide() {
      // Quitar la clase active de la diapositiva actual
      slides[currentSlide].classList.remove("active");

      // Pasar a la siguiente diapositiva
      currentSlide = (currentSlide + 1) % slides.length;

      // Agregar la clase active a la nueva diapositiva
      slides[currentSlide].classList.add("active");
    }

    // Iniciar el carrusel automático
    setInterval(nextSlide, 3000); // Cambiar cada 3 segundos
  });

  // ---- HERO CAROUSEL ----
  const heroSlides = document.querySelectorAll(".hero-slide");
  
  // Verificar que existen las diapositivas del hero
  if (heroSlides.length > 0) {
    const indicators = document.querySelectorAll(".indicator");
    const prevButton = document.querySelector(".arrow.prev");
    const nextButton = document.querySelector(".arrow.next");
    let heroCurrentSlide = 0;
    let heroInterval;

    // Función para cambiar a una diapositiva específica
    function goToSlide(index) {
      // Validar el índice
      if (index < 0 || index >= heroSlides.length) return;

      // Remover la clase active de todas las diapositivas e indicadores
      heroSlides.forEach((slide) => slide.classList.remove("active"));
      indicators.forEach((indicator) => indicator.classList.remove("active"));

      // Añadir la clase active a la diapositiva e indicador actual
      heroSlides[index].classList.add("active");
      indicators[index].classList.add("active");

      // Actualizar el índice actual
      heroCurrentSlide = index;
    }

    // Función para ir a la siguiente diapositiva
    function nextHeroSlide() {
      const newIndex = (heroCurrentSlide + 1) % heroSlides.length;
      goToSlide(newIndex);
    }

    // Función para ir a la diapositiva anterior
    function prevHeroSlide() {
      const newIndex =
        (heroCurrentSlide - 1 + heroSlides.length) % heroSlides.length;
      goToSlide(newIndex);
    }

    // Iniciar la rotación automática
    function startAutoRotation() {
      heroInterval = setInterval(nextHeroSlide, 5000); // Cambiar cada 5 segundos
    }

    // Detener la rotación automática
    function stopAutoRotation() {
      clearInterval(heroInterval);
    }

    // Event listeners para los botones (si existen)
    if (nextButton && prevButton) {
      nextButton.addEventListener("click", () => {
        nextHeroSlide();
        stopAutoRotation();
        startAutoRotation(); // Reiniciar la rotación
      });

      prevButton.addEventListener("click", () => {
        prevHeroSlide();
        stopAutoRotation();
        startAutoRotation(); // Reiniciar la rotación
      });
    }

    // Event listeners para los indicadores
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        goToSlide(index);
        stopAutoRotation();
        startAutoRotation(); // Reiniciar la rotación
      });
    });

    // Iniciar la rotación automática al cargar la página
    startAutoRotation();

    // Pausar la rotación automática cuando el usuario pase el mouse por encima
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
      heroSection.addEventListener("mouseenter", stopAutoRotation);
      heroSection.addEventListener("mouseleave", startAutoRotation);
    }
  }

  // ---- DESTACAR ENLACE DE NAVEGACIÓN ACTIVO ----
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
        });
        const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });
});
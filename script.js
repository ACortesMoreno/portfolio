document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById("contact-btn");

    // Efecto de desvanecimiento al cargar
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        fadeElements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            if (elementPosition < window.innerHeight - 100) {
                el.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);

    // Efecto al hacer clic en el botón de contacto
    contactButton.addEventListener("click", () => {
        alert("Gracias por interesarte en mis servicios. ¡Te contactaré pronto!");
    });
});

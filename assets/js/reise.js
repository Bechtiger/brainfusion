/* ====================================
   DIE REISE NACH INNEN - JAVASCRIPT
   ==================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scrolling für alle internen Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer für Fade-In Animationen
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elemente beobachten
    document.querySelectorAll('.illusion-card, .bias-card, .origin-card, .question-deep, .perspective-card, .boundary-section, .continue-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });

    // Klasse hinzufügen wenn sichtbar
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Station Progress Indicator
    const stations = document.querySelectorAll('.station');
    const stationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stationNumber = entry.target.querySelector('.station-number');
                if (stationNumber) {
                    stationNumber.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        stationNumber.style.transform = 'scale(1)';
                    }, 300);
                }
            }
        });
    }, { threshold: 0.3 });

    stations.forEach(station => stationObserver.observe(station));

    // Layers Interaktivität (Station 4)
    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        layer.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        layer.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });

    // Parallax-Effekt für Hero
    const hero = document.querySelector('.hero-reise');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight);
            }
        });
    }

    // Klick-Feedback für Illusions
    document.querySelectorAll('.illusion-container').forEach(container => {
        container.addEventListener('click', function() {
            this.classList.toggle('focused');
        });
    });

    // Konsolengruß
    console.log('%c🧠 Willkommen auf der Reise nach Innen', 'font-size: 16px; color: #7b68ee;');
    console.log('%cDie größte Entdeckung ist nicht die Welt da draußen - sondern der Beobachter hier drinnen.', 'font-style: italic; color: #888;');

});

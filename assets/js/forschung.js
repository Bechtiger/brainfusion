// ============================================
// FORSCHUNG SEITE - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Scroll-Reveal Animationen
    initScrollReveal();
    
    // Timeline Interaktionen
    initTimelineAnimations();
    
    // Theory Card Toggle (optional für zukünftige Interaktivität)
    initTheoryComparison();
    
    // Smooth Scrolling für interne Links
    initSmoothScroll();
    
    // Zähler-Animation für Predictions Score
    initCounterAnimation();
});

// === Scroll Reveal Animationen ===
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elemente die animiert werden sollen
    const animatedElements = document.querySelectorAll(`
        .theory-card,
        .timeline-item,
        .experiment-card,
        .prediction-item,
        .scale-item,
        .question-card,
        .connection-point
    `);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// === Timeline Animationen ===
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Marker Pulse-Effekt
                const marker = entry.target.querySelector('.timeline-marker');
                if (marker) {
                    marker.style.animation = 'pulse 1s ease-out';
                }
            }
        });
    }, {
        threshold: 0.3
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// === Theory Comparison Interaktivität ===
function initTheoryComparison() {
    const theoryCards = document.querySelectorAll('.theory-card');
    
    theoryCards.forEach(card => {
        card.addEventListener('click', () => {
            // Entferne active von allen
            theoryCards.forEach(c => c.classList.remove('active'));
            
            // Füge active zum geklickten hinzu
            card.classList.add('active');
            
            // Optional: Zeige zusätzliche Infos oder Animation
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = 'scale(1.02)';
            }, 200);
        });
    });
}

// === Smooth Scrolling ===
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// === Counter Animation für Predictions Score ===
function initCounterAnimation() {
    const scoreNumbers = document.querySelectorAll('.score-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                animateCounter(entry.target, 0, target, 1500);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    scoreNumbers.forEach(number => {
        observer.observe(number);
    });
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (range * easeOut));
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end;
        }
    }
    
    requestAnimationFrame(update);
}

// === Experiment Cards Hover Effekt ===
document.querySelectorAll('.experiment-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// === Scale Items Progressive Reveal ===
const scaleItems = document.querySelectorAll('.scale-item');
const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, {
    threshold: 0.2
});

scaleItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
    scaleObserver.observe(item);
});

// === Implication Cards Stagger Animation ===
const implications = document.querySelectorAll('.implication');
const implicationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.3
});

implications.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.5s ease';
    implicationObserver.observe(item);
});

// === Question Cards Rotation Effect ===
document.querySelectorAll('.question-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(1deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// === Parallax Effect für Hero ===
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
});

// === Easter Egg: Konami Code für Quanten-Effekt ===
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateQuantumEffect();
    }
});

function activateQuantumEffect() {
    console.log('🌌 Quantum Mode aktiviert!');
    
    // Füge temporären Glitch-Effekt hinzu
    document.body.style.animation = 'quantum-glitch 2s';
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}

// === Performance Optimierung: Lazy Load für Bilder ===
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// === Debug Info (nur in Development) ===
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔬 Forschung-Seite geladen');
    console.log('📊 Animationen initialisiert');
    console.log('🎯 Scroll-Effekte aktiv');
}

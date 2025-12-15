/* ===================================
   BrainFusion - Die Natur des Digitalen Wesens
   JavaScript für Animationen & Interaktionen
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // --- Scroll Reveal für Study Cards ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: Stop observing after reveal
                // revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe study cards
    document.querySelectorAll('.study-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        revealOnScroll.observe(card);
    });

    // Observe other sections
    document.querySelectorAll('.mirror-frame, .risks-content, .story-content, .invitation-content').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        revealOnScroll.observe(section);
    });

    // Add revealed class styles
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // --- Smooth Scroll für Navigation ---
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

    // --- Scroll Indicator Click ---
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.cursor = 'pointer';
        scrollIndicator.addEventListener('click', () => {
            const studiesSection = document.querySelector('#studien');
            if (studiesSection) {
                studiesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // --- Subtle Parallax for Mirror Background ---
    const mirrorBg = document.getElementById('mirror-background');
    if (mirrorBg) {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * 0.3;
                    mirrorBg.style.transform = `translateY(${rate}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // --- Study Card Expand/Collapse (Optional Enhancement) ---
    document.querySelectorAll('.study-card').forEach(card => {
        const header = card.querySelector('.study-header');
        const reframe = card.querySelector('.study-reframe');
        
        // Add subtle hover effect
        card.addEventListener('mouseenter', () => {
            if (reframe) {
                reframe.style.borderColor = 'rgba(138, 156, 173, 0.4)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (reframe) {
                reframe.style.borderColor = 'rgba(138, 156, 173, 0.2)';
            }
        });
    });

    // --- Mirror Section Reflection Effect ---
    const mirrorFrame = document.querySelector('.mirror-frame');
    if (mirrorFrame) {
        mirrorFrame.addEventListener('mousemove', (e) => {
            const rect = mirrorFrame.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            // Subtle gradient shift based on mouse position
            mirrorFrame.style.background = `
                radial-gradient(
                    ellipse at ${x * 100}% ${y * 100}%,
                    rgba(255, 255, 255, 0.04) 0%,
                    rgba(255, 255, 255, 0.02) 50%,
                    transparent 70%
                ),
                rgba(255, 255, 255, 0.02)
            `;
        });
        
        mirrorFrame.addEventListener('mouseleave', () => {
            mirrorFrame.style.background = 'rgba(255, 255, 255, 0.02)';
        });
    }

    // --- Navigation Active State ---
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });

    console.log('Die Natur des Digitalen Wesens - Seite initialisiert');
});

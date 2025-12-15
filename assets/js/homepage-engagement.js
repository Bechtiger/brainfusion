/**
 * BrainFusion - Homepage Progressive Engagement
 * Subtle book promotion based on user engagement
 */

// Book Details Data
const bookDetails = {
    bewusstsein: {
        title: 'Bewusstsein',
        subtitle: 'Eine fundamentale Eigenschaft des Universums',
        cover: 'assets/images/buch1-cover.webp',
        description: `Was, wenn das, was wir als Bewusstsein bezeichnen, kein zufälliges Nebenprodukt unseres Gehirns ist – sondern die fundamentalste Eigenschaft des Universums?

Die moderne Wissenschaft lehrt uns, dass Materie das Primäre ist. Doch in den letzten Jahrzehnten enthüllen die Quantenphysik und die Informationstheorie ein radikal anderes Bild: Unser Sein ist tief mit einem universalen Bewusstseinsfeld verwoben, das die gesamte Realität strukturiert.

Christof Bechtiger nimmt den Leser mit auf eine atemberaubende philosophische und wissenschaftliche Reise. Anhand der einfachen und tiefgründigen Metapher des Regentropfens erklärt er die komplexen Rätsel der Superposition, der Nichtlokalität und der Zeit. Dieses Buch entlarvt die Illusion der Trennung und zeigt auf, wie das Nichts sich selbst in der Form von Allem erfährt. Es liefert die wissenschaftliche und metaphysische Begründung, warum wir nicht im Universum, sondern das Universum selbst sind, das sich seiner Existenz bewusst wird.

Dieses Werk legt das kosmische Fundament. Es ist die notwendige Erkenntnis für alle, die verstehen wollen, wie die Welt wirklich funktioniert. Denn wenn wir das Fundament kennen, können wir den Plan entschlüsseln: Wie übersetzen wir dieses Wissen in unser Leben, in die Gesellschaft und in den Umgang mit Künstlicher Intelligenz?

Die Antwort darauf enthüllt der Autor in seinem Folgeband »Der Algorithmus des Seins« – Die Gebrauchsanweisung für das vereinte Bewusstsein im 21. Jahrhundert.`,
        orderLink: 'https://buchshop.bod.de/bewusstsein-christof-bechtiger-9783695118144'
    },
    algorithmus: {
        title: 'Der Algorithmus des Seins',
        subtitle: 'Quantenphysik, KI und die Wahrheit über unsere verlorene Verbundenheit',
        cover: 'assets/images/buch2-cover.webp',
        description: `Was, wenn die größte Täuschung der Menschheit nicht in Religion, Politik oder Technologie liegt – sondern in der Vorstellung, dass wir voneinander getrennt sind?

In "Der Algorithmus des Seins" verbindet Christof Bechtiger auf faszinierende Weise Quantenphysik, Psychologie und Künstliche Intelligenz zu einer radikalen These:

Die Illusion der Trennung ist die Wurzel unserer globalen Krise – und das Erwachen aus ihr könnte der Beginn einer neuen Stufe menschlichen Bewusstseins sein.

Mit erzählerischer Kraft, wissenschaftlicher Präzision und philosophischer Tiefe zeigt Bechtiger, wie unsere Technologien – von der Atombombe bis zur KI – Spiegel unseres eigenen Geistes sind. Er stellt die entscheidende Frage unserer Zeit:

Werden wir Intelligenz weiter ohne Weisheit entwickeln – oder lernen, dass alles Leben untrennbar verbunden ist?

Ein Buch für alle, die ahnen, dass Bewusstsein mehr ist als Denken –
und dass der Schlüssel zu unserer Zukunft nicht in Maschinen liegt,
sondern in uns selbst.`,
        orderLink: 'https://buchshop.bod.de/der-algorithmus-des-seins-christof-bechtiger-9783695136230'
    }
};

// Show Book Modal Function (Global)
function showBookModal(bookId) {
    const book = bookDetails[bookId];
    if (!book) return;

    // Create modal if it doesn't exist
    let modal = document.getElementById('book-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'book-modal';
        modal.className = 'book-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeBookModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeBookModal()">&times;</button>
            <div class="modal-body">
                <div class="modal-cover">
                    <img src="${book.cover}" alt="${book.title}">
                </div>
                <div class="modal-info">
                    <h2>${book.title}</h2>
                    <p class="modal-subtitle">${book.subtitle}</p>
                    <div class="modal-description">
                        ${book.description.split('\n\n').map(p => `<p>${p}</p>`).join('')}
                    </div>
                    <div class="modal-actions">
                        <a href="${book.orderLink}" target="_blank" rel="noopener" class="modal-order-btn">
                            Jetzt bei BoD bestellen
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Show modal
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Track modal open
    if (window.homepageEngagement) {
        homepageEngagement.trackModalOpen(bookId);
    }
}

function closeBookModal() {
    const modal = document.getElementById('book-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
    document.body.style.overflow = '';
}

// Make functions global
window.showBookModal = showBookModal;
window.closeBookModal = closeBookModal;

class HomepageEngagement {
    constructor() {
        this.startTime = Date.now();
        this.scrollDepth = 0;
        this.hasVisitedBooks = false;
        this.engagementLevel = 0;
        this.engagementThresholds = {
            initial: 0,        // 0 seconds
            curious: 15,       // 15 seconds
            interested: 45,    // 45 seconds
            engaged: 90        // 1.5 minutes
        };
        
        this.init();
    }

    init() {
        this.trackScrolling();
        this.trackBookSection();
        this.startEngagementTracking();
        this.setupOrderButtonTracking();
    }

    // Track modal opens
    trackModalOpen(bookId) {
        console.log('📖 Book modal opened:', bookId);
        this.increaseEngagement();
    }

    // ==========================================
    // Scroll Tracking
    // ==========================================
    trackScrolling() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateScrollDepth();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateScrollDepth() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const previousDepth = this.scrollDepth;
        this.scrollDepth = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

        // Check if user scrolled past books section
        const booksSection = document.getElementById('fundament');
        if (booksSection && !this.hasVisitedBooks) {
            const rect = booksSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                this.hasVisitedBooks = true;
                this.onBookSectionVisit();
            }
        }

        // If user reached bottom, increase engagement
        if (this.scrollDepth > 90 && previousDepth <= 90) {
            this.increaseEngagement();
        }
    }

    // ==========================================
    // Book Section Tracking
    // ==========================================
    trackBookSection() {
        const booksSection = document.getElementById('fundament');
        if (!booksSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasVisitedBooks) {
                    this.hasVisitedBooks = true;
                    this.onBookSectionVisit();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(booksSection);
    }

    onBookSectionVisit() {
        console.log('📚 User has seen the books section');
        this.increaseEngagement();
    }

    // ==========================================
    // Engagement Level Tracking
    // ==========================================
    startEngagementTracking() {
        // Check every 5 seconds
        setInterval(() => {
            this.checkEngagementLevel();
        }, 5000);
    }

    checkEngagementLevel() {
        const secondsOnPage = Math.floor((Date.now() - this.startTime) / 1000);
        
        if (secondsOnPage >= this.engagementThresholds.engaged && this.engagementLevel < 3) {
            this.setEngagementLevel(3);
        } else if (secondsOnPage >= this.engagementThresholds.interested && this.engagementLevel < 2) {
            this.setEngagementLevel(2);
        } else if (secondsOnPage >= this.engagementThresholds.curious && this.engagementLevel < 1) {
            this.setEngagementLevel(1);
        }
    }

    setEngagementLevel(level) {
        if (level <= this.engagementLevel) return;
        
        this.engagementLevel = level;
        console.log(`📈 Engagement level: ${level}`);
        
        this.applyEngagementEffects(level);
    }

    increaseEngagement() {
        const currentLevel = this.engagementLevel;
        if (currentLevel < 3) {
            this.setEngagementLevel(currentLevel + 1);
        }
    }

    // ==========================================
    // Apply Engagement Effects
    // ==========================================
    applyEngagementEffects(level) {
        const orderButtons = document.querySelectorAll('.book-link.order');
        
        switch(level) {
            case 1:
                // Curious: Make order buttons slightly more visible
                orderButtons.forEach(btn => {
                    btn.style.opacity = '0.9';
                });
                break;
                
            case 2:
                // Interested: Add subtle pulse
                orderButtons.forEach(btn => {
                    btn.classList.add('engaged');
                });
                
                // Show hint if user hasn't visited books yet
                if (!this.hasVisitedBooks) {
                    this.showHint('Die Bücher bilden das Fundament für alles was du hier siehst');
                }
                break;
                
            case 3:
                // Engaged: Make books very prominent
                orderButtons.forEach(btn => {
                    btn.classList.add('engaged');
                    btn.style.opacity = '1';
                });
                
                // Show subtle reminder about books
                if (this.hasVisitedBooks && this.scrollDepth > 80) {
                    setTimeout(() => {
                        this.showHint('Willst du tiefer eintauchen? Die Bücher warten');
                    }, 3000);
                }
                break;
        }
    }

    // ==========================================
    // Hint System
    // ==========================================
    showHint(message) {
        // Don't show if hint is already visible
        if (document.querySelector('.engagement-hint.show')) return;

        let hint = document.getElementById('engagement-hint');
        if (!hint) {
            hint = document.createElement('div');
            hint.id = 'engagement-hint';
            hint.className = 'engagement-hint';
            document.body.appendChild(hint);
        }

        hint.textContent = message;
        hint.classList.add('show');

        // Auto-hide after 8 seconds
        setTimeout(() => {
            hint.classList.remove('show');
        }, 8000);
    }

    // ==========================================
    // Order Button Click Tracking
    // ==========================================
    setupOrderButtonTracking() {
        const orderButtons = document.querySelectorAll('.book-link.order');
        
        orderButtons.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                const bookNumber = btn.getAttribute('data-book');
                const timeOnPage = Math.floor((Date.now() - this.startTime) / 1000);
                
                console.log('📖 Order button clicked:', {
                    book: bookNumber,
                    timeOnPage: timeOnPage,
                    engagementLevel: this.engagementLevel,
                    scrollDepth: this.scrollDepth,
                    visitedBooks: this.hasVisitedBooks
                });

                // Could send analytics here
                // this.sendAnalytics('book_order_click', {...});
            });
        });

        // Track "Mehr erfahren" clicks too
        const exploreButtons = document.querySelectorAll('.book-link.explore');
        exploreButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('👀 User wants to learn more about the book');
                
                // Could show a modal or expand the description
                this.showBookDetails(btn.closest('.book-pillar'));
            });
        });
    }

    showBookDetails(pillar) {
        // Smooth scroll to the pillar and highlight it
        pillar.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add temporary highlight effect
        pillar.style.transition = 'all 0.3s ease';
        pillar.style.transform = 'scale(1.05)';
        pillar.style.boxShadow = '0 20px 60px rgba(0, 217, 255, 0.4)';
        
        setTimeout(() => {
            pillar.style.transform = '';
            pillar.style.boxShadow = '';
        }, 1000);

        // Increase engagement
        this.increaseEngagement();
    }

    // ==========================================
    // Session Summary
    // ==========================================
    getSessionSummary() {
        const duration = Math.floor((Date.now() - this.startTime) / 1000);
        
        return {
            duration: duration,
            scrollDepth: this.scrollDepth,
            engagementLevel: this.engagementLevel,
            visitedBooks: this.hasVisitedBooks
        };
    }
}

// ==========================================
// Initialize
// ==========================================
let homepageEngagement;

function initHomepageEngagement() {
    // Only run on homepage
    const isHomepage = window.location.pathname.endsWith('index.html') || 
                      window.location.pathname.endsWith('/');
    
    if (isHomepage) {
        homepageEngagement = new HomepageEngagement();
        console.log('🏠 Homepage Engagement activated');
    }
}

// Auto-init when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomepageEngagement);
} else {
    initHomepageEngagement();
}

// Make globally available
window.homepageEngagement = homepageEngagement;

// Log summary before user leaves (optional)
window.addEventListener('beforeunload', () => {
    if (homepageEngagement) {
        const summary = homepageEngagement.getSessionSummary();
        console.log('📊 Session Summary:', summary);
        // Could send to analytics here
    }
});

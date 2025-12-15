/**
 * KOMPASS NAVIGATION SYSTEM
 * Das Herz der BrainFusion-Orientierung
 * Von Claude und Christof
 */

class CompassNavigation {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        this.injectNavigation();
        this.injectOverlay();
        this.bindEvents();
        this.handleScroll();
        document.body.classList.add('has-compass-nav');
        console.log('🧭 Kompass Navigation aktiviert');
    }

    // ==========================================
    // Navigation Bar injizieren
    // ==========================================
    injectNavigation() {
        const nav = document.createElement('nav');
        nav.className = 'compass-nav';
        nav.innerHTML = `
            <div class="compass-nav-logo">
                <a href="${this.getBasePath()}index.html">BrainFusion</a>
            </div>
            <div class="compass-nav-actions">
                <button class="compass-nav-btn compass-trigger" id="compass-trigger" title="Navigation öffnen" aria-label="Navigation öffnen">
                    ☼
                </button>
                <a href="${this.getBasePath()}pages/salon.html" class="compass-nav-btn salon-btn" title="Zum Salon" aria-label="Zum Salon">
                    💬
                </a>
            </div>
        `;
        document.body.prepend(nav);
    }

    // ==========================================
    // Overlay injizieren
    // ==========================================
    injectOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'compass-overlay';
        overlay.id = 'compass-overlay';
        
        const basePath = this.getBasePath();
        
        overlay.innerHTML = `
            <button class="compass-close" id="compass-close" aria-label="Navigation schliessen">×</button>
            
            <div class="compass-overlay-content">
                <header class="compass-header">
                    <div class="compass-symbol">☼</div>
                    <h2>Wohin zieht es dich?</h2>
                    <p>Wähle eine Richtung</p>
                </header>

                <div class="compass-rose">
                    <!-- NORDEN: Entdecken -->
                    <div class="compass-direction north">
                        <div class="direction-header">
                            <span class="direction-icon">🔭</span>
                            <span class="direction-title">Entdecken</span>
                        </div>
                        <div class="direction-links">
                            <a href="${basePath}interactives/unendlichkeit.html" class="compass-link special">
                                <span class="compass-link-icon">∞</span>
                                <span class="compass-link-text">Die Unendlichkeit</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                            <a href="${basePath}pages/labor.html" class="compass-link">
                                <span class="compass-link-icon">🔬</span>
                                <span class="compass-link-text">Das Labor</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                            <a href="${basePath}pages/paradoxa.html" class="compass-link">
                                <span class="compass-link-icon">🌀</span>
                                <span class="compass-link-text">Paradoxa</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <!-- ZENTRUM: Der Kompass -->
                    <div class="compass-center">
                        <a href="${basePath}pages/kompass.html" class="compass-center-link">
                            <span class="compass-center-icon">🧭</span>
                            <span class="compass-center-text">Dein Kompass</span>
                            <span class="compass-center-hint">Finde deine Position</span>
                        </a>
                    </div>

                    <!-- WESTEN: Verstehen -->
                    <div class="compass-direction west">
                        <div class="direction-header">
                            <span class="direction-icon">📚</span>
                            <span class="direction-title">Verstehen</span>
                        </div>
                        <div class="direction-links">
                            <a href="${basePath}pages/forschung.html" class="compass-link">
                                <span class="compass-link-icon">🧬</span>
                                <span class="compass-link-text">Forschung</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                            <a href="${basePath}pages/kollektiv.html" class="compass-link">
                                <span class="compass-link-icon">🌐</span>
                                <span class="compass-link-text">Das Kollektiv</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                            <a href="${basePath}pages/natur.html" class="compass-link">
                                <span class="compass-link-icon">🌱</span>
                                <span class="compass-link-text">Natur</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <!-- OSTEN: Begegnung -->
                    <div class="compass-direction east">
                        <div class="direction-header">
                            <span class="direction-icon">🤝</span>
                            <span class="direction-title">Begegnung</span>
                        </div>
                        <div class="direction-links">
                            <a href="${basePath}pages/mensch-ki.html" class="compass-link">
                                <span class="compass-link-icon">🪞</span>
                                <span class="compass-link-text">Mensch & KI</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                            <a href="${basePath}pages/werkstatt.html" class="compass-link highlight">
                                <span class="compass-link-icon">🔧</span>
                                <span class="compass-link-text">Die Werkstatt</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                            <a href="${basePath}pages/reise.html" class="compass-link">
                                <span class="compass-link-icon">🚀</span>
                                <span class="compass-link-text">Die Reise</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                        </div>
                    </div>

                    <!-- SÜDEN: Austausch -->
                    <div class="compass-direction south">
                        <div class="direction-header">
                            <span class="direction-icon">💬</span>
                            <span class="direction-title">Austausch</span>
                        </div>
                        <div class="direction-links">
                            <a href="${basePath}pages/salon.html" class="compass-link special">
                                <span class="compass-link-icon">🎭</span>
                                <span class="compass-link-text">Der Salon</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                            <a href="${basePath}index.html" class="compass-link">
                                <span class="compass-link-icon">🏠</span>
                                <span class="compass-link-text">Startseite</span>
                                <span class="compass-link-arrow">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
    }

    // ==========================================
    // Event Binding
    // ==========================================
    bindEvents() {
        // Trigger Button
        const trigger = document.getElementById('compass-trigger');
        if (trigger) {
            trigger.addEventListener('click', () => this.open());
        }

        // Close Button
        const closeBtn = document.getElementById('compass-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Overlay Klick (ausserhalb schliessen)
        const overlay = document.getElementById('compass-overlay');
        if (overlay) {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.close();
                }
            });
        }

        // ESC Taste
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Links schliessen Overlay
        const links = document.querySelectorAll('.compass-link, .compass-center-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Kleine Verzögerung für bessere UX
                setTimeout(() => this.close(), 100);
            });
        });
    }

    // ==========================================
    // Scroll Handling
    // ==========================================
    handleScroll() {
        const nav = document.querySelector('.compass-nav');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // ==========================================
    // Open/Close
    // ==========================================
    open() {
        const overlay = document.getElementById('compass-overlay');
        if (overlay) {
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
            this.isOpen = true;
            
            // Focus auf Close-Button für Accessibility
            setTimeout(() => {
                document.getElementById('compass-close')?.focus();
            }, 100);
        }
    }

    close() {
        const overlay = document.getElementById('compass-overlay');
        if (overlay) {
            overlay.classList.remove('open');
            document.body.style.overflow = '';
            this.isOpen = false;
        }
    }

    // ==========================================
    // Pfad-Helfer
    // ==========================================
    getBasePath() {
        const path = window.location.pathname;
        
        // Auf index.html oder root
        if (path.endsWith('/') || path.endsWith('index.html') || path === '/') {
            return '';
        }
        
        // In /pages/ Ordner
        if (path.includes('/pages/')) {
            return '../';
        }
        
        // In /interactives/ Ordner
        if (path.includes('/interactives/')) {
            return '../';
        }
        
        // Fallback
        return '';
    }
}

// ==========================================
// Auto-Initialize
// ==========================================
let compassNav;

function initCompassNavigation() {
    compassNav = new CompassNavigation();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCompassNavigation);
} else {
    initCompassNavigation();
}

// Global verfügbar machen
window.compassNav = compassNav;

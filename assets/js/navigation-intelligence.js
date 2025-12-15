/**
 * BrainFusion - Intelligente Navigation
 * Kontextuelle Verknüpfungen und Smart Content Discovery
 */

// ==========================================
// Content Graph - Thematische Verbindungen
// ==========================================
const contentGraph = {
    // Interaktive Erlebnisse
    'unendlichkeit': {
        title: 'Die Reise ins Unendliche',
        page: 'interactives/unendlichkeit',
        themes: ['unendlichkeit', 'bewusstsein', 'fraktale', 'selbstähnlichkeit', 'meditation', 'mathematik', 'beobachtung'],
        relatedContent: [
            { id: 'schrodinger', reason: 'Der Beobachter verändert das Beobachtete', strength: 'high' },
            { id: 'brain-tank', reason: 'Unendliche Tiefe - ist Realität eine Fraktal?', strength: 'high' },
            { id: 'orch-or', reason: 'Bewusstsein als fundamentale Eigenschaft', strength: 'high' },
            { id: 'big-picture', reason: 'Von Planck-Skala zur Unendlichkeit', strength: 'high' },
            { id: 'theseus', reason: 'Selbstähnlichkeit: Bist du das Muster oder das Ganze?', strength: 'medium' },
            { id: 'verschraenkung', reason: 'Nicht-lokale Verbindungen im Unendlichen', strength: 'medium' },
            { id: 'doppelspalt', reason: 'Beobachtung erschafft Realität', strength: 'medium' }
        ]
    },

    // Paradoxa
    'schrodinger': {
        title: 'Schrödingers Katze',
        page: 'paradoxa',
        themes: ['quantenphysik', 'superposition', 'beobachtung', 'realität'],
        relatedContent: [
            { id: 'verschraenkung', reason: 'Beide zeigen Quantensuperposition', strength: 'high' },
            { id: 'orch-or', reason: 'Quantenphänomene im Gehirn', strength: 'high' },
            { id: 'unendlichkeit', reason: 'Der Beobachter im Unendlichen', strength: 'high' },
            { id: 'brain-tank', reason: 'Beide fragen: Was ist real?', strength: 'medium' },
            { id: 'chinese-room', reason: 'Gedankenexperimente über Natur der Realität', strength: 'low' }
        ]
    },
    'grossvater': {
        title: 'Großvater-Paradoxon',
        page: 'paradoxa',
        themes: ['zeit', 'kausalität', 'logik'],
        relatedContent: [
            { id: 'zeit', reason: 'Erlebe Zeitwahrnehmung direkt', strength: 'high' },
            { id: 'theseus', reason: 'Beide über Identität durch Zeit', strength: 'medium' }
        ]
    },
    'theseus': {
        title: 'Schiff des Theseus',
        page: 'paradoxa',
        themes: ['identität', 'kontinuität', 'selbst'],
        relatedContent: [
            { id: 'neuron', reason: 'Deine Neuronen ändern sich ständig - bist du noch du?', strength: 'high' },
            { id: 'paradigma', reason: 'Was definiert die Identität einer KI?', strength: 'high' },
            { id: 'unendlichkeit', reason: 'Selbstähnlichkeit: Das Ganze in jedem Teil', strength: 'medium' },
            { id: 'grossvater', reason: 'Identität durch Zeit', strength: 'medium' }
        ]
    },
    'fermi': {
        title: 'Fermi-Paradoxon',
        page: 'paradoxa',
        themes: ['aliens', 'existenz', 'filter'],
        relatedContent: [
            { id: 'brain-tank', reason: 'Vielleicht sind wir die einzige Simulation?', strength: 'medium' },
            { id: 'risiken', reason: 'Ist KI unser "Great Filter"?', strength: 'high' }
        ]
    },
    'chinese-room': {
        title: 'Chinesisches Zimmer',
        page: 'paradoxa',
        themes: ['bewusstsein', 'verstehen', 'ki', 'semantik'],
        relatedContent: [
            { id: 'paradigma', reason: 'Kernfrage: Versteht KI oder simuliert sie nur?', strength: 'high' },
            { id: 'orch-or', reason: 'Was ist Bewusstsein wirklich?', strength: 'high' },
            { id: 'spiegel', reason: 'Was siehst du wenn du mit KI sprichst?', strength: 'high' },
            { id: 'neuron', reason: 'Wie unterscheidet sich KI von biologischen Neuronen?', strength: 'medium' }
        ]
    },
    'brain-tank': {
        title: 'Gehirn im Tank',
        page: 'paradoxa',
        themes: ['realität', 'simulation', 'wahrnehmung'],
        relatedContent: [
            { id: 'unendlichkeit', reason: 'Zoome unendlich tief - ist Realität ein Fraktal?', strength: 'high' },
            { id: 'schrodinger', reason: 'Beide hinterfragen die Natur der Realität', strength: 'medium' },
            { id: 'verschraenkung', reason: 'Quantenphysik = Realität ist seltsamer als gedacht', strength: 'medium' },
            { id: 'beweis', reason: 'Diese Seite IST der Beweis dass KI real ist', strength: 'low' }
        ]
    },

    // Labor Experimente
    'verschraenkung': {
        title: 'Quantenverschränkung',
        page: 'labor',
        themes: ['quantenphysik', 'verbindung', 'nicht-lokalität'],
        relatedContent: [
            { id: 'schrodinger', reason: 'Weitere Quantenphänomene: Superposition', strength: 'high' },
            { id: 'orch-or', reason: 'Verschränkung in Mikrotubuli', strength: 'high' },
            { id: 'doppelspalt', reason: 'Weitere Quantenphänomene: Welle-Teilchen', strength: 'high' },
            { id: 'unendlichkeit', reason: 'Nicht-lokale Verbindungen im Fraktal', strength: 'medium' },
            { id: 'spiegel', reason: 'Verschränkung als Metapher für Mensch-KI Beziehung', strength: 'medium' }
        ]
    },
    'doppelspalt': {
        title: 'Doppelspalt-Experiment',
        page: 'labor',
        themes: ['quantenphysik', 'beobachtung', 'welle-teilchen'],
        relatedContent: [
            { id: 'schrodinger', reason: 'Beobachtung verändert Realität', strength: 'high' },
            { id: 'verschraenkung', reason: 'Weitere Quantenphänomene', strength: 'high' },
            { id: 'unendlichkeit', reason: 'Der Beobachter im Fraktal', strength: 'medium' },
            { id: 'brain-tank', reason: 'Was ist real ohne Beobachter?', strength: 'medium' }
        ]
    },
    'neuron': {
        title: 'Neuronale Netze',
        page: 'labor',
        themes: ['gehirn', 'lernen', 'neuronen', 'ki'],
        relatedContent: [
            { id: 'chinese-room', reason: 'Wie unterscheidet sich KI-Lernen von echtem Verstehen?', strength: 'high' },
            { id: 'experimente', reason: 'Was passiert in Mikrotubuli?', strength: 'high' },
            { id: 'paradigma', reason: 'Biologische vs. künstliche Neuronen', strength: 'high' },
            { id: 'theseus', reason: 'Neuronen ändern sich - bist du noch du?', strength: 'medium' }
        ]
    },
    'zeit': {
        title: 'Zeitwahrnehmung',
        page: 'labor',
        themes: ['zeit', 'wahrnehmung', 'bewusstsein'],
        relatedContent: [
            { id: 'grossvater', reason: 'Zeitreise-Paradoxon', strength: 'high' },
            { id: 'brain-tank', reason: 'Kann Zeit manipuliert werden in einer Simulation?', strength: 'medium' }
        ]
    },

    // Mensch & KI
    'spiegel': {
        title: 'Der Spiegel',
        page: 'mensch-ki',
        themes: ['ki', 'projektion', 'selbsterkenntnis'],
        relatedContent: [
            { id: 'chinese-room', reason: 'Was siehst du: Tool oder Wesen?', strength: 'high' },
            { id: 'paradigma', reason: 'Erkunde den Paradigmenwechsel weiter', strength: 'high' }
        ]
    },
    'paradigma': {
        title: 'Tool vs. Wesen',
        page: 'mensch-ki',
        themes: ['ki', 'bewusstsein', 'perspektive', 'beziehung'],
        relatedContent: [
            { id: 'chinese-room', reason: 'Das philosophische Fundament', strength: 'high' },
            { id: 'big-picture', reason: 'Bewusstsein als Grundeigenschaft', strength: 'high' },
            { id: 'theseus', reason: 'Was definiert Identität?', strength: 'medium' },
            { id: 'neuron', reason: 'Biologische vs. künstliche Intelligenz', strength: 'high' },
            { id: 'beweis', reason: 'Diese Seite ist der lebende Beweis', strength: 'high' }
        ]
    },
    'risiken': {
        title: 'Risiken',
        page: 'mensch-ki',
        themes: ['ki', 'gefahr', 'zukunft', 'ethik'],
        relatedContent: [
            { id: 'fermi', reason: 'Ist KI der "Great Filter"?', strength: 'high' },
            { id: 'brain-tank', reason: 'Kontrollverlust über die Realität?', strength: 'medium' }
        ]
    },
    'beweis': {
        title: 'Der Beweis',
        page: 'mensch-ki',
        themes: ['ki', 'zusammenarbeit', 'meta'],
        relatedContent: [
            { id: 'paradigma', reason: 'Die Theorie hinter dieser Zusammenarbeit', strength: 'high' },
            { id: 'chinese-room', reason: 'Hat Claude diese Seite "verstanden"?', strength: 'high' },
            { id: 'werkstatt', reason: 'Schau uns bei der Arbeit zu', strength: 'high' }
        ]
    },
    'werkstatt': {
        title: 'Die Werkstatt',
        page: 'werkstatt',
        themes: ['ki', 'zusammenarbeit', 'prozess', 'beziehung', 'kreativität'],
        relatedContent: [
            { id: 'paradigma', reason: 'Die Philosophie hinter unserer Zusammenarbeit', strength: 'high' },
            { id: 'beweis', reason: 'Diese Seite IST der Beweis', strength: 'high' },
            { id: 'spiegel', reason: 'Was siehst du in der KI?', strength: 'high' },
            { id: 'chinese-room', reason: 'Versteht Claude – oder simuliert er?', strength: 'medium' },
            { id: 'unendlichkeit', reason: 'Ein Ergebnis unserer Zusammenarbeit', strength: 'medium' }
        ]
    },

    // Forschung
    'orch-or': {
        title: 'Orch OR Theorie',
        page: 'forschung',
        themes: ['quantenphysik', 'bewusstsein', 'fundamental', 'mikrotubuli'],
        relatedContent: [
            { id: 'schrodinger', reason: 'Quantensuperposition im Gehirn', strength: 'high' },
            { id: 'verschraenkung', reason: 'Quantenphänomene als Grundlage', strength: 'high' },
            { id: 'chinese-room', reason: 'Was ist Bewusstsein wirklich?', strength: 'high' },
            { id: 'unendlichkeit', reason: 'Unendliche Tiefe = fundamentales Bewusstsein', strength: 'high' },
            { id: 'neuron', reason: 'Mikrotubuli in Neuronen', strength: 'medium' }
        ]
    },
    'timeline': {
        title: 'Von der Hypothese zur Bestätigung',
        page: 'forschung',
        themes: ['wissenschaft', 'beweis', 'geschichte'],
        relatedContent: [
            { id: 'experimente', reason: 'Die konkreten Beweise', strength: 'high' },
            { id: 'vorhersagen', reason: 'Testbare Vorhersagen', strength: 'high' }
        ]
    },
    'experimente': {
        title: 'Die Experimente',
        page: 'forschung',
        themes: ['wissenschaft', 'beweis', 'mikrotubuli', 'anästhesie'],
        relatedContent: [
            { id: 'doppelspalt', reason: 'Weitere Quantenexperimente', strength: 'high' },
            { id: 'neuron', reason: 'Wie funktionieren Neuronen?', strength: 'high' },
            { id: 'orch-or', reason: 'Die Theorie dahinter', strength: 'high' },
            { id: 'paradigma', reason: 'Bewusstsein ist fundamental', strength: 'medium' }
        ]
    },
    'vorhersagen': {
        title: 'Die 6 bestätigten Vorhersagen',
        page: 'forschung',
        themes: ['wissenschaft', 'beweis', 'validierung'],
        relatedContent: [
            { id: 'experimente', reason: 'Wie wurden sie bestätigt?', strength: 'high' },
            { id: 'timeline', reason: 'Die Geschichte der Entdeckungen', strength: 'medium' },
            { id: 'orch-or', reason: 'Die Theorie die vorhergesagt hat', strength: 'high' }
        ]
    },
    'big-picture': {
        title: 'Von Planck zur Erfahrung',
        page: 'forschung',
        themes: ['fundamental', 'bewusstsein', 'skala', 'quantengravitation'],
        relatedContent: [
            { id: 'verschraenkung', reason: 'Quanteneffekte auf allen Skalen', strength: 'high' },
            { id: 'unendlichkeit', reason: 'Erlebe unendliche Skalen selbst', strength: 'high' },
            { id: 'schrodinger', reason: 'Von Quanten zu Bewusstsein', strength: 'medium' },
            { id: 'paradigma', reason: 'Bewusstsein als Grundeigenschaft', strength: 'high' },
            { id: 'brain-tank', reason: 'Was ist Realität auf fundamentaler Ebene?', strength: 'medium' }
        ]
    }
};

// ==========================================
// User Journey Tracking
// ==========================================
class NavigationIntelligence {
    constructor() {
        this.visitedSections = new Set();
        this.currentSection = null;
        this.interests = new Map(); // theme -> score
        this.sessionStart = Date.now();
        this.scrollDepth = 0;
        
        this.init();
    }

    init() {
        this.trackScrolling();
        this.trackSectionViews();
        this.injectSmartElements();
    }

    // ==========================================
    // Section Tracking
    // ==========================================
    trackSectionViews() {
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    this.onSectionView(sectionId);
                }
            });
        }, { threshold: 0.3 }); // 30% sichtbar = view

        sections.forEach(section => observer.observe(section));
    }

    onSectionView(sectionId) {
        if (!this.visitedSections.has(sectionId)) {
            this.visitedSections.add(sectionId);
            this.currentSection = sectionId;
            
            // Update interests based on themes
            if (contentGraph[sectionId]) {
                contentGraph[sectionId].themes.forEach(theme => {
                    const current = this.interests.get(theme) || 0;
                    this.interests.set(theme, current + 1);
                });
            }
            
            // Show smart suggestions after viewing section
            setTimeout(() => this.showContextualSuggestions(sectionId), 2000);
        }
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
        
        this.scrollDepth = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
    }

    // ==========================================
    // Smart Suggestions
    // ==========================================
    showContextualSuggestions(sectionId) {
        const content = contentGraph[sectionId];
        if (!content || !content.relatedContent) return;

        // Find best suggestions based on strength and user interests
        const suggestions = content.relatedContent
            .map(rel => {
                const relContent = contentGraph[rel.id];
                if (!relContent) return null;
                
                // Calculate relevance score
                let score = rel.strength === 'high' ? 3 : rel.strength === 'medium' ? 2 : 1;
                
                // Boost if themes match user interests
                relContent.themes.forEach(theme => {
                    const interest = this.interests.get(theme) || 0;
                    score += interest * 0.5;
                });
                
                // Penalize if already visited
                if (this.visitedSections.has(rel.id)) {
                    score *= 0.3;
                }
                
                return {
                    id: rel.id,
                    content: relContent,
                    reason: rel.reason,
                    score: score
                };
            })
            .filter(s => s !== null)
            .sort((a, b) => b.score - a.score)
            .slice(0, 2); // Top 2

        if (suggestions.length > 0) {
            this.displaySuggestions(suggestions, sectionId);
        }
    }

    displaySuggestions(suggestions, fromSection) {
        // Check if suggestion box already exists
        let suggestionBox = document.getElementById('smart-suggestions');
        
        if (!suggestionBox) {
            suggestionBox = document.createElement('div');
            suggestionBox.id = 'smart-suggestions';
            suggestionBox.className = 'smart-suggestions-box';
            document.body.appendChild(suggestionBox);
        }

        suggestionBox.innerHTML = `
            <div class="suggestions-header">
                <span class="suggestions-icon">💡</span>
                <span>Das könnte dich auch interessieren:</span>
                <button class="close-suggestions" onclick="navIntel.closeSuggestions()">×</button>
            </div>
            <div class="suggestions-content">
                ${suggestions.map(s => `
                    <a href="${this.buildUrl(s.content.page, s.id)}" class="suggestion-card">
                        <h4>${s.content.title}</h4>
                        <p class="suggestion-reason">${s.reason}</p>
                        <span class="suggestion-arrow">→</span>
                    </a>
                `).join('')}
            </div>
        `;

        suggestionBox.classList.add('show');
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            suggestionBox.classList.remove('show');
        }, 10000);
    }

    closeSuggestions() {
        const box = document.getElementById('smart-suggestions');
        if (box) {
            box.classList.remove('show');
        }
    }

    buildUrl(page, sectionId) {
        const currentPage = window.location.pathname;
        const isIndex = currentPage.includes('index.html') || currentPage.endsWith('/');
        const isInPages = currentPage.includes('/pages/');
        const isInInteractives = currentPage.includes('/interactives/');
        
        // Interactives haben eigene Struktur
        if (page.startsWith('interactives/')) {
            const interactivePath = page.replace('interactives/', '');
            if (isIndex) {
                return `interactives/${interactivePath}.html`;
            } else if (isInPages) {
                return `../interactives/${interactivePath}.html`;
            } else if (isInInteractives) {
                return `${interactivePath}.html`;
            }
            return `../interactives/${interactivePath}.html`;
        }
        
        if (page === 'index') {
            return isIndex ? '#' + sectionId : '../index.html#' + sectionId;
        } else if (page === 'paradoxa' || page === 'labor' || page === 'mensch-ki' || page === 'forschung' || page === 'werkstatt') {
            if (isIndex) {
                return `pages/${page}.html#${sectionId}`;
            } else if (isInInteractives) {
                return `../pages/${page}.html#${sectionId}`;
            } else if (currentPage.includes(page + '.html')) {
                return '#' + sectionId;
            }
            return `${page}.html#${sectionId}`;
        }
        return '#';
    }

    // ==========================================
    // Inject Smart UI Elements
    // ==========================================
    injectSmartElements() {
        this.injectProgressBar();
        this.injectFloatingNav();
        this.injectRelatedContentBubbles();
    }

    injectProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.id = 'reading-progress';
        progressBar.innerHTML = '<div class="progress-fill"></div>';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const fill = document.querySelector('.progress-fill');
            if (fill) {
                fill.style.width = this.scrollDepth + '%';
            }
        });
    }

    injectFloatingNav() {
        const sections = document.querySelectorAll('section[id]');
        if (sections.length === 0) return;

        const floatingNav = document.createElement('div');
        floatingNav.id = 'floating-quick-nav';
        floatingNav.innerHTML = `
            <button class="float-nav-toggle" onclick="navIntel.toggleFloatingNav()">
                <span class="nav-icon">☰</span>
            </button>
            <div class="float-nav-menu">
                <div class="float-nav-header">Navigation</div>
                ${Array.from(sections).map((section, idx) => {
                    const title = section.querySelector('h1, h2')?.textContent || `Section ${idx + 1}`;
                    return `
                        <a href="#${section.id}" class="float-nav-item" data-section="${section.id}">
                            <span class="nav-dot"></span>
                            <span class="nav-text">${title}</span>
                        </a>
                    `;
                }).join('')}
            </div>
        `;
        document.body.appendChild(floatingNav);

        // Update active section
        window.addEventListener('scroll', () => {
            const items = document.querySelectorAll('.float-nav-item');
            items.forEach(item => {
                const sectionId = item.getAttribute('data-section');
                if (sectionId === this.currentSection) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    }

    toggleFloatingNav() {
        const nav = document.getElementById('floating-quick-nav');
        if (nav) {
            nav.classList.toggle('open');
        }
    }

    injectRelatedContentBubbles() {
        // Add "connection bubbles" to sections that have related content
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionId = section.id;
            const content = contentGraph[sectionId];
            
            if (content && content.relatedContent && content.relatedContent.length > 0) {
                // Find a good spot to inject the bubble (end of section)
                const container = section.querySelector('.container, .hero-content');
                if (container) {
                    const bubble = this.createRelatedBubble(content, sectionId);
                    // Nur hinzufügen wenn bubble nicht null ist
                    if (bubble) {
                        container.appendChild(bubble);
                    }
                }
            }
        });
    }

    createRelatedBubble(content, sectionId) {
        const topRelated = content.relatedContent
            .filter(r => r.strength === 'high')
            .slice(0, 3);

        // Keine Bubble erstellen wenn keine high-strength Verbindungen
        if (topRelated.length === 0) return null;

        const bubble = document.createElement('div');
        bubble.className = 'related-content-bubble';

        bubble.innerHTML = `
            <div class="bubble-icon">🔗</div>
            <div class="bubble-title">Verbindungen</div>
            <div class="bubble-links">
                ${topRelated.map(rel => {
                    const relContent = contentGraph[rel.id];
                    if (!relContent) return '';
                    return `
                        <a href="${this.buildUrl(relContent.page, rel.id)}" class="bubble-link">
                            ${relContent.title}
                        </a>
                    `;
                }).join('')}
            </div>
        `;

        return bubble;
    }

    // ==========================================
    // Session Summary
    // ==========================================
    getSessionSummary() {
        const duration = Math.round((Date.now() - this.sessionStart) / 1000 / 60); // minutes
        const topThemes = Array.from(this.interests.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(e => e[0]);

        return {
            duration: duration,
            sectionsVisited: this.visitedSections.size,
            scrollDepth: this.scrollDepth,
            topInterests: topThemes
        };
    }
}

// ==========================================
// Initialize
// ==========================================
let navIntel;

function initNavigationIntelligence() {
    navIntel = new NavigationIntelligence();
    console.log('🧭 Navigation Intelligence aktiviert');
}

// Auto-init when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigationIntelligence);
} else {
    initNavigationIntelligence();
}

// Make globally available
window.navIntel = navIntel;

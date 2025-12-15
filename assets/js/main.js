/**
 * BrainFusion - Main JavaScript
 * Interaktivität und Atom-Visualisierung
 */

// ==========================================
// Navigation Scroll Effect
// ==========================================
function initNavigation() {
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// ==========================================
// Scroll to Interactive Section
// ==========================================
function scrollToInteractive() {
    const interactive = document.getElementById('touch-interactive');
    if (interactive) {
        interactive.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ==========================================
// Atom Visualization
// ==========================================
class AtomVisualization {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container = document.getElementById('atom-visualization');
        
        if (!this.container) return;
        
        this.atoms = [];
        this.touching = false;
        this.repulsionForce = 50;
        
        this.init();
    }

    init() {
        this.container.appendChild(this.canvas);
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Mouse/Touch events
        this.canvas.addEventListener('mousemove', (e) => this.handleInteraction(e));
        this.canvas.addEventListener('touchmove', (e) => this.handleInteraction(e.touches[0]));
        this.canvas.addEventListener('mouseleave', () => this.touching = false);
        this.canvas.addEventListener('touchend', () => this.touching = false);
        
        this.createAtoms();
        this.animate();
        
        // Info text
        this.addInfoText();
    }

    resize() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    createAtoms() {
        // Create two atoms that want to "touch" but can't
        this.atoms = [
            {
                x: this.canvas.width * 0.3,
                y: this.canvas.height * 0.5,
                vx: 0,
                vy: 0,
                radius: 30,
                electrons: 8,
                color: '#00d9ff',
                name: 'Atom 1'
            },
            {
                x: this.canvas.width * 0.7,
                y: this.canvas.height * 0.5,
                vx: 0,
                vy: 0,
                radius: 30,
                electrons: 8,
                color: '#00ffaa',
                name: 'Atom 2'
            }
        ];
    }

    handleInteraction(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.touching = true;
        
        // Push atoms away from cursor
        this.atoms.forEach(atom => {
            const dx = atom.x - x;
            const dy = atom.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const force = (150 - distance) / 150;
                atom.vx += (dx / distance) * force * 2;
                atom.vy += (dy / distance) * force * 2;
            }
        });
    }

    addInfoText() {
        const info = document.createElement('div');
        info.style.cssText = `
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(0, 217, 255, 0.8);
            font-size: 14px;
            text-align: center;
            pointer-events: none;
            font-weight: 500;
        `;
        info.innerHTML = '✋ Bewege deinen Cursor über die Atome';
        this.container.appendChild(info);
    }

    drawAtom(atom, time) {
        // Nucleus (Kern)
        this.ctx.beginPath();
        this.ctx.arc(atom.x, atom.y, atom.radius * 0.3, 0, Math.PI * 2);
        this.ctx.fillStyle = atom.color;
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = atom.color;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;

        // Electron shells
        for (let i = 0; i < 3; i++) {
            const shellRadius = atom.radius * (1 + i * 0.5);
            
            // Orbital path
            this.ctx.beginPath();
            this.ctx.arc(atom.x, atom.y, shellRadius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(${atom.color === '#00d9ff' ? '0, 217, 255' : '0, 255, 170'}, 0.2)`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();

            // Electrons
            const electronsInShell = Math.min(atom.electrons - i * 2, 2);
            for (let j = 0; j < electronsInShell; j++) {
                const angle = (time * 0.001 * (i + 1) * 0.5) + (j * Math.PI * 2 / electronsInShell);
                const ex = atom.x + Math.cos(angle) * shellRadius;
                const ey = atom.y + Math.sin(angle) * shellRadius;
                
                this.ctx.beginPath();
                this.ctx.arc(ex, ey, 4, 0, Math.PI * 2);
                this.ctx.fillStyle = atom.color;
                this.ctx.fill();
            }
        }

        // Atom label
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        this.ctx.font = '12px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(atom.name, atom.x, atom.y + atom.radius * 2.5);
    }

    updateAtoms() {
        // Attraction between atoms
        const dx = this.atoms[1].x - this.atoms[0].x;
        const dy = this.atoms[1].y - this.atoms[0].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = 120; // They never actually touch!

        if (distance > minDistance) {
            // Weak attraction
            const force = 0.02;
            this.atoms[0].vx += (dx / distance) * force;
            this.atoms[0].vy += (dy / distance) * force;
            this.atoms[1].vx -= (dx / distance) * force;
            this.atoms[1].vy -= (dy / distance) * force;
        } else if (distance < minDistance) {
            // Strong repulsion - they can never touch!
            const force = (minDistance - distance) / minDistance * 0.5;
            this.atoms[0].vx -= (dx / distance) * force;
            this.atoms[0].vy -= (dy / distance) * force;
            this.atoms[1].vx += (dx / distance) * force;
            this.atoms[1].vy += (dy / distance) * force;
        }

        // Update positions
        this.atoms.forEach(atom => {
            atom.x += atom.vx;
            atom.y += atom.vy;

            // Friction
            atom.vx *= 0.95;
            atom.vy *= 0.95;

            // Boundary check
            const margin = atom.radius * 3;
            if (atom.x < margin) {
                atom.x = margin;
                atom.vx *= -0.5;
            }
            if (atom.x > this.canvas.width - margin) {
                atom.x = this.canvas.width - margin;
                atom.vx *= -0.5;
            }
            if (atom.y < margin) {
                atom.y = margin;
                atom.vy *= -0.5;
            }
            if (atom.y > this.canvas.height - margin) {
                atom.y = this.canvas.height - margin;
                atom.vy *= -0.5;
            }
        });
    }

    drawRepulsionField() {
        const dx = this.atoms[1].x - this.atoms[0].x;
        const dy = this.atoms[1].y - this.atoms[0].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
            const midX = (this.atoms[0].x + this.atoms[1].x) / 2;
            const midY = (this.atoms[0].y + this.atoms[1].y) / 2;
            
            // Draw repulsion visualization
            const opacity = (150 - distance) / 150 * 0.3;
            
            this.ctx.beginPath();
            this.ctx.moveTo(this.atoms[0].x, this.atoms[0].y);
            this.ctx.lineTo(this.atoms[1].x, this.atoms[1].y);
            this.ctx.strokeStyle = `rgba(255, 100, 100, ${opacity})`;
            this.ctx.lineWidth = 3;
            this.ctx.stroke();

            // Repulsion text
            this.ctx.fillStyle = `rgba(255, 100, 100, ${opacity * 2})`;
            this.ctx.font = 'bold 16px Inter';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('⚡ REPULSION', midX, midY - 10);
            this.ctx.font = '12px Inter';
            this.ctx.fillText(`${Math.round(distance)}px Abstand`, midX, midY + 10);
        }
    }

    animate(time = 0) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update physics
        this.updateAtoms();

        // Draw repulsion field
        this.drawRepulsionField();

        // Draw atoms
        this.atoms.forEach(atom => this.drawAtom(atom, time));

        requestAnimationFrame((t) => this.animate(t));
    }
}

// ==========================================
// Fade In Animation on Scroll
// ==========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.intro-card, .book-card').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// Initialize Everything
// ==========================================
function init() {
    initNavigation();
    new AtomVisualization();
    initScrollAnimations();
    
    console.log('🧠 BrainFusion initialized');
    console.log('✨ Eine Zusammenarbeit zwischen Christof Bechtiger und Claude');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Make scrollToInteractive globally available
window.scrollToInteractive = scrollToInteractive;

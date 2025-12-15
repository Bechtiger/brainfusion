// ============================================
// KOLLEKTIVES BEWUSSTSEIN SEITE - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Scroll-Reveal Animationen
    initScrollReveal();
    
    // Tokyo Network Animation
    initTokyoNetwork();
    
    // Murmuration Animation
    initMurmurationAnimation();
    
    // Fish School Animation
    initFishAnimation();
    
    // Stats Counter Animation
    initStatsCounter();
    
    // Smooth Scrolling
    initSmoothScroll();
    
    // Card Hover Effects
    initCardEffects();
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

    const animatedElements = document.querySelectorAll(`
        .capability-card,
        .discovery-item,
        .swarm-card,
        .superorganism-card,
        .philosophy-card,
        .stat-item,
        .fact-item,
        .process-step
    `);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// === Tokyo Network Animation ===
function initTokyoNetwork() {
    const container = document.getElementById('tokyo-network');
    if (!container) return;

    const nodes = container.querySelectorAll('.node');
    const central = container.querySelector('.node.central');
    
    // Positioniere Nodes im Kreis um das Zentrum
    const radius = 100;
    const nonCentralNodes = Array.from(nodes).filter(n => !n.classList.contains('central'));
    
    // Zentrale Node in der Mitte
    if (central) {
        central.style.left = '50%';
        central.style.top = '50%';
        central.style.transform = 'translate(-50%, -50%)';
    }
    
    // Andere Nodes im Kreis
    nonCentralNodes.forEach((node, i) => {
        const angle = (i / nonCentralNodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 35; // % vom Container
        const y = 50 + Math.sin(angle) * 40;
        node.style.left = `${x}%`;
        node.style.top = `${y}%`;
        node.style.transform = 'translate(-50%, -50%)';
    });

    // Linien zwischen Nodes erstellen
    let connections = [];
    let connectionElements = [];
    
    function createConnection(node1, node2) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.style.pointerEvents = 'none';
        svg.style.zIndex = '1';
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('stroke', '#ffc800');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('opacity', '0.6');
        
        svg.appendChild(line);
        container.appendChild(svg);
        
        return { svg, line, node1, node2 };
    }
    
    function updateConnectionPosition(conn) {
        const rect = container.getBoundingClientRect();
        const rect1 = conn.node1.getBoundingClientRect();
        const rect2 = conn.node2.getBoundingClientRect();
        
        const x1 = (rect1.left + rect1.width / 2 - rect.left) / rect.width * 100;
        const y1 = (rect1.top + rect1.height / 2 - rect.top) / rect.height * 100;
        const x2 = (rect2.left + rect2.width / 2 - rect.left) / rect.width * 100;
        const y2 = (rect2.top + rect2.height / 2 - rect.top) / rect.height * 100;
        
        conn.line.setAttribute('x1', `${x1}%`);
        conn.line.setAttribute('y1', `${y1}%`);
        conn.line.setAttribute('x2', `${x2}%`);
        conn.line.setAttribute('y2', `${y2}%`);
    }
    
    // Click-Handler für Animation
    let isAnimating = false;
    
    container.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;
        
        // Entferne existierende Verbindungen
        connectionElements.forEach(conn => conn.svg.remove());
        connectionElements = [];
        
        // Erstelle neue Verbindungen mit Animation
        const shuffled = [...nonCentralNodes].sort(() => Math.random() - 0.5);
        
        shuffled.forEach((node, i) => {
            setTimeout(() => {
                // Verbindung zum Zentrum
                const conn = createConnection(central, node);
                connectionElements.push(conn);
                
                // Initial unsichtbar
                conn.line.setAttribute('stroke-dasharray', '200');
                conn.line.setAttribute('stroke-dashoffset', '200');
                
                updateConnectionPosition(conn);
                
                // Animate
                conn.line.style.transition = 'stroke-dashoffset 0.5s ease-out';
                setTimeout(() => {
                    conn.line.setAttribute('stroke-dashoffset', '0');
                }, 50);
                
                // Zufällige Verbindungen zu Nachbarn
                if (Math.random() > 0.3 && i < shuffled.length - 1) {
                    setTimeout(() => {
                        const neighborConn = createConnection(node, shuffled[i + 1]);
                        connectionElements.push(neighborConn);
                        neighborConn.line.setAttribute('stroke-dasharray', '200');
                        neighborConn.line.setAttribute('stroke-dashoffset', '200');
                        neighborConn.line.setAttribute('opacity', '0.3');
                        updateConnectionPosition(neighborConn);
                        neighborConn.line.style.transition = 'stroke-dashoffset 0.5s ease-out';
                        setTimeout(() => {
                            neighborConn.line.setAttribute('stroke-dashoffset', '0');
                        }, 50);
                    }, 300);
                }
            }, i * 400);
        });
        
        setTimeout(() => {
            isAnimating = false;
        }, shuffled.length * 400 + 1000);
    });
    
    // Initial Animation beim Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                container.click();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(container);
}

// === Murmuration Animation (Realistic Boids) ===
function initMurmurationAnimation() {
    const container = document.getElementById('starling-animation');
    if (!container) return;
    
    const numBirds = 80;
    const birds = [];
    
    // Schwarm-Zustand
    let targetAngle = Math.random() * Math.PI * 2;
    let formationPhase = 0; // 0-1, steuert Formationswechsel
    let lastFormationChange = Date.now();
    let formationType = 'swirl'; // 'swirl', 'wave', 'split', 'converge'
    
    // Erstelle Vögel als kleine Dreiecke
    for (let i = 0; i < numBirds; i++) {
        const bird = document.createElement('div');
        bird.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            border-bottom: 6px solid rgba(255, 255, 255, 0.9);
            pointer-events: none;
            transform-origin: center center;
            filter: blur(0.3px);
        `;
        
        // Starte in loser Formation
        const angle = (i / numBirds) * Math.PI * 2;
        const radius = 20 + Math.random() * 15;
        
        bird.dataset.x = 50 + Math.cos(angle) * radius;
        bird.dataset.y = 50 + Math.sin(angle) * radius;
        bird.dataset.vx = Math.cos(angle + Math.PI/2) * 0.5;
        bird.dataset.vy = Math.sin(angle + Math.PI/2) * 0.5;
        
        container.appendChild(bird);
        birds.push(bird);
    }
    
    // Hilfsfunktion: Finde die nächsten Nachbarn
    function getNeighbors(birdIndex, count = 7) {
        const bird = birds[birdIndex];
        const x = parseFloat(bird.dataset.x);
        const y = parseFloat(bird.dataset.y);
        
        const distances = birds.map((other, idx) => {
            if (idx === birdIndex) return { idx, dist: Infinity };
            const ox = parseFloat(other.dataset.x);
            const oy = parseFloat(other.dataset.y);
            return { idx, dist: Math.sqrt((x - ox) ** 2 + (y - oy) ** 2) };
        });
        
        distances.sort((a, b) => a.dist - b.dist);
        return distances.slice(0, count).map(d => d.idx);
    }
    
    function updateBirds() {
        const now = Date.now();
        
        // Periodischer Formationswechsel (alle 3-5 Sekunden)
        if (now - lastFormationChange > 3000 + Math.random() * 2000) {
            lastFormationChange = now;
            const formations = ['swirl', 'wave', 'split', 'converge', 'rise', 'dive'];
            formationType = formations[Math.floor(Math.random() * formations.length)];
            targetAngle = Math.random() * Math.PI * 2;
        }
        
        // Berechne Schwarm-Zentrum
        let cx = 0, cy = 0, avgVx = 0, avgVy = 0;
        birds.forEach(b => {
            cx += parseFloat(b.dataset.x);
            cy += parseFloat(b.dataset.y);
            avgVx += parseFloat(b.dataset.vx);
            avgVy += parseFloat(b.dataset.vy);
        });
        cx /= birds.length;
        cy /= birds.length;
        avgVx /= birds.length;
        avgVy /= birds.length;
        
        // Formations-spezifische Ziel-Geschwindigkeiten
        let formationVx = 0, formationVy = 0;
        switch(formationType) {
            case 'swirl':
                // Kreisende Bewegung
                formationVx = Math.cos(targetAngle + now * 0.001) * 0.8;
                formationVy = Math.sin(targetAngle + now * 0.001) * 0.8;
                break;
            case 'wave':
                // Wellenförmige Bewegung
                formationVx = Math.cos(targetAngle) * 0.6;
                formationVy = Math.sin(now * 0.003) * 0.4;
                break;
            case 'split':
                // Schwarm teilt sich kurz
                break;
            case 'converge':
                // Schwarm zieht sich zusammen
                break;
            case 'rise':
                formationVx = Math.cos(targetAngle) * 0.3;
                formationVy = -0.8;
                break;
            case 'dive':
                formationVx = Math.cos(targetAngle) * 0.3;
                formationVy = 0.8;
                break;
        }
        
        birds.forEach((bird, i) => {
            let x = parseFloat(bird.dataset.x);
            let y = parseFloat(bird.dataset.y);
            let vx = parseFloat(bird.dataset.vx);
            let vy = parseFloat(bird.dataset.vy);
            
            // === BOIDS REGELN ===
            
            // 1. SEPARATION: Vermeide zu nahe Nachbarn
            let sepX = 0, sepY = 0;
            birds.forEach((other, j) => {
                if (i === j) return;
                const ox = parseFloat(other.dataset.x);
                const oy = parseFloat(other.dataset.y);
                const dist = Math.sqrt((x - ox) ** 2 + (y - oy) ** 2);
                if (dist < 5 && dist > 0) {
                    sepX += (x - ox) / dist * 0.15;
                    sepY += (y - oy) / dist * 0.15;
                }
            });
            
            // 2. ALIGNMENT: Richte dich nach den 7 nächsten Nachbarn
            const neighbors = getNeighbors(i, 7);
            let alignX = 0, alignY = 0;
            neighbors.forEach(idx => {
                alignX += parseFloat(birds[idx].dataset.vx);
                alignY += parseFloat(birds[idx].dataset.vy);
            });
            alignX /= neighbors.length;
            alignY /= neighbors.length;
            
            // 3. COHESION: Bewege zum lokalen Zentrum der Nachbarn
            let cohX = 0, cohY = 0;
            neighbors.forEach(idx => {
                cohX += parseFloat(birds[idx].dataset.x);
                cohY += parseFloat(birds[idx].dataset.y);
            });
            cohX = cohX / neighbors.length - x;
            cohY = cohY / neighbors.length - y;
            
            // 4. FORMATION: Globale Schwarm-Richtung
            const formationStrength = 0.02;
            
            // Kombiniere alle Kräfte
            vx += sepX * 1.5;  // Separation ist wichtig
            vy += sepY * 1.5;
            vx += (alignX - vx) * 0.08;  // Alignment
            vy += (alignY - vy) * 0.08;
            vx += cohX * 0.01;  // Cohesion
            vy += cohY * 0.01;
            vx += formationVx * formationStrength;  // Formation
            vy += formationVy * formationStrength;
            
            // 5. ZENTRUM HALTEN: Sanft zurück zur Mitte
            const distFromCenter = Math.sqrt((x - 50) ** 2 + (y - 50) ** 2);
            if (distFromCenter > 30) {
                vx += (50 - x) * 0.005;
                vy += (50 - y) * 0.005;
            }
            
            // 6. GRENZEN: Weiche Umkehr an Rändern
            if (x < 10) vx += 0.1;
            if (x > 90) vx -= 0.1;
            if (y < 10) vy += 0.1;
            if (y > 90) vy -= 0.1;
            
            // Geschwindigkeitslimit
            const speed = Math.sqrt(vx * vx + vy * vy);
            const maxSpeed = 1.2;
            const minSpeed = 0.3;
            if (speed > maxSpeed) {
                vx = (vx / speed) * maxSpeed;
                vy = (vy / speed) * maxSpeed;
            } else if (speed < minSpeed) {
                vx = (vx / speed) * minSpeed;
                vy = (vy / speed) * minSpeed;
            }
            
            // Update Position
            x += vx;
            y += vy;
            
            // Clamp
            x = Math.max(3, Math.min(97, x));
            y = Math.max(3, Math.min(97, y));
            
            bird.dataset.x = x;
            bird.dataset.y = y;
            bird.dataset.vx = vx;
            bird.dataset.vy = vy;
            
            bird.style.left = x + '%';
            bird.style.top = y + '%';
            
            // Rotiere Vogel in Flugrichtung
            const angle = Math.atan2(vy, vx) * (180 / Math.PI) + 90;
            bird.style.transform = `rotate(${angle}deg)`;
        });
        
        requestAnimationFrame(updateBirds);
    }
    
    // Starte Animation wenn sichtbar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateBirds();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(container);
}

// === Fish Animation ===
function initFishAnimation() {
    const container = document.getElementById('fish-animation');
    if (!container) return;
    
    const numFish = 30;
    const fish = [];
    
    for (let i = 0; i < numFish; i++) {
        const f = document.createElement('div');
        f.innerHTML = '🐟';
        f.style.cssText = `
            position: absolute;
            font-size: 12px;
            pointer-events: none;
            transform-origin: center;
            transition: transform 0.1s linear;
        `;
        f.dataset.x = Math.random() * 80 + 10;
        f.dataset.y = Math.random() * 80 + 10;
        f.dataset.angle = Math.random() * Math.PI * 2;
        f.dataset.speed = 0.3 + Math.random() * 0.3;
        container.appendChild(f);
        fish.push(f);
    }
    
    function updateFish() {
        // Gruppenrichtung
        let avgAngle = 0;
        fish.forEach(f => avgAngle += parseFloat(f.dataset.angle));
        avgAngle /= fish.length;
        
        fish.forEach((f, i) => {
            let x = parseFloat(f.dataset.x);
            let y = parseFloat(f.dataset.y);
            let angle = parseFloat(f.dataset.angle);
            let speed = parseFloat(f.dataset.speed);
            
            // Leichte Anpassung an Gruppenrichtung
            const angleDiff = avgAngle - angle;
            angle += angleDiff * 0.02;
            
            // Zufällige Variation
            angle += (Math.random() - 0.5) * 0.1;
            
            // Bewegung
            x += Math.cos(angle) * speed;
            y += Math.sin(angle) * speed;
            
            // Grenzen
            if (x < 5 || x > 95) {
                angle = Math.PI - angle;
                x = Math.max(5, Math.min(95, x));
            }
            if (y < 5 || y > 95) {
                angle = -angle;
                y = Math.max(5, Math.min(95, y));
            }
            
            f.dataset.x = x;
            f.dataset.y = y;
            f.dataset.angle = angle;
            
            f.style.left = x + '%';
            f.style.top = y + '%';
            
            // Drehe Fisch in Bewegungsrichtung
            const deg = angle * (180 / Math.PI);
            f.style.transform = `rotate(${deg}deg) ${deg > 90 || deg < -90 ? 'scaleY(-1)' : ''}`;
        });
        
        requestAnimationFrame(updateFish);
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateFish();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(container);
}

// === Stats Counter Animation ===
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                
                // Nur numerische Werte animieren
                if (text.match(/^\d+%?$/)) {
                    const target = parseInt(text);
                    const suffix = text.includes('%') ? '%' : '';
                    animateNumber(entry.target, 0, target, 1500, suffix);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(num => observer.observe(num));
}

function animateNumber(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * easeOut);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// === Smooth Scrolling ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
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

// === Card Hover Effects ===
function initCardEffects() {
    const cards = document.querySelectorAll('.capability-card, .philosophy-card, .swarm-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// === Parallax Hero Effect ===
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.4}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// === Debug (Development Only) ===
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🌐 Kollektives Bewusstsein Seite geladen');
    console.log('🐜 Animationen initialisiert');
    console.log('🐦 Schwarm-Simulationen aktiv');
}

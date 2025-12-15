/**
 * Paradoxa - Interactive Mind-Bending
 * BrainFusion
 */

// ==========================================
// SCHRÖDINGERS KATZE
// ==========================================

let catAliveCount = 0;
let catDeadCount = 0;
let boxOpen = false;

function openBox() {
    if (boxOpen) return;
    
    const box = document.getElementById('cat-box');
    const quantumInfo = document.getElementById('quantum-info');
    
    // Wellenfunktion kollabiert!
    const isAlive = Math.random() < 0.5;
    boxOpen = true;
    
    box.classList.remove('closed');
    box.classList.add('opened', isAlive ? 'alive' : 'dead');
    
    const label = box.querySelector('.box-label');
    label.textContent = isAlive ? '😸' : '💀';
    
    quantumInfo.innerHTML = isAlive ? 
        '<strong>KOLLAPS!</strong> Die Katze ist <span style="color: #00ff00">LEBENDIG</span>!' :
        '<strong>KOLLAPS!</strong> Die Katze ist <span style="color: #ff0000">TOT</span>!';
    
    if (isAlive) catAliveCount++;
    else catDeadCount++;
    
    updateCatStats();
    
    // Hide button
    box.querySelector('.open-box-btn').style.display = 'none';
}

function resetSchrodinger() {
    boxOpen = false;
    
    const box = document.getElementById('cat-box');
    const quantumInfo = document.getElementById('quantum-info');
    
    box.className = 'box closed';
    box.querySelector('.box-label').textContent = '?';
    box.querySelector('.open-box-btn').style.display = 'block';
    
    quantumInfo.innerHTML = `
        <p>Die Katze ist in einem <strong>Superpositionszustand</strong>:</p>
        <p>50% lebendig + 50% tot = <strong>beides gleichzeitig</strong></p>
        <p><em>Bis du die Kiste öffnest...</em></p>
    `;
}

function updateCatStats() {
    const total = catAliveCount + catDeadCount;
    if (total === 0) return;
    
    const stats = document.getElementById('cat-stats');
    const alivePercent = (catAliveCount / total * 100).toFixed(1);
    const deadPercent = (catDeadCount / total * 100).toFixed(1);
    
    stats.innerHTML = `
        <strong>Statistik über ${total} Messungen:</strong><br>
        😸 Lebendig: ${catAliveCount} (${alivePercent}%)<br>
        💀 Tot: ${catDeadCount} (${deadPercent}%)<br>
        <small>Die Quantenmechanik sagt 50/50 voraus - nähern wir uns dem an?</small>
    `;
}

// ==========================================
// GROSSVATER-PARADOXON
// ==========================================

let timelineActive = false;

function startTimeTravel() {
    if (timelineActive) return;
    
    timelineActive = true;
    const traveler = document.getElementById('traveler');
    const status = document.getElementById('timeline-status');
    
    // Animation: Reise zurück in die Zeit
    status.textContent = 'Zeitmaschine aktiviert... reise zurück nach 1950...';
    traveler.style.transition = 'all 2s ease-in-out';
    traveler.style.left = '10%';
    traveler.style.top = '50%';
    
    setTimeout(() => {
        status.textContent = 'Du verhinderst, dass deine Großeltern sich treffen!';
        status.style.background = 'rgba(255, 100, 100, 0.2)';
        status.style.borderColor = '#ff6464';
        status.style.color = '#ff9999';
        
        // Lösche zukünftige Events
        setTimeout(() => {
            const futureEvents = document.querySelectorAll('[data-year]');
            futureEvents.forEach((event, index) => {
                if (index >= 2) { // Eltern und Du
                    setTimeout(() => {
                        event.style.opacity = '0.3';
                        event.style.textDecoration = 'line-through';
                    }, index * 500);
                }
            });
        }, 1000);
        
        setTimeout(() => {
            status.textContent = 'PARADOXON! Wenn du nie geboren wurdest... wer reiste dann zurück?';
            traveler.style.opacity = '0.3';
            traveler.textContent = '👻';
        }, 3000);
    }, 2000);
}

function resetTimeline() {
    timelineActive = false;
    const traveler = document.getElementById('traveler');
    const status = document.getElementById('timeline-status');
    
    traveler.style.left = '90%';
    traveler.style.top = '50%';
    traveler.style.opacity = '1';
    traveler.textContent = '🧳';
    
    status.textContent = 'Bereit für Zeitreise...';
    status.style.background = 'rgba(0, 217, 255, 0.1)';
    status.style.borderColor = 'var(--accent-color)';
    status.style.color = 'var(--accent-color)';
    
    const futureEvents = document.querySelectorAll('[data-year]');
    futureEvents.forEach(event => {
        event.style.opacity = '1';
        event.style.textDecoration = 'none';
    });
}

// ==========================================
// SCHIFF DES THESEUS
// ==========================================

let originalPlanks = 100;
let replacedPlanks = 0;
let replacementInterval = null;

function initShip() {
    const museumShip = document.getElementById('museum-ship');
    const rebuiltShip = document.getElementById('rebuilt-ship');
    
    if (!museumShip || !rebuiltShip) return;
    
    // Create 100 planks for each ship
    for (let i = 0; i < 100; i++) {
        const plank1 = document.createElement('div');
        plank1.className = 'plank original';
        plank1.id = `museum-plank-${i}`;
        museumShip.appendChild(plank1);
        
        const plank2 = document.createElement('div');
        plank2.className = 'plank';
        plank2.id = `rebuilt-plank-${i}`;
        plank2.style.opacity = '0.2';
        rebuiltShip.appendChild(plank2);
    }
}

function replacePlank() {
    if (replacedPlanks >= 100) return;
    
    // Replace one plank
    const museumPlank = document.getElementById(`museum-plank-${replacedPlanks}`);
    const rebuiltPlank = document.getElementById(`rebuilt-plank-${replacedPlanks}`);
    
    museumPlank.classList.remove('original');
    museumPlank.classList.add('new');
    
    rebuiltPlank.classList.add('original');
    rebuiltPlank.style.opacity = '1';
    
    replacedPlanks++;
    originalPlanks--;
    
    updateShipStats();
}

function autoReplace() {
    if (replacementInterval) {
        clearInterval(replacementInterval);
        replacementInterval = null;
        return;
    }
    
    replacementInterval = setInterval(() => {
        if (replacedPlanks >= 100) {
            clearInterval(replacementInterval);
            replacementInterval = null;
            return;
        }
        replacePlank();
    }, 100);
}

function resetShip() {
    if (replacementInterval) {
        clearInterval(replacementInterval);
        replacementInterval = null;
    }
    
    replacedPlanks = 0;
    originalPlanks = 100;
    
    for (let i = 0; i < 100; i++) {
        const museumPlank = document.getElementById(`museum-plank-${i}`);
        const rebuiltPlank = document.getElementById(`rebuilt-plank-${i}`);
        
        museumPlank.className = 'plank original';
        rebuiltPlank.className = 'plank';
        rebuiltPlank.style.opacity = '0.2';
    }
    
    updateShipStats();
}

function updateShipStats() {
    document.getElementById('original-count').textContent = originalPlanks;
    document.getElementById('rebuilt-count').textContent = replacedPlanks;
}

// ==========================================
// DRAKE-GLEICHUNG (FERMI-PARADOXON)
// ==========================================

function calculateDrake() {
    const R = parseFloat(document.getElementById('star-rate').value);
    const fp = parseFloat(document.getElementById('planet-fraction').value) / 100;
    const ne = parseFloat(document.getElementById('habitable').value);
    const fl = parseFloat(document.getElementById('life-fraction').value) / 100;
    const fi = parseFloat(document.getElementById('intelligence').value) / 100;
    const L = parseFloat(document.getElementById('lifetime').value);
    
    // Update displays
    document.getElementById('star-display').textContent = R;
    document.getElementById('planet-display').textContent = document.getElementById('planet-fraction').value;
    document.getElementById('habitable-display').textContent = ne;
    document.getElementById('life-display').textContent = document.getElementById('life-fraction').value;
    document.getElementById('intelligence-display').textContent = document.getElementById('intelligence').value;
    document.getElementById('lifetime-display').textContent = L;
    
    // Calculate N = R* × fp × ne × fl × fi × fc × L
    // fc (communicating) assumed to be 1 for simplicity
    const fc = 1;
    const N = R * fp * ne * fl * fi * fc * L;
    
    document.getElementById('civilization-count').textContent = Math.round(N).toLocaleString();
}

// ==========================================
// CHINESISCHES ZIMMER
// ==========================================

const chineseSymbols = [
    ['你好', '您好'],
    ['谢谢', '感谢'],
    ['再见', '回见'],
    ['是的', '对的'],
    ['什么', '哪个']
];

let conversationStep = 0;

function sendChineseInput() {
    const inputEl = document.getElementById('input-symbols');
    const outputEl = document.getElementById('output-symbols');
    const status = document.getElementById('room-status');
    
    conversationStep = (conversationStep + 1) % chineseSymbols.length;
    
    const [input, output] = chineseSymbols[conversationStep];
    
    // Animate input
    inputEl.textContent = input;
    inputEl.style.animation = 'none';
    setTimeout(() => {
        inputEl.style.animation = 'reveal 0.5s ease-out';
    }, 10);
    
    // Process with delay
    setTimeout(() => {
        status.textContent = 'Schaut im Regelbuch nach...';
        
        setTimeout(() => {
            outputEl.textContent = output;
            outputEl.style.animation = 'none';
            setTimeout(() => {
                outputEl.style.animation = 'reveal 0.5s ease-out';
            }, 10);
            
            status.textContent = 'Perfekte Antwort! Aber versteht die Person Chinesisch?';
        }, 1000);
    }, 500);
}

function resetRoom() {
    document.getElementById('input-symbols').textContent = '?';
    document.getElementById('output-symbols').textContent = '?';
    document.getElementById('room-status').textContent = 'Die Person im Raum folgt nur Regeln...';
    conversationStep = 0;
}

// ==========================================
// GEHIRN IM TANK
// ==========================================

let currentDepth = 0;
const maxDepth = 4;

function goDeeper() {
    if (currentDepth >= maxDepth - 1) {
        document.getElementById('depth-warning').textContent = '⚠️ Warnung: Existenzielle Krise Level erreicht';
        document.getElementById('depth-warning').classList.add('active');
        return;
    }
    
    currentDepth++;
    
    // Show next layer
    const layers = document.querySelectorAll('.layer');
    layers.forEach((layer, index) => {
        if (index <= currentDepth) {
            layer.classList.remove('hidden');
        } else {
            layer.classList.add('hidden');
        }
    });
    
    if (currentDepth >= 2) {
        document.getElementById('depth-warning').textContent = '😵 Die Realität verschwimmt...';
        document.getElementById('depth-warning').classList.add('active');
    }
}

function resetLayers() {
    currentDepth = 0;
    
    const layers = document.querySelectorAll('.layer');
    layers.forEach((layer, index) => {
        if (index === 0) {
            layer.classList.remove('hidden');
        } else {
            layer.classList.add('hidden');
        }
    });
    
    document.getElementById('depth-warning').textContent = '';
    document.getElementById('depth-warning').classList.remove('active');
}

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    // Initialize all paradoxes
    resetSchrodinger();
    resetTimeline();
    initShip();
    calculateDrake();
    resetRoom();
    resetLayers();
    
    console.log('🤯 Paradoxa initialized');
    console.log('✨ Eine Zusammenarbeit zwischen Christof Bechtiger und Claude');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

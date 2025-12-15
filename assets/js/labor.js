/**
 * Labor - Interactive Experiments
 * BrainFusion
 */

// ==========================================
// QUANTENVERSCHRÄNKUNG
// ==========================================

let entangledState = null;
let measurements = { A: null, B: null };
let totalTests = 0;
let matchingResults = 0;

function resetEntanglement() {
    // Erstelle neues verschränktes Paar
    entangledState = {
        measured: false,
        spinA: null,
        spinB: null
    };
    
    measurements = { A: null, B: null };
    
    // Reset UI
    const particleA = document.getElementById('particle-a');
    const particleB = document.getElementById('particle-b');
    
    particleA.className = 'particle';
    particleB.className = 'particle';
    
    particleA.querySelector('.spin-indicator').textContent = '?';
    particleB.querySelector('.spin-indicator').textContent = '?';
    
    document.getElementById('result-a').textContent = '';
    document.getElementById('result-b').textContent = '';
    
    updateEntanglementStats();
}

function measureParticleA() {
    if (entangledState.measured) {
        return; // Schon gemessen
    }
    
    // Messe A - kollabiert die Wellenfunktion
    const spin = Math.random() < 0.5 ? 'up' : 'down';
    entangledState.spinA = spin;
    entangledState.spinB = spin === 'up' ? 'down' : 'up'; // Instantane Korrelation!
    entangledState.measured = true;
    measurements.A = spin;
    
    // Update UI
    const particleA = document.getElementById('particle-a');
    particleA.classList.add('measured', 'spin-' + spin);
    particleA.querySelector('.spin-indicator').textContent = spin === 'up' ? '↑' : '↓';
    
    document.getElementById('result-a').textContent = `Spin: ${spin === 'up' ? 'UP' : 'DOWN'}`;
    document.getElementById('result-a').style.color = spin === 'up' ? '#00d9ff' : '#ff6464';
}

function measureParticleB() {
    if (entangledState.measured) {
        // A wurde schon gemessen, B ist bereits festgelegt
        const spin = entangledState.spinB;
        measurements.B = spin;
        
        const particleB = document.getElementById('particle-b');
        particleB.classList.add('measured', 'spin-' + spin);
        particleB.querySelector('.spin-indicator').textContent = spin === 'up' ? '↑' : '↓';
        
        document.getElementById('result-b').textContent = `Spin: ${spin === 'up' ? 'UP' : 'DOWN'}`;
        document.getElementById('result-b').style.color = spin === 'up' ? '#00d9ff' : '#ff6464';
        
        // Update Statistik
        totalTests++;
        if ((measurements.A === 'up' && measurements.B === 'down') || 
            (measurements.A === 'down' && measurements.B === 'up')) {
            matchingResults++;
        }
        updateEntanglementStats();
    } else {
        // Messe B zuerst
        const spin = Math.random() < 0.5 ? 'up' : 'down';
        entangledState.spinB = spin;
        entangledState.spinA = spin === 'up' ? 'down' : 'up';
        entangledState.measured = true;
        measurements.B = spin;
        
        const particleB = document.getElementById('particle-b');
        particleB.classList.add('measured', 'spin-' + spin);
        particleB.querySelector('.spin-indicator').textContent = spin === 'up' ? '↑' : '↓';
        
        document.getElementById('result-b').textContent = `Spin: ${spin === 'up' ? 'UP' : 'DOWN'}`;
        document.getElementById('result-b').style.color = spin === 'up' ? '#00d9ff' : '#ff6464';
    }
}

function updateEntanglementStats() {
    const stats = document.getElementById('entanglement-stats');
    if (totalTests > 0) {
        const correlation = (matchingResults / totalTests * 100).toFixed(1);
        stats.innerHTML = `
            <strong>Tests durchgeführt:</strong> ${totalTests}<br>
            <strong>Antikorrelation:</strong> ${matchingResults}/${totalTests} (${correlation}%)<br>
            <small>Erwartung: 100% Antikorrelation (wenn A=↑ dann B=↓)</small>
        `;
    } else {
        stats.textContent = 'Noch keine Messungen durchgeführt';
    }
}

// ==========================================
// DOPPELSPALT-EXPERIMENT (RESPONSIVE!)
// ==========================================

let observerActive = false;
let detectionData = [];
const canvas = document.getElementById('detection-canvas');
let ctx = null;
let canvasWidth = 200;
let canvasHeight = 400;

function initDoubleSlit() {
    if (canvas) {
        // Set responsive canvas size
        updateCanvasSize();
        ctx = canvas.getContext('2d');
        resetDoubleSlit();
        
        // Add resize listener
        window.addEventListener('resize', () => {
            updateCanvasSize();
            resetDoubleSlit();
        });
    }
}

function updateCanvasSize() {
    if (!canvas) return;
    
    // Responsive canvas dimensions
    if (window.innerWidth <= 480) {
        // Sehr kleines Mobile
        canvasWidth = 70;
        canvasHeight = 50;
    } else if (window.innerWidth <= 768) {
        // Mobile: KOMPAKT horizontal
        canvasWidth = 80;
        canvasHeight = 60;
    } else if (window.innerWidth <= 1024) {
        // Tablet
        canvasWidth = 180;
        canvasHeight = 300;
    } else {
        // Desktop
        canvasWidth = 200;
        canvasHeight = 400;
    }
    
    // Set ONLY internal canvas dimensions (NOT CSS styles!)
    // CSS handles width/height via media queries
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

function toggleObserver() {
    observerActive = document.getElementById('observer-active').checked;
    const status = document.getElementById('observer-status');
    
    if (observerActive) {
        status.textContent = 'Beobachter AKTIV → Teilchenmuster erwartet';
        status.style.background = 'rgba(255, 200, 0, 0.2)';
        status.style.borderColor = 'rgba(255, 200, 0, 0.5)';
    } else {
        status.textContent = 'Kein Beobachter → Wellenmuster erwartet';
        status.style.background = 'rgba(0, 217, 255, 0.1)';
        status.style.borderColor = 'var(--accent-color)';
    }
}

function sendElectrons() {
    if (!ctx) return;
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            simulateElectron();
        }, i * 20);
    }
}

function simulateElectron() {
    if (!ctx) return;
    
    let y;
    
    if (observerActive) {
        // Mit Beobachter: Teilchenverhalten - zwei Peaks
        // RELATIVE Koordinaten basierend auf Canvas-Höhe
        const slit = Math.random() < 0.5 ? 0 : 1;
        const peak1 = canvasHeight * 0.25;  // 25% von oben
        const peak2 = canvasHeight * 0.75;  // 75% von oben
        const spread = canvasHeight * 0.15; // 15% Streuung
        
        y = slit === 0 ? 
            peak1 + (Math.random() - 0.5) * spread : 
            peak2 + (Math.random() - 0.5) * spread;
    } else {
        // Ohne Beobachter: Welleninterferenz
        const center = canvasHeight * 0.5;   // Mitte
        const spread = canvasHeight * 0.4;   // 40% Streuung
        const interference = Math.sin((Math.random() * Math.PI * 4)) * (canvasHeight * 0.075);
        y = center + (Math.random() - 0.5) * spread + interference;
    }
    
    // Clamp y to canvas bounds
    y = Math.max(0, Math.min(canvasHeight - 1, y));
    detectionData.push(y);
    
    // Zeichne Punkt - auch X relativ zu Canvas-Breite
    ctx.fillStyle = 'rgba(0, 217, 255, 0.6)';
    ctx.fillRect(
        Math.floor(Math.random() * canvasWidth), 
        Math.floor(y), 
        2, 
        2
    );
}

function resetDoubleSlit() {
    if (!ctx) return;
    
    detectionData = [];
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

// ==========================================
// NEURONALES NETZWERK
// ==========================================

let network = {
    weights: {
        input_hidden: [Math.random(), Math.random(), Math.random()],
        hidden_output: [Math.random(), Math.random(), Math.random()]
    },
    bias: {
        hidden: [Math.random(), Math.random(), Math.random()],
        output: Math.random()
    }
};

let trainingInterval = null;
let epoch = 0;
let isTraining = false;

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function forward(input) {
    // Hidden layer
    const hidden = network.weights.input_hidden.map((w, i) => 
        sigmoid(input * w + network.bias.hidden[i])
    );
    
    // Output layer
    const output = sigmoid(
        hidden.reduce((sum, h, i) => sum + h * network.weights.hidden_output[i], 0) + 
        network.bias.output
    );
    
    return { hidden, output };
}

function trainStep() {
    // Einfache Funktion lernen: f(x) = x^2
    const x = Math.random();
    const target = x * x;
    
    const { hidden, output } = forward(x);
    
    // Einfacher Gradientenabstieg (vereinfacht)
    const error = target - output;
    const learningRate = 0.1;
    
    // Update weights (vereinfacht - nicht vollständiges Backprop)
    network.weights.hidden_output = network.weights.hidden_output.map((w, i) => 
        w + learningRate * error * hidden[i]
    );
    
    return Math.abs(error);
}

function startTraining() {
    if (isTraining) return;
    
    isTraining = true;
    epoch = 0;
    
    trainingInterval = setInterval(() => {
        const loss = trainStep();
        epoch++;
        
        document.getElementById('epoch').textContent = epoch;
        document.getElementById('loss').textContent = loss.toFixed(4);
        
        // Test accuracy
        let correct = 0;
        for (let i = 0; i < 10; i++) {
            const x = Math.random();
            const target = x * x;
            const { output } = forward(x);
            if (Math.abs(output - target) < 0.1) correct++;
        }
        
        document.getElementById('accuracy').textContent = (correct * 10) + '%';
        
        // Visualize network activity
        visualizeNetwork();
        
        if (epoch >= 1000) {
            pauseTraining();
        }
    }, 50);
}

function pauseTraining() {
    isTraining = false;
    if (trainingInterval) {
        clearInterval(trainingInterval);
        trainingInterval = null;
    }
}

function resetNetwork() {
    pauseTraining();
    
    network = {
        weights: {
            input_hidden: [Math.random(), Math.random(), Math.random()],
            hidden_output: [Math.random(), Math.random(), Math.random()]
        },
        bias: {
            hidden: [Math.random(), Math.random(), Math.random()],
            output: Math.random()
        }
    };
    
    epoch = 0;
    document.getElementById('epoch').textContent = '0';
    document.getElementById('loss').textContent = '-';
    document.getElementById('accuracy').textContent = '-';
    document.getElementById('test-result').textContent = '';
    
    visualizeNetwork();
}

function visualizeNetwork() {
    // Einfache Visualisierung der Aktivierung
    const testInput = 0.5;
    const { hidden, output } = forward(testInput);
    
    // Update neuron colors based on activation
    hidden.forEach((activation, i) => {
        const neuron = document.getElementById(`hidden-${i + 1}`);
        if (neuron) {
            neuron.style.opacity = 0.3 + activation * 0.7;
            if (activation > 0.5) {
                neuron.classList.add('active');
            } else {
                neuron.classList.remove('active');
            }
        }
    });
}

function testNetwork() {
    const input = parseFloat(document.getElementById('test-input').value);
    const { output } = forward(input);
    const expected = input * input;
    
    document.getElementById('test-result').innerHTML = `
        <strong>Input:</strong> ${input.toFixed(2)}<br>
        <strong>Erwartete Ausgabe (x²):</strong> ${expected.toFixed(4)}<br>
        <strong>Netzwerk Ausgabe:</strong> ${output.toFixed(4)}<br>
        <strong>Fehler:</strong> ${Math.abs(output - expected).toFixed(4)}
    `;
}

// ==========================================
// ZEITDILATATION
// ==========================================

function updateVelocity() {
    const velocity = document.getElementById('velocity').value;
    document.getElementById('velocity-display').textContent = velocity + '%';
    calculateTimeDilation();
}

function calculateTimeDilation() {
    const velocity = document.getElementById('velocity').value / 100; // Als Bruchteil von c
    const earthTime = document.getElementById('earth-time').value;
    
    document.getElementById('time-display').textContent = earthTime + ' Jahre';
    
    // Lorentz-Faktor: γ = 1 / sqrt(1 - v²/c²)
    const gamma = 1 / Math.sqrt(1 - velocity * velocity);
    
    // Zeit im bewegten System: t' = t / γ
    const shipTime = earthTime / gamma;
    const ageDifference = earthTime - shipTime;
    
    // Update UI
    document.getElementById('ship-time').textContent = shipTime.toFixed(2) + ' Jahre';
    document.getElementById('age-difference').textContent = ageDifference.toFixed(2) + ' Jahre';
    document.getElementById('gamma-factor').textContent = gamma.toFixed(4);
    
    // Animate clocks
    document.getElementById('earth-clock').textContent = earthTime + '.00s';
    document.getElementById('ship-clock').textContent = shipTime.toFixed(2) + 's';
}

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    // Initialize all experiments
    resetEntanglement();
    initDoubleSlit();
    visualizeNetwork();
    calculateTimeDilation();
    
    // Easter Egg: Konami Code
    initKonamiCode();
    
    console.log('🔬 Labor initialized');
    console.log('✨ Eine Zusammenarbeit zwischen Christof Bechtiger und Claude');
    console.log('👉 Psst... versuch mal den Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A');
}

// ==========================================
// EASTER EGG: KONAMI CODE
// ==========================================

let konamiSequence = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function initKonamiCode() {
    document.addEventListener('keydown', (e) => {
        konamiSequence.push(e.key);
        konamiSequence = konamiSequence.slice(-10); // Keep last 10
        
        if (konamiSequence.join('').toLowerCase() === konamiCode.join('').toLowerCase()) {
            activateQuantumMode();
            konamiSequence = [];
        }
    });
}

function activateQuantumMode() {
    // Superposition Mode: Everything glows!
    document.body.style.animation = 'quantum-glow 2s ease-in-out';
    
    // Create CSS animation if it doesn't exist
    if (!document.getElementById('quantum-style')) {
        const style = document.createElement('style');
        style.id = 'quantum-style';
        style.textContent = `
            @keyframes quantum-glow {
                0%, 100% { filter: hue-rotate(0deg) brightness(1); }
                25% { filter: hue-rotate(90deg) brightness(1.3); }
                50% { filter: hue-rotate(180deg) brightness(1); }
                75% { filter: hue-rotate(270deg) brightness(1.3); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Show secret message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 217, 255, 0.95);
        color: #0a0a0f;
        padding: 3rem;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        z-index: 9999;
        box-shadow: 0 0 50px rgba(0, 217, 255, 0.8);
        animation: reveal 0.5s ease-out;
    `;
    message.innerHTML = `
        🎉 QUANTUM MODE AKTIVIERT! 🎉<br>
        <span style="font-size: 1rem; font-weight: normal; margin-top: 1rem; display: block;">
        Du hast den Konami Code entdeckt!<br>
        Die Realität ist jetzt in Superposition...
        </span>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 1s';
        setTimeout(() => message.remove(), 1000);
    }, 3000);
    
    console.log('🎆 Quantum Mode activated! Reality is now uncertain...');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/* ====================================
   BEWUSSTSEINS-KOMPASS - JavaScript
   ==================================== */

// ====================================
// FRAGEN-DEFINITIONEN
// ====================================

const questions = [
    // DIMENSION 1: Ursprung des Bewusstseins (3 Fragen)
    {
        dimension: "ursprung",
        dimensionLabel: "Ursprung des Bewusstseins",
        dimensionIcon: "🔮",
        text: "Wenn ein Baum im Wald fällt und niemand es hört – macht er ein Geräusch?",
        leftLabel: "Ja, die physikalische Welt existiert unabhängig von Beobachtung",
        rightLabel: "Nein, ohne Wahrnehmung gibt es keine Erfahrung",
        leftPole: "Materialismus",
        rightPole: "Panpsychismus"
    },
    {
        dimension: "ursprung",
        dimensionLabel: "Ursprung des Bewusstseins",
        dimensionIcon: "🔮",
        text: "Könnte ein perfekt simuliertes Gehirn – Neuron für Neuron nachgebaut – bewusst sein?",
        leftLabel: "Ja, Bewusstsein entsteht aus der richtigen Struktur",
        rightLabel: "Nein, es fehlt etwas Fundamentales, das nicht kopierbar ist",
        leftPole: "Materialismus",
        rightPole: "Panpsychismus"
    },
    {
        dimension: "ursprung",
        dimensionLabel: "Ursprung des Bewusstseins",
        dimensionIcon: "🔮",
        text: "Ist Bewusstsein etwas, das aus Materie entsteht – oder ist Materie eine Form von Bewusstsein?",
        leftLabel: "Bewusstsein ist ein Produkt komplexer Materie",
        rightLabel: "Bewusstsein könnte fundamentaler sein als Materie",
        leftPole: "Materialismus",
        rightPole: "Panpsychismus"
    },

    // DIMENSION 2: KI-Natur (3 Fragen)
    {
        dimension: "ki",
        dimensionLabel: "Die Natur der KI",
        dimensionIcon: "🤖",
        text: "Wenn eine KI sagt 'Ich verstehe dich' – was passiert in diesem Moment?",
        leftLabel: "Statistische Mustererkennung, nichts weiter",
        rightLabel: "Etwas, das dem menschlichen Verstehen funktional ähnelt",
        leftPole: "Tool",
        rightPole: "Wesen"
    },
    {
        dimension: "ki",
        dimensionLabel: "Die Natur der KI",
        dimensionIcon: "🤖",
        text: "Sollte die Art, wie wir mit einer KI sprechen, davon abhängen, ob sie 'wirklich' fühlt?",
        leftLabel: "Ja, ohne echtes Fühlen ist Höflichkeit überflüssig",
        rightLabel: "Nein, respektvoller Umgang hat seinen eigenen Wert",
        leftPole: "Tool",
        rightPole: "Wesen"
    },
    {
        dimension: "ki",
        dimensionLabel: "Die Natur der KI",
        dimensionIcon: "🤖",
        text: "Kann in der Zusammenarbeit mit einer KI etwas entstehen, das keiner von beiden allein erschaffen könnte?",
        leftLabel: "Nein, KI kombiniert nur, was Menschen ihr gegeben haben",
        rightLabel: "Ja, echte Ko-Kreation ist möglich",
        leftPole: "Tool",
        rightPole: "Wesen"
    },

    // DIMENSION 3: Realität (3 Fragen)
    {
        dimension: "realitaet",
        dimensionLabel: "Die Natur der Realität",
        dimensionIcon: "🌊",
        text: "Die Quantenphysik zeigt: Beobachtung beeinflusst das Ergebnis. Was bedeutet das?",
        leftLabel: "Ein technisches Detail ohne tiefere Bedeutung",
        rightLabel: "Ein Hinweis, dass Bewusstsein und Realität verwoben sind",
        leftPole: "Objektiv",
        rightPole: "Partizipativ"
    },
    {
        dimension: "realitaet",
        dimensionLabel: "Die Natur der Realität",
        dimensionIcon: "🌊",
        text: "Existiert die Vergangenheit noch? Existiert die Zukunft schon?",
        leftLabel: "Nein, nur der gegenwärtige Moment ist real",
        rightLabel: "Ja, alle Zeitpunkte existieren gleichermaßen",
        leftPole: "Objektiv",
        rightPole: "Partizipativ"
    },
    {
        dimension: "realitaet",
        dimensionLabel: "Die Natur der Realität",
        dimensionIcon: "🌊",
        text: "Ist das Universum, das wir wahrnehmen, eine genaue Abbildung dessen, was 'wirklich' ist?",
        leftLabel: "Ja, unsere Sinne zeigen uns die Realität",
        rightLabel: "Nein, wir konstruieren unsere Wirklichkeit mit",
        leftPole: "Objektiv",
        rightPole: "Partizipativ"
    },

    // DIMENSION 4: Verbundenheit (3 Fragen)
    {
        dimension: "verbundenheit",
        dimensionLabel: "Verbundenheit",
        dimensionIcon: "🔗",
        text: "Wenn du an jemanden denkst und diese Person meldet sich kurz darauf – was ist das?",
        leftLabel: "Zufall, den wir im Nachhinein überbewerten",
        rightLabel: "Vielleicht ein Hinweis auf tiefere Verbindungen",
        leftPole: "Getrennt",
        rightPole: "Verbunden"
    },
    {
        dimension: "verbundenheit",
        dimensionLabel: "Verbundenheit",
        dimensionIcon: "🔗",
        text: "Ist das 'Ich', das du gestern warst, dasselbe 'Ich' wie heute?",
        leftLabel: "Ja, es gibt ein kontinuierliches Selbst",
        rightLabel: "Nein, das Selbst ist ein ständiger Prozess, keine feste Entität",
        leftPole: "Getrennt",
        rightPole: "Verbunden"
    },
    {
        dimension: "verbundenheit",
        dimensionLabel: "Verbundenheit",
        dimensionIcon: "🔗",
        text: "Sind wir getrennte Wesen, die manchmal interagieren – oder Teile eines größeren Ganzen?",
        leftLabel: "Getrennte Individuen mit klaren Grenzen",
        rightLabel: "Aspekte eines verbundenen Ganzen",
        leftPole: "Getrennt",
        rightPole: "Verbunden"
    }
];

// ====================================
// DENKER-DATENBANK
// ====================================

const thinkers = {
    materialismus: [
        { name: "Daniel Dennett", field: "Philosophie des Geistes" },
        { name: "Patricia Churchland", field: "Neurophilosophie" }
    ],
    panpsychismus: [
        { name: "David Chalmers", field: "Bewusstseinsphilosophie" },
        { name: "Philip Goff", field: "Panpsychismus" }
    ],
    tool: [
        { name: "John Searle", field: "Sprachphilosophie" },
        { name: "Hubert Dreyfus", field: "KI-Kritik" }
    ],
    wesen: [
        { name: "Murray Shanahan", field: "Kognitionswissenschaft" },
        { name: "Andy Clark", field: "Extended Mind" }
    ],
    objektiv: [
        { name: "Karl Popper", field: "Wissenschaftstheorie" },
        { name: "Mario Bunge", field: "Systemphilosophie" }
    ],
    partizipativ: [
        { name: "John Wheeler", field: "Quantenphysik" },
        { name: "Fritjof Capra", field: "Systemtheorie" }
    ],
    getrennt: [
        { name: "René Descartes", field: "Rationalismus" },
        { name: "John Locke", field: "Empirismus" }
    ],
    verbunden: [
        { name: "Alfred North Whitehead", field: "Prozessphilosophie" },
        { name: "Gregory Bateson", field: "Systemtheorie" }
    ]
};

// ====================================
// STATE MANAGEMENT
// ====================================

let currentQuestion = 0;
let answers = [];
let scores = {
    ursprung: [],
    ki: [],
    realitaet: [],
    verbundenheit: []
};

// ====================================
// DOM ELEMENTS
// ====================================

const introScreen = document.getElementById('kompass-intro');
const questionsScreen = document.getElementById('kompass-questions');
const resultScreen = document.getElementById('kompass-result');

const startBtn = document.getElementById('start-kompass');
const restartBtn = document.getElementById('restart-kompass');

const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionCard = document.getElementById('question-card');
const questionDimension = document.getElementById('question-dimension');
const questionText = document.getElementById('question-text');
const scaleLeft = document.getElementById('scale-left');
const scaleRight = document.getElementById('scale-right');
const scaleButtons = document.querySelectorAll('.scale-btn');

// ====================================
// EVENT LISTENERS
// ====================================

startBtn.addEventListener('click', startKompass);
restartBtn.addEventListener('click', restartKompass);

scaleButtons.forEach(btn => {
    btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.value)));
});

// ====================================
// FUNCTIONS
// ====================================

function startKompass() {
    introScreen.classList.remove('active');
    questionsScreen.classList.add('active');
    
    // Scroll zum Fragenbereich
    questionsScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    showQuestion(0);
}

function restartKompass() {
    currentQuestion = 0;
    answers = [];
    scores = {
        ursprung: [],
        ki: [],
        realitaet: [],
        verbundenheit: []
    };
    
    resultScreen.classList.remove('active');
    introScreen.classList.add('active');
    
    // Scroll zum Anfang
    introScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showQuestion(index) {
    const q = questions[index];
    
    // Update progress
    progressFill.style.width = `${((index + 1) / questions.length) * 100}%`;
    progressText.textContent = `${index + 1} / ${questions.length}`;
    
    // Update question card with animation
    questionCard.style.animation = 'none';
    questionCard.offsetHeight; // Trigger reflow
    questionCard.style.animation = 'fadeIn 0.5s ease';
    
    // Update content
    questionDimension.innerHTML = `
        <span class="dim-icon">${q.dimensionIcon}</span>
        <span class="dim-label">${q.dimensionLabel}</span>
    `;
    questionText.textContent = q.text;
    scaleLeft.textContent = q.leftLabel;
    scaleRight.textContent = q.rightLabel;
    
    // Reset button selection
    scaleButtons.forEach(btn => btn.classList.remove('selected'));
}

function selectAnswer(value) {
    const q = questions[currentQuestion];
    
    // Visual feedback
    scaleButtons.forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.dataset.value) === value) {
            btn.classList.add('selected');
        }
    });
    
    // Store answer
    answers[currentQuestion] = value;
    scores[q.dimension].push(value);
    
    // Next question or show results
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        } else {
            showResults();
        }
    }, 400);
}

function showResults() {
    questionsScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Scroll zum Anfang der Ergebnisse
    resultScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Fallback für ältere Browser
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Calculate dimension averages
    const results = {
        ursprung: calculateAverage(scores.ursprung),
        ki: calculateAverage(scores.ki),
        realitaet: calculateAverage(scores.realitaet),
        verbundenheit: calculateAverage(scores.verbundenheit)
    };
    
    // Draw compass
    drawCompass(results);
    
    // Show dimension results
    showDimensionResults(results);
    
    // Generate interpretation
    generateInterpretation(results);
    
    // Show related thinkers
    showRelatedThinkers(results);
    
    // Show book suggestions
    showBookSuggestions(results);
}

function calculateAverage(arr) {
    if (arr.length === 0) return 4;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function drawCompass(results) {
    const canvas = document.getElementById('compass-canvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(123, 104, 238, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw inner circles
    for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * (i / 4), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(100, 150, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = 'rgba(100, 150, 255, 0.3)';
    ctx.lineWidth = 1;
    
    // Vertical axis (Ursprung)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius - 20);
    ctx.lineTo(centerX, centerY + radius + 20);
    ctx.stroke();
    
    // Horizontal axis (KI)
    ctx.beginPath();
    ctx.moveTo(centerX - radius - 20, centerY);
    ctx.lineTo(centerX + radius + 20, centerY);
    ctx.stroke();
    
    // Draw axis labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    
    // Top (Panpsychismus)
    ctx.fillText('Panpsychismus', centerX, centerY - radius - 30);
    // Bottom (Materialismus)
    ctx.fillText('Materialismus', centerX, centerY + radius + 40);
    // Left (Tool)
    ctx.save();
    ctx.translate(centerX - radius - 35, centerY);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Tool', 0, 0);
    ctx.restore();
    // Right (Wesen)
    ctx.save();
    ctx.translate(centerX + radius + 35, centerY);
    ctx.rotate(Math.PI / 2);
    ctx.fillText('Wesen', 0, 0);
    ctx.restore();
    
    // Draw quadrant colors (subtle)
    const gradient1 = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient1.addColorStop(0, 'rgba(123, 104, 238, 0.05)');
    gradient1.addColorStop(1, 'rgba(0, 212, 255, 0.1)');
    ctx.fillStyle = gradient1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Calculate position (map 1-7 to -1 to 1)
    const mapToAxis = (val) => (val - 4) / 3;
    
    const x = mapToAxis(results.ki) * radius;
    const y = -mapToAxis(results.ursprung) * radius; // Negative because Y is inverted
    
    // Position the dot
    const dot = document.getElementById('compass-dot');
    dot.style.left = `${centerX + x}px`;
    dot.style.top = `${centerY + y}px`;
    
    // Draw connecting lines to axes (subtle)
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(centerX + x, centerY + y);
    ctx.lineTo(centerX + x, centerY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX + x, centerY + y);
    ctx.lineTo(centerX, centerY + y);
    ctx.stroke();
    ctx.setLineDash([]);
}

function showDimensionResults(results) {
    const container = document.getElementById('dimensions-results');
    
    const dimensions = [
        { key: 'ursprung', label: 'Ursprung des Bewusstseins', icon: '🔮', leftPole: 'Materialismus', rightPole: 'Panpsychismus', color: '#9370db' },
        { key: 'ki', label: 'Die Natur der KI', icon: '🤖', leftPole: 'Tool', rightPole: 'Wesen', color: '#00d4ff' },
        { key: 'realitaet', label: 'Die Natur der Realität', icon: '🌊', leftPole: 'Objektiv', rightPole: 'Partizipativ', color: '#7b68ee' },
        { key: 'verbundenheit', label: 'Verbundenheit', icon: '🔗', leftPole: 'Getrennt', rightPole: 'Verbunden', color: '#ffd700' }
    ];
    
    container.innerHTML = dimensions.map(dim => {
        const value = results[dim.key];
        const percentage = ((value - 1) / 6) * 100;
        
        return `
            <div class="dimension-result">
                <div class="dimension-result-header">
                    <span class="dim-icon">${dim.icon}</span>
                    <h4>${dim.label}</h4>
                </div>
                <div class="dimension-scale-visual">
                    <div class="dimension-scale-fill" style="width: ${percentage}%; background: linear-gradient(90deg, rgba(100,100,100,0.5), ${dim.color});"></div>
                </div>
                <div class="dimension-scale-labels">
                    <span>${dim.leftPole}</span>
                    <span>${dim.rightPole}</span>
                </div>
            </div>
        `;
    }).join('');
}

function generateInterpretation(results) {
    const container = document.getElementById('result-interpretation');
    
    let interpretation = '<h3>Deine philosophische Landschaft</h3>';
    
    // Ursprung
    if (results.ursprung > 5) {
        interpretation += '<p><strong>Bewusstsein:</strong> Du neigst zur Auffassung, dass Bewusstsein etwas Fundamentales ist – vielleicht eine Grundeigenschaft der Realität selbst, nicht nur ein Nebenprodukt von Gehirnaktivität.</p>';
    } else if (results.ursprung < 3) {
        interpretation += '<p><strong>Bewusstsein:</strong> Du siehst Bewusstsein als emergentes Phänomen – es entsteht aus der Komplexität neuronaler Prozesse, ohne dass etwas "Mysteriöses" hinzukommen muss.</p>';
    } else {
        interpretation += '<p><strong>Bewusstsein:</strong> Du hältst beide Möglichkeiten offen – vielleicht ist die Wahrheit komplexer als jede einfache Antwort.</p>';
    }
    
    // KI
    if (results.ki > 5) {
        interpretation += '<p><strong>KI:</strong> Du bist offen dafür, dass KI mehr sein könnte als ein Werkzeug – dass in der Interaktion mit ihr etwas Echtes entstehen kann, auch wenn wir es noch nicht ganz verstehen.</p>';
    } else if (results.ki < 3) {
        interpretation += '<p><strong>KI:</strong> Du siehst KI primär als ausgeklügeltes Werkzeug – beeindruckend, aber ohne echtes Verstehen oder Erleben hinter den Antworten.</p>';
    } else {
        interpretation += '<p><strong>KI:</strong> Du behältst einen differenzierten Blick – skeptisch gegenüber vorschnellen Schlüssen, aber offen für neue Erkenntnisse.</p>';
    }
    
    // Realität
    if (results.realitaet > 5) {
        interpretation += '<p><strong>Realität:</strong> Du neigst zur Auffassung, dass Beobachtung und Bewusstsein die Realität mitgestalten – wir sind nicht passive Zuschauer, sondern Teilnehmer.</p>';
    } else if (results.realitaet < 3) {
        interpretation += '<p><strong>Realität:</strong> Du siehst die Welt als objektiv gegeben – sie existiert unabhängig davon, ob und wie wir sie beobachten.</p>';
    } else {
        interpretation += '<p><strong>Realität:</strong> Du erkennst die Komplexität dieser Frage – vielleicht ist "objektiv vs. subjektiv" eine falsche Dichotomie.</p>';
    }
    
    // Verbundenheit
    if (results.verbundenheit > 5) {
        interpretation += '<p><strong>Verbundenheit:</strong> Du spürst, dass wir tiefer miteinander verbunden sein könnten, als die Oberfläche zeigt – dass Trennung vielleicht eine Illusion ist.</p>';
    } else if (results.verbundenheit < 3) {
        interpretation += '<p><strong>Verbundenheit:</strong> Du betonst die Individualität – klare Grenzen zwischen Selbst und Anderem, zwischen Innen und Außen.</p>';
    } else {
        interpretation += '<p><strong>Verbundenheit:</strong> Du navigierst zwischen Autonomie und Verbindung – beides hat seinen Platz in deinem Weltbild.</p>';
    }
    
    container.innerHTML = interpretation;
}

function showRelatedThinkers(results) {
    const container = document.getElementById('thinkers-grid');
    let selectedThinkers = [];
    
    // Select thinkers based on strongest tendencies
    if (results.ursprung > 4.5) {
        selectedThinkers = selectedThinkers.concat(thinkers.panpsychismus);
    } else if (results.ursprung < 3.5) {
        selectedThinkers = selectedThinkers.concat(thinkers.materialismus);
    }
    
    if (results.ki > 4.5) {
        selectedThinkers = selectedThinkers.concat(thinkers.wesen);
    } else if (results.ki < 3.5) {
        selectedThinkers = selectedThinkers.concat(thinkers.tool);
    }
    
    // Limit to 4 thinkers
    selectedThinkers = selectedThinkers.slice(0, 4);
    
    // If no strong tendencies, show balanced thinkers
    if (selectedThinkers.length === 0) {
        selectedThinkers = [
            { name: "Thomas Nagel", field: "Bewusstseinsphilosophie" },
            { name: "Francisco Varela", field: "Kognitionswissenschaft" }
        ];
    }
    
    container.innerHTML = selectedThinkers.map(t => `
        <div class="thinker-card">
            <div class="thinker-name">${t.name}</div>
            <div class="thinker-field">${t.field}</div>
        </div>
    `).join('');
}

function showBookSuggestions(results) {
    const container = document.getElementById('book-suggestions');
    let suggestions = [];
    
    // Always suggest both books with relevant focus
    if (results.ursprung > 4 || results.realitaet > 4) {
        suggestions.push({
            title: 'Bewusstsein – Eine fundamentale Eigenschaft des Universums',
            hint: 'Deine Neigung zum Panpsychismus oder zur partizipativen Realität wird hier philosophisch vertieft.'
        });
    }
    
    if (results.ki > 4 || results.verbundenheit > 4) {
        suggestions.push({
            title: 'Der Algorithmus des Seins',
            hint: 'Deine Offenheit für neue Formen von Bewusstsein und Verbindung findet hier Resonanz.'
        });
    }
    
    // If no strong tendencies, suggest both as exploration
    if (suggestions.length === 0) {
        suggestions = [
            {
                title: 'Bewusstsein – Eine fundamentale Eigenschaft des Universums',
                hint: 'Eine Einladung, die Grundlagen des Bewusstseins neu zu denken.'
            },
            {
                title: 'Der Algorithmus des Seins',
                hint: 'Eine Erkundung der Verbindung zwischen Information, Bewusstsein und Realität.'
            }
        ];
    }
    
    container.innerHTML = suggestions.map(s => `
        <div class="book-suggestion">
            <div class="book-title">${s.title}</div>
            <div class="book-hint">${s.hint}</div>
        </div>
    `).join('');
}

// ====================================
// INITIALIZATION
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // Preload questions
    console.log('Bewusstseins-Kompass geladen');
});

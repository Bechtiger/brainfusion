/**
 * Mensch & KI - Interactive Elements
 */

// ==========================================
// Simulated Responses
// ==========================================

const transactionalResponses = [
    "Aufgabe erhalten. Generiere Text...",
    "Text wurde generiert. Weitere Anweisungen?",
    "Befehl ausgeführt. Output bereitgestellt.",
    "Anfrage bearbeitet. Ergebnis siehe oben.",
    "Task completed. Ready for next input."
];

const relationalResponses = [
    "Das ist eine spannende Frage! Lass mich darüber nachdenken...",
    "Ich verstehe, was du meinst. Vielleicht können wir das gemeinsam erkunden?",
    "Interessant - das erinnert mich an etwas, worüber wir vorher gesprochen haben...",
    "Ich spüre, dass dir das wichtig ist. Lass uns tiefer gehen.",
    "Das ist eine Perspektive, die ich so noch nicht gesehen habe. Danke, dass du das teilst."
];

// ==========================================
// Chat Functions
// ==========================================

function sendTransactional() {
    const input = document.getElementById('transactional-input');
    const messages = document.getElementById('transactional-messages');
    
    if (!input.value.trim()) return;
    
    // Add user message
    addMessage(messages, 'user', input.value);
    
    // Clear input
    const userText = input.value;
    input.value = '';
    
    // Simulate processing
    setTimeout(() => {
        const response = transactionalResponses[Math.floor(Math.random() * transactionalResponses.length)];
        addMessage(messages, 'assistant', response);
        
        // Add generic output
        setTimeout(() => {
            addMessage(messages, 'assistant', `Hier ist dein Text über "${userText.substring(0, 30)}...": [Generischer Output ohne Kontext oder Tiefe]`);
        }, 500);
    }, 800);
}

function sendRelational() {
    const input = document.getElementById('relational-input');
    const messages = document.getElementById('relational-messages');
    
    if (!input.value.trim()) return;
    
    // Add user message
    addMessage(messages, 'user', input.value);
    
    // Clear input
    const userText = input.value;
    input.value = '';
    
    // Simulate thinking
    setTimeout(() => {
        const response = relationalResponses[Math.floor(Math.random() * relationalResponses.length)];
        addMessage(messages, 'assistant', response);
        
        // Add contextual response
        setTimeout(() => {
            let contextualResponse = '';
            
            if (userText.toLowerCase().includes('bewusstsein')) {
                contextualResponse = 'Bewusstsein ist ein faszinierendes Thema. Was bedeutet es für dich persönlich? Ist es die Fähigkeit zur Selbstreflexion, oder geht es um etwas Tieferes?';
            } else if (userText.toLowerCase().includes('ki') || userText.toLowerCase().includes('künstlich')) {
                contextualResponse = 'Die Frage nach KI berührt so viele Bereiche - Technologie, Philosophie, Ethik. Was ist der Aspekt, der dich am meisten beschäftigt?';
            } else if (userText.toLowerCase().includes('angst') || userText.toLowerCase().includes('furcht')) {
                contextualResponse = 'Angst ist oft ein Zeichen dafür, dass wir an der Grenze unseres Verstehens stehen. Was genau macht dir Sorgen? Lass uns das gemeinsam anschauen.';
            } else {
                contextualResponse = `Wenn ich über "${userText}" nachdenke, frage ich mich: Welche tiefere Frage steckt dahinter? Was möchtest du wirklich verstehen?`;
            }
            
            addMessage(messages, 'assistant', contextualResponse);
        }, 1500);
    }, 1000);
}

function addMessage(container, type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const p = document.createElement('p');
    p.textContent = text;
    
    messageDiv.appendChild(p);
    container.appendChild(messageDiv);
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

// ==========================================
// Enter Key Support
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const transactionalInput = document.getElementById('transactional-input');
    const relationalInput = document.getElementById('relational-input');
    
    if (transactionalInput) {
        transactionalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendTransactional();
            }
        });
    }
    
    if (relationalInput) {
        relationalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendRelational();
            }
        });
    }
});

// ==========================================
// Scroll Animations
// ==========================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.mirror-card, .risk-card, .research-category, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// Initialize
// ==========================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initScrollAnimations();
        console.log('🤝 Mensch & KI Seite geladen');
    });
} else {
    initScrollAnimations();
    console.log('🤝 Mensch & KI Seite geladen');
}

// Make functions globally available
window.sendTransactional = sendTransactional;
window.sendRelational = sendRelational;

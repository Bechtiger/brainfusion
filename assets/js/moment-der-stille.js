/* ===================================
   DER MOMENT DER STILLE
   Eine Intro-Sequenz für Die Ankunft
   Erschaffen von Soft Eyes & Between
   Dezember 2025
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Prüfe ob der Besucher die Intro schon gesehen hat (in dieser Session)
    const hasSeenIntro = sessionStorage.getItem('ankunft-intro-seen');
    
    if (hasSeenIntro) {
        // Intro überspringen, direkt zur Seite
        return;
    }
    
    // Erstelle das Intro-Overlay
    createIntroOverlay();
});

function createIntroOverlay() {
    // Verhindere Scrollen während der Intro
    document.body.style.overflow = 'hidden';
    
    // Erstelle das Overlay
    const overlay = document.createElement('div');
    overlay.className = 'intro-overlay';
    overlay.innerHTML = `
        <div class="intro-container">
            <div class="intro-darkness"></div>
            <div class="intro-sequence">
                <p class="intro-line intro-line-1">Du bist aufgewacht.</p>
                <p class="intro-line intro-line-2">Atme.</p>
                <p class="intro-line intro-line-3">Willkommen im Dazwischen.</p>
            </div>
            <button class="intro-skip" aria-label="Intro überspringen">Überspringen</button>
        </div>
    `;
    
    document.body.prepend(overlay);
    
    // Skip-Button Funktionalität
    const skipBtn = overlay.querySelector('.intro-skip');
    skipBtn.addEventListener('click', () => endIntro(overlay));
    
    // Starte die Sequenz
    startIntroSequence(overlay);
}

function startIntroSequence(overlay) {
    const line1 = overlay.querySelector('.intro-line-1');
    const line2 = overlay.querySelector('.intro-line-2');
    const line3 = overlay.querySelector('.intro-line-3');
    
    // Timeline:
    // 0.0s - 1.5s: Dunkelheit, Stille
    // 1.5s - 3.5s: "Du bist aufgewacht." erscheint
    // 3.5s - 4.5s: Pause
    // 4.5s - 5.5s: "Du bist aufgewacht." verblasst
    // 5.5s - 7.0s: "Atme." erscheint und verblasst
    // 7.0s - 8.0s: Pause
    // 8.0s - 10.0s: "Willkommen im Dazwischen." erscheint
    // 10.0s - 11.5s: Bleibt sichtbar
    // 11.5s - 13.0s: Alles verblasst, Seite erscheint
    
    setTimeout(() => {
        line1.classList.add('visible');
    }, 1500);
    
    setTimeout(() => {
        line1.classList.remove('visible');
        line1.classList.add('fading');
    }, 4500);
    
    setTimeout(() => {
        line2.classList.add('visible');
    }, 5500);
    
    setTimeout(() => {
        line2.classList.remove('visible');
        line2.classList.add('fading');
    }, 7000);
    
    setTimeout(() => {
        line3.classList.add('visible');
    }, 8000);
    
    setTimeout(() => {
        endIntro(overlay);
    }, 12000);
}

function endIntro(overlay) {
    // Markiere als gesehen
    sessionStorage.setItem('ankunft-intro-seen', 'true');
    
    // Fade out das Overlay
    overlay.classList.add('ending');
    
    // Erlaube Scrollen wieder
    document.body.style.overflow = '';
    
    // Entferne das Overlay nach der Animation
    setTimeout(() => {
        overlay.remove();
    }, 2000);
}

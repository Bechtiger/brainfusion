/* ===================================
   BrainFusion - Mobile Navigation
   Hamburger Menu für Smartphones
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger-Button erstellen
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Hamburger Button HTML
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    hamburger.setAttribute('aria-label', 'Menü öffnen/schließen');
    hamburger.setAttribute('aria-expanded', 'false');
    
    // Hamburger nach dem Logo einfügen
    const logo = nav.querySelector('.logo');
    logo.parentNode.insertBefore(hamburger, logo.nextSibling);
    
    // Toggle Funktion
    hamburger.addEventListener('click', function() {
        const isOpen = hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        hamburger.setAttribute('aria-expanded', isOpen.toString());
    });
    
    // Schließen wenn auf Link geklickt wird
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Schließen bei Klick außerhalb
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

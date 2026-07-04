// =====================================================================
//  site-nav.js — DIE eine Navigation von BrainFusion 2.0.
//  Ersetzt die früheren Parallel-Systeme (compass-nav, navigation-
//  intelligence, mobile-nav und die per Seite gepflegten main-nav-
//  Leisten) durch einen einzigen, überall identischen Header — der
//  rote Faden. Selbst-enthalten: injiziert eigene Styles, entfernt
//  alte Navigationsleisten, ergänzt einen Standard-Footer, falls die
//  Seite keinen hat. Einbinden genügt.
// =====================================================================
(function () {
    // ---------- Styles (identisch zur Startseiten-Navigation) ----------
    const css = `
    .bf-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
        display: flex; align-items: center; justify-content: space-between;
        padding: 12px 24px; background: rgba(7,7,13,0.85);
        backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.08);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .bf-nav .bf-brand { font-family: Georgia, serif; font-size: 1.15rem; letter-spacing: 1px;
        background: linear-gradient(90deg, #e8a34a, #00d9ff);
        -webkit-background-clip: text; background-clip: text; color: transparent;
        text-decoration: none; }
    .bf-nav ul { display: flex; gap: 22px; list-style: none; margin: 0; padding: 0; align-items: center; }
    .bf-nav a.bf-link { color: #f0ede6; text-decoration: none; font-size: 0.9rem; opacity: 0.85; }
    .bf-nav a.bf-link:hover { opacity: 1; }
    .bf-nav .bf-burger { display: none; background: none; border: none; color: #f0ede6;
        font-size: 1.4rem; cursor: pointer; }
    body { padding-top: 54px; }
    @media (max-width: 860px) {
        .bf-nav ul { display: none; position: absolute; top: 100%; left: 0; right: 0;
            flex-direction: column; gap: 0; background: rgba(7,7,13,0.97);
            border-bottom: 1px solid rgba(255,255,255,0.08); }
        .bf-nav ul.open { display: flex; }
        .bf-nav ul li { width: 100%; text-align: center; }
        .bf-nav ul a { display: block; padding: 14px; }
        .bf-nav .bf-burger { display: block; }
    }
    .bf-footer { border-top: 1px solid rgba(255,255,255,0.08); padding: 40px 20px;
        text-align: center; color: #9a9aa8; font-size: 0.85rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .bf-footer a { color: #9a9aa8; margin: 0 8px; }
    .bf-footer a:hover { color: #f0ede6; }`;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // ---------- Alte Navigationsleisten entfernen (eine Wahrheit) ----------
    document.querySelectorAll('.main-nav, .compass-top-nav').forEach(n => n.remove());

    // ---------- Standard-Header injizieren (absolute Pfade, gehen überall) ----------
    const nav = document.createElement('nav');
    nav.className = 'bf-nav';
    nav.innerHTML = `
        <a class="bf-brand" href="/">BrainFusion</a>
        <button class="bf-burger" aria-label="Menü">☰</button>
        <ul>
            <li><a class="bf-link" href="/#buecher">Die Bücher</a></li>
            <li><a class="bf-link" href="/#erleben">Erleben</a></li>
            <li><a class="bf-link" href="/#vibecoding">Vibecoding</a></li>
            <li><a class="bf-link" href="/#werkstatt">Die Werkstatt</a></li>
        </ul>`;
    document.body.prepend(nav);
    const list = nav.querySelector('ul');
    nav.querySelector('.bf-burger').addEventListener('click', () => list.classList.toggle('open'));
    list.addEventListener('click', () => list.classList.remove('open'));

    // ---------- Standard-Footer, falls die Seite keinen hat ----------
    if (!document.querySelector('footer')) {
        const f = document.createElement('footer');
        f.className = 'bf-footer';
        f.innerHTML = `
            <p>© 2026 BrainFusion · Eine Zusammenarbeit zwischen Christof Bechtiger und Claude</p>
            <p><a href="/pages/impressum.html">Impressum</a> · <a href="/pages/datenschutz.html">Datenschutz</a></p>`;
        document.body.appendChild(f);
    }
})();

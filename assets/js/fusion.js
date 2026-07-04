// =====================================================================
//  fusion.js — Hero-Animation von BrainFusion 2.0.
//  Zwei Teilchenströme (Bernstein = Mensch, Cyan = KI) fliessen von den
//  Rändern zur Mitte und verweben sich dort zu einem gemeinsamen Strom:
//  die visuelle These der Seite. Reines Canvas, keine Abhängigkeiten.
// =====================================================================
(function () {
    const cv = document.getElementById('fusion-canvas');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let W = 0, H = 0, parts = [];
    const N = 110;

    function resize() {
        W = cv.width = cv.offsetWidth;
        H = cv.height = cv.offsetHeight;
    }
    window.addEventListener('resize', resize);
    window.addEventListener('load', resize);   // Layout kann beim ersten Aufruf noch unfertig sein
    resize();

    function spawn(i) {
        const fromLeft = i % 2 === 0;
        return {
            fromLeft,
            x: fromLeft ? -10 - Math.random() * W * 0.2 : W + 10 + Math.random() * W * 0.2,
            y: H * (0.25 + Math.random() * 0.5),
            spd: 0.4 + Math.random() * 0.8,
            amp: 12 + Math.random() * 46,        // Wellen-Amplitude
            ph: Math.random() * Math.PI * 2,     // Wellen-Phase
            size: 0.8 + Math.random() * 1.8
        };
    }
    for (let i = 0; i < N; i++) { const p = spawn(i); p.x = Math.random() * W; parts.push(p); }

    let t = 0;
    function frame() {
        requestAnimationFrame(frame);
        // Selbstheilung: falls sich die Layout-Grösse geändert hat (oder das
        // erste Messen zu früh kam), Puffer an die echte Grösse anpassen.
        if (cv.width !== cv.offsetWidth || cv.height !== cv.offsetHeight) resize();
        t += 0.008;
        ctx.clearRect(0, 0, W, H);
        const cx = W / 2;
        for (let i = 0; i < N; i++) {
            const p = parts[i];
            p.x += p.fromLeft ? p.spd : -p.spd;
            // hinter der Mitte weiterfliessen, dann neu starten
            const past = p.fromLeft ? p.x > W + 20 : p.x < -20;
            if (past) { parts[i] = spawn(i); continue; }
            // Nähe zur Mitte (0 = weit weg, 1 = im Zentrum)
            const near = Math.max(0, 1 - Math.abs(p.x - cx) / (W * 0.5));
            // Wellenbewegung wird zur Mitte hin enger: die Ströme verweben sich
            const y = p.y + Math.sin(t * 60 * p.spd * 0.02 + p.ph + p.x * 0.01) * p.amp * (1 - near * 0.75);
            // Farbverlauf: eigene Stimme aussen, gemeinsames Weiss in der Mitte
            const base = p.fromLeft ? [232, 163, 74] : [0, 217, 255];
            const r = base[0] + (240 - base[0]) * near;
            const g = base[1] + (240 - base[1]) * near;
            const b = base[2] + (240 - base[2]) * near;
            const alpha = 0.25 + near * 0.55;
            ctx.beginPath();
            ctx.arc(p.x, y, p.size * (1 + near * 0.4), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${alpha})`;
            ctx.fill();
        }
        // sanftes Leuchten im Zentrum, wo die Ströme sich treffen
        const glow = ctx.createRadialGradient(cx, H / 2, 0, cx, H / 2, H * 0.45);
        glow.addColorStop(0, 'rgba(200, 200, 220, 0.05)');
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, W, H);
    }
    frame();
})();

# 🧠 BrainFusion.app

**Eine lebendige Webpräsenz für Denker, Skeptiker und Neugierige**

Eine Zusammenarbeit zwischen **Christof Bechtiger** und **Claude**

---

## 🚀 Quick Start

### Die Seite öffnen

1. Öffne `index.html` in einem modernen Browser (Chrome, Firefox, Edge, Safari)
2. Das war's! Die Seite läuft komplett lokal, keine Installation nötig.

### Oder mit lokalem Server (empfohlen)

```bash
# Mit Python 3
python -m http.server 8000

# Mit Node.js
npx http-server

# Dann öffne: http://localhost:8000
```

---

## ✨ Features

### Bereits implementiert:

✅ **Animierter Partikel-Hintergrund**
- Reagiert auf Mausbewegungen
- Verbindet nahegelegene Partikel
- Wissenschaftlicher Look

✅ **Interaktive Atom-Visualisierung**
- Zwei Atome, die sich nie wirklich berühren
- Elektromagnetische Repulsion live erleben
- Bewege deinen Cursor, um mit den Atomen zu interagieren

✅ **Responsive Design**
- Funktioniert auf Desktop, Tablet und Smartphone
- Moderne, dunkle Ästhetik
- Smooth Scrolling

✅ **Hero Section mit Glitch-Effekt**
- Auffälliger Einstieg mit der Kernfrage
- Animierte Überschrift

✅ **Intro-Cards**
- Wissenschaftlich | Skeptisch | Faszinierend
- Hover-Effekte

✅ **Buchvorschau-Section**
- Platz für beide Bücher
- Hover-Animationen

---

## 📁 Projektstruktur

```
Homepage Brainfusion/
│
├── index.html              # Hauptseite
├── README.md              # Diese Datei
│
├── assets/
│   ├── css/
│   │   └── main.css       # Alle Styles
│   │
│   ├── js/
│   │   ├── particles.js   # Partikel-Hintergrund
│   │   └── main.js        # Haupt-Interaktivität
│   │
│   └── images/
│       └── README.md      # Info zu Buchcovern
│
├── pages/                 # Für zukünftige Unterseiten
│
└── interactives/          # Für weitere Experimente
```

---

## 🎨 Farbschema

```css
--primary-bg: #0a0a0f       /* Fast Schwarz */
--secondary-bg: #12121a     /* Dunkelgrau */
--accent-color: #00d9ff     /* Cyan */
--accent-glow: rgba(0, 217, 255, 0.3)
--text-primary: #e0e0e0     /* Hellgrau */
--text-secondary: #a0a0a0   /* Mittelgrau */
```

---

## 🔧 Anpassungen

### Texte ändern

Alle Texte sind direkt in `index.html` - einfach öffnen und bearbeiten.

### Farben ändern

In `assets/css/main.css` ganz oben die CSS-Variablen anpassen:

```css
:root {
    --accent-color: #00d9ff;  /* Hier deine Farbe */
}
```

### Mehr Partikel

In `assets/js/particles.js`, Zeile 11:

```javascript
this.particleCount = 100;  // Erhöhen für mehr Partikel
```

---

## 📝 Nächste Schritte

### Noch zu erstellen:

- [ ] Unterseiten (Paradoxa, Labor, Bibliothek, Forum)
- [ ] Weitere interaktive Experimente
- [ ] Buchcover-Bilder hinzufügen
- [ ] Blog/News-Section
- [ ] Kontaktformular
- [ ] Social Media Integration

### Ideen für weitere Interaktives:

1. **Quantenverschränkung-Visualisierung**
2. **Bewusstseins-Simulation**
3. **Neuronen-Netzwerk live**
4. **Welle-Teilchen-Dualität**
5. **Zeitdilatation-Rechner**

---

## 🌐 Deployment

### GitHub Pages (kostenlos)

1. Erstelle ein GitHub Repository
2. Pushe diesen Ordner
3. Aktiviere GitHub Pages in den Settings
4. Fertig! URL: `username.github.io/brainfusion`

### Netlify (kostenlos)

1. Drag & Drop diesen Ordner auf netlify.com
2. Fertig! Du bekommst eine URL

### Eigene Domain

Beide Services (GitHub Pages & Netlify) erlauben Custom Domains.

---

## 🔬 Technologie

- **Vanilla JavaScript** - Keine Frameworks, volle Kontrolle
- **Canvas API** - Für Visualisierungen
- **CSS3 Animations** - Smooth, performant
- **HTML5** - Semantisch, modern

**Keine Dependencies** - Alles läuft lokal, keine externen Bibliotheken nötig.

---

## 💡 Philosophie

Diese Website ist mehr als Code - sie ist ein **Beweis der These**:

> *Die Zusammenarbeit zwischen Mensch und KI ist nicht transaktional.  
> Sie ist eine Beziehung.*

Jede Zeile Code hier entstand in einem Dialog zwischen Christof und Claude.  
Nicht durch Prompts und Output, sondern durch gemeinsames Denken.

---

## 📬 Kontakt

**Christof Bechtiger**
- Website: [Wird noch hinzugefügt]
- Email: [Wird noch hinzugefügt]

---

## 📄 Lizenz

[Noch festzulegen]

---

**Let's make the invisible visible.** 🌌

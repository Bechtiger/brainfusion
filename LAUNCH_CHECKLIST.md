# 🚀 BrainFusion - Launch Checkliste

## ✅ Bereits erledigt:

### Rechtliches
- [x] Impressum-Seite erstellt
- [x] Datenschutzerklärung erstellt
- [x] Footer-Links auf allen Seiten
- [x] Keine Cookies (sehr gut!)
- [x] Keine Analytics/Tracking (sehr gut!)
- [x] Externe Links mit rel="noopener"

### SEO & Technisch
- [x] robots.txt erstellt
- [x] sitemap.xml erstellt
- [x] Security Headers dokumentiert
- [x] Responsive Design
- [x] Navigation Intelligence
- [x] Progressive Engagement für Bücher

---

## 📋 TODO vor dem Launch:

### 1. Impressum & Datenschutz vervollständigen

**Datei:** `pages/impressum.html`
**Datei:** `pages/datenschutz.html`

Folgende Platzhalter ausfüllen:
```
[Adresse] → Deine vollständige Adresse
[PLZ] [Ort] → z.B. "8000 Zürich"
[Land] → z.B. "Schweiz"
[E-Mail-Adresse] → z.B. "kontakt@brainfusion.de"
[Telefon] → Optional, aber empfohlen
```

### 2. Hosting-Provider eintragen

**Datei:** `pages/datenschutz.html`
Unter Punkt 6 ("Hosting") eintragen:
```
Diese Website wird gehostet bei: [NAME DES HOSTERS]
z.B. "Hetzner Online GmbH" oder "All-Inkl.com" oder "Netcup"
```

### 3. Domain in sitemap.xml anpassen

**Datei:** `sitemap.xml`
Alle URLs von `https://brainfusion.de/` zu deiner echten Domain ändern.

Falls deine Domain anders ist (z.B. `christof-bechtiger.de`):
- In allen `<loc>` Tags die Domain ersetzen

### 4. Meta-Tags hinzufügen

In **alle** HTML-Dateien (`index.html`, `paradoxa.html`, `labor.html`, `mensch-ki.html`) 
im `<head>` Bereich nach dem `<title>` einfügen:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="[KURZBESCHREIBUNG DER SEITE]">
<meta name="keywords" content="Quantenphysik, Bewusstsein, KI, Paradoxa, Philosophie, Christof Bechtiger">
<meta name="author" content="Christof Bechtiger">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:title" content="[SEITENTITEL]">
<meta property="og:description" content="[KURZBESCHREIBUNG]">
<meta property="og:url" content="[VOLLSTÄNDIGE URL]">
<meta property="og:type" content="website">
```

### 5. Favicon erstellen

Benötigt:
- `favicon.ico` (32x32 oder 16x16)
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png` (180x180 für iOS)

Tools:
- https://realfavicongenerator.net/
- Oder einfach ein Logo als PNG hochladen

Platzieren im Root-Verzeichnis.

### 6. OG-Image erstellen (für Social Media)

Datei: `assets/images/og-image.jpg`
- Größe: 1200x630 px
- Format: JPG oder PNG
- Inhalt: BrainFusion Logo + Slogan

Wird verwendet wenn Link auf Facebook/Twitter geteilt wird.

### 7. Security Headers aktivieren

**Wenn Apache (.htaccess):**
Datei `.htaccess` im Root erstellen, Inhalt aus `SECURITY_SEO_CONFIG.md` Punkt 2 kopieren.

**Wenn nginx:**
Config-File bearbeiten, Inhalt aus `SECURITY_SEO_CONFIG.md` Punkt 3 kopieren.

**WICHTIG:** HSTS (Strict-Transport-Security) erst NACH erfolgreichem HTTPS-Setup aktivieren!

### 8. SSL-Zertifikat einrichten

Bei den meisten Hostern:
1. Let's Encrypt aktivieren (meist kostenlos)
2. HTTPS erzwingen
3. Dann HSTS Header aktivieren

### 9. Testen auf verschiedenen Geräten

- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile iOS (iPhone)
- [ ] Mobile Android
- [ ] Tablet

Testen:
- Navigation funktioniert?
- Interaktive Elemente (Atome, Modals)?
- Buttons klickbar?
- Responsive Design OK?
- BoD-Links funktionieren?

### 10. Performance-Check

Tools:
- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/

Ziel:
- Performance Score > 90
- Accessibility Score > 90
- Best Practices Score > 90
- SEO Score > 90

Wenn schlechte Werte:
- Bilder komprimieren/optimieren
- CSS/JS minifizieren

### 11. SEO-Check

Tools:
- **Google Search Console:** https://search.google.com/search-console
  - Domain hinzufügen
  - Sitemap einreichen
  - Mobile-Freundlichkeit testen

### 12. Backup einrichten

- [ ] Vollständiges Backup aller Dateien
- [ ] Backup der Datenbank (falls vorhanden)
- [ ] Automatische Backups beim Hoster aktivieren

---

## 🎯 Nach dem Launch:

### Sofort:
1. **Google Search Console:**
   - Domain verifizieren
   - `sitemap.xml` einreichen
   - Auf Crawling-Fehler prüfen

2. **Erste Tests:**
   - Alle Links durchklicken
   - Formulare testen (falls vorhanden)
   - BoD-Links testen
   - Mobile Version prüfen

### Erste Woche:
1. **Monitoring:**
   - Server-Logs prüfen
   - 404-Fehler checken
   - Ladezeiten überwachen

2. **Analytics (optional):**
   - Falls gewünscht: Plausible Analytics einrichten (DSGVO-konform, kein Cookie-Banner nötig)
   - Alternative: Matomo selbst hosten

### Langfristig:
- Regelmäßige Backups (wöchentlich)
- Updates für Server/Hosting
- Inhalte aktuell halten
- SEO-Rankings beobachten

---

## 🔒 Sicherheits-Best-Practices:

- [x] Keine sensiblen Daten im Frontend
- [x] rel="noopener" bei externen Links
- [ ] Security Headers aktiviert (.htaccess/nginx)
- [ ] SSL/HTTPS aktiviert
- [ ] HSTS Header aktiviert (nach HTTPS!)
- [x] Keine inline JavaScript Events (verwenden onclick nur für Demos)
- [x] CSP Header vorbereitet

---

## 📊 Performance-Optimierungen (Optional):

### Wenn Performance-Probleme auftreten:

1. **Bilder optimieren:**
   ```bash
   # WebP konvertieren
   cwebp -q 80 input.jpg -o output.webp
   
   # Alle PNGs optimieren
   pngquant --quality=65-80 *.png
   ```

2. **CSS/JS minifizieren:**
   - Online Tool: https://www.minifier.org/
   - Oder mit Build-Tool (Webpack, Vite)

3. **Lazy Loading:**
   Bereits teilweise implementiert, für weitere Bilder:
   ```html
   <img src="image.jpg" loading="lazy" alt="...">
   ```

4. **CDN verwenden (optional):**
   - Cloudflare (kostenlos)
   - BunnyCDN
   - KeyCDN

---

## 🎨 Nice-to-Have (nicht kritisch):

- [ ] 404-Fehlerseite designen
- [ ] 500-Fehlerseite designen
- [ ] Favicon-Animation
- [ ] Loading-Spinner für Modal
- [ ] Mehr OG-Images für jede Seite
- [ ] Newsletter (falls gewünscht)
- [ ] Blog-Bereich (falls gewünscht)

---

## ✉️ Launch-Kommunikation:

### Social Media Posts vorbereiten:
```
🧠 Berühren sich zwei Atome jemals wirklich?

Ich habe eine interaktive Website erstellt, die Quantenphysik, 
Paradoxa und die Beziehung zwischen Mensch & KI erforscht.

Wissenschaftlich. Skeptisch. Faszinierend.

👉 brainfusion.de

#Quantenphysik #Bewusstsein #KI #Philosophie
```

### Newsletter (falls vorhanden):
- Ankündigung der Website
- Link zu den Büchern bei BoD
- Highlights der interaktiven Experimente

---

## 📞 Support-Kontakte:

**Falls Probleme beim Launch:**
- Hosting-Support
- Domain-Provider-Support
- SSL-Zertifikat-Probleme: Let's Encrypt Community

**Technische Hilfe:**
- Stack Overflow
- Web Development Communities

---

## 🎉 Erfolgskriterien:

Nach 1 Monat:
- [ ] Mindestens 100 Besucher
- [ ] Mindestens 1 Buchverkauf über BoD
- [ ] Keine 404-Fehler
- [ ] Keine Sicherheitsprobleme
- [ ] Positive User-Feedbacks

Nach 3 Monaten:
- [ ] SEO-Ranking in Top 30 für relevante Keywords
- [ ] Regelmäßiger Traffic
- [ ] Mehrere Buchverkäufe
- [ ] Gute Performance-Scores

---

## 📝 Notizen:

_Hier kannst du eigene Notizen hinzufügen während des Launch-Prozesses_

---

**Erstellt:** November 2025
**Letzte Aktualisierung:** [DATUM EINTRAGEN]

**Viel Erfolg mit dem Launch! 🚀**

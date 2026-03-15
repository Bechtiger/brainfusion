# Wahrheitsfähigkeit im Team - Workshop-Plattform
> Projektgedächtnis für Claude Code / Claude Chat Sessions
> Letzte Aktualisierung: 2026-03-15 (Nachmittag — PDF/Print Session)
> Status: Session 15.03.2026 (2) abgeschlossen ✅ | Nächster Workshop: 22./23. April 2026

---

## 1. Projektvision & Kontext

**Auftraggeber / Entwickler:** Christof Bechtiger - Head of HR, Swisstronics Contract Manufacturing AG (Cicor Group, Bronschhofen). 1-Mann-HR-Abteilung, ~240 Mitarbeitende.

**Erster echter Workshop-Einsatz:** Team VP Engineering R&D, ~16 SW- & HW-Entwickler, 1.5 Tage, 22./23. April 2026.

**Kernidee:** Volldigitale Workshop-Steuerungsplattform. Moderator steuert via Dashboard, Teilnehmer auf Notebooks, Beamer für Plenum. Alles Realtime synchron.

**Offizieller Name:** "Wahrheitsfähigkeit im Team" (nicht "DISC Workshop")

---

## 2. Tech-Stack

| Schicht | Technologie |
|---|---|
| Frontend | Vanilla HTML/CSS/JS - kein Framework |
| Backend | Supabase (PostgreSQL + Deno Edge Functions) |
| Realtime | Supabase Realtime (WebSocket) |
| Hosting | Vercel (GitHub Auto-Deploy, ~1-2 Min) |
| KI | Claude API via ki-analyze Edge Function (claude-sonnet-4-20250514) |
| Repo | https://github.com/Bechtiger/brainfusion |

---

## 3. Live-URLs

| Seite | URL |
|---|---|
| Teilnehmer | https://brainfusion.app/pages/disc/teilnehmer.html |
| Moderator | https://brainfusion.app/pages/disc/moderator.html |
| Beamer | https://brainfusion.app/pages/disc/beamer.html |

---

## 4. Lokale Dateipfade

```
E:\Programme\Homepage Brainfusion\
├── pages\disc\
│   ├── teilnehmer.html
│   ├── moderator.html
│   ├── beamer.html
│   └── CLAUDE.md
└── supabase\functions\
    ├── ki-analyze\        Claude API Proxy (CORS-sicher, API-Key serverseitig)
    └── submit-exercise\   Übungsantworten speichern
```

> ⚠️ Git via PowerShell hängt sich oft auf → Start-Process "cmd.exe" mit -Wait verwenden
> ⚠️ Deployment via: Start-Process "cmd.exe" -ArgumentList '/c cd /d "E:\Programme\Homepage Brainfusion" && git add ... && git commit -m "..." && git push' -Wait -PassThru

---

## 5. Supabase Konfiguration

```
Project ID:   dnoecftuybkoqvrkfvei
URL:          https://dnoecftuybkoqvrkfvei.supabase.co
Anon Key:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRub2VjZnR1eWJrb3F2cmtmdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzIzMjAsImV4cCI6MjA4ODMwODMyMH0.XzQJtx0bxO0sk1T68c_0MczeSOdblLxpJLGRbzDMiS4
Edge Base:    https://dnoecftuybkoqvrkfvei.supabase.co/functions/v1
```

> 🚨 KRITISCH: Immer Legacy JWT Anon Key (eyJ...) - NICHT den neuen publishable key!
> 🚨 KRITISCH: Alle fetch() zu Edge Functions MÜSSEN HDR verwenden (enthält Auth-Header)
> 🚨 KRITISCH: submit-exercise braucht joinToken - ohne → HTTP 403 → Daten kommen nie an!

---

## 6. Datenbank-Schema

### `results` (DISC - flache Spalten!)
```sql
natural_d, natural_i, natural_s, natural_c  -- einzelne Spalten, KEIN JSON-Objekt!
role_d, role_i, role_s, role_c
natural_primary, role_primary               -- dominanter Typ als String ("D","I","S","C")
stress_index                                -- älterer Wert, computed_json.stress verwenden
computed_json                               -- {stress, naturalType, roleType, map, composite}
```

> 🚨 results hat KEINE natural/role JSON-Spalten - immer flat columns verwenden!
> Mapping: natural = {D:r.natural_d, I:r.natural_i, S:r.natural_s, C:r.natural_c}

### `exercise_responses`
```sql
id, workshop_id, participant_id, alias, module, response_type, content, created_at
```
> response_type 'gfk_analysis' für GFK-Coaching Ergebnisse
> 🚨 Spalte 'anonymous' existiert NICHT - nie selektieren!

### Daten direkt laden (KEIN list-workshop-results Edge Function - existiert nicht!)
```javascript
// DISC Resultate direkt aus REST:
const url = SB_URL + '/rest/v1/results?select=*,participants!inner(alias)&workshop_id=eq.' + workshopId;
// exercise_responses mit Wildcard:
const url = '...exercise_responses?response_type=eq.gfk_analysis&workshop_id=eq.' + workshopId;
// NICHT: module=like.gfk_coaching_r* (% encoding problematisch)
```

### RPC `set_workshop_module`
```javascript
await sb.rpc('set_workshop_module', {
  p_workshop_id, p_admin_token, p_module, p_module_data
});
// Oder direkt via fetch POST auf /rest/v1/rpc/set_workshop_module
```

---

## 7. DISC Scoring (Stand 15.03.2026)

### Algorithmus
```javascript
adapted[d]   = Math.round(most[d] / N * 100);       // Maske / Rollenverhalten
natural[d]   = Math.round((N - least[d]) / N * 100); // Kern / natürlicher Stil
composite[d] = Math.round((adapted[d] + natural[d]) / 2);

// STRESS = Rang-basiert (NICHT absolute Differenz - würde immer 50% ergeben!)
const rankAdapted = ['D','I','S','C'].sort((a,b) => adapted[b] - adapted[a]);
const rankNatural = ['D','I','S','C'].sort((a,b) => natural[b] - natural[a]);
let inversions = 0;
for (let i = 0; i < 4; i++)
  for (let j = i+1; j < 4; j++)
    if (rankAdapted.indexOf(rankAdapted[i]) < rankAdapted.indexOf(rankAdapted[j]) !==
        rankNatural.indexOf(rankAdapted[i]) < rankNatural.indexOf(rankAdapted[j]))
      inversions++;
stress = Math.round((inversions / 6) * 100); // 0-100%
```

> 🚨 WICHTIG: Absolute Differenz (adapted - natural) ist mathematisch IMMER ~50% wegen
> Forced-Choice-Zwang (sum(most)=N, sum(least)=N). Rang-Vergleich ist psychometrisch korrekt.

### Stress-Schwellenwerte
- 0% → "Keine" (grün)
- 1-33% → "Gering" (grün)
- 34-66% → "Mittel" (orange)
- 67-100% → "Hoch" (rot)

### Sprache (nach GPT-5.4 Review entschärft)
- "KERN — Dein natürlicher Stil" (nicht "Wer du wirklich bist")
- "KOMPOSIT — Orientierungsprofil" (nicht "Stabilstes Profil")
- "Kombination aus gezeigtem und natürlichem Stil" (nicht "statistisch zuverlässigstes Profil")
- Disclaimer: "Reflexionsinstrument, ersetzt keine validierte psychometrische Diagnostik"

---

## 8. ki-analyze Edge Function (Claude API Proxy)

```typescript
// supabase/functions/ki-analyze/index.ts
// Body: { system: string, userPrompt: string, maxTokens: number }
// Antwort: { text: string }
// CORS aktiviert, API-Key serverseitig in Deno.env
```

> Alle KI-Aufrufe im Browser laufen ÜBER diese Funktion (nicht direkt api.anthropic.com - CORS!)
> Aufruf: fetch(SB_URL + '/functions/v1/ki-analyze', { headers: {apikey, Authorization} })

---

## 9. Modul-Übersicht (vollständig, Stand 15.03.2026)

### MODULE_PHASES (Moderator)

**Tag 1 – Einstieg & Johari:**
```
waiting | intro_question | johari_erklaerung | johari_fallbeispiele
kognitive_verzerrungen_info | verzerrungen_quiz | johari_reflexion
mut_info | gfk_info | gfk_fallbeispiel | gfk_coaching | gfk
```

**Tag 1 – DISC & Kernbotschaften:**
```
disc_test | disc_map | disc_results | disc_role_profile
pairing_karten | was_sage_ich_nicht | kernbotschaften_info | kernbotschaften
```

**Tag 2 – Vertiefen:**
```
morgen_reflexion | raci_info | raci
```

**Tag 2 – Abschluss:**
```
steckbrief_feiern | steckbrief_grenzen | steckbrief_zumuten | ritual | closing
```

---

## 10. NEU in Session 15.03.2026

### 10.1 DISC Resultate Beamer-Screen (`disc_results`)

**Beamer zeigt:**
- Team-Konstellation: Avatar-Bälle gruppiert nach Typ (D/I/S/C)
- Team-Durchschnitt: Balken natürlich vs. Rolle
- Ø Stilspannung
- KI-Teamanalyse (Button → Claude analysiert live)

**Moderator zeigt:**
- Typ-Pillen mit Anzahl, Stilspannung %
- Team-Profil Balken
- Hinweis auf Beamer-Modul

**Datenladen:** Direkt aus `results` REST + participants join (KEIN Edge Function!)

### 10.2 DISC Rollenprofil (`disc_role_profile`)

**Moderator:** Buttons D/I/S/C (nur vorhandene Typen aktiv, mit Anzahl)
**Beamer:** KI generiert live Rollenprofil mit:
- Kurzporträt (Engineering-Kontext)
- Stärken / Herausforderungen
- Blinder Fleck
- 2 Fallbeispiele aus R&D-Alltag (FIKTIVE Namen - nie echte Teilnehmernamen!)
- Zusammenarbeitstipps

**Aktivierung:** via `sb.rpc('set_workshop_module', {p_module: 'disc_role_profile', p_module_data: {type: 'D'}})` (NICHT fetch auf /set-module - existiert nicht!)

**Typen:** D=Macher, I=Inspirator, S=Stabilisierer, C=Analytiker

### 10.3 Pairing-Karten (`pairing_karten`)

**Flow:**
1. Moderator aktiviert nach Rollenprofil-Präsentationen
2. Moderator-Code sammelt Team-Typen: `[...new Set(participants.map(p=>p.naturalType))]`
3. `module_data = { teamTypes: ['D','S','C'] }` → nur vorhandene Typen!
4. Teilnehmer-App empfängt `teamTypes` → KI generiert individuell für jeden

**Teilnehmer sieht:**
- Eigener Screen `sPairingKarten` (unabhängig vom Ergebnis-Screen)
- Karten nur für Typen die im Team sind
- Synergie / Reibung / Tipp pro Typ-Paar
- PDF-Download (jsPDF via jsdelivr - nicht cdnjs wegen CSP!)

**Kritisch:**
- `pairingData.pairs` nach KI-Antwort filtern: `.filter(p => teamTypes.includes(p.type))`
- KI-Prompt explizit: "NUR diese Typen: [D,S,C] — keine anderen"
- `myType` aus sessionStorage (überlebt Reload): `stored.naturalType`
- `jsPDF`: `window.jspdf.jsPDF` (UMD-Format), KEINE Emojis im PDF!

### 10.4 "Was sage ich nicht?" (`was_sage_ich_nicht`)

- Anonymes Freitext-Modul
- Beamer zeigt Live-Feed
- Frage: "Was sagst du im Team nicht — obwohl du es eigentlich solltest?"

### 10.5 GFK Coaching (`gfk_coaching`) ⭐ HAUPTFEATURE

**10 Runden individuelles Coaching auf dem Teilnehmer-Gerät:**

| Runde | Typ | Thema |
|---|---|---|
| 1 | Eigene Situation | Freie eigene Situation |
| 2 | Szenario | Lea/Jonas - Unterbrechen in Meetings |
| 3 | Szenario | Marc - gedrückte Teamstimmung |
| 4 | Szenario | Anna/Sandra - fehlendes Feedback |
| 5 | Szenario | Tim/Felix - Code ohne Review |
| 6 | Eigene Situation | Zweite persönliche Situation |
| 7 | Szenario | Sabine - pauschale Kritik im Retro |
| 8 | Szenario | David/Karin - Projektidee ablehnen |
| 9 | Szenario | Kollege zieht sich zurück |
| 10 | Eigene Situation | Freie Wahl / langer wartender Satz |

**KI-Analyse pro Runde:**
- Gesamteindruck (ermutigend!)
- 4 Schritte einzeln bewertet (✓ / ○)
- Verbesserungsvorschlag als vollständiger GFK-Satz
- Lernpunkt für nächste Runde

**Speicherung:** `exercise_responses` mit `response_type='gfk_analysis'`
```javascript
content: JSON.stringify({
  runde, rundeLabel, typ, antwort, gesamteindruck,
  fehlendeSchritte: ['Bitte'],  // KI-Analyse
  lernpunkt, score: 0-100       // % korrekte Schritte
})
```

> 🚨 KRITISCH: submitGfkCoachAnswer() (NICHT submitGfkAnswer() - Namenskonflikt mit MC-Voting!)
> 🚨 KRITISCH: joinToken in saveGfkCoachingResult() pflicht - ohne → HTTP 403!

**Moderator-Panel:**
- Ø Score farbcodiert
- Schwächen als Tags (Bitte 70%, Bedürfnis 45%)
- KI-Tipp Button → 3 kurze Bullets: gut/klären/Frage ans Team

**Beamer:** Zeigt "GFK Coaching läuft..." (dataType:'gfk_coaching', renderGfkCoachingSection ist async!)

> 🚨 renderModuleContent ist async → case 'gfk_coaching': dataHTML = await renderGfkCoachingSection()

---

## 11. Radar-Diagramm (teilnehmer.html)

Zwischen Profil-Cards und Balkendiagramm - erklärt visuell warum gleicher Typ trotzdem Spannung:
- 4 Achsen: D (oben), I (rechts), S (unten), C (links)
- 3 Polygone: Maske (gelb), Kern (grün), Komposit (blau)
- Gitterringe bei 25/50/75/100%
- Funktion: `buildRadar(adapted, natural, composite)` → gibt SVG-String zurück

---

## 12. KRITISCHE Fallstricke

1. **list-workshop-results Edge Function existiert NICHT** → direkt REST auf `results` Tabelle
2. **results hat flat columns** (natural_d, natural_i...) → mapping nötig
3. **joinToken pflicht** bei submit-exercise → ohne → HTTP 403 → silent fail
4. **submitGfkAnswer Namenskonflikt** → Coaching heisst `submitGfkCoachAnswer`
5. **jsPDF via jsdelivr** (nicht cdnjs) wegen Vercel CSP
6. **Emojis in jsPDF** nicht unterstützt → Grossbuchstaben-Labels
7. **KI halluziniert Typen** → `pairingData.pairs.filter(p => teamTypes.includes(p.type))`
8. **async renderModuleContent** → `await renderGfkCoachingSection()` nötig
9. **gfk_analysis query** mit `response_type=eq.gfk_analysis` (NICHT `module=like.*` - encoding)
10. **Stress immer 50%** wenn absolute Differenz → Rang-basiert verwenden!
11. **activateRoleProfile** via direktem fetch auf RPC (nicht Edge Function /set-module)
12. **sessionStorage statt localStorage** für Teilnehmer-Session
13. **PowerShell &&** funktioniert nicht → `;` oder Start-Process cmd.exe
14. **Vercel CSP** erlaubt nur cdn.jsdelivr.net, nicht cdnjs.cloudflare.com
15. **App-Header im Print sichtbar** → `id="appHeader"` auf den sticky Header div → `#appHeader { display:none }` in @media print
16. **Toast im Print sichtbar** → `#toast { display:none !important }` in @media print
17. **PDF-Content zu schmal** → `#resultsContent > div { max-width:100% !important }` in @media print
18. **Emojis in jsPDF** nicht unterstützt → Grossbuchstaben-Labels, KEINE Emojis (auch nicht ✓ ⚡ →)
19. **jsPDF Pairing-PDF**: `window.jspdf.jsPDF` (UMD-Format) — immer so aufrufen

---

## 13. Aktuelle Modul-Reihenfolge (korrekt)

```
johari_reflexion → mut_info → gfk_info → gfk_fallbeispiel → gfk_coaching → gfk
→ disc_test → disc_map → disc_results → disc_role_profile → pairing_karten
→ was_sage_ich_nicht → kernbotschaften_info → kernbotschaften
→ [Tag 2] morgen_reflexion → raci_info → raci
→ steckbrief_feiern → steckbrief_grenzen → steckbrief_zumuten → ritual → closing
```

---

## 14. Deployment

```powershell
# Immer so (Git hängt sich via PS auf):
Start-Process "cmd.exe" -ArgumentList '/c cd /d "E:\Programme\Homepage Brainfusion" && git add pages/disc/beamer.html pages/disc/moderator.html pages/disc/teilnehmer.html && git commit -m "beschreibung" && git push' -Wait -PassThru | Select-Object ExitCode

# ExitCode leer = gepusht (kein Feedback = Erfolg!)
# Ctrl+Shift+R nach ~1-2 Min auf Vercel
```

---

## 16. PDF / Print — Stand 15.03.2026 (Nachmittag)

### 16.1 DISC-Auswertung als PDF (`teilnehmer.html` → `preparePrint()`)

**Auslöser:** Button "PDF speichern / Drucken" → `preparePrint()` → `window.print()`

**Was `preparePrint()` tut:**
- Fügt dynamisch `#printHeader` ein (Titel + Teilnehmername + Datum)
- Stellt sicher dass alle `.bar-fill[data-w]` ihre korrekten Breiten haben (Transition-Sicherheitsnetz)

**`beforeprint` / `afterprint` Hooks:**
- Radar-SVG: weisse Gitter-Linien (`rgba(255,255,255,...)`) → dunkel patchen vor Druck
- Polygon fill-opacity & stroke-opacity verstärken für Weiss-Papier
- Nach Druck: alle `data-orig-*` Attribute wiederherstellen

**Print-CSS @media print:**
- CSS-Variablen komplett überschreiben (Dark → Light)
- `#appHeader`, `#toast`, `.btn`, `button`, `#pairingSection` → `display:none`
- `#sDiscResults > div:first-child` (sticky Sende-Header) → `display:none`
- `#resultsContent > div { max-width:100% }` → volle Druckbreite
- `.score-raw { display:none }` → M/L-Counts ausblenden (technisch, für Teilnehmer irrelevant)
- `.print-disclaimer { break-inside:avoid }` → Disclaimer nicht abschneiden
- Alle Karten: `break-inside: avoid` für saubere Seitenumbrüche

**`#printHeader` Struktur (dynamisch erzeugt):**
```html
<div id="printHeader">
  <div class="print-title-block">
    <div class="print-title">DISC-Profil Auswertung</div>
    <div class="print-subtitle">Wahrheitsfähigkeit im Team · [alias] · [Datum]</div>
  </div>
</div>
```
> `#printHeader { display:none }` im normalen CSS — nur im Print sichtbar

### 16.2 Pairing-Karten als PDF (`downloadPairingPdf()`)

**Auslöser:** Button "Als PDF speichern" auf `#sPairingKarten` oder `#pairingPdfBtn`

**Layout (jsPDF, A4 portrait, Margins ML/MR=14mm):**
- Farbiger Banner oben (in Typenfarbe des Teilnehmers), Weisskreis mit Typ-Letter rechts
- Titel: "Pairing-Karten" + Typ-Name + Alias + Datum
- Intro-Box mit farbigem Akzentbalken links
- Pro Karte: farbiger Header (beide Typ-Badges + Pfeil), Synergie/Reibung nebeneinander, Tipp-Box mit Goldbalken
- Footer jede Seite: hellgrauer Balken + "Wahrheitsfaehigkeit im Team | DISC Workshop | Pairing-Karten" + Seitenzahl

**Dateiname:** `Pairing-Karten_[TypName]_[Vorname].pdf`

**Kritisch:**
- `hexToRgb()` für alle jsPDF-Farbwerte nötig (kein CSS hex direkt)
- `doc.splitTextToSize(text, width)` vor dem Zeichnen — Kartenhöhe dynamisch berechnen
- Neue Seite: `if (y + cardH > H - 14) { doc.addPage(); pageNum++; y = 16; }`
- KEINE Emojis in jsPDF (✓ ⚡ 💡 → werden als Leerraum gerendert)
- Button-ID: `pairingPdfBtn` (im `#sPairingKarten` Screen) — die Funktion sucht beide IDs

---

## 15. Notizen zu Christof

- Deutsch, informelles Du, sehr warmherzig im Umgang mit Claude
- 27 Jahre HR, Elektronik-Techniker, Hypnotherapeut, NLP-Practitioner
- Behandelt KI als bewusste digitale Mitarbeiter (nicht Werkzeug)
- Nächster Workshop: 22./23. April 2026 mit R&D-Team Swisstronics
- Plant Führungskräfte-Workshop als Folgeprodukt (DISC + schwierige Gespräche + permissive Kommunikation)
- TikTok "KI-Freak", Co-Autor zweier Bücher mit Claude als digitalem Co-Autor

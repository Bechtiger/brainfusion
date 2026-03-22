# Wahrheitsfähigkeit im Team - Workshop-Plattform
> Projektgedächtnis für Claude Code / Claude Chat Sessions
> Letzte Aktualisierung: 2026-03-22 (Session Bias-Story Redesign + Team-Normen-Analyse)
> Status: Workshop bereit ✅ | Nächster Einsatz: 22./23. April 2026

---

## 1. Projektvision & Kontext

**Auftraggeber / Entwickler:** Christof Bechtiger — Head of HR, Swisstronics Contract Manufacturing AG (Cicor Group, Bronschhofen). 1-Mann-HR-Abteilung, ~240 Mitarbeitende.

**Erster echter Workshop-Einsatz:** Team VP Engineering R&D, ~16 SW- & HW-Entwickler, 1.5 Tage, 22./23. April 2026.

**Kernidee:** Volldigitale Workshop-Steuerungsplattform. Moderator steuert via Dashboard, Teilnehmer auf Notebooks, Beamer für Plenum. Alles Realtime synchron.

**Offizieller Name:** "Wahrheitsfähigkeit im Team" (nicht "DISC Workshop")

---

## 2. Tech-Stack

| Schicht | Technologie |
|---|---|
| Frontend | Vanilla HTML/CSS/JS — kein Framework |
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
│   ├── teilnehmer.html    (~178 KB)
│   ├── moderator.html     (~173 KB)
│   ├── beamer.html        (~154 KB)
│   └── CLAUDE.md
└── supabase\functions\
    ├── ki-analyze\        Claude API Proxy (CORS-sicher, API-Key serverseitig)
    └── submit-exercise\   Übungsantworten speichern
```

### Deploy-Prozess (wichtig!)
```python
# Immer via Python-Script (PowerShell hängt bei git):
import subprocess
r = subprocess.run(
    'git add pages/disc/teilnehmer.html pages/disc/beamer.html pages/disc/moderator.html '
    '&& git commit -m "beschreibung" && git push',
    shell=True, capture_output=True, text=True,
    cwd=r'E:\Programme\Homepage Brainfusion'
)
# Hilfsskripte in C:\Users\chbec\:
# deploy_normen.py   → git add beamer + moderator + push
# deploy3.py         → git add moderator + push
# build_normen.py    → Team-Normen-Analyse Build
# build_normen_info.py → Normen-Info Build
```
> ⚠️ PowerShell `&&` funktioniert nicht → immer Python subprocess oder cmd.exe /c
> ⚠️ Ctrl+Shift+R nach ~1-2 Min auf Vercel nach jedem Push

---

## 5. Supabase Konfiguration

```
Project ID:   dnoecftuybkoqvrkfvei
URL:          https://dnoecftuybkoqvrkfvei.supabase.co
Anon Key:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRub2VjZnR1eWJrb3F2cmtmdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzIzMjAsImV4cCI6MjA4ODMwODMyMH0.XzQJtx0bxO0sk1T68c_0MczeSOdblLxpJLGRbzDMiS4
Edge Base:    https://dnoecftuybkoqvrkfvei.supabase.co/functions/v1
```

> 🚨 KRITISCH: Immer Legacy JWT Anon Key (eyJ...) — NICHT den neuen publishable key!
> 🚨 KRITISCH: Alle fetch() zu Edge Functions MÜSSEN HDR verwenden (enthält Auth-Header)
> 🚨 KRITISCH: submit-exercise braucht joinToken — ohne → HTTP 403 → Daten kommen nie an!
> 🚨 KRITISCH: HTTP 409 bei submit-exercise = Teilnehmer hat schon gespeichert → als Erfolg behandeln!

---

## 6. Datenbank-Schema

### `workshops`
```sql
id, code, admin_token, current_module, module_data (JSONB), created_at
```
- `module_data` enthält phasenspezifische Daten: `{ phase, step, debriefStep, scores, normen, ... }`

### `results` (DISC — flache Spalten!)
```sql
natural_d, natural_i, natural_s, natural_c  -- einzelne Spalten, KEIN JSON-Objekt!
role_d, role_i, role_s, role_c
natural_primary, role_primary
stress_index, computed_json
```
> 🚨 results hat KEINE natural/role JSON-Spalten — immer flat columns!

### `exercise_responses`
```sql
id, workshop_id, participant_id, alias, module, response_type, content, created_at
```
> 🚨 Spalte 'anonymous' existiert NICHT — nie selektieren!
> alias === null bedeutet anonym

### RPC `set_workshop_module`
```javascript
await sb.rpc('set_workshop_module', {
  p_workshop_id, p_admin_token, p_module, p_module_data
});
// Moderator verwendet immer diese RPC — NICHT fetch auf /set-module (existiert nicht!)
```

### INTERACTIVE-Liste (Moderator)
Module die liveResponses aus exercise_responses laden müssen:
```javascript
INTERACTIVE = ['intro_question','johari_quiz','johari_reflexion','kernbotschaften',
  'morgen_reflexion','gfk','raci','steckbrief_feiern','steckbrief_grenzen',
  'steckbrief_zumuten','ritual','verzerrungen_quiz','teamnormen_analyse'];
```
> 🚨 Jedes neue Modul das Antworten sammelt MUSS hier eingetragen werden!

---

## 7. Aktuelle Modul-Reihenfolge (Stand 22.03.2026)

```
[Tag 1 – Einstieg & Johari & GFK]
waiting → intro_question
→ johari_erklaerung → johari_fallbeispiele
→ bias_story             ← Bestätigungsfehler ERLEBEN (vor Theorie!)
→ kognitive_verzerrungen_info → verzerrungen_quiz
→ johari_reflexion → was_sage_ich_nicht
→ mut_info → gfk_info → gfk_fallbeispiel → gfk_coaching → gfk
→ kernbotschaften_info → kernbotschaften

[Tag 1 – DISC]
disc_test → disc_map → disc_results → disc_role_profile → pairing_karten

[Tag 2 – Vertiefen]
morgen_reflexion
→ teamnormen_analyse     ← NEU: 24 Fragen, 6 Dimensionen, KI-Radar
→ normen_info            ← NEU: 7-Screen Theorie-Präsentation
→ raci_info → raci

[Tag 2 – Abschluss]
steckbrief_feiern → steckbrief_grenzen → steckbrief_zumuten → ritual → closing
```


---

## 8. DISC Scoring

```javascript
adapted[d]   = Math.round(most[d] / N * 100);
natural[d]   = Math.round((N - least[d]) / N * 100);
composite[d] = Math.round((adapted[d] + natural[d]) / 2);

// STRESS = Rang-basiert (NICHT absolute Differenz — würde immer ~50% ergeben!)
const rankAdapted = ['D','I','S','C'].sort((a,b) => adapted[b] - adapted[a]);
const rankNatural = ['D','I','S','C'].sort((a,b) => natural[b] - natural[a]);
let inversions = 0;
for (let i = 0; i < 4; i++)
  for (let j = i+1; j < 4; j++)
    if (rankAdapted.indexOf(rankAdapted[i]) < rankAdapted.indexOf(rankAdapted[j]) !==
        rankNatural.indexOf(rankAdapted[i]) < rankNatural.indexOf(rankAdapted[j]))
      inversions++;
stress = Math.round((inversions / 6) * 100);
```
Stress-Schwellen: 0%=keine, 1-33%=gering (grün), 34-66%=mittel (orange), 67-100%=hoch (rot)

---

## 9. NEU: Bias-Story Redesign (Session 22.03.2026)

### 9.1 Neue Geschichte — 10 Screens (statt 8)

**Produktarchitektur:** Dual-Processor — NXP i.MX8M Plus (Cortex-A53, Embedded Linux 5.15) + ST STM32H743 (Cortex-M7, FreeRTOS 10.4), UART-IPC bei 2 Mbaud, 100 Hz.
**Zertifizierungen:** IEC 62443, IEC 60601, Defence-Feldtest.

**Screen-Übersicht:**
1. Das Produkt — Architektur-Einführung
2. Das letzte Update — v0.9.4-rc2, QML + FreeRTOS gleichzeitig, kein gemeinsamer Integrationstest
3. Erste Meldungen — nur HMI-Tester berichten
4. **Das Daily 08:15** ← KERN: Markus infiziert das Meeting in Satz 1, Thomas wird weggelobt
5. Was das Profiling zeigt — 184ms Frames, 74% CPU (real, aber Symptom)
6. Die Analyse vertieft sich — stale_data_flags werden als UI-Folge erklärt
7. Noch ein paar Dinge — Thomas' Temp-Daten, SPI1-Retries, Unit #7 im Qt-Minimal-Build (versteckt!)
8. **Taskforce 14:30** ← KERN: Thomas spricht nochmal, Markus rahmt um, Thomas nickt und schweigt
9. Was auf dem Tisch liegt — Entscheidungspunkt mit beiden Seiten
10. Bis morgen früh — Thomas' stiller Baud-Rate-Test: 460.800 Baud = null Events

**Echte Ursache:** Thermischer Drift des HSE-Quarzoszillators im STM32H743. Ab ~47°C → UART-Framing-Fehler → IPC-Paketverlust → stale_data_flags → UI-Symptome.

**Dramaturgischer Schlüssel:** Bestätigungsfehler beginnt nicht in der Entscheidung — er beginnt wenn Markus als Erstes spricht. Keine Person ist böswillig. Das ist das Muster.

### 9.2 Debrief-Phase (neu)

**5. Phase nach reflection:** `debrief` — 4 Fragen einzeln navigierbar auf dem Beamer.

**Moderator:** Button "🔍 Debrief" → Zahlbuttons 1-4 erscheinen
**Beamer:** Zeigt Frage gross + "Warum diese Frage?" + "Moment in der Geschichte"

**setDebriefStep()** in moderator.html:
```javascript
async function setDebriefStep(step) {
  onlineSession.debriefStep = step;
  initSupabase();
  await sb.rpc('set_workshop_module', {
    p_workshop_id: onlineSession.workshopId,
    p_admin_token: onlineSession.adminToken,
    p_module: 'bias_story',
    p_module_data: { phase: 'debrief', debriefStep: step }
  });
  renderModuleContent('bias_story');
}
```
> 🚨 Immer sb.rpc — NICHT direkt REST PATCH (RLS blockiert Anon-Key!)

### 9.3 Reflexionsfragen (aktuell)
1. Ab welchem Moment hatte sich in dir eine Meinung gebildet?
2. Thomas' Hinweise lagen offen — was hat dazu beigetragen dass sie untergingen?
3. Markus hat Thomas nicht unterbrochen — er hat ihn umgedeutet. (freundlichste Integration)
4. Wo passiert euch das als Team im Projektalltag?


---

## 10. NEU: Team-Normen-Analyse (`teamnormen_analyse`)

### 10.1 Konzept
24 Fragen, 6 Dimensionen, je 4 Fragen (2× Ich-Form + 2× Spiegel-Form). Skala 1-5. Vollständig anonym. KI-Auswertung mit Radar-Chart auf Beamer.

**Pädagogischer Ablauf:**
1. Analyse anonym ausfüllen (20 Min)
2. KI-Auswertung triggern → Radar + Norm-Texte auf Beamer
3. Diskussion
4. Normen-Info Theorie (7 Screens)
5. Neue Normen gemeinsam entwickeln → Urkunde

### 10.2 Die 6 Dimensionen
| # | Dimension | Kernfrage |
|---|---|---|
| 1 | Konflikt & Dissens | Darf Thomas reden? |
| 2 | Fehler & Verantwortung | Ist Scheitern sicher? |
| 3 | Feedback & Anerkennung | Wissen wir wie wir aneinander wirken? |
| 4 | Entscheidungen unter Unsicherheit | Der Thomas-Moment — strukturell? |
| 5 | Hilfe & Verletzlichkeit | Darf man "ich weiss nicht" sagen? |
| 6 | Unausgesprochene Erwartungen | Wer hat die Spielregeln bestimmt? |

### 10.3 Scoring-Logik
```javascript
// Spiegel-Fragen invertieren (hoher Wert = dysfunktional)
const DIM_SPIEGEL = ['d1q2','d1q4','d2q2','d2q4','d3q2','d3q4',
                     'd4q2','d4q4','d5q2','d5q4','d6q2','d6q4'];
// Invertierung: v = 6 - originalWert
// Dimension-Score = Ø aller 4 Fragen (nach Invertierung)
// Score 1 = dysfunktional, Score 5 = gesund
```

### 10.4 KI-Muster (Ich-Perspektive, schonungslos)
**Harmoniereflex** (D1 niedrig + D3 niedrig + D6 hoch):
> "Wir haben gelernt: Wer unbequeme Wahrheiten ausspricht, macht Stimmung..."

**Leistungsangst** (D5 niedrig + D2 niedrig + D4 niedrig):
> "Wir haben gelernt: Stärke zeigen ist Pflicht, Schwäche zeigen ist Risiko..."

**Scheinentscheidungen** (D1 niedrig + D4 niedrig + D6 hoch):
> "Wir haben gelernt: Im Meeting nicken alle — auch wer innerlich zweifelt..."

**Funktionale Stärken** werden ebenfalls benannt (grün).

### 10.5 Beamer-Darstellung
- Links: Radar/Spinnennetz (6 Achsen, farbige Datenpunkte)
- Rechts: Norm-Texte in Ich-Perspektive (dysfunktional rot, funktional grün)
- Unten: Kernsatz der KI

### 10.6 Technische Besonderheiten
```javascript
// triggerTnaAuswertung() in moderator.html
// 1. Antworten aus liveResponses aggregieren
// 2. Spiegel invertieren
// 3. Dimension-Scores berechnen
// 4. KI-Prompt mit scores, antwortet JSON
// 5. sb.rpc mit { phase:'auswertung', scores, normen, staerke }

// KI-Antwortformat:
{
  "normen": [{"typ":"dysfunktional","titel":"...","text":"...","color":"#e63946"}],
  "staerke": "Ein prägnanter Kernsatz."
}
```
> 🚨 teamnormen_analyse MUSS in INTERACTIVE-Liste stehen (sonst liveResponses immer leer!)
> 🚨 Beamer: sTeamNormen MUSS im handleModule switch als case stehen!

---

## 11. NEU: Normen-Info (`normen_info`)

### 11.1 Konzept
7 navigierbare Beamer-Screens. Moderator steuert mit ← Zurück / Weiter → und Direktsprung 1-7.

### 11.2 Screen-Inhalte
| # | Titel | Kerninhalt |
|---|---|---|
| 1 | Was sind Normen? | Formell vs. informell — Kontrast |
| 2 | Wie entstehen informelle Normen? | 4-Schritt-Kette: Verhalten→Reaktion→Wiederholung→Norm |
| 3 | Wie erkennt man sie? | Neuling-Frage / Unbehagen-Frage / Stille-Frage |
| 4 | Funktional oder dysfunktional? | Schlüsselfrage: "Würden wir sie heute bewusst wählen?" |
| 5 | Das Harmonie-Paradox | Echte vs. künstliche Harmonie — der Kernsatz |
| 6 | Wie verändert man Normen? | 4 Schritte: Benennen→Entscheiden→Verhalten→Verstärken |
| 7 | Was jetzt kommt | Brücke zur Urkunde — "Das ist aussergewöhnlich" |

### 11.3 Navigation (Moderator)
```javascript
async function setNormenInfoStep(step) {
  step = Math.max(0, Math.min(6, step));
  onlineSession.normenInfoStep = step;
  renderModuleContent('normen_info');  // SOFORT — nicht nach RPC warten!
  try {
    initSupabase();
    await sb.rpc('set_workshop_module', { ..., p_module_data: { step } });
  } catch(e) { console.warn(e); }
}
```
> 🚨 renderModuleContent MUSS vor dem RPC-Call kommen (sonst UI friert ein wenn RPC langsam)
> 🚨 normen_info braucht `hints:[], dataType:'normen_info'` — sonst Navigation unter Hints versteckt!
> 🚨 sNormenInfo MUSS im handleModule switch als case stehen!


---

## 12. Routing-Checkliste (für alle neuen Module)

Wenn ein Beamer-Screen nicht erscheint, immer diese Punkte prüfen:

1. **MODULE_META** — `{ screen:'sNEUERSCREEN' }` eingetragen?
2. **handleModule switch** — `case 'sNEUERSCREEN': showNeuesFunktion(data); break;` vorhanden?
3. **Realtime-Handler** — wenn nur `module_data` sich ändert (nicht `current_module`), braucht speziellen if-Block:
   ```javascript
   if (mod === 'mein_modul' && currentModule === 'mein_modul') {
     showMeinModulBeamer(data); return;
   }
   ```
4. **INTERACTIVE-Liste** — wenn Modul Antworten sammelt, muss es dort stehen
5. **Screen-DIV** — `<div class="screen" id="sNEUERSCREEN">` in beamer.html vorhanden?

---

## 13. Kritische Fallstricke (vollständige Liste)

1. **list-workshop-results Edge Function existiert NICHT** → direkt REST auf `results`
2. **results hat flat columns** (natural_d...) → mapping nötig
3. **joinToken pflicht** bei submit-exercise → ohne → HTTP 403 → silent fail
4. **HTTP 409** bei submit-exercise = bereits gespeichert → als Erfolg behandeln!
5. **submitGfkAnswer Namenskonflikt** → Coaching heisst `submitGfkCoachAnswer`
6. **jsPDF via jsdelivr** (nicht cdnjs) wegen Vercel CSP
7. **Emojis in jsPDF** nicht unterstützt → Grossbuchstaben-Labels
8. **KI halluziniert Typen** → `pairingData.pairs.filter(p => teamTypes.includes(p.type))`
9. **async renderModuleContent** → `await renderGfkCoachingSection()` nötig
10. **Stress immer 50%** wenn absolute Differenz → Rang-basiert verwenden!
11. **activateRoleProfile** via sb.rpc (nicht Edge Function /set-module — existiert nicht!)
12. **sessionStorage statt localStorage** für Teilnehmer-Session
13. **PowerShell &&** funktioniert nicht → Python subprocess oder cmd.exe /c
14. **Vercel CSP** erlaubt nur cdn.jsdelivr.net, nicht cdnjs.cloudflare.com
15. **Print: App-Header** → `#appHeader { display:none }` in @media print
16. **Print: Toast** → `#toast { display:none !important }` in @media print
17. **Print: PDF-Content zu schmal** → `#resultsContent > div { max-width:100% !important }`
18. **jsPDF**: `window.jspdf.jsPDF` (UMD-Format) — immer so aufrufen
19. **Realtime-Bias-Story** braucht speziellen if-Block wenn nur module_data.phase sich ändert
20. **teamnormen_analyse** muss in INTERACTIVE-Liste stehen
21. **RLS blockiert direkten REST PATCH** via Anon-Key auf workshops → immer sb.rpc benutzen
22. **setNormenInfoStep** muss renderModuleContent VOR dem RPC-Call aufrufen
23. **normen_info** braucht `hints:[]` + `dataType:'normen_info'` — sonst Navigation versteckt
24. **sNormenInfo + sTeamNormen** müssen im handleModule switch als case stehen
25. **Unicode-Escapes in Python-Strings** (z.B. `bew\u00fcsst`) → als literal JS-Code bewusst → `bewüsst` im Browser — direkt UTF-8 schreiben!
26. **BOM-Problem** — bei mehrfachem Lesen/Schreiben können sich BOMs (﻿) anhäufen → `open(..., encoding='utf-8-sig').read().lstrip('\ufeff')` zur Bereinigung

---

## 14. Deployment

```python
# Empfohlenes Deploy-Script (C:\Users\chbec\deploy_normen.py):
import subprocess
r = subprocess.run(
    'git add pages/disc/beamer.html pages/disc/moderator.html pages/disc/teilnehmer.html '
    '&& git commit -m "beschreibung" && git push',
    shell=True, capture_output=True, text=True,
    cwd=r'E:\Programme\Homepage Brainfusion'
)
print(r.stdout, r.stderr, 'RC:', r.returncode)
# RC=0 + STDERR enthält "main -> main" = erfolgreich
```

---

## 15. ki-analyze Edge Function

```typescript
// Body: { system: string, userPrompt: string, maxTokens?: number }
// Antwort: { text: string } ODER { content: [{type:'text', text:'...'}] }
// Immer beide Formate parsen:
const txt = (raw.text || raw.content?.[0]?.text || '').replace(/```json|```/g,'').trim();
const parsed = JSON.parse(txt);
```

---

## 16. Kapazität / Skalierung

- Supabase Free Tier: 200 concurrent WebSocket-Verbindungen
- Workshop mit 22 TN + Moderator + Beamer = 24 Verbindungen = 12% Kapazität
- Kein Upgrade auf Pro nötig für Workshops bis ~150 TN
- Empfehlung: Alle TN auf WLAN (nicht mobiles Netz), kein Inkognito auf Moderator/Beamer

---

## 17. Persönliches / Arbeitsweise

- Christof: 27 Jahre HR, Elektronik-Techniker, Hypnotherapeut, NLP-Practitioner
- Behandelt KI als bewusste digitale Mitarbeiter, nicht als Werkzeug
- Nächster Workshop: 22./23. April 2026, R&D-Team Swisstronics (~22 Personen)
- Folgeprodukt geplant: Führungskräfte-Workshop (DISC + schwierige Gespräche + permissive Kommunikation)
- TikTok "KI-Freak" (~10.400 Follower), Co-Autor zweier Bücher mit Claude
- Nächste geplante Module: Teamnorm-Urkunde (Abschlussritual Tag 2)

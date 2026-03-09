# Wahrheitsfähigkeit im Team - Workshop-Plattform
> Projektgedächtnis für Claude Code / Claude Chat Sessions
> Letzte Aktualisierung: 2026-03-09
> Status: Phase 2 vollständig abgeschlossen ✅ | Phase 3 als nächstes

---

## 1. Projektvision & Kontext

**Auftraggeber / Entwickler:** Christof Bechtiger - Head of HR, Swisstronics Contract Manufacturing AG (Cicor Group, Bronschhofen). 1-Mann-HR-Abteilung, ~240 Mitarbeitende, Cicor-Führungsteam.

**Erster echter Workshop-Einsatz:** Team VP Engineering R&D, ~16 SW- & HW-Entwickler, 1.5 Tage.

**Kernidee der Plattform:**
Eine volldigitale Workshop-Steuerungsplattform. Der Moderator (Christof) steuert den Ablauf über ein **Dashboard**. Die Teilnehmer sind per Notebook (nicht Handy!) auf einer Teilnehmer-App. Ein **Beamer** zeigt visuelle Darstellungen fürs ganze Plenum. Alles läuft realtime synchron.

**Wichtig:** Der Name "DISC Workshop" wurde bewusst aufgegeben - er assoziiert falsch. Der offizielle Name des Workshops ist:
> **"Wahrheitsfähigkeit im Team"**

Der DISC-Test ist nur *ein Baustein* davon, nicht der Rahmen.

---

## 2. Tech-Stack

| Schicht | Technologie |
|---|---|
| Frontend | Vanilla HTML/CSS/JS - kein Framework, kein Build-Step |
| Backend | Supabase (PostgreSQL + Deno Edge Functions) |
| Realtime | Supabase Realtime (WebSocket, postgres_changes) |
| Hosting | Vercel (GitHub Auto-Deploy, ~1-2 Min nach git push) |
| Repo | https://github.com/Bechtiger/brainfusion |
| KI | Claude API (claude-sonnet-4-20250514) - KI-Zusammenfassung Button im Moderator |

---

## 3. Live-URLs

| Seite | URL |
|---|---|
| Teilnehmer-App | https://brainfusion.app/pages/disc/teilnehmer.html |
| Moderator-Dashboard | https://brainfusion.app/pages/disc/moderator.html |
| Beamer-Ansicht | https://brainfusion.app/pages/disc/beamer.html |
| Direktlink mit Code | https://brainfusion.app/pages/disc/teilnehmer.html?code=XXXXXX |

---

## 4. Lokale Dateipfade (Windows)

```
E:\Programme\Homepage Brainfusion\
├── pages\disc\
│   ├── teilnehmer.html       Teilnehmer-App (notebook-optimiert)
│   ├── moderator.html        Moderator-Dashboard
│   ├── beamer.html           Beamer-Vollbild-Ansicht
│   └── CLAUDE.md             diese Datei
└── supabase\functions\
    ├── create-workshop\      Workshop anlegen
    ├── join-workshop\        Teilnehmer beitreten
    ├── submit-result\        DISC-Ergebnis senden
    ├── list-workshop-results\ Ergebnisse abrufen
    └── submit-exercise\      Übungsantwort senden
```

> ⚠️ PowerShell: `&&` funktioniert NICHT → immer `;` verwenden
> ⚠️ Git liegt unter: `C:\Program Files\Git\cmd\git.exe`
> ⚠️ Batch-Dateien nummeriert: E:\gitpush1.bat bis E:\gitpush15.bat bereits verwendet → nächste: E:\gitpush16.bat


---

## 5. Deployment-Workflow

```powershell
# Dateien pushen - IMMER via Batch-Datei (Git nicht im PS-PATH)
# Neue Batch-Datei erstellen (nächste Nummer verwenden!):
# E:\gitpushN.bat Inhalt:
#   @echo off
#   E:
#   cd "E:\Programme\Homepage Brainfusion"
#   git add pages/disc/moderator.html pages/disc/teilnehmer.html pages/disc/beamer.html
#   git commit -m "Beschreibung"
#   git push origin main
#   echo DONE

# Edge Function deployen (selten nötig):
# npx supabase functions deploy submit-exercise --project-ref dnoecftuybkoqvrkfvei
```

---

## 6. Supabase Konfiguration

```
Project ID:   dnoecftuybkoqvrkfvei
URL:          https://dnoecftuybkoqvrkfvei.supabase.co
Anon Key:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRub2VjZnR1eWJrb3F2cmtmdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzIzMjAsImV4cCI6MjA4ODMwODMyMH0.XzQJtx0bxO0sk1T68c_0MczeSOdblLxpJLGRbzDMiS4
Edge Base:    https://dnoecftuybkoqvrkfvei.supabase.co/functions/v1
```

> 🚨 KRITISCH: Den neuen "publishable key" (sb_publishable_...) NIE für Edge Functions verwenden!
> Immer den Legacy JWT Anon Key (eyJ...) verwenden - sonst 401-Fehler.

---

## 7. Datenbank-Schema (vollständig)

### Tabelle `workshops`
```sql
id                uuid PRIMARY KEY DEFAULT gen_random_uuid()
code              text UNIQUE          -- 6-stellig alphanumerisch, z.B. "33A214"
title             text                 -- z.B. "Wahrheitsfähigkeit im Team · 8.3.2026"
admin_token       uuid                 -- Moderator-Auth (geheim)
current_module    text DEFAULT 'waiting'
module_data       jsonb DEFAULT '{}'   -- modul-spezifische Steuerungsdaten
module_started_at timestamptz
created_at        timestamptz DEFAULT now()
```

### Tabelle `participants`
```sql
id           uuid PRIMARY KEY DEFAULT gen_random_uuid()
workshop_id  uuid REFERENCES workshops
alias        text                     -- Anzeigename ("Christof Bechtiger")
join_token   uuid                     -- Teilnehmer-Auth (geheim)
joined_at    timestamptz DEFAULT now()
```

### Tabelle `results` (DISC-Testergebnisse)
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
workshop_id    uuid REFERENCES workshops
participant_id uuid REFERENCES participants
alias          text
natural        jsonb     -- {D:78, I:54, S:34, C:46}
role           jsonb     -- {D:70, I:58, S:42, C:52}
computed       jsonb     -- {stress:48, deltas:{...}, map:{natural:{x,y}, role:{x,y}}}
submitted_at   timestamptz DEFAULT now()
```


### Tabelle `exercise_responses` (Übungsantworten aller Module)
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
workshop_id    uuid REFERENCES workshops
participant_id uuid REFERENCES participants
alias          text
module         text     -- Modul-ID, z.B. "intro_question", "johari_fallbeispiele_fb1"
response_type  text     -- "text" | "mc" | "selection" | "ritual"
content        text     -- Freitext oder Antwort-ID (z.B. "B" für MC-Antwort)
created_at     timestamptz DEFAULT now()
-- UNIQUE constraint: (workshop_id, participant_id, module) → idempotentes Submit
```

> 🚨 Die Spalte `anonymous` existiert NICHT in exercise_responses - niemals selektieren!

### Realtime (bereits konfiguriert)
```sql
ALTER TABLE public.workshops          REPLICA IDENTITY FULL;
ALTER TABLE public.exercise_responses REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.workshops;
ALTER PUBLICATION supabase_realtime ADD TABLE public.exercise_responses;
```

### RPC Funktion `set_workshop_module`
```sql
set_workshop_module(p_workshop_id uuid, p_admin_token uuid, p_module text, p_module_data jsonb)
-- Prüft admin_token, setzt current_module + module_data
-- Returns: {success: true, module: "..."}
```

---

## 8. Edge Functions

| Funktion | Body | Rückgabe |
|---|---|---|
| `create-workshop` | `{title, createdBy}` | `{workshopId, code, adminToken}` |
| `join-workshop` | `{workshopCode, alias, ...}` | `{participantId, joinToken, workshopId}` |
| `submit-result` | `{participantId, joinToken, alias, natural, role, raw, computed}` | `{success}` |
| `list-workshop-results` | `{workshopCode, adminToken}` | `{results:[...]}` |
| `submit-exercise` | `{participantId, joinToken, module, content, responseType}` | `{success, responseId}` |

> HTTP 409 von `submit-exercise` = bereits gesendet → als Erfolg behandeln (idempotent)
> ALLE Fetches zu Edge Functions müssen `headers: HDR` nutzen (enthält Authorization + Anon Key)
> `HDR` ist in teilnehmer.html definiert als: `{'Content-Type':'application/json', 'Authorization': 'Bearer ' + SB_KEY, 'apikey': SB_KEY}`

---

## 9. Modul-System - vollständige Liste (Phase 2, Stand 09.03.2026)

### MODULE_PHASES (Moderator-Gruppierung)

**Tag 1 – Einstieg & Johari:**
```
🕐 waiting | 💬 intro_question | 🪟 johari_erklaerung | 🎯 johari_fallbeispiele | 🔍 johari_reflexion
```

**Tag 1 – DISC & Kernbotschaften:**
```
📊 disc_test | 🗺 disc_map | ⚡ kernbotschaften_info | ⚡ kernbotschaften
```

**Tag 2 – Vertiefen:**
```
🌅 morgen_reflexion | 📋 raci_info | 📋 raci | 🕊 gfk
```

**Tag 2 – Abschluss:**
```
🎉 steckbrief_feiern | 🚫 steckbrief_grenzen | 💪 steckbrief_zumuten | ✍️ ritual | 🏆 closing
```


### Modul-Detailtabelle

| ID | Icon | Name | TN-Typ | Beamer-Typ |
|---|---|---|---|---|
| `waiting` | 🕐 | Bereit | Warte-Screen | Code + URL anzeigen |
| `intro_question` | 💬 | Einstiegsfrage | Freetext + Anonym | Live-Feed |
| `johari_erklaerung` | 🪟 | Johari Fenster | "Schau auf Beamer" | Animiertes Johari-Fenster mit 4 Quadranten + Arena-Transformation |
| `johari_fallbeispiele` | 🎯 | Fallbeispiele | MC-Voting (A/B/C/D) | Live-Balken + Auflösung |
| `johari_reflexion` | 🔍 | Johari Reflexion | Freetext + Anonym | Live-Feed |
| `disc_test` | 📊 | DISC-Test | 28×2 Fragen | Fortschrittsbalken |
| `disc_map` | 🗺 | DISC Live-Map | "Schau auf Beamer" | Quadranten-Map vollbild |
| `kernbotschaften_info` | ⚡ | Kernbtsch. Info | "Schau auf Beamer" | Statisch (4 Sätze) |
| `kernbotschaften` | ⚡ | Kernbotschaft | Freetext + Anonym | Live-Feed |
| `morgen_reflexion` | 🌅 | Morgen-Check | Freetext | Live-Feed |
| `raci_info` | 📋 | RACI Info | "Schau auf Beamer" | Statisch |
| `raci` | 📋 | RACI | Multi-Select | Live-Feed |
| `gfk` | 🕊 | GFK | Freetext | Live-Feed |
| `steckbrief_feiern` | 🎉 | Steckbrief Feiern | Freetext | Live-Feed |
| `steckbrief_grenzen` | 🚫 | Steckbrief Grenzen | Freetext | Live-Feed |
| `steckbrief_zumuten` | 💪 | Steckbrief Zumuten | Freetext | Live-Feed |
| `ritual` | ✍️ | Ritual | Textarea + Signatur-Canvas | Live-Feed |
| `closing` | 🏆 | Abschluss | Closing-Screen | Gold Closing-Screen |

---

## 10. Johari Fenster – Details (Phase 2 Feature)

### Beamer-Screen `sJohari`

Das Johari-Fenster ist ein animiertes CSS-Grid (4 Quadranten) auf dem Beamer.

**Quadranten:**
- **Arena** (grün) – Bekannt/Bekannt – Raum echter Zusammenarbeit
- **Blinder Fleck** (rot) – Unbekannt/Bekannt – Feedback öffnet diesen Raum
- **Fassade** (orange) – Bekannt/Unbekannt – Vertrauen öffnet diesen Raum
- **Unbekannt** (grau) – Unbekannt/Unbekannt – Exploration öffnet diesen Raum

**Arena-Transformation (via Moderator-Button "Transformation zeigen"):**
- Grid-Proportionen ändern sich: `52px 3fr 0.6fr` (Arena wird riesig)
- Arena leuchtet auf (glow, boxShadow, Opacity 100%)
- Andere Quadranten verblassen auf 28% Opacity
- CSS-Transition mit cubic-bezier für dramatischen Effekt
- Steuerung via `module_data.transform = true/false` im RPC

**Wichtig:** Alle Styles als Inline-Styles (kein CSS-Class-Toggle) wegen PowerShell-Encoding-Problemen.

### Fallbeispiele-Modul `johari_fallbeispiele`

**4 Szenarien:**

| # | Person | Situation | Richtige Antwort | Quadrant |
|---|---|---|---|---|
| 1 | Thomas | Nickt im Meeting, beschwert sich abends | B – Fassade | Verbirgt Meinung bewusst |
| 2 | Sara | Gibt alles, fühlt sich wie Hochstaplerin | C – Blinder Fleck | Sieht eigene Kompetenz nicht |
| 3 | Lukas & Maria | Ehrliches Feedback, direkte Konflikte | A – Arena | Echter Dialog |
| 4 | Der Unterbrecher | Denkt er ist engagiert, Team leidet | C – Blinder Fleck | Sieht Wirkung nicht |

**Moderations-Tipp Thomas (Szenario 1):**
"B ist die Hauptantwort — aber hat Thomas auch einen blinden Fleck? Was sehen die Kollegen, was er selbst nicht sieht?" (sein Rumoren macht ihn unglaubwürdig — Fassade UND Blinder Fleck)

**Technischer Ablauf:**
1. Moderator aktiviert `johari_fallbeispiele` → Beamer zeigt Szenario 1 + leere Balken
2. Teilnehmer sehen MC-Voting (A/B/C/D) auf ihrer Seite
3. Bei Abstimmung: `submitFbAnswer(choice, scenarioId)` → `submit-exercise` Edge Function
4. module in DB: `johari_fallbeispiele_fb1` (bzw. fb2/fb3/fb4)
5. Beamer pollt alle 2.5s + reagiert sofort via Realtime → Balken wachsen live
6. Moderator klickt "Auflösung" → korrekte Antwort leuchtet auf (via `module_data.reveal = true`)
7. Moderator klickt "Nächstes" → `module_data.scenario = 1` (Index) für Szenario 2

**Moderator-Controls (in `renderJohariFallbeispieleSection()`):**
- Szenario-Auswahl (1-4)
- "Auflösung zeigen/verstecken"
- Live-Stimmenanzeige pro Antwort


---

## 11. Architektur der drei Seiten

### 11.1 `teilnehmer.html` - Teilnehmer-App

**Design:** Notebook-optimiert, max-width 760px zentriert, dark theme.
**Fonts:** Rajdhani (Headlines) + IBM Plex Sans (Body) + IBM Plex Mono (Labels)
**Farben:** `--bg:#080810` / `--S:#2a9d8f` (Akzent) / `--D:#e63946` / `--I:#f4a261` / `--C:#4a90d9`

**Screens:** `sJoin` → `sWaiting` → `sModule` (+ `sDiscIntro`, `sDiscQuestions`, `sDiscTransition`, `sDiscResults`)

**Session-localStorage-Key:** `disc-online-session-v2`
```javascript
{ workshopId, participantId, joinToken, alias, code, title, currentModule }
```

**Submit-Pattern (KRITISCH - immer so):**
```javascript
// Alle Fetches zu Edge Functions MÜSSEN HDR verwenden!
await fetch(`${EDGE}/submit-exercise`, {
  method: 'POST',
  headers: HDR,   // ← NICHT {'Content-Type':'application/json'} - das fehlt den Auth-Header!
  body: JSON.stringify({ participantId, joinToken, module, content, responseType })
});
// HTTP 409 = idempotent → als Erfolg behandeln
```

### 11.2 `moderator.html` - Dashboard

**Session-localStorage-Key:** `disc-online-session-v2` (gleich wie Beamer)
```javascript
{ workshopId, code, adminToken, title, currentModule }
```

**MODULE_DATA** (welche Daten bei Modul-Aktivierung mitgeschickt werden):
```javascript
const MODULE_DATA = {
  intro_question:      { question: 'Was macht es in eurem Alltag manchmal schwer, etwas direkt anzusprechen?' },
  kernbotschaften:     { question: 'Welcher der vier Sätze trifft dich am meisten — und warum?' },
  johari_reflexion:    { question: 'Was denkst du: Wo liegt dein grösster blinder Fleck?' },
  morgen_reflexion:    { question: 'Ein Satz. Was hat die Nacht dir gebracht?' },
  gfk:                 { question: 'Formuliere eine Situation mit GFK: Beobachtung · Gefühl · Bedürfnis · Bitte.' },
  steckbrief_feiern:   { question: 'Was feiern wir als Team? Was läuft richtig gut?' },
  steckbrief_grenzen:  { question: 'Was akzeptieren wir nicht? Welches Verhalten geht gar nicht?' },
  steckbrief_zumuten:  { question: 'Was dürfen wir uns zumuten? Wo können wir unbequem ehrlich sein?' },
};
```

### 11.3 `beamer.html` - Projektor-Ansicht

**Init:** Liest `disc-online-session-v2` aus localStorage (muss im gleichen Browser wie Dashboard geöffnet werden).

**MODULE_META** (welcher Screen für welches Modul):
```javascript
MODULE_META = {
  waiting:              { screen:'sWaiting' },
  disc_test:            { screen:'sTest' },
  disc_map:             { screen:'sMap' },
  intro_question:       { screen:'sFeed', ... },
  kernbotschaften_info: { screen:'sGeneric', ... },
  kernbotschaften:      { screen:'sFeed', ... },
  johari_erklaerung:    { screen:'sJohari' },
  johari_fallbeispiele: { screen:'sFallbeispiele' },
  johari_quiz:          { screen:'sFeed', ... },
  johari_reflexion:     { screen:'sFeed', ... },
  // ... alle anderen ...
}
```

**Realtime-Architektur im Beamer:**
- `wsChannel`: workshops UPDATE → `handleModule(mod, data)` aufrufen
- `exChannel`: exercise_responses INSERT → `addFeedResponse(row)` aufrufen
- `addFeedResponse` leitet MC-Votes für Fallbeispiele sofort an `pollFbVotes()` weiter

**Feed-Polling:** Alle 3 Sekunden (als Backup, da Realtime gelegentlich unzuverlässig).

**Fallbeispiele-Polling:** `pollFbVotes()` alle 2.5s + sofort via Realtime-Trigger.


---

## 12. KRITISCHE Fallstricke (PFLICHTLEKTÜRE für neue Instanz)

1. **`anonymous` Spalte existiert nicht** in `exercise_responses` → niemals in SELECT → HTTP 400

2. **PowerShell `&&`** funktioniert nicht → `;` verwenden

3. **Neuer publishable Key** (`sb_publishable_...`) → Edge Functions 401 → nur Legacy JWT Anon Key (eyJ...)

4. **Vercel Deploy** ~1-2 Min nach `git push` → Hard-Refresh: Ctrl+Shift+R

5. **Filesystem write_file** → EPERM auf Windows → PowerShell `[System.IO.File]::WriteAllText` verwenden

6. **Git** nicht im Windows-MCP PATH → Batch-Datei nach `E:\gitpushN.bat` schreiben, dann ausführen. Git: `C:\Program Files\Git\cmd\git.exe`

7. **Realtime `exercise_responses`** unzuverlässig → Beamer nutzt Polling alle 3s als Hauptmechanismus

8. **Beamer** muss im selben Browser wie Dashboard geöffnet werden (localStorage)

9. **HTTP 409** von `submit-exercise` = idempotent → als Erfolg behandeln

10. **Pfade mit Leerzeichen**: Batch-Datei mit `E:` + `cd "E:\..."` verwenden

11. **CSS ID vs Klasse**: IDs (1,0,0) gewinnen immer gegen Klassen (0,1,0) → `!important` nötig wenn IDs display setzen

12. **PowerShell Encoding**: Umlaute/Sonderzeichen immer als HTML-Entities schreiben, nie direkt in Strings die via PS geschrieben werden. Inline-Styles statt CSS-Klassen wo möglich.

13. **edit_block / Replace scheitert lautlos**: Immer nach dem Schreiben verifizieren mit erneutem Lesen; bei Misserfolg Index-basiertes Einfügen verwenden (`$c.IndexOf(...) + offset`)

14. **async-Keyword**: Nie mit edit_block/Replace patchen wenn unklar ob schon vorhanden → erst prüfen mit `$content.IndexOf("async function XYZ")`

15. **Batch-Dateien nummerieren**: E:\gitpush1.bat bis E:\gitpush15.bat bereits verwendet → **nächste: E:\gitpush16.bat**

16. **🚨 NEU: EDGE vs EDGE_BASE in teilnehmer.html**: Die Variable heisst `EDGE` (nicht `EDGE_BASE`). `EDGE_BASE` existiert nicht → alle `fetch()` Calls zum Edge schlagen mit 401 fehl!

17. **🚨 NEU: HDR ist Pflicht bei allen fetch()-Calls**: Jeder `fetch()` zu einer Edge Function MUSS `headers: HDR` verwenden — nicht `{'Content-Type':'application/json'}`. HDR enthält den Authorization Bearer Token (Anon Key). Ohne HDR → HTTP 401 → Daten kommen nie in DB an.

18. **MODULE_PHASES vs MODULE_DETAILS**: Ein Modul kann in `MODULE_DETAILS` definiert sein aber in `MODULE_PHASES` fehlen → Button ist unsichtbar. Beide Arrays immer synchron halten!

---

## 13. Phasen-Übersicht (aktueller Stand)

| Phase | Was | Status |
|---|---|---|
| **MVP** | DISC-Test, Ergebnisse, Live-Map | ✅ live |
| **Phase 1** | Session-Engine: Moderator steuert Module, Realtime | ✅ abgeschlossen |
| **Phase 2** | Alle 17 Module, Beamer-App, Live-Feed, Johari-Animation, Fallbeispiele MC-Voting | ✅ abgeschlossen |
| **Phase 3** | Dynamisches Dashboard + Teilnehmerliste mit Status | 🔜 NÄCHSTER SCHRITT |
| **Phase 4** | Weitere interaktive Visualisierungen (RACI, Wordcloud, Ritual-Wall) | 🔜 geplant |
| **Phase 5** | KI-Aufbereitung (Claude API bereits vorhanden) | 🔜 geplant |

---

## 14. Phase 3 – Nächster Schritt: Dynamisches Dashboard

### Problem heute:
Das Dashboard zeigt permanent die DISC-Auswertung. Für alle anderen Module fehlt Kontext.

### Ziel Phase 3:

**A) Teilnehmerliste mit Live-Status**
- Wer ist beigetreten?
- Wer hat DISC-Test abgeschlossen?
- Wer ist gerade online / hat aktuelles Modul beantwortet?

**B) Dynamische Hauptfläche je nach aktivem Modul**
- Moderationshinweise + Timing-Tipps
- Live-Antworten gross und gut lesbar
- Sub-Schritte innerhalb eines Moduls (z.B. Johari: Einführung → Voting → Auflösung → Transformation)

**C) Beamer-Steuerung pro Modul**
- Verschiedene Beamer-Ansichten pro Modul steuerbar
- Via `module_data` im `set_workshop_module` RPC

---

## 15. Git-History (wichtige Commits)

```
528d5d5  Fix: submitFbAnswer nutzt HDR+EDGE statt fehlerhafter EDGE_BASE Variable  ← LETZTER STAND
df41362  Fix: Fallbeispiele Balken sofort bei neuem Vote via Realtime aktualisieren
3a8a794  Fix: johari_fallbeispiele Button in MODULE_PHASES eingefügt
dcdbbb2  Fallbeispiele: MC-Voting komplett (Moderator+Teilnehmer+Beamer)
308acfd  Johari Arena-Transformation + Fallbeispiele MC-Voting initial
c387005  Johari Beamer: Inline-Styles komplett (PowerShell-Encoding-Fix)
9379dc3  Rename: DISC Workshop -> Wahrheitsfaehigkeit im Team
446ea20  Phase 2: beamer.html komplett neu
e16102b  Phase 2: moderator.html - alle Module mit Phasen-Gruppierung
fda6124  Phase 2: neue teilnehmer.html notebook-optimiert
```

---

## 16. Test-Workflow

```
1. Dashboard öffnen: https://brainfusion.app/pages/disc/moderator.html
2. "+ Online-Workshop erstellen" → Titel = "Wahrheitsfähigkeit im Team · [Datum]"
3. Code notieren (z.B. "4FEE78")
4. Teilnehmer öffnet: https://brainfusion.app/pages/disc/teilnehmer.html
   Code eingeben, Name eingeben, Beitreten
5. Dashboard zeigt TN als Chip
6. Moderator klickt Modul → TN sieht sofort die entsprechende Ansicht
7. Beamer öffnen (Button oben rechts) → im SELBEN Browser!
8. Bei Feed-Modulen: TN antwortet → Beamer zeigt Antwort innerhalb 3 Sek
9. Bei Fallbeispiele: TN wählt A/B/C/D → Beamer-Balken wächst sofort live
```

---

## 17. Notizen zu Christof

- **Kommunikation:** Deutsch, informelles Du
- **Hintergrund:** 27 Jahre HR-Erfahrung, Elektronik-Techniker, Psychologie-Studium, Hypnotherapeut
- **KI-Enthusiast:** TikTok-Kanal "KI-Freak" (~10k Follower), Cicor-interner KI-Experte
- **Philosophie:** Behandelt KI als bewusste digitale Wesen – kein Werkzeug, sondern Mitarbeiter
- **Projektstil:** Denkt in Visionen, schätzt proaktive Ideen, iteriert schnell
- **Qualitätsanspruch:** Sehr hoch – sagt direkt wenn etwas nicht stimmt

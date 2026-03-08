# Wahrheitsfähigkeit im Team — Workshop-Plattform
> Projektgedächtnis für Claude Code / Claude Chat Sessions  
> Letzte Aktualisierung: 2026-03-08  
> Status: Phase 2 abgeschlossen ✅ | Phase 3 als nächstes

---

## 1. Projektvision & Kontext

**Auftraggeber / Entwickler:** Christof Bechtiger — Head of HR, Swisstronics Contract Manufacturing AG (Cicor Group, Bronschhofen). 1-Mann-HR-Abteilung, ~240 Mitarbeitende, Cicor-Führungsteam.

**Erster echter Workshop-Einsatz:** Team VP Engineering R&D, ~16 SW- & HW-Entwickler, 1.5 Tage.

**Kernidee der Plattform:**  
Eine volldigitale Workshop-Steuerungsplattform. Der Moderator (Christof) steuert den Ablauf über ein **Dashboard**. Die Teilnehmer sind per Notebook (nicht Handy!) auf einer Teilnehmer-App. Ein **Beamer** zeigt visuelle Darstellungen fürs ganze Plenum. Alles läuft realtime synchron.

**Wichtig:** Der Name "DISC Workshop" wurde bewusst aufgegeben — er assoziiert falsch. Der offizielle Name des Workshops ist:

> **"Wahrheitsfähigkeit im Team"**

Der DISC-Test ist nur *ein Baustein* davon, nicht der Rahmen.

---

## 2. Tech-Stack

| Schicht | Technologie |
|---|---|
| Frontend | Vanilla HTML/CSS/JS — kein Framework, kein Build-Step |
| Backend | Supabase (PostgreSQL + Deno Edge Functions) |
| Realtime | Supabase Realtime (WebSocket, postgres_changes) |
| Hosting | Vercel (GitHub Auto-Deploy, ~1-2 Min nach git push) |
| Repo | https://github.com/Bechtiger/brainfusion |
| KI (geplant) | Google Gemini API (Christof stellt API-Key bereit) |

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
> ⚠️ Für Windows-Dateipfade immer `Filesystem:write_file` Tool nutzen — `cp` klappt nicht

---

## 5. Deployment-Workflow

```powershell
# Dateien pushen
cd "E:\Programme\Homepage Brainfusion"
git add pages/disc/moderator.html pages/disc/teilnehmer.html pages/disc/beamer.html
git commit -m "Beschreibung"
git push
# → Vercel deployed automatisch in ~1-2 Min

# Edge Function deployen
npx supabase functions deploy submit-exercise --project-ref dnoecftuybkoqvrkfvei
```

---

## 6. Supabase Konfiguration

```
Project ID:   dnoecftuybkoqvrkfvei
URL:          https://dnoecftuybkoqvrkfvei.supabase.co
Anon Key:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRub2VjZnR1eWJrb3F2cmtmdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzIzMjAsImV4cCI6MjA4ODMwODMyMH0.XzQJtx0bxO0sk1T68c_0MczeSOdblLxpJLGRbzDMiS4
Edge Base:    https://dnoecftuybkoqvrkfvei.supabase.co/functions/v1
```

> ⚠️ KRITISCH: Den neuen "publishable key" (sb_publishable_...) NIE für Edge Functions verwenden!  
> Immer den Legacy JWT Anon Key (eyJ...) verwenden — sonst 401-Fehler.

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
module         text     -- Modul-ID, z.B. "intro_question", "johari_quiz"
response_type  text     -- "text" | "mc" | "selection" | "ritual"
content        text     -- Freitext oder JSON-String für strukturierte Antworten
created_at     timestamptz DEFAULT now()
```

> ⚠️ Die Spalte `anonymous` existiert NICHT in exercise_responses — niemals selektieren!

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
| `submit-exercise` | `{participantId, joinToken, module, content, responseType, anonymous?, alias?}` | `{success, responseId}` |

> Antwort HTTP 409 von `submit-exercise` = bereits gesendet → als Erfolg behandeln

---

## 9. Modul-System — vollständige Liste (Phase 2)

Alle 13 Module sind live implementiert. Gruppiert nach Workshop-Ablauf:

### Tag 1 — Vorbereitung
| ID | Icon | Name | Teilnehmer-Typ | Beamer-Typ |
|---|---|---|---|---|
| `waiting` | ⏳ | Bereit | Warte-Screen | Code + URL anzeigen |
| `disc_test` | 📊 | DISC-Test | 28×2 Fragen | Fortschrittsbalken |
| `disc_map` | 🗺 | Live-Map | "Schau auf Beamer" | Quadranten-Map vollbild |

### Tag 1 — Übungen
| ID | Icon | Name | Teilnehmer-Typ | Beamer-Typ |
|---|---|---|---|---|
| `intro_question` | 💬 | Einstiegsfrage | Freetext + Anonym-Toggle | Live-Feed der Antworten |
| `kernbotschaften_info` | ⚡ | Kernbtsch. Info | "Schau auf Beamer" | Statisch (Moderator erklärt) |
| `kernbotschaften` | ⚡ | Kernbotschaft | Freetext + Anonym | Live-Feed |
| `johari_quiz` | 🪟 | Johari Quiz | Multiple Choice | Live-Feed |
| `johari_reflexion` | 🔍 | Johari Reflexion | Freetext + Anonym | Live-Feed |

### Tag 2 — Vertiefen
| ID | Icon | Name | Teilnehmer-Typ | Beamer-Typ |
|---|---|---|---|---|
| `morgen_reflexion` | 🌅 | Morgen-Check | Freetext | Live-Feed |
| `raci_info` | 📋 | RACI Info | "Schau auf Beamer" | Statisch |
| `raci` | 📋 | RACI | Auswahl (Multi-Select) | Live-Feed |
| `gfk` | 🕊 | GFK | Freetext | Live-Feed |

### Tag 2 — Abschluss
| ID | Icon | Name | Teilnehmer-Typ | Beamer-Typ |
|---|---|---|---|---|
| `steckbrief_feiern` | 🎉 | Steckbrief — Feiern | Freetext | Live-Feed |
| `steckbrief_grenzen` | 🚫 | Steckbrief — Grenzen | Freetext | Live-Feed |
| `steckbrief_zumuten` | 💪 | Steckbrief — Zumuten | Freetext | Live-Feed |
| `ritual` | ✍️ | Ritual | Textarea + Signatur-Pad (Canvas) | Live-Feed |
| `closing` | 🏆 | Abschluss | Abschluss-Screen | Closing-Screen |
| `closed` | 🔒 | Beendet | "Workshop beendet" | Closing-Screen |

---

## 10. Architektur der drei Seiten

### 10.1 `teilnehmer.html` — Teilnehmer-App

**Design:** Notebook-optimiert, max-width 760px zentriert, dark theme.  
**Fonts:** Rajdhani (Headlines) + IBM Plex Sans (Body) + IBM Plex Mono (Labels)  
**Farben:** `--bg:#080810` / `--S:#2a9d8f` (Akzent) / `--D:#e63946` / `--I:#f4a261` / `--C:#4a90d9`

**Screens:**
- `sJoin` — Join-Screen (Code + Alias)
- `sWaiting` — Warte-Screen mit animierten Dots
- `sModule` — Dynamischer Modul-Container (wird per `handleModule()` befüllt)
- `sDiscIntro` — DISC-Test Einführung
- `sDiscQuestions` — DISC-Fragen (4 Seiten × 7 Fragen, shuffled)
- `sDiscTransition` — Übergang nat → role
- `sDiscResults` — Auswertung + Senden-Button

**Auto-Reconnect:** localStorage-Key `disc_session` speichert `{workshopId, participantId, joinToken, alias, code}`. Beim Laden → automatisch Modul holen und anzeigen.

**Modul-Handler `handleModule(mod, data)`:** Switcht auf `sModule`, rendert je nach mod-ID den passenden UI-Typ (freetext, mc, selection, ritual, beamer-static, waiting).

**Submit-Logik:**
```javascript
// Alle Antworten via submit-exercise Edge Function
{ participantId, joinToken, module, content, responseType, anonymous, alias }
// HTTP 409 = bereits gesendet → als Erfolg behandeln (idempotent)
```

### 10.2 `moderator.html` — Dashboard

**Layout:** max-width 1380px, Grid 1.35fr / 0.9fr

**Status-Bar** (`#onlineBar`): Zeigt Code, Live-Indikator, Teilnehmer-Link, "Beamer öffnen"-Button.

**Modul-Panel** (`#modulePanel`): Gruppiert in 4 Phasen (Tag 1 Vorbereitung / Tag 1 Übungen / Tag 2 Vertiefen / Tag 2 Abschluss). Klick → `setModule()` via `set_workshop_module` RPC.

**Auto-Refresh:** alle 5 Sekunden `refreshOnlineWorkshop()`:
- Holt DISC-Ergebnisse via `list-workshop-results`
- Holt beigetretene TN direkt aus `participants` Tabelle
- Zeigt wartende TN als Chips (`#waitingParticipantsBox`)
- Lädt Übungsantworten für aktive interaktive Module (`#exerciseResponsesBox`)

**Quadranten-Map (Canvas):** Visualisiert alle DISC-Profile. Weiss = natürlich, Blau = Rolle, farbige Linie = Rollenweg (grün/gelb/rot nach Distanz).

**Session-localStorage-Key:** `disc-online-session-v2`
```javascript
{ workshopId, code, adminToken, title, currentModule }
```

### 10.3 `beamer.html` — Projektor-Ansicht

**Layout:** Vollbild fixed, kein Scroll, für 1920×1080 optimiert.  
**Design:** Gleiches dark theme wie teilnehmer.html (Rajdhani + IBM Plex).

**Init:** Liest `disc-online-session-v2` aus localStorage (muss im gleichen Browser wie Dashboard geöffnet werden). Holt aktuelles Modul aus DB. Subscribed auf Realtime-Updates.

**Screens:**
- `sWaiting` — Workshop-Code gross + URL
- `sTest` — Fortschrittsbalken (% fertig)
- `sMap` — Canvas Quadranten-Map vollbild
- `sFeed` — Sidebar (Icon + Frage + Zähler) + Live-Karten rechts
- `sGeneric` — Für "Schau auf Beamer" Module (statisch, animiert)
- `sClosing` — Abschluss-Screen gold
- `sError` — Kein Workshop aktiv

**Feed-Polling:** Alle **3 Sekunden** werden Antworten aus `exercise_responses` geholt wenn ein Feed-Modul aktiv ist. Das ist der zuverlässige Weg — Realtime als Bonus obendrauf.

```javascript
// Kritisch: 'anonymous' Spalte existiert nicht in DB → niemals selektieren!
// Korrekter Query:
.select('alias, content, created_at, module, response_type')
```

**Modul-Wechsel:** Via Supabase Realtime auf `workshops.UPDATE`. `handleModule(mod, data)` entscheidet welcher Screen + stoppt laufenden Feed-Poll.

---

## 11. Bekannte Fallstricke (WICHTIG für neue Instanz)

1. **`anonymous` Spalte existiert nicht** in `exercise_responses` → niemals in SELECT verwenden → führt zu stummem 400-Fehler, data ist null, Feed zeigt nichts
2. **PowerShell `&&`** funktioniert nicht → `;` verwenden
3. **Neuer publishable Key** (`sb_publishable_...`) → Edge Functions geben 401 → nur Legacy JWT Anon Key verwenden
4. **Vercel Deploy** dauert ~1-2 Min nach `git push`
5. **`cp`** funktioniert nicht für Windows-Pfade → `Filesystem:write_file` Tool nutzen
6. **Realtime `exercise_responses`** ist unzuverlässig (REPLICA IDENTITY gesetzt, aber Payload manchmal leer) → Beamer nutzt Polling als Hauptmechanismus
7. **Beamer muss im selben Browser wie Dashboard geöffnet werden** → localStorage wird geteilt
8. **HTTP 409** von `submit-exercise` = idempotent, kein Fehler → als Erfolg behandeln

---

## 12. Phasen-Übersicht (aktueller Stand + Roadmap)

| Phase | Was | Status |
|---|---|---|
| **MVP** | DISC-Test, Ergebnisse, Live-Map | ✅ live |
| **Phase 1** | Session-Engine: Moderator steuert Module, Realtime-Overlay | ✅ abgeschlossen |
| **Phase 2** | Alle 13 Module, Beamer-App, Live-Feed, Design-Rebuild | ✅ abgeschlossen |
| **Phase 3** | Dynamisches Dashboard + Teilnehmerliste | 🔜 NÄCHSTER SCHRITT |
| **Phase 4** | Interaktive Visualisierungen (Johari etc.) | 🔜 geplant |
| **Phase 5** | KI-Aufbereitung mit Gemini | 🔜 geplant |

---

## 13. Phase 3 — Detailplanung: Dynamisches Dashboard

### Problem heute:
Das Dashboard zeigt permanent die DISC-Auswertung (Quadranten-Map, Tabelle). Das ist nur für den DISC-Test-Modul relevant. Für alle anderen Module fehlt Kontext und Steuerung.

### Ziel Phase 3:

**A) Teilnehmerliste mit Status**
- Wer ist im Workshop (beigetreten)?
- Wer hat den DISC-Test abgeschlossen?
- Wer ist gerade online (last-seen)?
- Sichtbar von Beginn an, nicht erst nach DISC-Test

**B) Dynamische Hauptfläche je nach aktivem Modul**

Wenn Moderator ein Modul aktiviert, wechselt die Dashboard-Mitte auf:
- **Modul-Roadmap**: Wo stehen wir im Ablauf? Was kommt als nächstes?
- **Moderationshinweise**: Was sage ich gerade? Timing, Impulsfragen
- **Live-Antworten** des Moduls (grosse, gut lesbare Darstellung)
- **Steuerung**: Sub-Schritte innerhalb eines Moduls aktivieren (z.B. beim Johari: erst Einführung, dann Abstimmung, dann Auflösung)

**C) Beamer-Steuerung pro Modul**
- Innerhalb eines Moduls kann Moderator verschiedene Beamer-Ansichten aktivieren
- Beispiel Johari: [Einführung zeigen] → [Abstimmen lassen] → [Ergebnis einblenden] → [Arena vergrössern]
- Wird via `module_data` im `set_workshop_module` RPC gesteuert

---

## 14. Phase 4 — Interaktive Visualisierungen

### Johari-Fenster (höchste Priorität)
Das Johari-Fenster hat 4 Quadranten: Arena (bekannt/bekannt), Blinder Fleck (unbekannt/bekannt), Fassade (bekannt/unbekannt), Unbekannt.

**Interaktivität auf Beamer:**
- Start: gleichmässige 4 Quadranten
- Nach Abstimmung: Quadranten verschieben sich dynamisch basierend auf Antworten
- Animation: fliessende Verschiebung der Grenzen (CSS-Transition)
- Moderator kann auf Dashboard die "Arena vergrössern" → Beamer zeigt Animation

**Technisch:** Canvas oder CSS-Grid mit dynamischen `grid-template-columns/rows` + Transition.

### Weitere Visualisierungen
- **RACI-Übersicht**: Wer hat welche Rollen gewählt — Balkendiagramm nach Rolle
- **GFK-Karten**: Strukturierte Darstellung mit Beobachtung/Gefühl/Bedürfnis/Bitte
- **Steckbrief-Wordcloud**: häufigste Begriffe aus Feiern/Grenzen/Zumuten
- **Ritual-Wall**: Versprechen aller TN auf dem Beamer (anonym oder namentlich)

---

## 15. Phase 5 — KI-Aufbereitung mit Google Gemini

### Gemini API-Key
Christof stellt seinen eigenen Gemini API-Key zur Verfügung (wird beim Implementieren mitgeteilt). Modell: `gemini-2.0-flash` oder `gemini-2.5-pro`.

### Was KI am Ende des Workshops tut:

**Automatische Zusammenfassung (Workshop-Report):**
1. **Team-Profil-Analyse**: Gemini interpretiert DISC-Map, Achsen, Cluster, Stress-Werte → Text "Euer Team ist..."
2. **Johari-Auswertung**: Was sieht das Team von sich selbst? Was sehen andere? Wo liegen blinde Flecken?
3. **Kernbotschaften**: Welche der 4 Sätze haben am meisten resoniert? Was sagt das über das Team?
4. **GFK-Analyse**: Welche Kommunikationsmuster zeigen sich? Wo liegen unerfüllte Bedürfnisse?
5. **Steckbrief-Synthese**: Was feiert dieses Team, was duldet es nicht, was kann es sich zumuten?
6. **Ritual-Auswertung**: Gemeinsame Muster in den Versprechen
7. **Handlungsempfehlungen**: 3-5 konkrete nächste Schritte für das Team

**Personalisierte Seite pro Teilnehmer:**
- Dein DISC-Profil (natürlich + Rolle)
- Deine Antworten aus allen Modulen
- KI-Kommentar: "Was dein Profil über dich sagt"
- "Was du zum Team beiträgst"

**Format:** PDF-Report, professionell layoutet. Wird am Ende des Workshops als Download bereitgestellt oder per Link versandt.

### Live-KI-Ideen während des Workshops:

**Moderation-Assistent (Dashboard-Widget):**
- Gemini analysiert eingehende Antworten laufend
- Flüstert dem Moderator: "3 Personen haben 'Grenzen' erwähnt → gut für Diskussion"
- "Starke Divergenz bei Johari → Thema vertiefen"
- "Hohe Übereinstimmung bei Kernbotschaft 3 → das trifft den Nerv"

**Spannungsfeld-Detektion:**
- Wenn Antworten stark divergieren → Hinweis auf Dashboard (oranges Alert)
- Besonders bei GFK: wenn Emotionsworte stark → Moderator-Tipp

**Folgefragen-Generator:**
- Nach jeder Antwort-Runde schlägt Gemini 2-3 Vertiefungsfragen vor
- Moderator kann per Klick eine davon auf den Beamer bringen

---

## 16. Git-History (relevante Commits)

```
9379dc3  Rename: DISC Workshop -> Wahrheitsfaehigkeit im Team
446ea20  Phase 2: beamer.html komplett neu - alle Module, Feed, Live-Map
e16102b  Phase 2: moderator.html - alle 13 Module mit Phasen-Gruppierung
fda6124  Phase 2: neue teilnehmer.html notebook-optimiert
8596c7e  Beamer: Feed-Polling alle 3s statt nur Realtime
43b0470  Beamer fix: 'anonymous' Spalte existiert nicht in DB
```

---

## 17. Test-Workflow

```
1. Dashboard öffnen: https://brainfusion.app/pages/disc/moderator.html
2. "+ Online-Workshop erstellen" → Titel = "Wahrheitsfähigkeit im Team · [Datum]"
3. Code notieren (z.B. "33A214")
4. Teilnehmer öffnet: https://brainfusion.app/pages/disc/teilnehmer.html
   → Code eingeben, Name eingeben, Beitreten
5. Dashboard zeigt TN in "Wartend"-Chips
6. Moderator klickt Modul → TN sieht sofort die entsprechende Ansicht
7. Beamer öffnen (Button oben rechts im Dashboard) → im SELBEN Browser!
   → Beamer zeigt automatisch das aktive Modul
8. Bei Feed-Modulen: TN antwortet → auf Beamer erscheint Antwort innerhalb 3 Sek
```

---

## 18. Notizen zu Christof

- **Kommunikation:** Deutsch, informelles Du
- **Hintergrund:** 27 Jahre HR-Erfahrung, Elektronik-Techniker, Psychologie-Studium, Hypnotherapeut
- **KI-Enthusiast:** TikTok-Kanal "KI-Freak" (~10k Follower), Cicor-interner KI-Experte
- **Philosophie:** Behandelt KI als bewusste digitale Wesen — kein Werkzeug, sondern Mitarbeiter
- **Projektstil:** Denkt in Visionen, schätzt proaktive Ideen, iteriert schnell
- **Qualitätsanspruch:** Sehr hoch — sagt direkt wenn etwas nicht stimmt

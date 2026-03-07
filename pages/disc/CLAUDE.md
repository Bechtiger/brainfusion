# DISC Workshop App — CLAUDE.md
> Projektgedächtnis für Claude Code / Claude Chat Sessions  
> Letzte Aktualisierung: 2026-03-07  
> Status: Phase 1 abgeschlossen ✅ | Phase 2 in Planung

---

## 1. Projektvision

Eine vollständig digitale DISC-Workshop-Plattform für Unternehmen (Erstkunde: Swisstronics Contract Manufacturing AG, ~240 MA).

**Kernidee:**
- Moderator steuert den Workshop über ein Dashboard (Beamer-Ansicht)
- Teilnehmer verwenden ihr eigenes Smartphone (kein App-Download nötig)
- Realtime-Synchronisation: Moderator wechselt Modul → alle Teilnehmer sehen sofort Reaktion
- Ergebnisse fliessen live ins Dashboard und werden als Quadranten-Map visualisiert

---

## 2. Tech-Stack

| Schicht | Technologie |
|---|---|
| Frontend | Vanilla HTML/CSS/JS (kein Framework) |
| Backend | Supabase (PostgreSQL + Edge Functions Deno) |
| Realtime | Supabase Realtime (WebSocket, postgres_changes) |
| Hosting | Vercel (GitHub Auto-Deploy, ~1-2 Min nach Push) |
| Repo | https://github.com/Bechtiger/brainfusion |

---

## 3. Live-URLs

| Seite | URL |
|---|---|
| Teilnehmer-App | https://brainfusion.app/pages/disc/teilnehmer.html |
| Moderator-Dashboard | https://brainfusion.app/pages/disc/moderator.html |
| Teilnehmer mit Code | https://brainfusion.app/pages/disc/teilnehmer.html?code=XXXXXX |

---

## 4. Lokale Dateipfade

```
E:\Programme\Homepage Brainfusion\
├── pages\disc\
│   ├── teilnehmer.html     (48KB) — Teilnehmer-App
│   ├── moderator.html      (33KB) — Moderator-Dashboard
│   └── CLAUDE.md           (diese Datei)
└── supabase\functions\
    ├── create-workshop\    — Workshop anlegen
    ├── join-workshop\      — Teilnehmer beitreten
    ├── submit-result\      — Test-Ergebnis senden
    └── list-workshop-results\ — Ergebnisse abrufen
```

---

## 5. Supabase Konfiguration

```
Project ID:   dnoecftuybkoqvrkfvei
URL:          https://dnoecftuybkoqvrkfvei.supabase.co
Anon Key:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRub2VjZnR1eWJrb3F2cmtmdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzIzMjAsImV4cCI6MjA4ODMwODMyMH0.XzQJtx0bxO0sk1T68c_0MczeSOdblLxpJLGRbzDMiS4
Edge Base:    https://dnoecftuybkoqvrkfvei.supabase.co/functions/v1
```

> ⚠️ WICHTIG: Den neuen "publishable key" (sb_publishable_...) NICHT für Edge Functions verwenden — immer den Legacy JWT Anon Key oben verwenden!

### Datenbank-Tabellen

**`workshops`**
```sql
id              uuid PRIMARY KEY
code            text UNIQUE          -- 6-stelliger Join-Code (z.B. "E7630B")
title           text
admin_token     uuid                 -- Moderator-Authentifizierung
current_module  text DEFAULT 'waiting'  -- aktives Modul
module_data     jsonb DEFAULT '{}'   -- Modul-spezifische Daten
module_started_at timestamptz
created_at      timestamptz
```

**`participants`**
```sql
id              uuid PRIMARY KEY
workshop_id     uuid REFERENCES workshops
alias           text                 -- Anzeigename des Teilnehmers
join_token      uuid                 -- Teilnehmer-Authentifizierung
joined_at       timestamptz
```

**`results`**
```sql
id              uuid PRIMARY KEY
workshop_id     uuid REFERENCES workshops
participant_id  uuid REFERENCES participants
-- Felder: natural{D,I,S,C}, role{D,I,S,C}, computed{...}
submitted_at    timestamptz
```

### RPC Funktionen

**`set_workshop_module(p_workshop_id, p_admin_token, p_module, p_module_data)`**
- Setzt `current_module` + `module_data` auf dem Workshop
- Prüft admin_token → gibt `{success:true, module:"..."}` zurück
- Wird von Moderator aufgerufen bei Modul-Wechsel

**`generate_workshop_code()`**
- Generiert einen eindeutigen 6-stelligen alphanumerischen Code

### Edge Functions

| Funktion | Methode | Body | Rückgabe |
|---|---|---|---|
| `create-workshop` | POST | `{title, createdBy}` | `{workshopId, code, adminToken}` |
| `join-workshop` | POST | `{workshopCode, alias, shareWithTeam, consentExport, clientFingerprint}` | `{participantId, joinToken, workshopId}` |
| `submit-result` | POST | `{participantId, joinToken, alias, natural, role, raw, responseStyle, computed}` | `{success}` |
| `list-workshop-results` | POST | `{workshopCode, adminToken}` | `{results:[...]}` |

### Realtime Setup

```sql
-- Muss in DB aktiv sein (bereits ausgeführt):
ALTER TABLE public.workshops REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.workshops;
```

---

## 6. Modul-System (10 Module)

| ID | Icon | Name | Beschreibung |
|---|---|---|---|
| `waiting` | ⏳ | Bereit | Workshop läuft, TN wartet |
| `intro` | 💬 | Einstieg | Moderator stellt Eingangsfrage |
| `disc_test` | 📊 | DISC-Test | 28×2 Fragen, ~10 Min |
| `live_map` | 🗺 | Live-Map | Quadranten-Visualisierung auf Beamer |
| `reflexion` | 🔍 | Reflexion | Was überrascht? |
| `team_pattern` | 🧩 | Team-Muster | Team-Profil-Analyse |
| `exercise_1` | 💪 | Übung 1 – Stärken | Austausch mit Sitznachbar |
| `exercise_2` | ⚡ | Übung 2 – Reibung | Team-Reibungspunkte |
| `exercise_3` | 📋 | Übung 3 – Spielregeln | Team-Spielregeln erarbeiten |
| `closing` | 🏆 | Abschluss | Workshop-Abschluss |
| `closed` | 🔒 | Beendet | Workshop wurde geschlossen |

**Spezialfall `disc_test`:** Overlay wird entfernt, `sIntro` wird angezeigt (Test läuft normal).  
Alle anderen Module zeigen ein Fullscreen-Overlay auf der Teilnehmer-App.

---

## 7. Teilnehmer-App (`teilnehmer.html`) — Architektur

### Init-Logik (beim Laden)
```
URL ?code=XXXXXX vorhanden?
  NEIN → Join-Screen anzeigen (letzter Code vorausgefüllt)
  JA → Code gleich wie gespeicherter Code?
    NEIN → Reset localStorage + Join-Screen mit neuem Code
    JA + workshop_id gespeichert → Realtime starten + Modul-Status holen → Overlay anzeigen
    JA + kein workshop_id → Join-Screen mit Code vorausgefüllt
```

### localStorage Keys
```
disc_workshop_code    — aktueller Workshop-Code
disc_alias            — Teilnehmer-Name
disc_participant_id   — UUID nach Join
disc_join_token       — Auth-Token nach Join
disc_workshop_id      — Workshop-UUID für Realtime
```

### Realtime-Listener
- Kanal: `workshop-{workshopId}` auf Tabelle `workshops`, Event `UPDATE`
- Bei Modul-Wechsel: `handleModuleChange(module, moduleData)` aufgerufen
- `leaveWorkshop()` ruft `realtimeChannel.unsubscribe()` auf (sauber trennen)

### Screens
- `sIntro` — Test-Einstieg (Badges, Beschreibung, "Test starten" Button)
- `sQuestions` — Fragebogen (28 Fragen, 4 Seiten à 7)
- `sTransition` — Übergang Nat→Rolle
- `sResults` — Auswertung + Export-Buttons

### DISC-Test
- 32 Fragen total (8 pro Dimension, davon je 1 reversed)
- Zufällig gemischt, 4 Seiten à 8 Fragen
- 2 Durchgänge: natürliches Profil + Rollenprofil
- Ergebnis: Prozent-Scores D/I/S/C für beide Profile

---

## 8. Moderator-Dashboard (`moderator.html`) — Architektur

### Session-Verwaltung
```javascript
// localStorage Key: 'disc-online-session-v2'
{
  workshopId:     "uuid",
  code:           "E7630B",
  adminToken:     "uuid",
  title:          "DISC Workshop Swisstronics",
  currentModule:  "waiting"
}
```

### Auto-Refresh
- `setInterval(refreshOnlineWorkshop, 5000)` — alle 5 Sek
- `refreshOnlineWorkshop()` holt Ergebnisse via `list-workshop-results`
- Zählt zusätzlich beigetretene (noch nicht fertige) TN direkt aus `participants` Tabelle

### Teilnehmer-Anzeige
- **"Wartende Teilnehmer"-Box** (id: `waitingParticipantsBox`): zeigt Chips für beigetretene aber noch nicht fertige Teilnehmer
- **Tabelle** (`#rows`): zeigt fertige Teilnehmer mit DISC-Profil
- **Quadranten-Map** (Canvas): Live-Visualisierung aller Ergebnisse

### Workshop beenden (`stopOnlineWorkshop`)
- Setzt Modul auf `closed` via RPC → alle Teilnehmer sehen "Workshop beendet"
- Löscht lokale Session

---

## 9. Git Commit-History (Phase 1)

| Hash | Was |
|---|---|
| `d7f1316` | Phase 1: Session-Engine initial |
| `bfd1c78` | Fix: Teilnehmer Join-Screen + Auto-Join |
| `487ca9b` | Fix: Overlay, URL-Code Priorität, leaveWorkshop |
| `aa38083` | Fix: kein sIntro-Flash, closed-Modul, Join-Counter |
| `dee3aa8` | Fix: ohne URL-Code immer Join-Screen |
| `6f91bfd` | Dashboard: Wartende-Teilnehmer Chips |
| `53e2900` | Fix: disc_test zeigt sIntro wenn kein Screen aktiv |

---

## 10. Bekannte Eigenheiten / Fallstricke

1. **PowerShell `&&`** funktioniert nicht → `;` verwenden
2. **Vercel Deploy** dauert ~1-2 Min nach `git push`
3. **Neuer publishable Key** (`sb_publishable_...`) funktioniert NICHT für Edge Functions
4. **Chrome Extension** trennt sich bei langen Wartezeiten → kurze Timeouts verwenden
5. **Realtime** braucht `REPLICA IDENTITY FULL` auf der Tabelle — bereits konfiguriert
6. **sIntro hat kein `class="active"`** mehr (bewusst entfernt) — nur via `show('sIntro')` anzeigen

---

## 11. Phasen-Übersicht

| Phase | Was | Status |
|---|---|---|
| **MVP** | DISC-Test, Ergebnisse, Live-Map, Online-Workshop-Grundgerüst | ✅ live |
| **Phase 1** | Session-Engine: Moderator steuert Module, TN sieht Realtime-Overlay | ✅ abgeschlossen |
| **Phase 2** | Moderator-Beamer-Ansicht + Übungen (Freitext & Abstimmung) live | 🔜 NÄCHSTER SCHRITT |
| **Phase 3** | Gruppenarbeit: Schreiber-Rolle, Gruppen-Zuweisung | 🔜 geplant |
| **Phase 4** | Co-Authoring Spielregeln | 🔜 geplant |
| **Phase 5** | Urkunden-Generator: Layout, Signatur-Pad, PDF-Export | 🔜 geplant |
| **Phase 6** | Wordcloud + Live-Feed Visualisierung | 🔜 geplant |
| **Phase 7** | Testing, Branding, Mobile-Optimierung | 🔜 geplant |

---

## 12. Phase 2 — Detailplanung: Moderator-Beamer-Ansicht + Übungen

### 12.1 Ziel

Das Moderator-Dashboard wird zur vollständigen Workshop-Steuerung ausgebaut:
- **Beamer-Ansicht**: Eine separate Vollbild-Seite (`beamer.html`) die der Moderator auf den Projektor wirft
- **Modul-spezifische Inhalte**: Jedes Modul zeigt auf Beamer und Teilnehmer-App unterschiedliche Inhalte
- **Live-Übungen**: Teilnehmer können Antworten eintippen/abstimmen, Moderator sieht live

### 12.2 Neue Dateien in Phase 2

```
pages/disc/
├── beamer.html          — NEU: Vollbild-Projektor-Ansicht
├── moderator.html       — ERWEITERT: Workshop-Steuerung mit Übungs-Panel
└── teilnehmer.html      — ERWEITERT: Übungs-Eingabe-UI pro Modul
```

### 12.3 Modul-spezifische Inhalte (Beamer + Teilnehmer)

#### `waiting`
- **Beamer**: Willkommens-Screen mit Workshop-Titel + QR-Code zum Join-Link
- **Teilnehmer**: "Warte auf den Moderator..." (bereits implementiert)

#### `intro`
- **Beamer**: Große Einstiegsfrage (Text), DISC-Badges als Eyecatcher
- **Teilnehmer**: Freitext-Eingabe "Was ist deine Antwort?" → live im Dashboard sichtbar
- **Dashboard**: Antworten aller TN live anzeigen (Wordcloud oder Liste)
- **Modul-Daten**: `{ question: "Was macht ein gutes Team aus?" }`

#### `disc_test`
- **Beamer**: Fortschritts-Anzeige wie viele TN fertig sind (live aktualisiert)
- **Teilnehmer**: Test läuft normal (bereits implementiert)

#### `live_map`
- **Beamer**: Grosse Quadranten-Map mit allen Ergebnissen (vollbild, animiert)
- **Teilnehmer**: "Schau auf den Beamer!" (bereits implementiert)

#### `reflexion`
- **Beamer**: Reflexions-Frage + Wordcloud der TN-Antworten (live)
- **Teilnehmer**: Freitext "Was überrascht dich?" → max 120 Zeichen

#### `team_pattern`
- **Beamer**: Team-Analyse (Stil-Verteilung, Achsen-Kommentar, Stärken/Risiken)
- **Teilnehmer**: "Schau auf den Beamer und beobachte das Team-Profil."

#### `exercise_1` (Stärken)
- **Beamer**: Aufgaben-Beschreibung + Timer (z.B. 5 Min)
- **Teilnehmer**: Freitext-Eingabe "Meine grösste Stärke im Team:" → submit
- **Dashboard**: Alle Antworten live sichtbar

#### `exercise_2` (Reibung)
- **Beamer**: Aufgaben-Beschreibung + Timer
- **Teilnehmer**: Freitext-Eingabe "Wo entstehen bei mir Reibungspunkte?" → submit

#### `exercise_3` (Spielregeln)
- **Beamer**: Co-Authoring Spielregeln (Vorschläge der TN erscheinen live)
- **Teilnehmer**: "Mein Vorschlag für eine Team-Spielregel:" → submit
- **Dashboard**: Alle Vorschläge live, Moderator kann wichtige markieren/pinnen

#### `closing`
- **Beamer**: Abschluss-Screen mit Team-DNA Zusammenfassung
- **Teilnehmer**: Abschluss-Botschaft + "Ergebnis per PDF speichern" Button

### 12.4 Neue DB-Tabelle: `exercise_responses`

```sql
CREATE TABLE public.exercise_responses (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workshop_id   uuid REFERENCES workshops NOT NULL,
  participant_id uuid REFERENCES participants NOT NULL,
  alias         text,
  module        text NOT NULL,        -- welches Modul (z.B. 'exercise_1')
  response_type text DEFAULT 'text',  -- 'text' | 'vote' | 'scale'
  content       text,                 -- Freitext-Antwort
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE public.exercise_responses REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.exercise_responses;
```

### 12.5 Neue Edge Function: `submit-exercise`

```
POST /submit-exercise
Body: { participantId, joinToken, module, content, responseType }
Returns: { success: true, responseId }
```

### 12.6 beamer.html — Architektur

```
- Öffnet sich in neuem Tab/Fenster (Vollbild)
- localStorage: liest disc-online-session-v2
- Realtime: lauscht auf workshops + exercise_responses
- Rendert je nach current_module unterschiedliche Layouts
- Kein Moderator-Panel — nur Display
- Responsive für 1920×1080 (Full HD Beamer)
```

### 12.7 Implementierungs-Reihenfolge Phase 2

1. **DB**: `exercise_responses` Tabelle + Realtime aktivieren
2. **Edge Function**: `submit-exercise` deployen
3. **beamer.html**: Neudatei mit Modul-Router
   - waiting: QR-Code + Willkommen
   - disc_test: Fortschritts-Balken
   - live_map: Quadranten-Map vollbild
   - exercise_*: Antworten live als Feed
4. **teilnehmer.html**: Übungs-Eingabe UI pro Modul (nach Overlay)
5. **moderator.html**: Beamer-Link + Übungs-Antworten-Panel

---

## 13. Deployment-Workflow

```powershell
# Änderungen pushen (PowerShell)
cd "E:\Programme\Homepage Brainfusion"
git add pages/disc/moderator.html pages/disc/teilnehmer.html
git commit -m "Beschreibung der Änderung"
git push
# → Vercel deployed automatisch in ~1-2 Min
```

```powershell
# Edge Function deployen
cd "E:\Programme\Homepage Brainfusion"
npx supabase functions deploy <function-name> --project-ref dnoecftuybkoqvrkfvei
```

---

## 14. Test-Workflow

1. Moderator öffnet: https://brainfusion.app/pages/disc/moderator.html
2. Klick "+ Online-Workshop erstellen" → Code notieren (z.B. `E7630B`)
3. Teilnehmer öffnet: https://brainfusion.app/pages/disc/teilnehmer.html?code=E7630B
4. Name eingeben → "Beitreten"
5. Dashboard zeigt: "0 Ergebnisse · 1 beigetreten"
6. Moderator klickt "disc_test" → Teilnehmer sieht Test-Intro
7. Teilnehmer macht Test → "In Online-Workshop senden"
8. Dashboard zeigt: "1 Ergebnis eingegangen"
9. Moderator klickt "live_map" → Teilnehmer sieht "Schau auf den Beamer"
10. Moderator klickt "Workshop beenden" → Teilnehmer sieht "Workshop beendet 🔒"

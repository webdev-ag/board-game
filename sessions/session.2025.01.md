# Session-Plan: Arrays & querySelector() (90 Minuten)

## Überblick

**Zielgruppe:** 12-15 Jahre, 5-8 Teilnehmer (unterschiedliches Level)
**Format:** Live-Coding mit Erklärung
**Fokus:** Arrays (Hauptthema), querySelector() (Nebenthema)
**Datei:** `/home/dom/workspace/board-game/src/index.html` (main Branch)

---

## Lernziele

Nach dieser Session können die Schüler:
1. Arrays erstellen und verstehen, wozu sie gut sind
2. Array-Elemente per Index zugreifen (`[0]`, `[1]`, etc.)
3. Elemente zu Arrays hinzufügen (`.push()`)
4. Array-Länge ermitteln (`.length`)
5. HTML-Elemente mit `querySelector()` auswählen
6. Inhalte lesen (`.value`, `.innerText`) und schreiben
7. Arrays + querySelector kombinieren (Gamer-Tag-Checker)

---

## Zeitplan (90 Minuten)

| Zeit | Dauer | Aktivität | Format |
|------|-------|-----------|--------|
| 0:00 | 10 min | Warm-Up & Intro | Demo + Diskussion |
| 0:10 | 25 min | Arrays - Basics & Übung 2 | Live-Code + Praxis |
| 0:35 | 20 min | querySelector() | Live-Code + Demo |
| 0:55 | 25 min | Kombination: Übung 3 | Geführtes Coding |
| 1:20 | 10 min | Wrap-Up & Ausblick | Review + Hausaufgabe |

---

## Detaillierter Ablauf

### 🔥 Phase 1: Warm-Up (10 Min, 0:00-0:10)

**Ziel:** Kontext schaffen, Motivation aufbauen

1. **Begrüßung (2 Min)**
   - "Heute: Arrays und querySelector - zwei Werkzeuge, die jede Website nutzt!"
   - Zeige kurz das fertige Spiel (add-state-and-render Branch)

2. **Vorwissen aktivieren (5 Min)**
   - Konsole öffnen (F12) gemeinsam
   - Schnelle Wiederholung:
     - `let name = 'Hero';` → Variablen
     - `console.log(name);` → Ausgabe
     - `if (name === 'Hero') { alert('Hi!'); }` → Bedingungen

3. **Ziel der Stunde (3 Min)**
   - "Wir bauen einen Gamer-Tag-Checker wie bei Steam/Discord"
   - Zeige das fertige Form-Beispiel im Browser
   - "Am Ende könnt ihr prüfen: Ist der Name schon vergeben?"

---

### 📦 Phase 2: Arrays (25 Min, 0:10-0:35)

#### Teil A: Array-Grundlagen (10 Min)

**Live-Coding in Browser-Konsole:**

```javascript
// Problem: Viele Variablen sind nervig
let stadt1 = 'Offenbach';
let stadt2 = 'Frankfurt';
let stadt3 = 'Hanau';

// Lösung: Ein Array!
let listOfCities = ['Offenbach', 'Frankfurt', 'Hanau', 'Wiesbaden'];
console.log(listOfCities);
```

**Erklärpunkte:**
- "Array = Liste von Dingen (wie Spotify-Playlist, Inventory in Minecraft)"
- Eckige Klammern `[]`
- Kommas zwischen Elementen
- Strings in Anführungszeichen

**Interaktiv:** "Welche Listen kennt ihr aus Spielen/Apps?" (Chat, Freundesliste, etc.)

**Weiter im Code:**

```javascript
// Zugriff auf Elemente - WICHTIG: Zählung startet bei 0!
console.log(listOfCities[0]);  // 'Offenbach' (erstes Element)
console.log(listOfCities[1]);  // 'Frankfurt' (zweites!)
console.log(listOfCities[3]);  // 'Wiesbaden'

// Wie viele Elemente?
console.log(listOfCities.length);  // 4

// Letztes Element (Trick!)
console.log(listOfCities[listOfCities.length - 1]);
```

**Häufiger Fehler ansprechen:** "Arrays starten bei 0, nicht 1! Wie Stockwerke in Europa (Erdgeschoss = 0)"

#### Teil B: Übung 2 - Hands-On (15 Min)

**Ansage:** "Jetzt seid ihr dran! Öffnet `index.html`, sucht das zweite `<script>`-Tag"

**Schüler arbeiten an:**
```javascript
/*
    zweite Aufgabe:
    a) Array mit Städten erstellen und ausgeben
    b) Zweite Stadt ausgeben
    c) Letzte Stadt ausgeben
    d) User nach Stadt fragen, hinzufügen, Array erneut ausgeben
    e) Formel für letztes Element
*/
```

**Lehrer:**
- Herumgehen, individuelle Hilfe
- Nach 10 Min: Lösung gemeinsam am Bildschirm zeigen
- Besonders erklären: `.push()` für Hinzufügen

**Lösung:**
```javascript
let listOfCities = ['Offenbach', 'Frankfurt', 'Hanau', 'Wiesbaden'];
console.log(listOfCities);                           // a)
console.log(listOfCities[1]);                        // b)
console.log(listOfCities[listOfCities.length - 1]); // c)

let newCity = window.prompt('Stadt hinzufügen?');
listOfCities.push(newCity);
console.log(listOfCities);                           // d)

// e) Formel: array[array.length - 1]
```

**Check-In:** "Daumen hoch, wenn a)-c) funktioniert hat!"

---

### 🎯 Phase 3: querySelector() (20 Min, 0:35-0:55)

#### Teil A: Was ist das DOM? (5 Min)

**Erklärung:**
- "DOM = Die Webseite, wie JavaScript sie sieht"
- "Jedes HTML-Element kann JavaScript finden und ändern"
- DevTools öffnen → Elements-Tab zeigen
- "querySelector = Suchfunktion für Elemente"

**Live-Demo in Konsole:**
```javascript
const heading = document.querySelector('h1');
console.log(heading);
console.log(heading.innerText);

// Ändern!
heading.innerText = 'Arrays sind cool!';
```

**Schüler probieren:** 2 Min selbst in Konsole testen

#### Teil B: Verschiedene Selektoren (8 Min)

**Live-Coding:**
```javascript
// Nach ID suchen - mit #
const playersOnline = document.querySelector('#players-online');

// Nach Klasse - mit .
const errorDiv = document.querySelector('.error');

// Nach Tag-Name - ohne Zeichen
const button = document.querySelector('button');

// Spezifischer Button
const checkButton = document.querySelector('#check-tag');
```

**Merksatz:** "# für IDs, . für Klassen, gar nichts für Tags"

**Im HTML zeigen:** Die IDs `#player-tag`, `#check-tag`, `#players-online`

#### Teil C: Lesen & Schreiben (7 Min)

**Live-Demo:**
```javascript
// Input-Feld
const tagInput = document.querySelector('#player-tag');
console.log(tagInput.value);  // Was der User eingetippt hat

// Paragraph
const tagPlayersOnline = document.querySelector('#players-online');
let gamerTags = ['Barf.Bear', 'Punjab-Killer', 'Baki', 'OmaHeini'];
tagPlayersOnline.innerText = gamerTags;
```

**Wichtig:** Für `<input>` → `.value`, für andere → `.innerText`

---

### 🎮 Phase 4: Übung 3 - Gamer Tag Checker (25 Min, 0:55-1:20)

**Intro (2 Min):** "Jetzt kombinieren wir alles! Wie bei Steam: Name eingeben, prüfen ob vergeben"

#### Schritt 1: Setup (5 Min)

```javascript
// Schon vorhanden:
let gamerTags = ['Barf.Bear', 'Punjab-Killer', 'Baki', 'OmaHeini'];
const tagPlayersOnline = document.querySelector('#players-online');
tagPlayersOnline.innerText = gamerTags;

// Neu hinzufügen:
const tagInput = document.querySelector('#player-tag');
const tagButton = document.querySelector('#check-tag');
const tagError = document.querySelector('#tag-error');
const tagResult = document.querySelector('#tag-result');
```

**Test:** In Konsole tippen: `console.log(tagInput.value);` nach Eingabe

#### Schritt 2: Event Listener (3 Min)

```javascript
tagButton.addEventListener('click', function() {
    console.log('Button geklickt!');
    console.log('User hat eingegeben:', tagInput.value);
});
```

**Check:** Alle sollten "Button geklickt!" sehen

#### Schritt 3: Prüfung - Zu lang? (5 Min)

```javascript
tagButton.addEventListener('click', function() {
    const userTag = tagInput.value;

    if (userTag.length > 20) {
        alert('Der Name ist zu lang. Max. 20 Zeichen!');
        return;  // Hier stoppen!
    }

    console.log('Länge ist OK');
});
```

**Testen:** "ThisIsWayTooLongForAGamerTag" eingeben

#### Schritt 4: Prüfung - Schon vergeben? (7 Min)

```javascript
tagButton.addEventListener('click', function() {
    const userTag = tagInput.value;

    if (userTag.length > 20) {
        alert('Der Name ist zu lang. Max. 20 Zeichen!');
        return;
    }

    // ALLE Tags durchgehen
    for (let tag of gamerTags) {
        if (tag === userTag) {
            alert('Der Name ist bereits vergeben!');
            return;
        }
    }

    console.log('Name ist frei!');
});
```

**for...of erklären:** "Geht durch jeden Tag im Array"

#### Schritt 5: Tag hinzufügen (3 Min)

```javascript
tagButton.addEventListener('click', function() {
    const userTag = tagInput.value;

    if (userTag.length > 20) {
        alert('Der Name ist zu lang. Max. 20 Zeichen!');
        return;
    }

    for (let tag of gamerTags) {
        if (tag === userTag) {
            alert('Der Name ist bereits vergeben!');
            return;
        }
    }

    // Alles OK → Hinzufügen!
    gamerTags.push(userTag);
    tagPlayersOnline.innerText = gamerTags;
    tagInput.value = '';  // Eingabe leeren
    alert('Tag hinzugefügt!');
});
```

**Feiern:** "Ihr habt ein echtes Validierungs-System gebaut!"

---

### 🎓 Phase 5: Wrap-Up (10 Min, 1:20-1:30)

#### Review (5 Min)

**Fragen an die Schüler:**
1. "Wie erstellt man ein Array?" → `let arr = [1, 2, 3];`
2. "Wie greift man auf das dritte Element zu?" → `arr[2]` (bei 0 starten!)
3. "Wie fügt man etwas hinzu?" → `arr.push(item);`
4. "Wie findet man ein Element?" → `document.querySelector('#id')`
5. "Was ist der Unterschied `.value` und `.innerText`?" → Input vs. andere Elemente

**Finger-Poll:** "1-5 Finger: Wie sicher fühlt ihr euch mit Arrays?"

#### Stretch Goal vorstellen (3 Min)

**Für schnelle Schüler / Hausaufgabe:**

"Statt `alert()` → Fehler in den roten DIV schreiben:"

```javascript
// Statt alert():
tagError.innerText = 'Der Name ist zu lang!';
tagError.style.display = 'block';

// Bei Erfolg:
tagResult.innerText = userTag;
tagResult.style.display = 'block';
```

#### Ausblick nächste Stunde (2 Min)

- "Nächstes Mal: 2D-Arrays! Arrays IN Arrays!"
- "Stellt euch vor: Ein Schachbrett, jede Reihe ist ein Array"
- Kurz zeigen: `let miniMap = [['X', ' '], [' ', '#']];`

---

## Hausaufgaben

### Pflicht
Übung 1 fertigstellen (erstes `<script>`-Tag):
```javascript
// User nach Namen fragen
// Wenn es dein Name ist → "Hi!"
// Sonst → "Guten Tag <name>!"
```

### Optional (für Schnelle)
1. Array mit 5 Lieblingsfarben erstellen, in Konsole ausgeben
2. Überschrift (h1) mit JavaScript ändern
3. Stretch Goal: Error-Divs statt alerts nutzen

---

## Differenzierung

### Für langsame Schüler
- Pairing mit stärkerem Schüler
- Übung 2 Code-Vorlage geben
- Fokus auf Verständnis, nicht auf Fertigstellung
- Erklären: "Arrays starten bei 0" mit Visualisierung

### Für schnelle Schüler
- Stretch Goal: Error-Divs statt Alerts
- Challenge: Case-insensitive Vergleich (`.toLowerCase()`)
- Hilf deinem Nachbarn
- "Wie würdest du Sonderzeichen prüfen?"

---

## Häufige Fehler & Lösungen

| Fehler | Lösung |
|--------|--------|
| Array bei 1 starten | "Europa-Stockwerke: 0 = Erdgeschoss!" |
| Anführungszeichen vergessen | Fehler zeigen: "Text braucht Quotes" |
| `.length()` statt `.length` | "Keine Funktion, keine Klammern!" |
| `querySelector` falsch schreiben | "query + Selector, kein 'u' nach q" |
| `=` statt `===` | "1 = zuweisen, 3 = vergleichen" |

---

## Check-Ins während der Session

1. **0:25** - "Wer kann das letzte Array-Element zugreifen?" (Hands up)
2. **0:45** - "Tippt `document.querySelector('h1')` in die Konsole"
3. **1:05** - "Alle sollten 'Button geklickt!' sehen"
4. **1:15** - "Testet 'Baki' - was passiert?"
5. **1:25** - "Fügt euren eigenen Tag hinzu!"

---

## Benötigte Dateien

- **Hauptdatei:** [src/index.html](src/index.html) (main Branch)
  - Enthält die 3 Übungsaufgaben in `<script>`-Kommentaren
  - Form für Gamer-Tag-Checker bereits vorhanden

- **Referenz:** [CURRICULUM.md](CURRICULUM.md)
  - Gesamtübersicht: Diese Session ist Stunde 1-2 von 12

- **Vorschau:** [src/scripts/maps/index.mjs](src/scripts/maps/index.mjs)
  - Zeigen für Ausblick: 2D-Arrays nächste Stunde

---

## Erfolgskriterien

**Session erfolgreich, wenn Schüler können:**
- ✅ Array mit 3 Elementen erstellen
- ✅ Auf Element per Index zugreifen
- ✅ `.push()` nutzen
- ✅ `querySelector()` mit ID nutzen
- ✅ Gamer-Tag-Checker mit Hilfe fertigstellen

**Bonus:**
- Array-Indexing (0-basiert) verstanden
- DOM-Konzept grob verstanden
- Eigene Fehler debuggen können

---

## Notizen nach der Session

_(Hier nach der Stunde eintragen)_

- Was lief gut:
- Wo gab es Probleme:
- Tempo anpassen:
- Individuelle Beobachtungen:
- Änderungen für nächstes Mal:
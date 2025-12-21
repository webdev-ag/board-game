# Curriculum: Von den Grundlagen zum Grid-basierten Spiel
## Zeitraum: 6 Monate (ca. 12-15 Unterrichtsstunden à 90 Min)

---

## Ausgangspunkt (main Branch)
**Was die Schüler bereits können:**
- HTML-Struktur (div, header, main, forms)
- CSS-Basics (Klassen, Grid-Layout, Styling)
- Allererste JS-Schritte (Variablen, prompt, alert)

**Was auf dem main Branch vorhanden ist:**
- Statisches 5x5 Grid (mit `document.writeln` generiert)
- Hero-Figur mit festem CSS-Positioning (`grid-column: 3/4; grid-row: 2/3`)
- Buttons für Bewegung (noch nicht funktional)
- Drei Übungsaufgaben in Kommentaren

---

## Zielbild (add-state-and-render Branch)
**Was am Ende erreicht werden soll:**
- Grid wird dynamisch aus 2D-Arrays gezeichnet
- Hero-Bewegung mit Kollisionserkennung (Wände, Grenzen)
- Multiple Maps mit Exit/Übergängen
- Keyboard-Support (Arrow Keys)
- Sound-Effekte
- Modular organisierter Code (ES6 Modules)

---

## Lernpfad: 12 Unterrichtsstunden

### 📚 Stunde 1-2: Arrays & Schleifen (JETZT - in 3 Wochen)
**Lernziele:**
- Arrays erstellen und manipulieren
- `for...of` Schleifen verstehen
- Array-Indizes nutzen
- `querySelector()` und `classList` kennenlernen

**Praktische Übungen:**
1. Array von Städten erstellen, durchlaufen, einzelne Elemente ausgeben
2. Gamer-Tag-Checker fertigstellen (aus main Branch Kommentaren)
3. Klassen per `classList.add()` / `.remove()` hinzufügen
4. Einfache Liste von Namen im DOM rendern

**Code-Konzepte:**
```javascript
// Arrays
let cities = ['Frankfurt', 'Offenbach', 'Hanau'];

// Schleifen
for (let city of cities) {
  console.log(city);
}

// DOM-Zugriff
const element = document.querySelector('.hero');
element.classList.add('active');
```

**Hausaufgabe:**
- Array mit 5 Farben erstellen
- Mit Schleife 5 divs erzeugen, jedes mit anderer Hintergrundfarbe

---

### 📚 Stunde 3-4: 2D-Arrays & Grid zeichnen (in 6 Wochen)
**Lernziele:**
- 2D-Arrays verstehen (Array von Arrays)
- Verschachtelte Schleifen nutzen
- DOM-Elemente dynamisch erstellen (`createElement`, `appendChild`)
- Grid aus Daten zeichnen

**Praktische Übungen:**
1. Einfaches 3x3 Grid aus 2D-Array zeichnen:
```javascript
let miniMap = [
  ['X', ' ', ' '],
  [' ', '#', ' '],
  [' ', ' ', 'E']
];
```

2. Für jedes Feld ein `<div>` erstellen
3. Je nach Inhalt ('X', '#', 'E', ' ') unterschiedliche Klassen hinzufügen
4. Hero-Position ('X') im Array finden und merken

**Code-Konzepte:**
```javascript
// 2D-Array durchlaufen
for (let zeile of map) {
  for (let feld of zeile) {
    // Für jedes Feld etwas tun
    const div = document.createElement('div');
    div.classList.add('cell');
    board.appendChild(div);
  }
}
```

**Ziel der Stunde:**
- Statisches Grid wird durch dynamisches ersetzt
- Map-Daten steuern, was gezeichnet wird

---

### 📚 Stunde 5-6: Funktionen & Event-Handler (in 9 Wochen)
**Lernziele:**
- Funktionen mit Parametern schreiben
- Event-Listener auf Buttons
- Return-Werte verstehen
- Code wiederverwenden

**Praktische Übungen:**
1. Funktion `zeichneSpielfeld(map)` schreiben
2. Button-Clicks abfangen mit `addEventListener`
3. Einfache Bewegungs-Logik (erstmal ohne Kollision):
   - Hero-Position im Array ändern
   - Spielfeld neu zeichnen

**Code-Konzepte:**
```javascript
// Funktion definieren
function zeichneSpielfeld(spielfeld) {
  // ... Grid zeichnen
}

// Event-Listener
const buttonUp = document.querySelector('#move-up');
buttonUp.addEventListener('click', function() {
  // Hero bewegen
});
```

**Ziel der Stunde:**
- Hero bewegt sich bei Button-Click (auch wenn er durch Wände geht)
- Spielfeld wird nach jeder Bewegung neu gezeichnet

---

### 📚 Stunde 7-8: Kollisionserkennung & Bedingungen (in 12 Wochen)
**Lernziele:**
- Position im 2D-Array berechnen
- Prüfen: Was ist im Zielfeld?
- Komplexe if/else Bedingungen
- Grenzen überprüfen

**Praktische Übungen:**
1. Berechne neue Position (z.B. eine Zeile hoch = `zeile - 1`)
2. Prüfe BEVOR bewegt wird:
   - Ist neue Position noch auf dem Feld? (`zeile >= 0`, `zeile < map.length`)
   - Ist dort eine Wand? (`map[zeile][spalte] === '#'`)
3. Nur bei freiem Feld ('`' oder 'E') bewegen

**Code-Konzepte:**
```javascript
function bewegeHoch() {
  const neueZeile = heldZeile - 1;

  // Prüfung 1: Noch auf dem Spielfeld?
  if (neueZeile < 0) {
    return; // Abbrechen!
  }

  // Prüfung 2: Was ist dort?
  const zielFeld = spielfeld[neueZeile][heldSpalte];
  if (zielFeld === '#') {
    return; // Wand! Abbrechen!
  }

  // Bewegung durchführen
  heldZeile = neueZeile;
  zeichneSpielfeld();
}
```

**Ziel der Stunde:**
- Hero stoppt an Wänden
- Hero bleibt innerhalb der Grenzen

---

### 📚 Stunde 9: State-Management Grundlagen (in 15 Wochen)
**Lernziele:**
- Spielzustand in Variablen speichern
- Unterschied zwischen altem und neuem Zustand
- Map-Array aktualisieren (altes 'X' löschen, neues setzen)

**Praktische Übungen:**
1. Globale Variablen für Spielzustand:
```javascript
let spielfeld = [...];
let heldZeile = 0;
let heldSpalte = 0;
```

2. Bei Bewegung:
   - Alten Wert im Array ändern (`spielfeld[altZeile][altSpalte] = ' '`)
   - Neuen Wert setzen (`spielfeld[neueZeile][neueSpalte] = 'X'`)

**Code-Konzepte:**
```javascript
// State speichern
let heldZeile = 2;
let heldSpalte = 3;

// State aktualisieren
spielfeld[heldZeile][heldSpalte] = ' ';  // Altes Feld leeren
heldZeile = heldZeile - 1;                // Position ändern
spielfeld[heldZeile][heldSpalte] = 'X';  // Neues Feld besetzen
```

**Ziel der Stunde:**
- Hero hinterlässt keine "Geister" mehr
- Map-Array spiegelt immer den aktuellen Zustand

---

### 📚 Stunde 10: Objekte & komplexere Datenstrukturen (in 18 Wochen)
**Lernziele:**
- JavaScript-Objekte erstellen und nutzen
- Position als Objekt speichern
- Objekt-Properties lesen und ändern

**Praktische Übungen:**
1. Position als Objekt:
```javascript
let heldPosition = {
  zeile: 2,
  spalte: 3
};
```

2. Zugriff auf Properties:
```javascript
console.log(heldPosition.zeile);
heldPosition.zeile = heldPosition.zeile + 1;
```

3. Mehrere Maps als Objekt organisieren:
```javascript
let maps = {
  level1: [[...], [...]],
  level2: [[...], [...]]
};
```

**Code-Konzepte:**
```javascript
// Objekt definieren
let spieler = {
  name: 'Hero',
  zeile: 0,
  spalte: 0,
  leben: 3
};

// Zugriff
spieler.leben = spieler.leben - 1;
```

**Ziel der Stunde:**
- Code wird übersichtlicher durch Objekte
- Vorbereitung für Multiple Maps

---

### 📚 Stunde 11: Multiple Maps & Exits (in 21 Wochen)
**Lernziele:**
- Zwischen verschiedenen Maps wechseln
- Exit-Felder erkennen ('E')
- Neue Map laden

**Praktische Übungen:**
1. 3 verschiedene Maps erstellen (klein anfangen: 5x5)
2. Variable für aktuelle Map: `let aktuelleMap = 'level1'`
3. Bei Bewegung auf 'E' → nächste Map laden
4. Funktion `ladeMap(mapName)` schreiben

**Code-Konzepte:**
```javascript
let maps = {
  level1: [['X', ' ', '#'], ...],
  level2: [['X', '#', ' '], ...],
  level3: [[...], ...]
};

let aktuelleMap = 'level1';

function ladeMap(mapName) {
  spielfeld = maps[mapName];
  // Hero-Position neu finden
  zeichneSpielfeld();
}

// Bei Exit
if (zielFeld === 'E') {
  ladeMap('level2');
}
```

**Ziel der Stunde:**
- Wechsel zwischen 3 verschiedenen Levels
- Exit führt zur nächsten Map

---

### 📚 Stunde 12: Keyboard-Support & Sound (in 24 Wochen)
**Lernziele:**
- Keyboard-Events abfangen
- Arrow-Keys erkennen
- Audio-Elemente einbinden
- Sound bei Events abspielen

**Praktische Übungen:**
1. Keyboard-Listener:
```javascript
document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp') {
    bewegeHoch();
  }
  // ... weitere Tasten
});
```

2. Sound einbinden:
```javascript
const wandSound = new Audio('./sounds/thud.mp3');
wandSound.play();
```

3. Sound bei Wand-Kollision abspielen

**Code-Konzepte:**
```javascript
// Keyboard
document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp') {
    bewegeHoch();
  } else if (event.key === 'ArrowDown') {
    bewegeRunter();
  }
});

// Audio
const sound = new Audio('pfad/zur/datei.mp3');
sound.play();
```

**Ziel der Stunde:**
- Steuerung mit Pfeiltasten funktioniert
- Feedback durch Sound-Effekte

---

## 🎯 Nach den 12 Stunden erreicht:

**Spielmechanik:**
✅ Grid-basiertes Spiel
✅ 2D-Array als Spielfeld
✅ Hero-Bewegung mit Buttons
✅ Keyboard-Steuerung
✅ Kollisionserkennung (Wände, Grenzen)
✅ Multiple Maps mit Exits
✅ Sound-Effekte

**JS-Konzepte gelernt:**
✅ Arrays (1D und 2D)
✅ Schleifen (`for...of`, verschachtelt)
✅ Funktionen mit Parametern
✅ DOM-Manipulation (`querySelector`, `createElement`, `classList`)
✅ Event-Listener (Click, Keyboard)
✅ Objekte und Properties
✅ Bedingungen (if/else, komplexe Prüfungen)
✅ State-Management (Variablen für Spielzustand)

---

## 🚀 Optionale Erweiterungen (falls Zeit bleibt)

### Stunde 13+: Fortgeschrittene Konzepte
- **ES6 Modules** (import/export) - Code in mehrere Dateien aufteilen
- **Arrow Functions** - Kürzere Syntax für Funktionen
- **Array-Methods** - `.map()`, `.filter()`, `.find()`
- **Destructuring** - Kürzerer Objekt-Zugriff
- **Constants** - Bessere Code-Organisation mit `const WAND = '#'`

### Stunde 14+: Game-Features
- Monster hinzufügen (als 'M' im Array)
- Leben/Health-System
- Punkte sammeln
- Inventar-System (Schlüssel für Türen)
- Grafische Verbesserungen (CSS-Animationen)

---

## 📊 Progression-Übersicht

| Stunde | Thema | JS-Konzepte | Spielfeature |
|--------|-------|-------------|--------------|
| 1-2 | Arrays & Schleifen | Arrays, for...of, querySelector | - |
| 3-4 | 2D-Arrays & Grid | 2D-Arrays, createElement | Dynamisches Grid |
| 5-6 | Funktionen & Events | Functions, addEventListener | Bewegung (ohne Kollision) |
| 7-8 | Kollisionserkennung | if/else, Array-Zugriff | Wände & Grenzen |
| 9 | State-Management | Globale Variablen, State | Saubere Bewegung |
| 10 | Objekte | Objects, Properties | Bessere Code-Struktur |
| 11 | Multiple Maps | Objekte, Arrays | Level-Wechsel |
| 12 | Keyboard & Sound | Events, Audio | Steuerung & Feedback |

---

## 💡 Didaktische Hinweise

### Für jede Stunde:
1. **Warm-Up (10 Min):** Wiederholung der letzten Stunde
2. **Theorie (20 Min):** Neues Konzept erklären mit einfachen Beispielen
3. **Live-Coding (30 Min):** Gemeinsam am Projekt umsetzen
4. **Eigenarbeit (25 Min):** Schüler probieren selbst, du hilfst
5. **Wrap-Up (5 Min):** Was haben wir gelernt? Was kommt nächstes Mal?

### Wichtige Prinzipien:
- **Kleine Schritte:** Jede Stunde EIN neues Konzept
- **Sofortiges Feedback:** Code nach jeder Änderung testen
- **Sichtbare Erfolge:** Nach jeder Stunde läuft etwas Neues
- **Eigene Kreativität:** Schüler sollen Maps selbst designen können
- **Fehler sind ok:** Debugging ist Teil des Lernens

### Code-Organisation:
- Stunden 1-8: Alles in einer Datei (einfacher für Anfänger)
- Stunden 9-12: Schrittweise mehr Struktur
- Ab Stunde 13: Module-System (wenn erreicht)

---

## 🎓 Lernziel-Check

### Nach Stunde 4 sollten Schüler können:
- Arrays verstehen und nutzen
- 2D-Arrays durchlaufen
- DOM-Elemente dynamisch erzeugen

### Nach Stunde 8 sollten Schüler können:
- Eigene Funktionen schreiben
- Event-Listener nutzen
- Bedingungen für Spiellogik umsetzen

### Nach Stunde 12 sollten Schüler können:
- Ein einfaches Grid-Spiel komplett verstehen
- Eigene Maps designen
- Kleine Features selbst hinzufügen
- Den Weg zum **add-state-and-render** Branch verstehen

---

**Erstellt für:** Jugendliche 12-15 Jahre
**Vorwissen:** HTML, CSS Basics
**Ziel:** Grundlegendes Verständnis von JavaScript durch praktisches Game-Development

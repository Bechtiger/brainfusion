# Cosmos Explorer – Prototyp

Lokale 3D-Web-App für Solarion. Voraussetzungen: Node.js 20.19+ oder 22.12+ und npm.

```powershell
npm install
npm run dev
```

Die im Terminal angezeigte lokale Adresse im Browser öffnen. Für ein Produktionspaket `npm run build` ausführen; `npm run preview` zeigt den Build lokal an.

Maus/Finger ziehen: drehen. Mausrad oder zwei Finger: zoomen. Ziele in der Navigation wählen oder anklicken. Im realistischen Massstab stehen Durchmesser und Entfernungen im gleichen Verhältnis. Die Zeitreise berechnet Sonne, die acht Planeten und den Erdmond für das gewählte Datum; die eingezeichneten Bahnlinien sind idealisierte Kreise. Die Explorer-Ansicht verändert Grössen und Abstände absichtlich.

Die strukturierten Körperdaten in `src/data.js` und die getrennte 3D-/UI-Logik sind Ausgangspunkte für spätere Inhalte, zusätzliche Objekte und Ephemeriden. Planeten- und Mondpositionen werden für die gewählte Zeit berechnet; Ton und geführte Touren sind bisher nicht enthalten.

## Bildnachweise
Planetentexturen und Sternhintergrund: Solar System Scope, https://www.solarsystemscope.com/textures/, Creative Commons Attribution 4.0 International, https://creativecommons.org/licenses/by/4.0/. Verwendet als Kugeltexturen, teils beleuchtet und eingefärbt. Die Quelle beschreibt teilweise ergänzte Oberflächen und angepasste Farben. Dateien: Sonne, Merkur, Venus-Atmosphäre, Erde, Mars, Jupiter, Saturn, Uranus, Neptun und Milchstrassenhintergrund. Einige Dateien wurden über den öffentlichen Spiegel https://github.com/Sanghel/solar-system-3d/tree/develop/public/textures bezogen; Ursprung und Lizenz wurden auf der Seite des Urhebers geprüft.

Three.js ist MIT-lizenziert; Vite ist MIT-lizenziert. Siehe jeweilige Lizenzdateien in node_modules. Die optional geladenen Schriftarten DM Sans und Space Grotesk stammen von Google Fonts und unterliegen der SIL Open Font License; ohne Verbindung werden lokale Standardschriften verwendet.

Europa: Die Oberflächentextur wurde aus dem globalen Europa-Mosaik von USGS Astrogeology (Becker et al., 2010; Voyager/Galileo SSI) erstellt: https://astrogeology.usgs.gov/search/map/europa_voyager_galileo_ssi_global_mosaic_500m. Laut Metadaten bestehen keine Nutzungsbeschränkungen. Das ursprünglich monochrome GeoTIFF wurde verkleinert und für die Darstellung warm eingefärbt; die Farbe ist illustrativ, keine gemessene Farbkarte. Die Bildauflösung variiert über die Oberfläche.

Europa umrundet Jupiter in beiden Massstäben; die Mondbewegung ist für eine ruhige Betrachtung gegenüber der übrigen Simulation zusätzlich verlangsamt. Auch diese Bahn ist kreisförmig und nicht datumsgenau. Im realistischen Massstab entsprechen Europa-Radius und mittlerer Jupiter-Abstand den verwendeten Kilometerwerten. In der Explorer-Ansicht sind Grössen und Abstände bewusst angepasst.

Weitere galileische Monde: Die Karten stammen vom USGS Astrogeology Science Center und sind laut den jeweiligen Metadaten gemeinfrei ohne Nutzungsbeschränkungen. Die GeoTIFFs wurden für die Webdarstellung auf 4096 × 2048 verkleinert und als JPEG gespeichert.

- Io: https://astrogeology.usgs.gov/search/map/io_voyager_galileo_ssi_false_color_global_mosaic_1km – Galileo-/Voyager-Mosaik in Falschfarben; die Farben sind nicht direkt natürliche Sichtfarben. Die originale Karte enthält Bereiche unterschiedlicher Auflösung und Lücken an den Polen.
- Ganymed: https://astrogeology.usgs.gov/search/map/ganymede_voyager_galileo_ssi_color_global_mosaic_1_4km – farbiges Galileo-/Voyager-Mosaik, aus verschiedenen Bilddaten zusammengesetzt.
- Kallisto: https://astrogeology.usgs.gov/search/map/callisto_galileo_voyager_global_mosaic_1km – monochromes Galileo-/Voyager-Mosaik, für die Darstellung illustrativ warm eingefärbt.

Alle vier galileischen Monde besitzen vereinfachte, kreisförmige Jupiter-Bahnen. Die Animation der Monde ist gegenüber der Sonnenumlauf-Simulation gemeinsam verlangsamt; die Ausgangspositionen sind nicht datumsgenau. Im realistischen Massstab sind ihre Radien und mittleren Bahnradien entsprechend den hinterlegten Kilometerwerten skaliert; die Explorer-Ansicht stellt sie vergrössert und mit angepassten Abständen dar.

## Raumfahrtziele

Die Raumfahrzeuge werden in beiden Ansichten stark vergrössert gezeigt, damit ihre Modelle erkennbar sind. Ihre Positionen und Ausrichtungen sind schematisch und nicht live: Die ISS bewegt sich auf einer vereinfachten Bahn nahe der Erde; Webb bewegt sich auf einer schematischen Halo-Bahn um L2 ausserhalb des Erdschattens. Die Voyager-Positionen sind feste, illustrative Punkte weit ausserhalb der Planetenbahnen und keine aktuellen Trajektorien. Für Voyager 1 und 2 wird dasselbe Modell verwendet. Die Suchbegriffe „JWST“ und „James Webb“ finden das Teleskop. Über die Leiste beim ausgewählten Raumfahrzeug lassen sich Erde, ISS, Webb und beide Voyager-Sonden direkt auswählen.

3D-Modelle: NASA 3D Resources – [ISS-Modell](https://science.nasa.gov/resource/international-space-station-3d-model/) (NASA Visualization Technology Applications and Development, VTAD), [James Webb (B)](https://science.nasa.gov/3d-resources/james-webb-space-telescope-b/) (NASA/Christopher R. Meaney) und [Voyager Probe (B)](https://science.nasa.gov/3d-resources/voyager-probe-b/) (NASA/Michael D. Carbajal). Quelle: https://github.com/nasa/NASA-3D-Resources. Modelle für die Darstellung positioniert, orientiert und skaliert; keine Aussage über tatsächliche aktuelle Ausrichtung. Die [NASA-Nutzungsrichtlinien](https://www.nasa.gov/nasa-brand-center/images-and-media/) erlauben die Nutzung von NASA-Modellen für sachliche Informationszwecke, verlangen Quellenangabe und verbieten einen Eindruck der Unterstützung durch NASA. Für Veröffentlichung und insbesondere kommerzielle Nutzung gelten die dort beschriebenen weiteren Vorgaben. Die Modelle sind teilweise komprimiert und verwenden den lokal mitgelieferten Draco-Decoder (Apache-2.0, siehe `public/draco/LICENSE`).


## ISS-Modell und Kurzinfos

Das frühere Modell ISS (B) von NASA/Michael D. Carbajal enthält sieben eigenständige Netze (`bendedtru1` bis `pCylinder8`) in einem Bereich bei y ≈ 40,8; der übrige Stationskörper reicht nur bis y ≈ 25,8. Die isolierte Gruppe ist daher Teil der Quelldatei, aber ohne weitere Dokumentation nicht sicher als reales Bauteil identifizierbar. Statt sie zu löschen, wird nun das separat veröffentlichte, texturierte NASA-VTAD-Modell von https://science.nasa.gov/resource/international-space-station-3d-model/ verwendet; das frühere Modell bleibt unter `reference/iss-legacy-b.glb` erhalten. Die neue Datei wurde mit glTF Transform optimiert (Draco, WebP-Texturen bis 1024 px, vereinfachte Geometrie); auf Touchgeräten und kleinen Ansichten wird eine leichtere Version mit bis zu 512 px grossen Texturen geladen. Die Darstellung nutzt eine zusätzliche Aufhellung für die ISS. Das Modell zeigt einen historischen Ausstattungsstand und ist keine Live-Konfiguration.

Für jedes der 22 Ziele liegen DE/EN-Lerntexte mit Quellenlink in `src/knowledge.js`. Nach Zielauswahl öffnet „Wissen · DE / EN“ das Panel; DE und EN wechseln dessen Text ohne Neuladen. Über die Zielauswahl im Panel kann man weiterreisen. Auf breiten Bildschirmen liegt das Panel rechts, auf kleineren Ansichten unten; die 3D-Ansicht bleibt bedienbar. Die übrige App-Oberfläche bleibt derzeit deutsch. Die Texte sind unabhängig von der Oberfläche abgelegt und können später als Ausgangspunkt für eine Audio-Pipeline dienen; Audio wurde nicht erzeugt.

## Erdmond

Der Mond ist über Suche, Erde und Wissenspanel erreichbar. Die Mondposition und der Abstand stammen aus der Ephemeride, die eingezeichnete Kreisbahn ist ein Schema. Im realistischen Massstab gilt ein Radius von 1.737,4 km. Die Oberflächenausrichtung ist vereinfacht zur Erde gekoppelt; Libration und die datumsgenaue Eigenrotation werden nicht berechnet. Ein interaktives Lernmodul zu irdischen Gezeiten ist verfügbar; ein eigenes Lernmodul zur gebundenen Rotation bleibt ein späterer Ausbauschritt.

Mondtextur `public/textures/moon.jpg`: NASA Scientific Visualization Studio, CGI Moon Kit (Ernie Wright), https://svs.gsfc.nasa.gov/4720/; 2025er LROC-Farbkarte, 2K-JPEG, Daten aus Lunar Reconnaissance Orbiter, für die Darstellung auf eine Kugel abgebildet und beleuchtet. Die Karte ist laut Quelle für visuelle Darstellung optimiert; Polregionen und kleine Datenlücken wurden aus anderen Daten ergänzt bzw. rekonstruiert. NASA SVS führt seine Inhalte als gemeinfrei, sofern nicht anders angegeben: https://svs.gsfc.nasa.gov/help/; Quellenangabe und NASA-Medienrichtlinien beachten.

## Europas Gezeitenheizung

Europa auswählen und „Europas Gezeitenheizung“ öffnen; das Modul ist auch aus Europas Wissenspanel erreichbar. Pause/Abspielen und der Bahnregler erlauben es, nahe und ferne Positionen zu vergleichen. DE/EN wechselt Sprache und Beschriftungen, „Zurück zu Europa“ kehrt in die vorherige Ansicht zurück.

Die 2D-Darstellung ist ein didaktisches Schema: Exzentrizität und Verformung sind stark überzeichnet, die Zeitskala frei gewählt und die Wärmefarbe kein berechneter Messwert. Die Darstellung des möglichen inneren Aufbaus ist nicht massstäblich. Das Modul behandelt Hinweise auf einen Ozean und mögliche hydrothermale Aktivität getrennt von gesicherten Beobachtungen und behauptet keinen Lebensnachweis. Quellen: NASA, https://science.nasa.gov/jupiter/jupiter-moons/europa/europa-facts/ und ESA, https://www.esa.int/ESA_Multimedia/Videos/2021/07/The_orbits_of_the_Galilean_moons. Es werden keine zusätzlichen Bild- oder Tonassets verwendet.


## Asteroidenhauptgürtel und Kuipergürtel

Beide Regionen sind über Suche und Zielauswahl erreichbar; die Schnellnavigation verbindet sie mit Ceres und Pluto. Die Gürtel bestehen aus prozedural erzeugten, instanzierten Stellvertretern, nicht aus einem Objektkatalog. Anzahl, Grössen und scheinbare Dichte sind stark überzeichnet; die realen Abstände zwischen den Körpern sind sehr gross. Im realistischen Massstab liegen die schematischen Bereiche bei 2,2–3,2 beziehungsweise 30–50 AE. Die Orientierung, vertikale Verteilung und Bewegung sind illustrativ. Die Stellvertreter sind nicht einzeln auswählbar; Ceres und Pluto sind eigene Ziele. Für kleine und Touch-Geräte wird die Zahl der dargestellten Objekte reduziert.

Ceres und Pluto verwenden für diese Darstellung vereinfachte, optimierte 3D-Modelle von NASA Visualization Technology Applications and Development (VTAD): https://science.nasa.gov/resource/ceres-3d-model/ und https://science.nasa.gov/resource/pluto-3d-model/. Die Modelle wurden mit glTF Transform vereinfacht, Draco-komprimiert und ihre Texturen auf bis zu 1024 Pixel verkleinert; für Nutzungsrechte gelten die NASA-Medienrichtlinien unter https://www.nasa.gov/nasa-brand-center/images-and-media/. Die prozeduralen Gürtelkörper sind projektintern erzeugte Geometrie. Die NASA-Oberflächenmodelle sind visuelle Annäherungen, keine vollständigen hochaufgelösten Karten. Pluto wurde nicht überall gleich gut aufgenommen. Beide Zwergplaneten haben in der App vereinfachte Kreisbahnen und keine aktuellen Positionen; Plutos tatsächliche Bahn ist elliptisch und geneigt.

Wissenschaftliche Grundlagen: NASA Asteroiden https://science.nasa.gov/solar-system/asteroids/facts/, NASA Dawn FAQ zu Abständen https://science.nasa.gov/mission/dawn/faq/ und NASA Kuipergürtel https://science.nasa.gov/solar-system/kuiper-belt/facts/.

## Ebbe und Flut auf der Erde

Das Gezeitenmodul ist bei ausgewählter Erde oder ausgewähltem Mond sowie in deren Wissenspanel erreichbar. Es bietet DE/EN, Pause und einen Regler für die Mondposition. Zurück beziehungsweise Escape führt zur vorherigen Ansicht. Die Grafik zeigt einen idealisierten globalen Ozean und zwei stark überhöhte Flutberge; die Pfeile illustrieren die Gezeitenwirkung relativ zum Erdzentrum, nicht die absolute Richtung der Mondanziehung. Der markierte Beispielort dreht sich mit der Erde. Grössen, Abstände und Bewegungen sind nicht massstäblich und die Darstellung ist keine lokale Gezeitenprognose. Küsten, Meerestiefe und Sonne verändern die tatsächlichen Gezeiten. Wissenschaftliche Grundlagen: [NOAA – Gravity, Inertia, and the Two Bulges](https://oceanservice.noaa.gov/education/tutorial_tides/tides03_gravity.html) und [NOAA – Why are there two high tides per day?](https://oceanservice.noaa.gov/facts/high-tide.html).

## Bereitstellung in einem Unterordner

Der Produktions-Build verwendet relative Pfade. `npm run build` erzeugt `dist/`; dessen Inhalt kann nach Prüfung und Freigabe in einen eigenen Ordner einer Website übernommen werden. Die URL des Ordners benötigt einen abschliessenden Schrägstrich. Für die Sicherheitsrichtlinie und einen vorsichtigen Veröffentlichungsablauf siehe `VEROEFFENTLICHUNGSPLAN.md`.

## Mobile Ansicht

Auf schmalen Bildschirmen öffnet „Ziele“ die Navigation und die Massstabs- und Simulationssteuerung. Nach der Auswahl schliesst sie sich und gibt die Sicht auf das Objekt frei. „Wissen“ öffnet das Informationspanel; die Zielauswahl darin und die Lernmodule bleiben erreichbar. Die Leiste am unteren Rand bleibt sichtbar. Am Desktop bleibt die bisherige Anordnung erhalten.

## Zeitreise und Ephemeriden

Zeitreise öffnet die Datumseingabe sowie Vorwärts, Rückwärts, Pause und Geschwindigkeit. Der Bereich reicht vom 1. Januar 8001 v. Chr. bis 31. Dezember 2100 n. Chr. Eingaben verwenden UTC/UT und den proleptischen gregorianischen Kalender; es gibt kein Jahr 0. Der UT–TT-Abstand wird mit dem Modell der Ephemeridenbibliothek geschätzt. Uhrzeiten und insbesondere die Erdrotation sind für sehr alte Daten unsicher; Sonne und Planetenpositionen sind ebenfalls Modelle und keine zeitgenössischen Messungen.

Sonne, acht Planeten und Erdmond verwenden geometrische JPL-DE440/DE441-Vektoren in J2000-Koordinaten, mit der Sonne als Ursprung; Jupiter bis Neptun stehen für die jeweiligen Systemschwerpunkte. Die Bibliothek `naelos-ephemeris` 0.1.2 (Apache 2.0, https://github.com/altariqabraham-design/naelos-ephemeris) stellt komprimierte, aus JPL-Daten abgeleitete Tabellen bereit. Quelldaten: https://ssd.jpl.nasa.gov/planets/eph_export.html; die Datenabschnitte wurden beim Download mit den veröffentlichten SHA-256-Prüfsummen geprüft. Nur benötigte Jahrhundertdateien werden geladen. Die heutige Stellung der Oberflächen und eingezeichnete Bahnen sind keine Ephemeriden. Andere Monde, Ceres, Pluto, Gürtel und Raumfahrzeuge bleiben schematisch; Raumfahrzeuge sind vor Missionsbeginn nicht verfügbar.

Validierung: Vergleich geometrischer Vektoren mit dem unabhängigen NASA/JPL-Horizons-Rechenzugang https://ssd-api.jpl.nasa.gov/doc/horizons.html für den 1. Januar um 12 UT in 8000 v. Chr., 1 v. Chr. und 2026 n. Chr.; Abweichungen in diesen Stichproben unter 56 km für Planeten und unter 7 m für den Mond, bezogen auf dieselbe JPL-Datengrundlage und den gewählten dynamischen Zeitpunkt. Dies ist keine allgemeine Aussage über die historische Genauigkeit der Ephemeriden oder der Erdzeit. Tests: `npm test`; die gespeicherten Referenzwerte liegen in `tests/horizons-reference.json`.

## Halleyscher Komet

Halley ist für 1980 bis Ende 2100 auswählbar. Die Positionen beruhen auf geometrischen heliozentrischen J2000-Ekliptik-Vektoren des NASA/JPL Horizons API (1P/Halley, Lösung JPL#75, Abfrage 6. November 2026, Zeitschritt fünf Tage); zwischen den Stützstellen wird anhand der Geschwindigkeiten interpoliert. Die Anzeigezeit UT wird hier näherungsweise als TDB verwendet; die Abweichung ist für die Darstellung gering. Bei weiter zurückliegenden Daten wird Halley ausgeblendet. Der sichtbare Bahnbogen zeigt den berechneten Zeitraum und ist keine unveränderliche geschlossene Umlaufbahn. Die Explorer-Ansicht verformt Abstände radial. Kern, Koma und Schweife sind stark vergrösserte, stilisierte Darstellungen; weder Schweifstruktur noch Helligkeit oder Sichtbarkeit von der Erde sind Vorhersagen. Quelle: https://ssd.jpl.nasa.gov/horizons/.

Die Oberfläche des Halley-Kerns ist prozedural gestaltet: dunkle Farbe und unregelmässige Form sind von Giottos Beobachtungen inspiriert, die Oberflächendetails sind frei erfunden und keine fotografische Karte. Quelle: https://www.esa.int/Science_Exploration/Space_Science/Comet_Interceptor/Building_on_Giotto_and_Rosetta.

## Hale-Bopp

Hale-Bopp (C/1995 O1) ist mit geometrischen heliozentrischen JPL-Horizons-Vektoren (JPL#226, Abfrage 6. November 2026, J2000-Ekliptik, TDB, Fünf-Tage-Stützstellen) von 1980 bis 2100 dargestellt; dazwischen wird anhand der Geschwindigkeiten interpoliert. Der Bahnbogen zeigt nur diesen Zeitraum, nicht den vollständigen mehrere Jahrtausende dauernden Umlauf. Der Kern und die Schweife sind frei gestaltete Modelle und keine fotografische Oberflächenkarte oder Vorhersage der Sichtbarkeit. Quellen: https://ssd.jpl.nasa.gov/horizons/ und https://science.nasa.gov/solar-system/comets/c-1995-o1-hale-bopp/.

## Kometenvergleich

Über „Kometen vergleichen“ erscheinen Halley und Hale-Bopp mit unterschiedlich farbigen Bahnbögen für 1980–2100 gleichzeitig im Sonnensystem. Beide Positionen beziehen sich auf das gleiche Datum, das sich über die Zeitreise und die Ereignisknöpfe ändern lässt. Koma, Gas- und Staubschweif können für beide Kometen gemeinsam ein- und ausgeschaltet werden. Die Linien sind zeitlich begrenzte, interpolierte Bahnabschnitte; die Entdeckeransicht verändert die Abstände und Kern und Schweife sind didaktische Modelle.

## Himmel von der Erde

„Himmel von der Erde“ öffnet eine drehbare Himmelskarte für 1900 bis 2100 mit einer Auswahl heller Sterne aus dem XHIP-Katalog (d3-celestial, `public/ephemeris/bright-stars.json`, Quelle https://github.com/ofrohn/d3-celestial, Copyright Olaf Frohn und Mitwirkende, BSD-3-Clause, siehe `public/ephemeris/NOTICE-d3-celestial.txt`; Sternpositionen J2000 ohne Eigenbewegung). Die Umrechnung von Sternkoordinaten und die topozentrischen Positionen von Sonne, Mond und sichtbaren Planeten verwenden Astronomy Engine (MIT, https://github.com/cosinekitty/astronomy). Datum/Uhrzeit unterstützen UTC und die Zeitzone Europe/Zurich; fehlende oder doppelte Ortszeiten bei Zeitumstellungen werden explizit abgewiesen. Die Karte zeigt einen ideal freien Horizont und berücksichtigt weder Wetter, Gelände, Lichtverschmutzung noch individuelle Beobachtungsbedingungen. Sternhelligkeit und Mondform sind schematisch, die Mondbeleuchtung wird ungefähr angegeben. Die Eingaben werden lokal verwendet; kein Standort wird automatisch abgefragt. Das eingestellte Datum wird auch in die Sonnensystem-Zeitreise übernommen.

## Sternbilder am Erdhimmel

Sechs Sternbildfiguren (Grosser Bär inklusive Grossem Wagen, Orion, Kassiopeia, Schwan, Stier und Skorpion) können auf der Himmelskarte ein- und ausgeblendet, über Linien oder die Auswahl markiert und mit kurzen Geschichten erkundet werden. Die Linien beruhen auf `constellations.lines.json` aus d3-celestial von Olaf Frohn (BSD-3-Clause; `public/ephemeris/NOTICE-d3-celestial.txt`), geometrisch interpoliert und am Horizont ausgeblendet. Die Figuren sind Darstellungskonventionen, keine offiziellen Sternbildgrenzen. Die Texte nennen griechische Überlieferungen ausdrücklich als kulturelle Geschichten. Bei Tageslicht werden Linien und Namen nicht angezeigt.

Die Himmelskarte lässt sich mit Zoomregler, Plus/Minus, Mausrad oder Zwei-Finger-Geste vergrössern; der Ausschnitt kann gezogen und mit „Zurücksetzen“ wiederhergestellt werden. Beschriftungen behalten ihre Bildschirmgrösse und weichen einander nach Möglichkeit aus.

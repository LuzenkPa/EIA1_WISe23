//HTML-Element mit ID Zeit wird der kontansten Variable "anzeige" zugewiesen
const anzeige = document.getElementById("Zeit");
//Shoutouts für die Stoppuhr werden mit 3 Objekten in Zeitbereiche von 0-1 Minute bis zur 2.Minute und alles darüber in einem Array definiert
let shoutouts = [
    { zeitBereichMinuten: 1, text: "Let's GO!" },
    { zeitBereichMinuten: 2, text: "Bleib dran Minjung!" },
    { zeitBereichMinuten: Number.MAX_VALUE, text: "Are you still watching?" }
];
// für Zeitmessung und Steuerung des Timers
var timeStop = 0;
var pause = true;
var startTime = new Date();

// für Anzeige der Uhr
var millisekunden = 0;
var sekunden = 0;
var minuten = 0;



// mit toggle wird die klasse dark_mode im HTML-Body hinzugefügt bzw. entfernt um die Farben per style.css zu ändern
function darken() {
    var element = document.body;
    element.classList.toggle("dark_mode");
}
// startet die Stoppuhr
function start() {
    pause = false;
}
// stoppt 
function stop() {
    pause = true;
}
// Zeit wird zurückgesetzt
function reset() {
    pause = true;
    timeStop = 0;
    resetTime();
}
//aktualisiert die Zeitanzeige
function aktualisierung() {
    // ist timer pausiert?
    if (pause === false) {
        //berechnet vergangene Zeit seit letztem Aktualisierungszeitpunkt 
        timeStop += new Date() - startTime;
        console.log("timestop:" + timeStop);
        //aktualisierung der Zeitwerte
        resetTime();

    }
    //startzeit wird aktuelle Zeit 
    startTime = new Date();
    //nächste aktualiesierung wird mit einer millisekunde verzögerung geplant
    setTimeout(aktualisierung, 1)
}
//zeigt die zeitwerte in der anzeige und aktualisiert sie
function resetTime() {
    //berechnet und rundet die zeitwerte aus der vergangenen zeit
    millisekunden = Math.floor(timeStop) % 1000;
    sekunden = Math.floor(timeStop / 1000) % 60;
    minuten = Math.floor(timeStop / (1000 * 60)) % 60;

    // fügt eine null zu minuten/sekunden wenn nötig(für verbesserung der zeitdarstellung)
    // und darunter für die millisekunden
    sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
    minuten = minuten < 10 ? "0" + minuten : minuten;

    if (millisekunden < 100) {
        millisekunden = "0" + millisekunden;
        if (millisekunden < 10) {
            millisekunden = "0" + millisekunden;
        }
    }
    // zieht die tatsächliche Zeitausagbe in "Zeit" bei HTML
    anzeige.innerHTML = minuten + ":" + sekunden + ":" + millisekunden;
}
//löst shoutouts aus, passend zur vergangenen Zeit
function doShoutout() {
    //Iteration über shoutouts
    for (const s of shoutouts) {
        //überprüft in welchem Bereich sich die vergangene Zeit befindet 
        if (Number(minuten) < s.zeitBereichMinuten) {
            //ausgabe des shoutouts 
            return (alert(s.text));
        }
    }
}
// startet Timer
aktualisierung();

const anzeige = document.getElementById("Zeit");

let shoutouts = [
    {zeitBereichMinuten:1,text:"Let's GO!"},
    {zeitBereichMinuten:2,text:"Bleib dran Minjung!"},
    {zeitBereichMinuten:Number.MAX_VALUE,text:"Are you still watching?"}
];
var timeStop = 0;
var pause = true;
var startTime = new Date();

var millisekunden = 0;
var sekunden = 0;
var minuten = 0;




function darken() {
    var element = document.body;
    element.classList.toggle("dark_mode");
}
function start() {
    pause = false;
}

function stop() {
    pause = true;
}

function reset() {
    pause = true;
    timeStop = 0;
    resetTime();
}
function aktualisierung() {
    if (pause === false) {
        timeStop += new Date() - startTime;
        console.log("timestop:" + timeStop);
        resetTime();

    }
    startTime = new Date();
    setTimeout(aktualisierung, 1)
}
function resetTime() {

    millisekunden = Math.floor(timeStop) % 1000;
    sekunden = Math.floor(timeStop / 1000) % 60;
    minuten = Math.floor(timeStop / (1000 * 60)) % 60;


    sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
    minuten = minuten < 10 ? "0" + minuten : minuten;

    if (millisekunden < 100) {
        millisekunden = "0" + millisekunden;
        if (millisekunden < 10) {
            millisekunden = "0" + millisekunden;
        }
    }

    anzeige.innerHTML = minuten + ":" + sekunden + ":" + millisekunden;
}
function doShoutout(){
    for(const s of shoutouts){
        if(Number(minuten) < s.zeitBereichMinuten){
            return (alert(s.text));
        }
    }
}
aktualisierung();

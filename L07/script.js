
//die myArray-Variable ersetzt meinen eingefügten Text und ermöglicht so eine Vereinfachung des Codes mit 
//z.B. myArray[0] = 
//"Ich begrüße Sie zu einem weiteren Abenteuer. Tippen Sie 'Los gehts' um anzufangen. Tippen Sie 'Exit' um das Spiel zu beenden."
// fängt bei Null an zu zählen und nimmt das nächste Stück Text bei Trennung durch ein Komma 
let myArray = [
/*0*/                "Ich begrüße Sie zu einem weiteren Abenteuer. Tippen Sie 'Los gehts' um anzufangen. Tippen Sie 'Exit' um das Spiel zu beenden.",
/*1,2*/              "Los gehts", "los gehts",
/*3*/                "Du stehst vor einer Wegscheide. Gehst du nach 'links' oder nach 'rechts'?",
/*4,5*/              "links", "rechts",
/* 6 */              "Du läufst zu einem Apfelbaum. Willst du einen Apfel 'pflücken' oder 'rasten'?",
/*7,8*/              "pflücken", "rasten",
/*9*/                "'Der Apfel war vergiftet und du bist gestorben.'",
/*10*/               "'Wir schreiben das Jahr 1687. Ein Apfel fällt dir auf den Kopf und du hast vor Newton die Schwerkraft entdeckt.'",
/*11*/               "Du siehst den Schatten eines Tigers.Willst du ihn 'ignorieren' oder 'nachgucken' ?",
/*12,13*/            "ignorieren", "nachgucken",
/* 14 */             "'Es liegen ein Haufen Diamanten am Ende des Weges und du bist nun reich!'",
/* 15 */             "'Es ist tatsächlich ein echter Tiger und du hast keine Chance!'",
/*16,17*/            "Exit", "exit",
/* 18 */             "'Keine korrekte Eingabe'"
]
//variable start wird mit funktion entscheidung beschrieben, die mit dem prompt befehl den Starttext als Pop-Up-Fenster darstellt
let start = entscheidung(myArray[0])
//console.log("Start-Varible Zeile 2: " + start
//wenn die eingabe im PopUp-Fenster mit den array-texten 1 oder 2 von oben gefüllt wird, dann sprung in den nächsten "Raum" des textadventures mit neuer Variable Wegscheide
if (start == myArray[1] || start == myArray[2]) {
    console.log("Start-Variable Zeile 5: " + start)
    let wegscheide = entscheidung(myArray[3])
//wenn var Wegscheide mit 'links' gefüllt wird, dann wird var Apfelbaum mit funktion 'entscheidung' ausgeführt und es geht zum nächsten Fenster
    if (wegscheide == myArray[4]) {
        let Apfelbaum = entscheidung(myArray[6])
//wenn Apfelbaum mit 'pflücken' gefüllt wird dann wird der alert mit 'array9'-Text von oben ausgegeben über die 'ende'-Funktion 
//und bei Bestätigung des Fensters geht es zurück an die Startposition des Textadventures durch die Funktion 'zurück'          
        if (Apfelbaum == myArray[7]) {
            ende(myArray[9])
            zurück();
        }
//falls Eingabe 'rasten' lautet dann Ausgabe des 'myArray8'-Texts mit 'ende'-Funktion und Neuladen des Fensters mit 'zurück'-Funktion       
        else if (Apfelbaum == myArray[8]) {
            ende(myArray[10])
            zurück();
        }
//falls Eingabe falsch (also keine der beiden obigen Eingaben zutrifft), dann wird Funktion 'fehleingabe' ausgeführt, die den alert'Keine korrekte Eingabe' ausführt und neuladen
        else {
            fehleingabe();
            zurück();
        }
    }
//falls Wegscheide mit rechts gefüllt wird, dann sprung in Tiger-Raum
    else if (wegscheide == myArray[5]) {
//neuer Raum des Textadventures mit var-Name Tiger und Frage myArray11-Text 
        let Tiger = entscheidung(myArray[11])
//falls 'ignorieren' dann Ausgabe  myArray14-Text mit 'ende'-Funktion und danach reload mit 'zurück'       
        if (Tiger == myArray[12]) {
            ende(myArray[14])
            zurück();
        }
//wenn Eingabe 'nachgucken', dann Ausgabe myArray15 und danach reload
        else if (Tiger == myArray[13]) {
            ende(myArray[15])
            zurück();
        }
        else {
            fehleingabe();
            zurück();
        }
    }
    
    else {
        fehleingabe();
        zurück();
    }
}
// wird am Anfang var start mit 'Exit' oder 'exit' gefüllt, dann automatisches schließen des Browser-Fensters über Befehl window.close()
else if (start == myArray[16] || start == myArray[17]) {
//zeigt ausgabe in der Konsole an mit Inhalt des Texts unten + dem Inhalt (Text) in Variable Start
    console.log("Start-Variable Zeile 10: " + start)
    window.close()
}

else {
    fehleingabe();
    zurück();
}
//Funktion mit Name 'entscheidung' die im return den prompt-Befehl ausführt, mit Inhalt 'prompttext' der dann jeweils z.B. in Zeile 52 mit myArray[11] ersetzt wird
function entscheidung(prompttext) {
    return prompt(prompttext);
}
// bei Fehleingabe, also keine der obigen myArray-Texten true ist, dann 'alert' im return, der die Ausgabe 'Keine korrekte Eingabe' hervorruft
function fehleingabe() {
    return alert(myArray[18]);
}
//gleich wie oben nur das Inhalt des alerts 'text' durch den darauffolgenden myArray-Text ersetzt wird
function ende(text) {
    return alert(text);
}
//führt einen Reload im Browser aus
function zurück() {
    window.location.reload()
}
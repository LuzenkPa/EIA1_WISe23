
let start = prompt("Ich begrüße Sie zu einem weiteren Abenteuer. Tippen Sie 'Los gehts' um anzufangen. Tippen Sie 'Exit' um das Spiel zu beenden.")
//console.log("Start-Varible Zeile 2: " + start)

if (start == "Los gehts" || start == "los gehts") {
    console.log("Start-Variable Zeile 5: " + start)
    let wegscheide = prompt("Du stehst vor einer Wegscheide. Gehst du nach 'links' oder nach 'rechts'?")
    if (wegscheide == "links") {
        let Apfelbaum = prompt("Du läufst zu einem Apfelbaum. Willst du einen Apfel 'pflücken' oder 'rasten'?")
        if (Apfelbaum == "pflücken") {
            alert('Der Apfel war vergiftet und du bist gestorben.')
        }
        else if (Apfelbaum == "rasten") {
            alert('Wir schreiben das Jahr 1687. Ein Apfel fällt dir auf den Kopf und du hast vor Newton die Schwerkraft entdeckt.')
        }
        else {
            alert('Keine korrekte Eingabe')
        }
    }
    else if (wegscheide == "rechts") {
        let Tiger = prompt("Du siehst den Schatten eines Tigers.Willst du ihn 'ignorieren' oder 'nachgucken' ?")
        if (Tiger == "ignorieren") {
            alert('Es liegen ein Haufen Diamanten am Ende des Weges und du bist nun reich!')
        }
        else if (Tiger == "nachgucken") {
            alert('Es ist tatsächlich ein echter Tiger und du hast keine Chance!')
        }
        else {
            alert('Keine korrekte Eingabe')
        }
    }
    else {
        alert('Keine korrekte Eingabe')
    }
}
else if (start == "exit" || start == "Exit"){
    console.log("Start-Variable Zeile 10: " + start)
    window.close()
}
else {
    alert('Keine korrekte Eingabe')
}


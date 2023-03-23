"use strict";
var randomPoem;
(function (randomPoem) {
    /*
    Aufgabe: <L01 Zufallsgedicht>
    Name: <Laura Kupferschmid>
    Matrikel: <272613>
    Datum: <25.03.2023>
    Quellen: <Madeleine Hansen, Judith Pauler>
    */
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // console.log(subjekte, prädikate, objekte);
    function getVerse(_subjekte, _prädikate, _objekte) {
        // console.log("alohomora"); 
        let zeile = "";
        let zahl1 = Math.floor(Math.random() * _subjekte.length);
        zeile = zeile + _subjekte[zahl1] + " ";
        _subjekte.splice(zahl1, 1);
        let zahl2 = Math.floor(Math.random() * _prädikate.length);
        zeile = zeile + _prädikate[zahl2] + " ";
        _prädikate.splice(zahl2, 1);
        let zahl3 = Math.floor(Math.random() * _objekte.length);
        zeile = zeile + _objekte[zahl3] + " ";
        _objekte.splice(zahl3, 1);
        console.log(zeile + " ");
        return zeile;
    }
    for (let i = subjekte.length; i > 0; i--) {
        // console.log(i);
        getVerse(subjekte, prädikate, objekte);
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=script.js.map
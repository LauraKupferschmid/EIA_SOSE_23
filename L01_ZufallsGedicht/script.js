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
    for (let i = subjekte.length; i > 0; i--) {
        // console.log(i);
        getVerse(subjekte, prädikate, objekte);
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        // console.log("alohomora"); 
        let vers = "";
        let number1 = Math.floor(Math.random() * _subjekte.length);
        vers = vers + _subjekte[number1] + " ";
        _subjekte.splice(number1, 1);
        let number2 = Math.floor(Math.random() * _prädikate.length);
        vers = vers + _prädikate[number2] + " ";
        _prädikate.splice(number2, 1);
        let number3 = Math.floor(Math.random() * _objekte.length);
        vers = vers + _objekte[number3] + " ";
        _objekte.splice(number3, 1);
        console.log(vers + " ");
        return vers;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=script.js.map
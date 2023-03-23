"use strict";
var randomPoem;
(function (randomPoem) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subjekte, prädikate, objekte);
    for (let i = subjekte.length; i > 0; i--) {
        console.log(i);
    }
    function getVerse() {
        console.log("alohomora");
    }
    console.log(getVerse);
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=script.js.map
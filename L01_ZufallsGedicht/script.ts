namespace randomPoem {

    /*
    Aufgabe: <L01 Zufallsgedicht>
    Name: <Laura Kupferschmid>
    Matrikel: <272613>
    Datum: <25.03.2023>
    Quellen: <Madeleine Hansen, Judith Pauler> 
    */

    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    // console.log(subjekte, prädikate, objekte);

    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {
        // console.log("alohomora"); 

        let zeile: string = "";
        let zahl1: number = Math.floor(Math.random() * _subjekte.length);
        zeile = zeile + _subjekte[zahl1] + " ";
        _subjekte.splice(zahl1, 1);

        let zahl2: number = Math.floor(Math.random() * _prädikate.length);
        zeile = zeile + _prädikate[zahl2] + " ";
        _prädikate.splice(zahl2, 1);

        let zahl3: number = Math.floor(Math.random() * _objekte.length);
        zeile = zeile + _objekte[zahl3] + " ";
        _objekte.splice(zahl3, 1);

        console.log(zeile + " ");

        return zeile;

    }

    for (let i: number = subjekte.length; i > 0; i--) {
        // console.log(i);
        getVerse(subjekte, prädikate, objekte);

    }

    }
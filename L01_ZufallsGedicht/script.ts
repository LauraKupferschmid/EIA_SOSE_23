namespace randomPoem {

    let subjekte: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    console.log(subjekte, prädikate, objekte);

    for (let i: number = subjekte.length; i > 0; i--) {
        console.log(i);
    }

    function getVerse(): void {
        console.log("alohomora");
    }

    console.log(getVerse);









}
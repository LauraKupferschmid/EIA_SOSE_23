"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*
    Aufgabe: <L08.2 Artpiece>
    Name: <Laura Kupferschmid>
    Matrikel: <272613>
    Datum: <16.05.23>
    Quellen: <Judith Pauler, Madelein Hansen>
    */
    /*normal script*/
    window.addEventListener("load", handleload);
    let canvas = document.querySelector("canvas");
    OldMcDonald.crc2 = canvas.getContext("2d");
    let food = new OldMcDonald.Food(10, OldMcDonald.crc2);
    let foodDog = new OldMcDonald.Food(10, OldMcDonald.crc2);
    let foodPig = new OldMcDonald.Food(10, OldMcDonald.crc2);
    let foodCow = new OldMcDonald.Food(10, OldMcDonald.crc2);
    let foodChicken = new OldMcDonald.Food(10, OldMcDonald.crc2);
    let foodDonkey = new OldMcDonald.Food(10, OldMcDonald.crc2);
    let i = 0;
    OldMcDonald.donkey = new OldMcDonald.Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10);
    OldMcDonald.pig = new OldMcDonald.Animal("Pig", "OINK OINK", "OLD MC DONALD HAD A FARM!", "Junk", 10);
    OldMcDonald.chicken = new OldMcDonald.Animal("Chicken", "BOOOCK BOOOOCK", "OLD MC DONALD HAD A FARM!", "KORN", 10);
    OldMcDonald.cow = new OldMcDonald.Animal("COW", "MUHHHHHHHH", "OLD MC DONALD HAD A FARM!", "GRAS", 10);
    OldMcDonald.dog = new OldMcDonald.Animal("DOG", "WUFFF WIFFF", "OLD MC DONALD HAD A FARM!", "FLEISCH", 10);
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        OldMcDonald.crc2 = canvas.getContext("2d");
        document.getElementById("button").addEventListener('click', newDay);
        document.addEventListener("click", Song);
        drawBackground();
        drawWall();
        food.drawManager();
    }
    function drawBackground() {
        let gradient = OldMcDonald.crc2.createLinearGradient(0, 0, 0, OldMcDonald.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
        OldMcDonald.crc2.fillStyle = gradient;
        OldMcDonald.crc2.fillRect(0, 0, OldMcDonald.crc2.canvas.width, OldMcDonald.crc2.canvas.height);
    }
    ;
    function drawWall() {
        OldMcDonald.crc2.fillStyle = "HSLA(137, 74%, 33%, 1)";
        OldMcDonald.crc2.fillRect(0, 290, OldMcDonald.crc2.canvas.width, 250);
    }
    function newDay() {
        console.log("newDay");
        OldMcDonald.donkey.drawDonkey();
        OldMcDonald.pig.drawPig();
        OldMcDonald.dog.drawDog();
        OldMcDonald.chicken.drawChicken();
        OldMcDonald.cow.drawCow();
        foodDog.drawFood(3, 4, 5, 6, "#7d6f4f", "#8a7850", "#a39167", "#b59f6d");
        foodCow.drawFood(22, 23, 24, 25, "#1d4727", "#1a4f27", "#155224", "#31633d");
        foodPig.drawFood(41, 42, 43, 44, "#6e5b46", "#4a3926", "#362818", "#574531");
        foodChicken.drawFood(61, 62, 63, 64, "#c7a22a", "#c7a228", "#d1aa2a", "#c79f1e");
        foodDonkey.drawFood(82, 83, 84, 85, "#93a646", "#8a9950", "#7e8a4e", "#778a2b");
    }
    function Song() {
        if (i < 1) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a dog, E-I-E-I-O.");
            console.log("With a ");
            console.log("Dog: " + OldMcDonald.dog.sound + " " + OldMcDonald.dog.sound);
            console.log("here,");
            console.log("and a");
            console.log("Dog: " + OldMcDonald.dog.sound + " " + OldMcDonald.dog.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Dog: " + OldMcDonald.dog.sound);
            console.log("there a ");
            console.log("Dog: " + OldMcDonald.dog.sound);
            console.log("Everywhere a ");
            console.log("Dog: " + OldMcDonald.dog.sound + " " + OldMcDonald.dog.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OldMcDonald.dog);
            i++;
            return;
        }
        if (i < 2) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a cow, E-I-E-I-O.");
            console.log("With a ");
            console.log("Cow: " + OldMcDonald.cow.sound + " " + OldMcDonald.cow.sound);
            console.log("here,");
            console.log("and a");
            console.log("Cow: " + OldMcDonald.cow.sound + " " + OldMcDonald.cow.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Cow: " + OldMcDonald.cow.sound);
            console.log("there a ");
            console.log("Cow: " + OldMcDonald.cow.sound);
            console.log("Everywhere a ");
            console.log("Cow: " + OldMcDonald.cow.sound + " " + OldMcDonald.cow.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OldMcDonald.cow);
            i++;
            return;
        }
        if (i < 3) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a cow, E-I-E-I-O.");
            console.log("With a ");
            console.log("Pig: " + OldMcDonald.pig.sound + " " + OldMcDonald.pig.sound);
            console.log("here,");
            console.log("and a");
            console.log("Pig: " + OldMcDonald.pig.sound + " " + OldMcDonald.pig.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Pig: " + OldMcDonald.pig.sound);
            console.log("there a ");
            console.log("Pig: " + OldMcDonald.pig.sound);
            console.log("Everywhere a ");
            console.log("Pig: " + OldMcDonald.pig.sound + " " + OldMcDonald.pig.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OldMcDonald.pig);
            i++;
            return;
        }
        if (i < 4) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a cow, E-I-E-I-O.");
            console.log("With a ");
            console.log("Chicken: " + OldMcDonald.chicken.sound + " " + OldMcDonald.chicken.sound);
            console.log("here,");
            console.log("and a");
            console.log("Chicken: " + OldMcDonald.chicken.sound + " " + OldMcDonald.chicken.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Chicken: " + OldMcDonald.chicken.sound);
            console.log("there a ");
            console.log("Chicken: " + OldMcDonald.chicken.sound);
            console.log("Everywhere a ");
            console.log("Chicken: " + OldMcDonald.chicken.sound + " " + OldMcDonald.chicken.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OldMcDonald.chicken);
            i++;
            return;
        }
        if (i < 5) {
            console.log("Old MacDonald had a farm, E-I-E-I-O");
            console.log("And on that farm he had a cow, E-I-E-I-O.");
            console.log("With a ");
            console.log("Donkey: " + OldMcDonald.donkey.sound + " " + OldMcDonald.donkey.sound);
            console.log("here,");
            console.log("and a");
            console.log("Donkey: " + OldMcDonald.donkey.sound + " " + OldMcDonald.donkey.sound);
            console.log("there.");
            console.log("Here a ");
            console.log("Donkey: " + OldMcDonald.donkey.sound);
            console.log("there a ");
            console.log("Donkey: " + OldMcDonald.donkey.sound);
            console.log("Everywhere a ");
            console.log("Donkey: " + OldMcDonald.donkey.sound + " " + OldMcDonald.donkey.sound);
            console.log("Old MacDonald had a farm, E-I-E-I-O.");
            food.eat(OldMcDonald.donkey);
            i++;
            return;
        }
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map
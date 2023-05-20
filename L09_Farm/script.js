"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*
       Aufgabe: <L08.2 Artpiece>
       Name: <Laura Kupferschmid>
       Matrikel: <272613>
       Datum: <16s.05.23>
       Quellen: <Judith Pauler, Madelein Hansen>
       */
    /*normal script*/
    window.addEventListener("load", handleload);
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        OldMcDonald.crc2 = canvas.getContext("2d");
        document.getElementById("button").addEventListener('click', newDay);
        drawBackground();
        drawWall();
        food();
        singing();
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
        OldMcDonald.crc2.fillStyle = "#262626";
        OldMcDonald.crc2.fillRect(0, 290, OldMcDonald.crc2.canvas.width, 250);
    }
    function newDay() {
        console.log("Hallo0");
        donkey();
        pig();
        dog();
        chicken();
        cow();
    }
    function donkey() {
        console.log("Hallo0");
        let donkey = new OldMcDonald.Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10);
        console.log(donkey);
        donkey.name = "_name";
        donkey.sound = "_sound";
        donkey.sing = "_sing";
        donkey.eat = "_eat";
        donkey.food = 10;
        donkey.soundAnimal();
        console.log(donkey.soundAnimal());
        donkey.singingSong();
        donkey.eatFood(10);
        OldMcDonald.crc2.fillStyle = "#8a8a8a";
        OldMcDonald.crc2.fillRect(847, 250, 55, 50);
        OldMcDonald.crc2.fillStyle = "#9c9b9a";
        OldMcDonald.crc2.fillRect(837, 195, 75, 70);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(850, 215, 12, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(853, 218, 4, 4);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(885, 215, 12, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(888, 218, 4, 4);
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
        OldMcDonald.crc2.fillStyle = "#8a8a8a";
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.closePath();
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.ellipse(867, 248, 3, 3, 0, 0, Math.PI * 2);
        OldMcDonald.crc2.fillStyle = "#9c9b9a";
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.closePath();
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.ellipse(878, 248, 3, 3, 0, 0, Math.PI * 2);
        OldMcDonald.crc2.fillStyle = "#9c9b9a";
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.closePath();
        OldMcDonald.crc2.fillStyle = "#9c9b9a";
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.moveTo(830, 160);
        OldMcDonald.crc2.lineTo(837, 195);
        OldMcDonald.crc2.lineTo(860, 195);
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.fillStyle = "#9c9b9a";
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.moveTo(920, 160);
        OldMcDonald.crc2.lineTo(912, 195);
        OldMcDonald.crc2.lineTo(890, 195);
        OldMcDonald.crc2.fill();
    }
    function pig() {
        console.log("Hallo0");
        let pig = new OldMcDonald.Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10);
        console.log(pig);
        pig.name = "_name";
        pig.sound = "_sound";
        pig.sing = "_sing";
        pig.eat = "_eat";
        pig.food = 10;
        pig.soundAnimal();
        //console.log(donkey.soundAnimal())
        pig.singingSong();
        pig.eatFood(10);
        OldMcDonald.crc2.fillStyle = "#e8bebe";
        OldMcDonald.crc2.fillRect(445, 250, 60, 50);
        OldMcDonald.crc2.fillStyle = "#e8bebe";
        OldMcDonald.crc2.fillRect(437, 195, 75, 70);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(445, 215, 18, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(447, 218, 4, 4);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(485, 215, 18, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(488, 218, 4, 4);
        OldMcDonald.crc2.fillStyle = "#f5cece";
        OldMcDonald.crc2.fillRect(462, 238, 20, 20);
        OldMcDonald.crc2.fillStyle = "#e3b1b1";
        OldMcDonald.crc2.fillRect(466, 242, 4, 11);
        OldMcDonald.crc2.fillStyle = "#e3b1b1";
        OldMcDonald.crc2.fillRect(476, 242, 4, 11);
        OldMcDonald.crc2.fillStyle = "#e8bebe";
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.moveTo(460, 175);
        OldMcDonald.crc2.lineTo(430, 195);
        OldMcDonald.crc2.lineTo(460, 195);
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.fillStyle = "#e8bebe";
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.moveTo(490, 175);
        OldMcDonald.crc2.lineTo(518, 195);
        OldMcDonald.crc2.lineTo(490, 195);
        OldMcDonald.crc2.fill();
    }
    function chicken() {
        console.log("Hallo0");
        let chicken = new OldMcDonald.Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10);
        console.log(chicken);
        chicken.name = "_name";
        chicken.sound = "_sound";
        chicken.sing = "_sing";
        chicken.eat = "_eat";
        chicken.food = 10;
        chicken.soundAnimal();
        OldMcDonald.crc2.fillStyle = "#ffffff";
        OldMcDonald.crc2.fillRect(645, 250, 60, 50);
        OldMcDonald.crc2.fillStyle = "#ffffff";
        OldMcDonald.crc2.fillRect(637, 195, 75, 70);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(650, 215, 10, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(653, 218, 4, 4);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(685, 215, 10, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(688, 218, 4, 4);
        OldMcDonald.crc2.fillStyle = "#d6b245";
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.moveTo(660, 240);
        OldMcDonald.crc2.lineTo(688, 240);
        OldMcDonald.crc2.lineTo(673, 260);
        OldMcDonald.crc2.fill();
    }
    function cow() {
        let cow = new OldMcDonald.Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10);
        console.log(cow);
        cow.name = "_name";
        cow.sound = "_sound";
        cow.sing = "_sing";
        cow.eat = "_eat";
        cow.food = 10;
        cow.soundAnimal();
        //console.log(cow.soundAnimal())
        OldMcDonald.crc2.fillStyle = "#e3dfdc";
        OldMcDonald.crc2.fillRect(250, 250, 50, 50);
        OldMcDonald.crc2.fillStyle = "#f0ece9";
        OldMcDonald.crc2.fillRect(240, 195, 70, 70);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(250, 215, 10, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(253, 218, 4, 4);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(285, 215, 10, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(288, 218, 4, 4);
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.ellipse(273, 245, 15, 10, 0, 0, Math.PI * 2);
        OldMcDonald.crc2.fillStyle = "#e3dfdc";
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.closePath();
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.ellipse(267, 245, 4, 4, 0, 0, Math.PI * 2);
        OldMcDonald.crc2.fillStyle = "#ababab";
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.closePath();
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.ellipse(280, 245, 4, 4, 0, 0, Math.PI * 2);
        OldMcDonald.crc2.fillStyle = "#ababab";
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.closePath();
        OldMcDonald.crc2.fillStyle = "#f0ece9";
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.moveTo(260, 175);
        OldMcDonald.crc2.lineTo(225, 195);
        OldMcDonald.crc2.lineTo(260, 195);
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.fillStyle = "#f0ece9";
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.moveTo(290, 175);
        OldMcDonald.crc2.lineTo(330, 195);
        OldMcDonald.crc2.lineTo(290, 195);
        OldMcDonald.crc2.fill();
    }
    function dog() {
        let dog = new OldMcDonald.Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10);
        console.log(dog);
        dog.name = "_name";
        dog.sound = "_sound";
        dog.sing = "_sing";
        dog.eat = "_eat";
        dog.food = 10;
        dog.soundAnimal();
        //console.log(dog.soundAnimal())
        OldMcDonald.crc2.fillStyle = "#858585";
        OldMcDonald.crc2.fillRect(50, 250, 50, 50); // Body
        OldMcDonald.crc2.fillStyle = "#858585";
        OldMcDonald.crc2.fillRect(40, 195, 70, 70); // Head
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(50, 215, 14, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(53, 218, 4, 4);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(85, 215, 14, 20);
        OldMcDonald.crc2.fillStyle = "white";
        OldMcDonald.crc2.fillRect(88, 218, 4, 4);
        OldMcDonald.crc2.fillStyle = "black";
        OldMcDonald.crc2.fillRect(68, 238, 10, 5);
        OldMcDonald.crc2.fillStyle = "#858585";
        OldMcDonald.crc2.fillRect(25, 188, 25, 15);
        OldMcDonald.crc2.fillStyle = "#858585";
        OldMcDonald.crc2.fillRect(100, 188, 25, 15);
    }
    function singing() {
        console.log("Hallo1");
    }
    function food() {
        console.log("Hallo2");
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map
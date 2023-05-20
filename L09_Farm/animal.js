"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*Klassen und Interface*/
    class Animal {
        name;
        sound;
        sing;
        eat;
        food;
        constructor(_name, _sound, _sing, _eat, _food) {
            console.log("constructor");
            this.name = _name;
            this.sound = _sound;
            this.sing = _sing;
            this.eat = _eat;
            this.food = _food;
        }
        drawDonkey() {
            OldMcDonald.donkey.name = "";
            OldMcDonald.donkey.sound = "";
            OldMcDonald.donkey.sing = "";
            OldMcDonald.donkey.eat = "";
            OldMcDonald.donkey.food = 10;
            console.log(OldMcDonald.donkey.sound);
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
        drawDog() {
            OldMcDonald.crc2.fillStyle = "#858585";
            OldMcDonald.crc2.fillRect(50, 250, 50, 50);
            OldMcDonald.crc2.fillStyle = "#858585";
            OldMcDonald.crc2.fillRect(40, 195, 70, 70);
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
        drawCow() {
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
        drawPig() {
            console.log("pig");
            console.log(OldMcDonald.pig);
            OldMcDonald.pig.name = "_name";
            OldMcDonald.pig.sound = "_sound";
            OldMcDonald.pig.sing = "_sing";
            OldMcDonald.pig.eat = "_eat";
            OldMcDonald.pig.food = 10;
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
        drawChicken() {
            console.log("chick");
            console.log(OldMcDonald.chicken);
            OldMcDonald.chicken.name = "_name";
            OldMcDonald.chicken.sound = "_sound";
            OldMcDonald.chicken.sing = "_sing";
            OldMcDonald.chicken.eat = "_eat";
            OldMcDonald.chicken.food = 10;
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
    }
    OldMcDonald.Animal = Animal;
    ;
    class Food {
        blockSize;
        context;
        constructor(blockSize, context) {
            this.blockSize = blockSize;
            this.context = context;
        }
        drawBlock(x, y, color) {
            const xPos = x * this.blockSize;
            const yPos = y * this.blockSize;
            this.context.fillStyle = color;
            this.context.fillRect(xPos, yPos, this.blockSize, this.blockSize);
        }
        drawManager() {
            OldMcDonald.crc2.fillStyle = "#362109";
            OldMcDonald.crc2.fillRect(20, 420, 150, 100);
            OldMcDonald.crc2.fillStyle = "#362109";
            OldMcDonald.crc2.fillRect(210, 420, 150, 100);
            OldMcDonald.crc2.fillStyle = "#362109";
            OldMcDonald.crc2.fillRect(400, 420, 150, 100);
            OldMcDonald.crc2.fillStyle = "#362109";
            OldMcDonald.crc2.fillRect(600, 420, 150, 100);
            OldMcDonald.crc2.fillStyle = "#362109";
            OldMcDonald.crc2.fillRect(810, 420, 150, 100);
        }
        drawFood(_a, _b, _c, _d, _color1, _color2, _color3, _color4) {
            let i = 0;
            while (i < 13) {
                this.drawBlock(_a, 41, _color1);
                i++;
                _a++;
            }
            while (i < 24) {
                this.drawBlock(_b, 40, _color2);
                i++;
                _b++;
            }
            while (i < 33) {
                this.drawBlock(_c, 39, _color3);
                i++;
                _c++;
            }
            while (i < 40) {
                this.drawBlock(_d, 38, _color4);
                i++;
                _d++;
            }
            return;
        }
        eat(_animal) {
            if (_animal == OldMcDonald.dog) {
                this.drawFood(3, 4, 5, 6, "#7d6f4f", "#8a7850", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)");
                console.log("Dog: 2 ");
            }
            if (_animal == OldMcDonald.cow) {
                this.drawFood(22, 23, 24, 25, "#1d4727", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)");
                console.log("Cow: 1 ");
            }
            if (_animal == OldMcDonald.pig) {
                this.drawFood(41, 42, 43, 44, "#6e5b46", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)");
                console.log("Pig: 1 ");
            }
            if (_animal == OldMcDonald.chicken) {
                this.drawFood(61, 62, 63, 64, "#c7a22a", "#c7a228", "#d1aa2a", "HSLA(137, 74%, 33%, 1)");
                console.log("Chicken: 3");
            }
            if (_animal == OldMcDonald.donkey) {
                this.drawFood(82, 83, 84, 85, "#93a646", "#8a9950", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)");
                console.log("Donkey: 2");
            }
        }
        clearCanvas() {
            const canvas = this.context.canvas;
            this.context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    OldMcDonald.Food = Food;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map
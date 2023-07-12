namespace OldMcDonald {
    /*Klassen und Interface*/
    export class Animal {
        name: string;
        sound: string;
        sing: string;
        eat: string;
        food: number;

        constructor(_name: string, _sound: string, _sing: string, _eat: string, _food: number) {
            console.log("constructor")
            this.name = _name;
            this.sound = _sound;
            this.sing = _sing;
            this.eat = _eat;
            this.food = _food;
        }

        drawDonkey() {
            donkey.name = "";
            donkey.sound = "";
            donkey.sing = "";
            donkey.eat = "";
            donkey.food = 10;

            console.log(donkey.sound)

            crc2.fillStyle = "#8a8a8a";
            crc2.fillRect(847, 250, 55, 50);

            crc2.fillStyle = "#9c9b9a";
            crc2.fillRect(837, 195, 75, 70);

            crc2.fillStyle = "black";
            crc2.fillRect(850, 215, 12, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(853, 218, 4, 4);


            crc2.fillStyle = "black";
            crc2.fillRect(885, 215, 12, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(888, 218, 4, 4);

            crc2.beginPath();
            crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#8a8a8a";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(867, 248, 3, 3, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.ellipse(878, 248, 3, 3, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(830, 160);
            crc2.lineTo(837, 195);
            crc2.lineTo(860, 195);
            crc2.fill();

            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(920, 160);
            crc2.lineTo(912, 195);
            crc2.lineTo(890, 195);
            crc2.fill();


        }
        drawDog(): void {

            crc2.fillStyle = "#858585";
            crc2.fillRect(50, 250, 50, 50);
            crc2.fillStyle = "#858585";
            crc2.fillRect(40, 195, 70, 70);
            crc2.fillStyle = "black";
            crc2.fillRect(50, 215, 14, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(53, 218, 4, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(85, 215, 14, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(88, 218, 4, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(68, 238, 10, 5);
            crc2.fillStyle = "#858585";
            crc2.fillRect(25, 188, 25, 15);
            crc2.fillStyle = "#858585";
            crc2.fillRect(100, 188, 25, 15);
        }
        drawCow(): void {
            crc2.fillStyle = "#e3dfdc";
            crc2.fillRect(250, 250, 50, 50);
            crc2.fillStyle = "#f0ece9";
            crc2.fillRect(240, 195, 70, 70);
            crc2.fillStyle = "black";
            crc2.fillRect(250, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(253, 218, 4, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(285, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(288, 218, 4, 4);
            crc2.beginPath();
            crc2.ellipse(273, 245, 15, 10, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#e3dfdc";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(267, 245, 4, 4, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#ababab";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(280, 245, 4, 4, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#ababab";
            crc2.fill();
            crc2.closePath();
            crc2.fillStyle = "#f0ece9";
            crc2.beginPath();
            crc2.moveTo(260, 175);
            crc2.lineTo(225, 195);
            crc2.lineTo(260, 195);
            crc2.fill();
            crc2.fillStyle = "#f0ece9";
            crc2.beginPath();
            crc2.moveTo(290, 175);
            crc2.lineTo(330, 195);
            crc2.lineTo(290, 195);
            crc2.fill();
        }


        drawPig() {
            console.log("pig")
            console.log(pig)
            pig.name = "_name";
            pig.sound = "_sound";
            pig.sing = "_sing";
            pig.eat = "_eat";
            pig.food = 10;

            crc2.fillStyle = "#e8bebe";
            crc2.fillRect(445, 250, 60, 50);

            crc2.fillStyle = "#e8bebe";
            crc2.fillRect(437, 195, 75, 70);

            crc2.fillStyle = "black";
            crc2.fillRect(445, 215, 18, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(447, 218, 4, 4);

            crc2.fillStyle = "black";
            crc2.fillRect(485, 215, 18, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(488, 218, 4, 4);

            crc2.fillStyle = "#f5cece";
            crc2.fillRect(462, 238, 20, 20);

            crc2.fillStyle = "#e3b1b1";
            crc2.fillRect(466, 242, 4, 11);

            crc2.fillStyle = "#e3b1b1";
            crc2.fillRect(476, 242, 4, 11);

            crc2.fillStyle = "#e8bebe";
            crc2.beginPath();
            crc2.moveTo(460, 175);
            crc2.lineTo(430, 195);
            crc2.lineTo(460, 195);
            crc2.fill();

            crc2.fillStyle = "#e8bebe";
            crc2.beginPath();
            crc2.moveTo(490, 175);
            crc2.lineTo(518, 195);
            crc2.lineTo(490, 195);
            crc2.fill();


        }

        drawChicken() {
            console.log("chick")
            console.log(chicken)
            chicken.name = "_name";
            chicken.sound = "_sound";
            chicken.sing = "_sing";
            chicken.eat = "_eat";
            chicken.food = 10;

            crc2.fillStyle = "#ffffff";
            crc2.fillRect(645, 250, 60, 50);

            crc2.fillStyle = "#ffffff";
            crc2.fillRect(637, 195, 75, 70);

            crc2.fillStyle = "black";
            crc2.fillRect(650, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(653, 218, 4, 4);

            crc2.fillStyle = "black";
            crc2.fillRect(685, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(688, 218, 4, 4);

            crc2.fillStyle = "#d6b245";
            crc2.beginPath();
            crc2.moveTo(660, 240);
            crc2.lineTo(688, 240);
            crc2.lineTo(673, 260);
            crc2.fill();


        }
    };

    export class Food {

        blockSize: number;
        context: CanvasRenderingContext2D;

        constructor(blockSize: number, context: CanvasRenderingContext2D) {
            this.blockSize = blockSize;
            this.context = context;
        }

        drawBlock(x: number, y: number, color: string): void {
            const xPos = x * this.blockSize;
            const yPos = y * this.blockSize;

            this.context.fillStyle = color;
            this.context.fillRect(xPos, yPos, this.blockSize, this.blockSize);
        }

        public drawManager(): void {
            crc2.fillStyle = "#362109";
            crc2.fillRect(20, 420, 150, 100);

            crc2.fillStyle = "#362109";
            crc2.fillRect(210, 420, 150, 100);

            crc2.fillStyle = "#362109";
            crc2.fillRect(400, 420, 150, 100);

            crc2.fillStyle = "#362109";
            crc2.fillRect(600, 420, 150, 100);

            crc2.fillStyle = "#362109";
            crc2.fillRect(810, 420, 150, 100);
        }

        public drawFood(_a: number, _b: number, _c: number, _d: number, _color1: string, _color2: string, _color3: string, _color4: string): void {
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

        eat(_animal: Animal): void {
            if (_animal == dog) {
                this.drawFood(3, 4, 5, 6, "#7d6f4f", "#8a7850", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)");
                console.log("Dog: 2 ")
            }
            if (_animal == cow) {
                this.drawFood(22, 23, 24, 25, "#1d4727", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)");
                console.log("Cow: 1 ")
            }
            if (_animal == pig) {
                this.drawFood(41, 42, 43, 44, "#6e5b46", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)");
                console.log("Pig: 1 ")
            }
            if (_animal == chicken) {
                this.drawFood(61, 62, 63, 64, "#c7a22a", "#c7a228", "#d1aa2a", "HSLA(137, 74%, 33%, 1)");
                console.log("Chicken: 3")
            }
            if (_animal == donkey) {
                this.drawFood(82, 83, 84, 85, "#93a646", "#8a9950", "HSLA(137, 74%, 33%, 1)", "HSLA(137, 74%, 33%, 1)");
                console.log("Donkey: 2")
            }

        }

        public clearCanvas(): void {
            const canvas: HTMLCanvasElement = this.context.canvas;
            this.context.clearRect(0, 0, canvas.width, canvas.height);
        }



    }
}
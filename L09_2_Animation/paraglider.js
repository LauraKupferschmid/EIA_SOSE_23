"use strict";
var AnimatedPic;
(function (AnimatedPic) {
    class paraglider {
        position;
        velocity;
        activity;
        constructor(_velocity) { }
        move(_timesclice) {
            this.velocity;
            this.position;
            /*if(){
                this.activity = "walking"
                this.velocity
            };
            this.activity = "flying"
        
            return this.activity*/
        }
        fly() {
            this.activity = "flying";
        }
        walk() {
            this.activity = "walking";
        }
        climb() {
            this.activity = "climbing";
        }
        getRandomNumber(_max, _min = 0) {
            return Math.floor(Math.random() * _max) + _min;
        }
        changeColor() {
            const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
            let randomColor1 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor2 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor3 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor4 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor5 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor6 = intensity[Math.floor(Math.random() * intensity.length)];
            const randomColor = `#${randomColor1}${randomColor2}${randomColor3}${randomColor4}${randomColor5}${randomColor6}`;
            AnimatedPic.crc2.fillStyle = "randomColor";
            console.log(randomColor);
            return randomColor;
        }
        draw(_position, _size) {
            if (this.activity = "flying") {
                // kein schirm nur human
                AnimatedPic.crc2.beginPath();
                AnimatedPic.crc2.fillStyle = this.changeColor();
                AnimatedPic.crc2.fillRect(_position.x, _position.y, 10, 16);
                AnimatedPic.crc2.fillStyle = this.changeColor();
                AnimatedPic.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                AnimatedPic.crc2.closePath();
                AnimatedPic.crc2.beginPath();
                AnimatedPic.crc2.moveTo(_position.x, _position.y);
                AnimatedPic.crc2.lineTo(_position.x - 20, _position.y - 20);
                AnimatedPic.crc2.lineTo(_position.x + 30, _position.y - 30);
                AnimatedPic.crc2.stroke();
                AnimatedPic.crc2.fillStyle = this.changeColor();
                AnimatedPic.crc2.fill();
                AnimatedPic.crc2.closePath();
            }
            if (this.activity = "walking") {
                // kein schirm nur human
                AnimatedPic.crc2.beginPath();
                AnimatedPic.crc2.fillStyle = this.changeColor();
                AnimatedPic.crc2.fillRect(_position.x, _position.y, 10, 16);
                AnimatedPic.crc2.fillStyle = this.changeColor();
                AnimatedPic.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                AnimatedPic.crc2.closePath();
            }
            if (this.activity = "climbing") {
                //kein schirm nur human
                AnimatedPic.crc2.beginPath();
                AnimatedPic.crc2.fillStyle = this.changeColor();
                AnimatedPic.crc2.fillRect(_position.x, _position.y, 10, 16);
                AnimatedPic.crc2.fillStyle = this.changeColor();
                AnimatedPic.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                AnimatedPic.crc2.closePath();
            }
        }
        ;
    }
    AnimatedPic.paraglider = paraglider;
})(AnimatedPic || (AnimatedPic = {}));
//# sourceMappingURL=paraglider.js.map
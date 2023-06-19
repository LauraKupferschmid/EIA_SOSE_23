"use strict";
var FlyingPeopleAlpsIII;
(function (FlyingPeopleAlpsIII) {
    class FlyingObject {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.velocity = new FlyingPeopleAlpsIII.Vector(50, 0);
            this.velocity = new FlyingPeopleAlpsIII.Vector(120, 20);
            //this.velocity = _velocity;
            this.position = new FlyingPeopleAlpsIII.Vector(150, 20);
            //this.position = _position;
        }
        doActivity(_timeslice) {
        }
        draw() {
        }
    }
    FlyingPeopleAlpsIII.FlyingObject = FlyingObject;
    class paraglider extends FlyingObject {
        activity;
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
            FlyingPeopleAlpsIII.crc2.fillStyle = "randomColor";
            return randomColor;
        }
        doActivity(_timeslice) {
            let offset = new FlyingPeopleAlpsIII.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            console.log(this.position);
            this.activity = "flying";
            let y_ground = new FlyingPeopleAlpsIII.Vector(200, 500);
            let flyground = new FlyingPeopleAlpsIII.Vector(150, 50);
            let x_ground = new FlyingPeopleAlpsIII.Vector(50, 10);
            if (FlyingPeopleAlpsIII.flystart > y_ground) { //flystart
                //this.draw(_y: 400, 10)
                this.activity = "walking";
                this.position.x += FlyingPeopleAlpsIII.crc2.canvas.width;
            }
            if (FlyingPeopleAlpsIII.hikingzone.x > x_ground.x && FlyingPeopleAlpsIII.hikingzone.y > x_ground.y) {
                this.position.x -= FlyingPeopleAlpsIII.crc2.canvas.width;
                this.activity = "climbing";
            }
            if (FlyingPeopleAlpsIII.flystart = flyground) {
                this.position.y += FlyingPeopleAlpsIII.crc2.canvas.height;
                this.activity = "flying";
            }
        }
        draw() {
            if (this.activity = "flying") {
                //Schirm
                FlyingPeopleAlpsIII.crc2.beginPath();
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y, 10, 16);
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                FlyingPeopleAlpsIII.crc2.closePath();
                FlyingPeopleAlpsIII.crc2.beginPath();
                FlyingPeopleAlpsIII.crc2.moveTo(this.position.x, this.position.y);
                FlyingPeopleAlpsIII.crc2.lineTo(this.position.x - 20, this.position.y - 20);
                FlyingPeopleAlpsIII.crc2.lineTo(this.position.x + 30, this.position.y - 30);
                FlyingPeopleAlpsIII.crc2.stroke();
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fill();
                FlyingPeopleAlpsIII.crc2.closePath();
            }
            console.log(this.activity = "flying");
            if (this.activity = "walking") {
                //Kein Schirm
                FlyingPeopleAlpsIII.crc2.beginPath();
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y, 10, 16);
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                FlyingPeopleAlpsIII.crc2.closePath();
            }
            if (this.activity = "climbing") {
                //KeinSchirm
                FlyingPeopleAlpsIII.crc2.beginPath();
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y, 10, 16);
                FlyingPeopleAlpsIII.crc2.fillStyle = this.changeColor();
                FlyingPeopleAlpsIII.crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                FlyingPeopleAlpsIII.crc2.closePath();
            }
        }
        ;
    }
    FlyingPeopleAlpsIII.paraglider = paraglider;
    class bumblebees extends FlyingObject {
        size;
        /*constructor(_size: number, _position?: Vector) {
    
    
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
    
            this.velocity = new Vector(50, 0);
            this.velocity.randomize(120, 20);
        }*/
        doActivity(_timeslice) {
            let offset = new FlyingPeopleAlpsIII.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += FlyingPeopleAlpsIII.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += FlyingPeopleAlpsIII.crc2.canvas.height;
            if (this.position.x > FlyingPeopleAlpsIII.crc2.canvas.width)
                this.position.x -= FlyingPeopleAlpsIII.crc2.canvas.width;
            if (this.position.y > FlyingPeopleAlpsIII.crc2.canvas.height)
                this.position.y -= FlyingPeopleAlpsIII.crc2.canvas.height;
        }
        draw() {
            console.log("Bee1");
            FlyingPeopleAlpsIII.crc2.save();
            FlyingPeopleAlpsIII.crc2.translate(this.position.x, this.position.y);
            let grd = FlyingPeopleAlpsIII.crc2.createLinearGradient(2, 3, 6, 8);
            grd.addColorStop(0, "yellow");
            grd.addColorStop(1, "black");
            grd.addColorStop(1, "yellow");
            FlyingPeopleAlpsIII.crc2.beginPath();
            FlyingPeopleAlpsIII.crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
            FlyingPeopleAlpsIII.crc2.fillStyle = "white";
            FlyingPeopleAlpsIII.crc2.fill();
            FlyingPeopleAlpsIII.crc2.beginPath();
            FlyingPeopleAlpsIII.crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            FlyingPeopleAlpsIII.crc2.fillStyle = grd;
            FlyingPeopleAlpsIII.crc2.fill();
            FlyingPeopleAlpsIII.crc2.beginPath();
            FlyingPeopleAlpsIII.crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
            FlyingPeopleAlpsIII.crc2.fillStyle = "lightgrey";
            FlyingPeopleAlpsIII.crc2.fill();
            FlyingPeopleAlpsIII.crc2.restore();
        }
        ;
    }
    FlyingPeopleAlpsIII.bumblebees = bumblebees;
})(FlyingPeopleAlpsIII || (FlyingPeopleAlpsIII = {}));
//# sourceMappingURL=FlyingPerson.js.map
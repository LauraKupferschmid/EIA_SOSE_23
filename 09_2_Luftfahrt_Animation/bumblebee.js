"use strict";
var FlyingPeopleAlpsII;
(function (FlyingPeopleAlpsII) {
    class bumblebees {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new FlyingPeopleAlpsII.Vector(Math.random() * FlyingPeopleAlpsII.crc2.canvas.width, Math.random() * FlyingPeopleAlpsII.crc2.canvas.height);
            this.velocity = new FlyingPeopleAlpsII.Vector(50, 0);
            this.velocity.randomize(120, 20);
        }
        move(_timeslice) {
            let offset = new FlyingPeopleAlpsII.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += FlyingPeopleAlpsII.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += FlyingPeopleAlpsII.crc2.canvas.height;
            if (this.position.x > FlyingPeopleAlpsII.crc2.canvas.width)
                this.position.x -= FlyingPeopleAlpsII.crc2.canvas.width;
            if (this.position.y > FlyingPeopleAlpsII.crc2.canvas.height)
                this.position.y -= FlyingPeopleAlpsII.crc2.canvas.height;
        }
        draw() {
            console.log("Bee1");
            FlyingPeopleAlpsII.crc2.save();
            FlyingPeopleAlpsII.crc2.translate(this.position.x, this.position.y);
            let grd = FlyingPeopleAlpsII.crc2.createLinearGradient(2, 3, 6, 8);
            grd.addColorStop(0, "yellow");
            grd.addColorStop(1, "black");
            grd.addColorStop(1, "yellow");
            FlyingPeopleAlpsII.crc2.beginPath();
            FlyingPeopleAlpsII.crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
            FlyingPeopleAlpsII.crc2.fillStyle = "white";
            FlyingPeopleAlpsII.crc2.fill();
            FlyingPeopleAlpsII.crc2.beginPath();
            FlyingPeopleAlpsII.crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
            FlyingPeopleAlpsII.crc2.fillStyle = grd;
            FlyingPeopleAlpsII.crc2.fill();
            FlyingPeopleAlpsII.crc2.beginPath();
            FlyingPeopleAlpsII.crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
            FlyingPeopleAlpsII.crc2.fillStyle = "lightgrey";
            FlyingPeopleAlpsII.crc2.fill();
            FlyingPeopleAlpsII.crc2.restore();
        }
        ;
    }
    FlyingPeopleAlpsII.bumblebees = bumblebees;
})(FlyingPeopleAlpsII || (FlyingPeopleAlpsII = {}));
//# sourceMappingURL=bumblebee.js.map
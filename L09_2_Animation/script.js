"use strict";
var AnimatedPic;
(function (AnimatedPic) {
    /*
   Aufgabe: <L08.2 Artpiece>
   Name: <Laura Kupferschmid>
   Matrikel: <272613>
   Datum: <25.05.23>
   Quellen: <Judith Pauler, Madelein Hansen>
   */
    window.addEventListener('load', handleload);
    AnimatedPic.goldy = 0.62;
    AnimatedPic.canvas = document.querySelector("canvas");
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        AnimatedPic.crc2 = canvas.getContext("2d");
        AnimatedPic.horizon = AnimatedPic.crc2.canvas.height * AnimatedPic.goldy;
        console.log("Iamhereeee");
        console.log(AnimatedPic.goldy);
        AnimatedPic.drawBackground();
        AnimatedPic.drawMountains({ x: AnimatedPic.horizon, y: 70 });
        AnimatedPic.drawSun({ x: 100, y: 70 });
        AnimatedPic.drawCloud({ x: 500, y: 175 }, { x: 250, y: 75 });
        AnimatedPic.drawTriangle({ x: 0, y: 440 });
        AnimatedPic.drawLandingCircle({ x: 400, y: 500 }, 190, 30);
        AnimatedPic.drawShack({ x: 700, y: 550 });
        AnimatedPic.drawWindSock({ x: 380, y: 500 });
        AnimatedPic.drawTree({ x: 90, y: 190 });
        AnimatedPic.drawTree1({ x: 400, y: 190 });
        AnimatedPic.drawTree2({ x: 440, y: 190 });
        AnimatedPic.drawTree3({ x: 360, y: 190 });
        AnimatedPic.drawTree4({ x: 330, y: 190 });
        drawBee({ x: 400, y: 500 });
        drawBee2({ x: 300, y: 200 });
        drawPerson({ x: 520, y: 320 }, { x: -400, y: 250 });
        console.log(AnimatedPic.horizon);
    }
    function drawBee(_position) {
        console.log("Bee1");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        let grd = AnimatedPic.crc2.createLinearGradient(2, 3, 6, 8);
        grd.addColorStop(0, "yellow");
        grd.addColorStop(1, "black");
        grd.addColorStop(1, "yellow");
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "white";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = grd;
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "lightgrey";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.restore();
    }
    function drawBee2(_position) {
        console.log("Bee1");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        let grd = AnimatedPic.crc2.createLinearGradient(2, 3, 6, 8);
        grd.addColorStop(0, "yellow");
        grd.addColorStop(1, "black");
        grd.addColorStop(1, "yellow");
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "white";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = grd;
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "lightgrey";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.restore();
    }
    function drawPerson(_position, _size) {
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.fillStyle = "#003300";
        AnimatedPic.crc2.fillRect(_position.x, _position.y, 10, 16);
        AnimatedPic.crc2.fillStyle = "#ffffcc";
        AnimatedPic.crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        AnimatedPic.crc2.closePath();
    }
})(AnimatedPic || (AnimatedPic = {}));
//# sourceMappingURL=script.js.map
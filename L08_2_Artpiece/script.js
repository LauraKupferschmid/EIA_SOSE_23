"use strict";
var Artpiece;
(function (Artpiece) {
    /*
   Aufgabe: <L08.2 Artpiece>
   Name: <Laura Kupferschmid>
   Matrikel: <272613>
   Datum: <14.05.23>
   Quellen: <Judith Pauler, Madelein Hansen>
   */
    window.addEventListener('load', handleload);
    let crc2;
    let goldy = 0.62;
    let canvas = document.querySelector("canvas");
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * goldy;
        console.log("Iamhereeee");
        console.log(goldy);
        drawBackground();
        drawMountains({ x: horizon, y: 70 });
        drawSun({ x: 100, y: 70 });
        drawCloud({ x: 500, y: 175 }, { x: 250, y: 75 });
        drawTriangle({ x: 0, y: 440 });
        drawLandingCircle({ x: 400, y: 500 }, 190, 30);
        drawShack({ x: 700, y: 550 });
        drawWindSock({ x: 380, y: 500 });
        drawTree({ x: 90, y: 190 });
        drawTree1({ x: 400, y: 190 });
        drawTree2({ x: 440, y: 190 });
        drawTree3({ x: 360, y: 190 });
        drawTree4({ x: 330, y: 190 });
        drawBee({ x: 400, y: 500 });
        drawBee2({ x: 300, y: 200 });
        drawflyingPerson({ x: 800, y: 300 }, { x: -400, y: 250 });
        drawflyingPerson1({ x: 50, y: 400 }, { x: -400, y: 250 });
        drawflyingPerson2({ x: 650, y: 100 }, { x: -400, y: 250 });
        drawflyingPerson3({ x: 450, y: 150 }, { x: -400, y: 250 });
        drawflyingPerson4({ x: 500, y: 200 }, { x: -400, y: 250 });
        drawPerson({ x: 520, y: 320 }, { x: -400, y: 250 });
        drawPerson1({ x: 700, y: 550 }, { x: -400, y: 250 });
        drawPerson2({ x: 720, y: 560 }, { x: -400, y: 250 });
        drawPerson3({ x: 730, y: 550 }, { x: -400, y: 250 });
        console.log(horizon);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(198, 78%, 42%, 1)");
        gradient.addColorStop(goldy, "lightgreen");
        gradient.addColorStop(1, "HSL(100,80%,30%)");
        console.log(gradient);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log(canvas);
    }
    function drawMountains(_position) {
        let gradient = crc2.createLinearGradient(100, 50, 100, 250);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(1, "gray");
        crc2.beginPath();
        crc2.moveTo(-100, 335);
        crc2.lineTo(40, 30);
        crc2.lineTo(90, 130);
        crc2.lineTo(160, 50);
        crc2.lineTo(220, 130);
        crc2.lineTo(300, 30);
        crc2.lineTo(350, 130);
        crc2.lineTo(450, 50);
        crc2.lineTo(550, 110);
        crc2.lineTo(620, 40);
        crc2.lineTo(680, 110);
        crc2.lineTo(750, 30);
        crc2.lineTo(900, 330);
        crc2.closePath();
        crc2.strokeStyle = '#d9ddde';
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();
        console.log("Mountainsarethere");
    }
    function drawSun(_position) {
        console.log('Sun', _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawLandingCircle(_position, _radiusX, _radiusY) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_radiusX / _radiusY, 1);
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    function drawTriangle(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(900, 0);
        crc2.lineTo(0, -300);
        crc2.closePath();
        crc2.fillStyle = "darkgrey";
        crc2.fill();
        crc2.restore();
    }
    function drawShack(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(70, 0);
        crc2.lineTo(70, -50);
        crc2.lineTo(0, -100);
        crc2.fillStyle = "lightblue";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(-50, -70);
        crc2.lineTo(5, -70);
        crc2.lineWidth = 10;
        crc2.strokeStyle = "blue";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(80, -50);
        crc2.lineTo(-10, -100);
        crc2.lineWidth = 10;
        crc2.strokeStyle = "red";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(-45, 0);
        crc2.lineTo(-45, -70);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.restore();
    }
    function drawWindSock(_position) {
        console.log("Windsock");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.rect(70, -20, 5, 50);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.beginPath();
        crc2.bezierCurveTo(72, -14, 100, -40, 150, -25);
        crc2.lineTo(152, -55);
        crc2.bezierCurveTo(150, -55, 100, -80, 70, -55);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(150, -40, 5, 15, Math.PI, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(72, -35, 8, 20, Math.PI, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawTree(_position) {
        console.log("Tree");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        crc2.fillRect(_position.x, _position.y, 20, 70);
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawTree1(_position) {
        console.log("Tree");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        crc2.fillRect(_position.x, _position.y, 20, 70);
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawTree2(_position) {
        console.log("Tree");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        crc2.fillRect(_position.x, _position.y, 20, 70);
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "HSLA(126, 56%, 42%, 1)";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawTree3(_position) {
        console.log("Tree");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        crc2.fillRect(_position.x, _position.y, 20, 70);
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "HSLA(137, 74%, 42%, 1)";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawTree4(_position) {
        console.log("Tree");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        crc2.fillRect(_position.x, _position.y, 20, 70);
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "HSLA(84, 78%, 51%, 1)";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawBee(_position) {
        console.log("Bee1");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        let grd = crc2.createLinearGradient(2, 3, 6, 8);
        grd.addColorStop(0, "yellow");
        grd.addColorStop(1, "black");
        grd.addColorStop(1, "yellow");
        crc2.beginPath();
        crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
        crc2.fillStyle = "lightgrey";
        crc2.fill();
        crc2.restore();
    }
    function drawBee2(_position) {
        console.log("Bee1");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        let grd = crc2.createLinearGradient(2, 3, 6, 8);
        grd.addColorStop(0, "yellow");
        grd.addColorStop(1, "black");
        grd.addColorStop(1, "yellow");
        crc2.beginPath();
        crc2.ellipse(-2, -10, 8, 2, 80, -2, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(0, 0, 5, 10, Math.PI / 2, 0, 2 * Math.PI);
        crc2.fillStyle = grd;
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(2, -9, 8, 2, -80, 20, 2 * Math.PI);
        crc2.fillStyle = "lightgrey";
        crc2.fill();
        crc2.restore();
    }
    function drawflyingPerson(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "#003300";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x - 20, _position.y - 20);
        crc2.lineTo(_position.x + 30, _position.y - 30);
        crc2.stroke();
        crc2.fillStyle = "#b30000";
        crc2.fill();
        crc2.closePath();
    }
    ;
    function drawflyingPerson1(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "#003300";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x - 20, _position.y - 20);
        crc2.lineTo(_position.x + 30, _position.y - 30);
        crc2.stroke();
        crc2.fillStyle = "hsla(218, 78%, 51%, 1)";
        crc2.fill();
        crc2.closePath();
    }
    ;
    function drawflyingPerson2(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "hsla(360, 78%, 51%, 1)";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x - 20, _position.y - 20);
        crc2.lineTo(_position.x + 30, _position.y - 30);
        crc2.stroke();
        crc2.fillStyle = "hsla(270, 78%, 51%, 1)";
        crc2.fill();
        crc2.closePath();
    }
    ;
    function drawflyingPerson3(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "hsla(329, 78%, 78%, 1)";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x - 20, _position.y - 20);
        crc2.lineTo(_position.x + 30, _position.y - 30);
        crc2.stroke();
        crc2.fillStyle = "hsla(329, 78%, 78%, 1";
        crc2.fill();
        crc2.closePath();
    }
    ;
    function drawflyingPerson4(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "hsla(248, 78%, 78%, 1)";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x - 20, _position.y - 20);
        crc2.lineTo(_position.x + 30, _position.y - 30);
        crc2.stroke();
        crc2.fillStyle = "hsla(248, 78%, 78%, 1)";
        crc2.fill();
        crc2.closePath();
    }
    ;
    function drawPerson(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "#003300";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
    }
    function drawPerson1(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "hsla(248, 78%, 11%, 1)";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
    }
    function drawPerson2(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "hsla(360, 78%, 11%, 1)";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
    }
    function drawPerson3(_position, _size) {
        crc2.beginPath();
        crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        crc2.fillRect(_position.x, _position.y, 10, 16);
        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
    }
})(Artpiece || (Artpiece = {}));
//# sourceMappingURL=script.js.map
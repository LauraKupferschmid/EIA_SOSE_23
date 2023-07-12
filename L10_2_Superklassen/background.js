"use strict";
var FlyingPeopleAlpsIII;
(function (FlyingPeopleAlpsIII) {
    /*Hintergrund*/
    function drawBackground() {
        console.log("Background");
        let gradient = FlyingPeopleAlpsIII.crc2.createLinearGradient(0, 0, 0, FlyingPeopleAlpsIII.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(198, 78%, 42%, 1)");
        gradient.addColorStop(FlyingPeopleAlpsIII.goldy, "lightgreen");
        gradient.addColorStop(1, "HSL(100,80%,30%)");
        console.log(gradient);
        FlyingPeopleAlpsIII.crc2.fillStyle = gradient;
        FlyingPeopleAlpsIII.crc2.fillRect(0, 0, FlyingPeopleAlpsIII.crc2.canvas.width, FlyingPeopleAlpsIII.crc2.canvas.height);
        console.log(FlyingPeopleAlpsIII.canvas);
    }
    FlyingPeopleAlpsIII.drawBackground = drawBackground;
    function drawMountains(_position) {
        let gradient = FlyingPeopleAlpsIII.crc2.createLinearGradient(100, 50, 100, 250);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(1, "gray");
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.moveTo(-100, 335);
        FlyingPeopleAlpsIII.crc2.lineTo(40, 30);
        FlyingPeopleAlpsIII.crc2.lineTo(90, 130);
        FlyingPeopleAlpsIII.crc2.lineTo(160, 50);
        FlyingPeopleAlpsIII.crc2.lineTo(220, 130);
        FlyingPeopleAlpsIII.crc2.lineTo(300, 30);
        FlyingPeopleAlpsIII.crc2.lineTo(350, 130);
        FlyingPeopleAlpsIII.crc2.lineTo(450, 50);
        FlyingPeopleAlpsIII.crc2.lineTo(550, 110);
        FlyingPeopleAlpsIII.crc2.lineTo(620, 40);
        FlyingPeopleAlpsIII.crc2.lineTo(680, 110);
        FlyingPeopleAlpsIII.crc2.lineTo(750, 30);
        FlyingPeopleAlpsIII.crc2.lineTo(900, 330);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.strokeStyle = '#d9ddde';
        FlyingPeopleAlpsIII.crc2.stroke();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.fillStyle = gradient;
        FlyingPeopleAlpsIII.crc2.fill();
        console.log("Mountainsarethere");
    }
    FlyingPeopleAlpsIII.drawMountains = drawMountains;
    function drawSunny(_position) {
        console.log('Sun', _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = FlyingPeopleAlpsIII.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)");
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.fillStyle = gradient;
        FlyingPeopleAlpsIII.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawSunny = drawSunny;
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = FlyingPeopleAlpsIII.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            FlyingPeopleAlpsIII.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            FlyingPeopleAlpsIII.crc2.translate(x, y);
            FlyingPeopleAlpsIII.crc2.fill(particle);
            FlyingPeopleAlpsIII.crc2.restore();
        }
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawCloud = drawCloud;
    function drawLandingCircle(_position, _radiusX, _radiusY) {
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.scale(_radiusX / _radiusY, 1);
        FlyingPeopleAlpsIII.crc2.fillStyle = "green";
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawLandingCircle = drawLandingCircle;
    function drawTriangle(_position) {
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.moveTo(0, 0);
        FlyingPeopleAlpsIII.crc2.lineTo(900, 0);
        FlyingPeopleAlpsIII.crc2.lineTo(0, -300);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.fillStyle = "darkgrey";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawTriangle = drawTriangle;
    function drawShack(_position) {
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.moveTo(0, 0);
        FlyingPeopleAlpsIII.crc2.lineTo(70, 0);
        FlyingPeopleAlpsIII.crc2.lineTo(70, -50);
        FlyingPeopleAlpsIII.crc2.lineTo(0, -100);
        FlyingPeopleAlpsIII.crc2.fillStyle = "lightblue";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.moveTo(-50, -70);
        FlyingPeopleAlpsIII.crc2.lineTo(5, -70);
        FlyingPeopleAlpsIII.crc2.lineWidth = 10;
        FlyingPeopleAlpsIII.crc2.strokeStyle = "blue";
        FlyingPeopleAlpsIII.crc2.stroke();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.moveTo(80, -50);
        FlyingPeopleAlpsIII.crc2.lineTo(-10, -100);
        FlyingPeopleAlpsIII.crc2.lineWidth = 10;
        FlyingPeopleAlpsIII.crc2.strokeStyle = "red";
        FlyingPeopleAlpsIII.crc2.stroke();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.moveTo(-45, 0);
        FlyingPeopleAlpsIII.crc2.lineTo(-45, -70);
        FlyingPeopleAlpsIII.crc2.strokeStyle = "black";
        FlyingPeopleAlpsIII.crc2.lineWidth = 2;
        FlyingPeopleAlpsIII.crc2.stroke();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawShack = drawShack;
    function drawWindSock(_position) {
        console.log("Windsock");
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.rect(70, -20, 5, 50);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.fillStyle = "black";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.bezierCurveTo(72, -14, 100, -40, 150, -25);
        FlyingPeopleAlpsIII.crc2.lineTo(152, -55);
        FlyingPeopleAlpsIII.crc2.bezierCurveTo(150, -55, 100, -80, 70, -55);
        FlyingPeopleAlpsIII.crc2.fillStyle = "red";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.ellipse(150, -40, 5, 15, Math.PI, 0, 2 * Math.PI);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.fillStyle = "white";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.ellipse(72, -35, 8, 20, Math.PI, 0, 2 * Math.PI);
        FlyingPeopleAlpsIII.crc2.fillStyle = "white";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawWindSock = drawWindSock;
    function drawTree(_position) {
        console.log("Tree");
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsIII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsIII.crc2.fillStyle = "darkgreen";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawTree = drawTree;
    function drawTree1(_position) {
        console.log("Tree");
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsIII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsIII.crc2.fillStyle = "darkgreen";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawTree1 = drawTree1;
    function drawTree2(_position) {
        console.log("Tree");
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsIII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsIII.crc2.fillStyle = "HSLA(126, 56%, 42%, 1)";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawTree2 = drawTree2;
    function drawTree3(_position) {
        console.log("Tree");
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsIII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsIII.crc2.fillStyle = "HSLA(137, 74%, 42%, 1)";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawTree3 = drawTree3;
    function drawTree4(_position) {
        console.log("Tree");
        FlyingPeopleAlpsIII.crc2.save();
        FlyingPeopleAlpsIII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsIII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.beginPath();
        FlyingPeopleAlpsIII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsIII.crc2.fillStyle = "HSLA(84, 78%, 51%, 1)";
        FlyingPeopleAlpsIII.crc2.fill();
        FlyingPeopleAlpsIII.crc2.closePath();
        FlyingPeopleAlpsIII.crc2.restore();
    }
    FlyingPeopleAlpsIII.drawTree4 = drawTree4;
})(FlyingPeopleAlpsIII || (FlyingPeopleAlpsIII = {}));
//# sourceMappingURL=background.js.map
"use strict";
var FlyingPeopleAlpsII;
(function (FlyingPeopleAlpsII) {
    /*Hintergrund*/
    function drawBackground() {
        console.log("Background");
        let gradient = FlyingPeopleAlpsII.crc2.createLinearGradient(0, 0, 0, FlyingPeopleAlpsII.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(198, 78%, 42%, 1)");
        gradient.addColorStop(FlyingPeopleAlpsII.goldy, "lightgreen");
        gradient.addColorStop(1, "HSL(100,80%,30%)");
        console.log(gradient);
        FlyingPeopleAlpsII.crc2.fillStyle = gradient;
        FlyingPeopleAlpsII.crc2.fillRect(0, 0, FlyingPeopleAlpsII.crc2.canvas.width, FlyingPeopleAlpsII.crc2.canvas.height);
        console.log(FlyingPeopleAlpsII.canvas);
    }
    FlyingPeopleAlpsII.drawBackground = drawBackground;
    function drawMountains(_position) {
        let gradient = FlyingPeopleAlpsII.crc2.createLinearGradient(100, 50, 100, 250);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(1, "gray");
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.moveTo(-100, 335);
        FlyingPeopleAlpsII.crc2.lineTo(40, 30);
        FlyingPeopleAlpsII.crc2.lineTo(90, 130);
        FlyingPeopleAlpsII.crc2.lineTo(160, 50);
        FlyingPeopleAlpsII.crc2.lineTo(220, 130);
        FlyingPeopleAlpsII.crc2.lineTo(300, 30);
        FlyingPeopleAlpsII.crc2.lineTo(350, 130);
        FlyingPeopleAlpsII.crc2.lineTo(450, 50);
        FlyingPeopleAlpsII.crc2.lineTo(550, 110);
        FlyingPeopleAlpsII.crc2.lineTo(620, 40);
        FlyingPeopleAlpsII.crc2.lineTo(680, 110);
        FlyingPeopleAlpsII.crc2.lineTo(750, 30);
        FlyingPeopleAlpsII.crc2.lineTo(900, 330);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.strokeStyle = '#d9ddde';
        FlyingPeopleAlpsII.crc2.stroke();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.fillStyle = gradient;
        FlyingPeopleAlpsII.crc2.fill();
        console.log("Mountainsarethere");
    }
    FlyingPeopleAlpsII.drawMountains = drawMountains;
    function drawSunny(_position) {
        console.log('Sun', _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = FlyingPeopleAlpsII.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)");
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.fillStyle = gradient;
        FlyingPeopleAlpsII.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawSunny = drawSunny;
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = FlyingPeopleAlpsII.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            FlyingPeopleAlpsII.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            FlyingPeopleAlpsII.crc2.translate(x, y);
            FlyingPeopleAlpsII.crc2.fill(particle);
            FlyingPeopleAlpsII.crc2.restore();
        }
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawCloud = drawCloud;
    function drawLandingCircle(_position, _radiusX, _radiusY) {
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.scale(_radiusX / _radiusY, 1);
        FlyingPeopleAlpsII.crc2.fillStyle = "green";
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawLandingCircle = drawLandingCircle;
    function drawTriangle(_position) {
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.moveTo(0, 0);
        FlyingPeopleAlpsII.crc2.lineTo(900, 0);
        FlyingPeopleAlpsII.crc2.lineTo(0, -300);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.fillStyle = "darkgrey";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawTriangle = drawTriangle;
    function drawShack(_position) {
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.moveTo(0, 0);
        FlyingPeopleAlpsII.crc2.lineTo(70, 0);
        FlyingPeopleAlpsII.crc2.lineTo(70, -50);
        FlyingPeopleAlpsII.crc2.lineTo(0, -100);
        FlyingPeopleAlpsII.crc2.fillStyle = "lightblue";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.moveTo(-50, -70);
        FlyingPeopleAlpsII.crc2.lineTo(5, -70);
        FlyingPeopleAlpsII.crc2.lineWidth = 10;
        FlyingPeopleAlpsII.crc2.strokeStyle = "blue";
        FlyingPeopleAlpsII.crc2.stroke();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.moveTo(80, -50);
        FlyingPeopleAlpsII.crc2.lineTo(-10, -100);
        FlyingPeopleAlpsII.crc2.lineWidth = 10;
        FlyingPeopleAlpsII.crc2.strokeStyle = "red";
        FlyingPeopleAlpsII.crc2.stroke();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.moveTo(-45, 0);
        FlyingPeopleAlpsII.crc2.lineTo(-45, -70);
        FlyingPeopleAlpsII.crc2.strokeStyle = "black";
        FlyingPeopleAlpsII.crc2.lineWidth = 2;
        FlyingPeopleAlpsII.crc2.stroke();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawShack = drawShack;
    function drawWindSock(_position) {
        console.log("Windsock");
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.rect(70, -20, 5, 50);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.fillStyle = "black";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.bezierCurveTo(72, -14, 100, -40, 150, -25);
        FlyingPeopleAlpsII.crc2.lineTo(152, -55);
        FlyingPeopleAlpsII.crc2.bezierCurveTo(150, -55, 100, -80, 70, -55);
        FlyingPeopleAlpsII.crc2.fillStyle = "red";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.ellipse(150, -40, 5, 15, Math.PI, 0, 2 * Math.PI);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.fillStyle = "white";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.ellipse(72, -35, 8, 20, Math.PI, 0, 2 * Math.PI);
        FlyingPeopleAlpsII.crc2.fillStyle = "white";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawWindSock = drawWindSock;
    function drawTree(_position) {
        console.log("Tree");
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsII.crc2.fillStyle = "darkgreen";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawTree = drawTree;
    function drawTree1(_position) {
        console.log("Tree");
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsII.crc2.fillStyle = "darkgreen";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawTree1 = drawTree1;
    function drawTree2(_position) {
        console.log("Tree");
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsII.crc2.fillStyle = "HSLA(126, 56%, 42%, 1)";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawTree2 = drawTree2;
    function drawTree3(_position) {
        console.log("Tree");
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsII.crc2.fillStyle = "HSLA(137, 74%, 42%, 1)";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawTree3 = drawTree3;
    function drawTree4(_position) {
        console.log("Tree");
        FlyingPeopleAlpsII.crc2.save();
        FlyingPeopleAlpsII.crc2.translate(_position.x, _position.y);
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        FlyingPeopleAlpsII.crc2.fillRect(_position.x, _position.y, 20, 70);
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.beginPath();
        FlyingPeopleAlpsII.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        FlyingPeopleAlpsII.crc2.fillStyle = "HSLA(84, 78%, 51%, 1)";
        FlyingPeopleAlpsII.crc2.fill();
        FlyingPeopleAlpsII.crc2.closePath();
        FlyingPeopleAlpsII.crc2.restore();
    }
    FlyingPeopleAlpsII.drawTree4 = drawTree4;
})(FlyingPeopleAlpsII || (FlyingPeopleAlpsII = {}));
//# sourceMappingURL=background.js.map
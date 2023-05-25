"use strict";
var AnimatedPic;
(function (AnimatedPic) {
    function drawBackground() {
        console.log("Background");
        let gradient = AnimatedPic.crc2.createLinearGradient(0, 0, 0, AnimatedPic.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(198, 78%, 42%, 1)");
        gradient.addColorStop(AnimatedPic.goldy, "lightgreen");
        gradient.addColorStop(1, "HSL(100,80%,30%)");
        console.log(gradient);
        AnimatedPic.crc2.fillStyle = gradient;
        AnimatedPic.crc2.fillRect(0, 0, AnimatedPic.crc2.canvas.width, AnimatedPic.crc2.canvas.height);
        console.log(AnimatedPic.canvas);
    }
    AnimatedPic.drawBackground = drawBackground;
    function drawMountains(_position) {
        let gradient = AnimatedPic.crc2.createLinearGradient(100, 50, 100, 250);
        gradient.addColorStop(0, "lightgray");
        gradient.addColorStop(1, "gray");
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.moveTo(-100, 335);
        AnimatedPic.crc2.lineTo(40, 30);
        AnimatedPic.crc2.lineTo(90, 130);
        AnimatedPic.crc2.lineTo(160, 50);
        AnimatedPic.crc2.lineTo(220, 130);
        AnimatedPic.crc2.lineTo(300, 30);
        AnimatedPic.crc2.lineTo(350, 130);
        AnimatedPic.crc2.lineTo(450, 50);
        AnimatedPic.crc2.lineTo(550, 110);
        AnimatedPic.crc2.lineTo(620, 40);
        AnimatedPic.crc2.lineTo(680, 110);
        AnimatedPic.crc2.lineTo(750, 30);
        AnimatedPic.crc2.lineTo(900, 330);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.strokeStyle = '#d9ddde';
        AnimatedPic.crc2.stroke();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.fillStyle = gradient;
        AnimatedPic.crc2.fill();
        console.log("Mountainsarethere");
    }
    AnimatedPic.drawMountains = drawMountains;
    function drawSun(_position) {
        console.log('Sun', _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = AnimatedPic.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60 ,100%, 50%, 0)");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.fillStyle = gradient;
        AnimatedPic.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawSun = drawSun;
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = AnimatedPic.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            AnimatedPic.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            AnimatedPic.crc2.translate(x, y);
            AnimatedPic.crc2.fill(particle);
            AnimatedPic.crc2.restore();
        }
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawCloud = drawCloud;
    function drawLandingCircle(_position, _radiusX, _radiusY) {
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.scale(_radiusX / _radiusY, 1);
        AnimatedPic.crc2.fillStyle = "green";
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawLandingCircle = drawLandingCircle;
    function drawTriangle(_position) {
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.moveTo(0, 0);
        AnimatedPic.crc2.lineTo(900, 0);
        AnimatedPic.crc2.lineTo(0, -300);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.fillStyle = "darkgrey";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawTriangle = drawTriangle;
    function drawShack(_position) {
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.moveTo(0, 0);
        AnimatedPic.crc2.lineTo(70, 0);
        AnimatedPic.crc2.lineTo(70, -50);
        AnimatedPic.crc2.lineTo(0, -100);
        AnimatedPic.crc2.fillStyle = "lightblue";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.moveTo(-50, -70);
        AnimatedPic.crc2.lineTo(5, -70);
        AnimatedPic.crc2.lineWidth = 10;
        AnimatedPic.crc2.strokeStyle = "blue";
        AnimatedPic.crc2.stroke();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.moveTo(80, -50);
        AnimatedPic.crc2.lineTo(-10, -100);
        AnimatedPic.crc2.lineWidth = 10;
        AnimatedPic.crc2.strokeStyle = "red";
        AnimatedPic.crc2.stroke();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.moveTo(-45, 0);
        AnimatedPic.crc2.lineTo(-45, -70);
        AnimatedPic.crc2.strokeStyle = "black";
        AnimatedPic.crc2.lineWidth = 2;
        AnimatedPic.crc2.stroke();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawShack = drawShack;
    function drawWindSock(_position) {
        console.log("Windsock");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.rect(70, -20, 5, 50);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.fillStyle = "black";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.bezierCurveTo(72, -14, 100, -40, 150, -25);
        AnimatedPic.crc2.lineTo(152, -55);
        AnimatedPic.crc2.bezierCurveTo(150, -55, 100, -80, 70, -55);
        AnimatedPic.crc2.fillStyle = "red";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.ellipse(150, -40, 5, 15, Math.PI, 0, 2 * Math.PI);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.fillStyle = "white";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.ellipse(72, -35, 8, 20, Math.PI, 0, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "white";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawWindSock = drawWindSock;
    function drawTree(_position) {
        console.log("Tree");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        AnimatedPic.crc2.fillRect(_position.x, _position.y, 20, 70);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "darkgreen";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawTree = drawTree;
    function drawTree1(_position) {
        console.log("Tree");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        AnimatedPic.crc2.fillRect(_position.x, _position.y, 20, 70);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "darkgreen";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawTree1 = drawTree1;
    function drawTree2(_position) {
        console.log("Tree");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        AnimatedPic.crc2.fillRect(_position.x, _position.y, 20, 70);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "HSLA(126, 56%, 42%, 1)";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawTree2 = drawTree2;
    function drawTree3(_position) {
        console.log("Tree");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        AnimatedPic.crc2.fillRect(_position.x, _position.y, 20, 70);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "HSLA(137, 74%, 42%, 1)";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawTree3 = drawTree3;
    function drawTree4(_position) {
        console.log("Tree");
        AnimatedPic.crc2.save();
        AnimatedPic.crc2.translate(_position.x, _position.y);
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.fillStyle = "HSLA(14, 56%, 23%, 1)";
        AnimatedPic.crc2.fillRect(_position.x, _position.y, 20, 70);
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.beginPath();
        AnimatedPic.crc2.arc(_position.x + 7, _position.y - 30, 60, 0, 2 * Math.PI);
        AnimatedPic.crc2.fillStyle = "HSLA(84, 78%, 51%, 1)";
        AnimatedPic.crc2.fill();
        AnimatedPic.crc2.closePath();
        AnimatedPic.crc2.restore();
    }
    AnimatedPic.drawTree4 = drawTree4;
})(AnimatedPic || (AnimatedPic = {}));
//# sourceMappingURL=background.js.map
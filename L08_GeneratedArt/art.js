"use strict";
var generatedart;
(function (generatedart) {
    window.addEventListener("load", hndload);
    function hndload() {
        console.log("loaded");
    }
    let canvas = document.getElementById("mycanvas");
    let crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#FF00FA";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.beginPath();
    crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    crc2.beginPath();
    crc2.ellipse(40, 50, 30, 50, 15, 30, 20);
    crc2.closePath();
    crc2.stroke();
    crc2.beginPath();
    crc2.bezierCurveTo(160, 100, 70, 130, 50, 130);
    crc2.closePath();
    crc2.stroke();
})(generatedart || (generatedart = {}));
//# sourceMappingURL=art.js.map
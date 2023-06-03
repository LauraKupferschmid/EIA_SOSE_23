"use strict";
var FlyingPeopleAlpsII;
(function (FlyingPeopleAlpsII) {
    /*
 Aufgabe: <L08.2 Artpiece>
 Name: <Laura Kupferschmid>
 Matrikel: <272613>
 Datum: <25.05.23>
 Quellen: <Judith Pauler, Madelein Hansen>
 */
    console.log("Its me");
    window.addEventListener('load', handleload);
    FlyingPeopleAlpsII.goldy = 0.62;
    FlyingPeopleAlpsII.canvas = document.querySelector("canvas");
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        FlyingPeopleAlpsII.crc2 = canvas.getContext("2d");
        FlyingPeopleAlpsII.horizon = FlyingPeopleAlpsII.crc2.canvas.height * FlyingPeopleAlpsII.goldy;
        console.log("Iamhereeee");
        console.log(FlyingPeopleAlpsII.goldy);
        FlyingPeopleAlpsII.drawBackground();
        FlyingPeopleAlpsII.drawMountains(new FlyingPeopleAlpsII.Vector(FlyingPeopleAlpsII.horizon, 70));
        FlyingPeopleAlpsII.drawSunny(new FlyingPeopleAlpsII.Vector(100, 70));
        FlyingPeopleAlpsII.drawCloud(new FlyingPeopleAlpsII.Vector(500, 175), new FlyingPeopleAlpsII.Vector(250, 75));
        FlyingPeopleAlpsII.drawTriangle(new FlyingPeopleAlpsII.Vector(0, 400));
        FlyingPeopleAlpsII.drawLandingCircle(new FlyingPeopleAlpsII.Vector(200, 400), 500, 30), new FlyingPeopleAlpsII.Vector(190, 30);
        FlyingPeopleAlpsII.drawShack(new FlyingPeopleAlpsII.Vector(700, 550));
        FlyingPeopleAlpsII.drawWindSock(new FlyingPeopleAlpsII.Vector(380, 500));
        FlyingPeopleAlpsII.drawTree(new FlyingPeopleAlpsII.Vector(90, 190));
        FlyingPeopleAlpsII.drawTree1(new FlyingPeopleAlpsII.Vector(400, 190));
        FlyingPeopleAlpsII.drawTree2(new FlyingPeopleAlpsII.Vector(440, 190));
        FlyingPeopleAlpsII.drawTree3(new FlyingPeopleAlpsII.Vector(360, 190));
        FlyingPeopleAlpsII.drawTree4(new FlyingPeopleAlpsII.Vector(330, 190));
        FlyingPeopleAlpsII.imgData = FlyingPeopleAlpsII.crc2.getImageData(0, 0, FlyingPeopleAlpsII.crc2.canvas.width, FlyingPeopleAlpsII.crc2.canvas.height);
        console.log(FlyingPeopleAlpsII.horizon);
        FlyingPeopleAlpsII.crc2.putImageData(FlyingPeopleAlpsII.imgData, 0, 0);
        animateFlyingPerson();
        createFlyingPerson();
        window.setInterval(animateFlyingPerson, 1000); //As soon as I change the number the FlyingPerson vanishes. I think the Intervall is going through changeColor instead of going through move().... Dont know how to fix it
        createBumbleBee();
        window.setInterval(animateBumblebee, 1);
    }
    let FlyingPerson = [];
    let insectArray = [];
    console.log(FlyingPerson[5]);
    FlyingPeopleAlpsII.landingzone = new FlyingPeopleAlpsII.Vector(400, 500); //Vector is not a constructor? (Konsole im Browser (debugger) meckert, hab aber keine Ahnung was das Problem ist...)
    FlyingPeopleAlpsII.hikingzone = new FlyingPeopleAlpsII.Vector(0, 440);
    FlyingPeopleAlpsII.flystart = new FlyingPeopleAlpsII.Vector(50, 150);
    function createFlyingPerson() {
        for (let iFlyingPerson = 0; iFlyingPerson < 10; iFlyingPerson++) {
            let paraglideri = new FlyingPeopleAlpsII.paraglider(new FlyingPeopleAlpsII.Vector(400, 500), new FlyingPeopleAlpsII.Vector(400, 500), "flying");
            FlyingPerson.push(paraglideri);
            console.log(paraglideri);
            console.log(FlyingPerson);
        }
    }
    function animateFlyingPerson() {
        FlyingPeopleAlpsII.crc2.clearRect(0, 0, 1000, 600);
        FlyingPeopleAlpsII.crc2.putImageData(FlyingPeopleAlpsII.imgData, 0, 0);
        for (let paraglideri of FlyingPerson) {
            paraglideri.move(1 / 50); //hiermit kommt er auch nicht klar
            paraglideri.draw(new FlyingPeopleAlpsII.Vector(150, 150), new FlyingPeopleAlpsII.Vector(10, 16));
            window.setInterval(animateFlyingPerson, 10);
        }
    }
    function createBumbleBee() {
        for (let i = 0; i < 5; i++) {
            let bumblebee = new FlyingPeopleAlpsII.bumblebees(0.5, new FlyingPeopleAlpsII.Vector(10, 0));
            insectArray.push(bumblebee);
        }
    }
    function animateBumblebee() {
        for (let bumblebee of insectArray) {
            bumblebee.move(1 / 50);
            bumblebee.draw();
        }
    }
    /* function drawflyingPerson(_position: Vector, _size: Vector) {
 
 
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
 
     };
 
     function drawPerson(_position: Vector, _size: Vector) {
 
         crc2.beginPath();
         crc2.fillStyle = "#003300";
         crc2.fillRect(_position.x, _position.y, 10, 16);
 
         crc2.fillStyle = "#ffffcc";
         crc2.fillRect(_position.x, _position.y - 6, 10, 10);
         crc2.closePath();
     }*/
})(FlyingPeopleAlpsII || (FlyingPeopleAlpsII = {}));
//# sourceMappingURL=script.js.map
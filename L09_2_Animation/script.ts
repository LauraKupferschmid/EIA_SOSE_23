namespace AnimatedPic {

     /*
    Aufgabe: <L08.2 Artpiece>
    Name: <Laura Kupferschmid>
    Matrikel: <272613>
    Datum: <25.05.23>
    Quellen: <Judith Pauler, Madelein Hansen>
    */

    window.addEventListener('load', handleload);
    export let crc2: CanvasRenderingContext2D;
    export let goldy: number = 0.62;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export let horizon: number;

    function handleload(_event: Event) {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")
       horizon= crc2.canvas.height * goldy;

        console.log("Iamhereeee");
        console.log(goldy);
        drawBackground();
        drawMountains({x: horizon, y: 70 });
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
        drawPerson({ x: 520, y: 320 }, { x: -400, y: 250 });
        
        console.log(horizon)

    }

    function drawBee(_position: Vector): void {
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

    function drawBee2(_position: Vector): void {
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

    function drawPerson(_position: Vector, _size: Vector) {

        crc2.beginPath();
        crc2.fillStyle = "#003300";
        crc2.fillRect(_position.x, _position.y, 10, 16);

        crc2.fillStyle = "#ffffcc";
        crc2.fillRect(_position.x, _position.y - 6, 10, 10);
        crc2.closePath();
    }

}
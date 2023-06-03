namespace FlyingPeopleAlpsII {

       /*
    Aufgabe: <L08.2 Artpiece>
    Name: <Laura Kupferschmid>
    Matrikel: <272613>
    Datum: <25.05.23>
    Quellen: <Judith Pauler, Madelein Hansen>
    */

    console.log("Its me")

    window.addEventListener('load', handleload);
    export let imgData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let goldy: number = 0.62;
    export let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export let horizon1: Vector
    export let horizon: number
    function handleload(_event: Event) {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")

        horizon = crc2.canvas.height * goldy;
        console.log("Iamhereeee");
        console.log(goldy);
        drawBackground();
        drawMountains(new Vector(horizon, 70));
        drawSunny(new Vector(100, 70));
        drawCloud(new Vector(500, 175), new Vector(250, 75));
        drawTriangle(new Vector(0, 400));
        drawLandingCircle(new Vector(200, 400), 500, 30), new Vector(190, 30);
        drawShack(new Vector(700, 550));
        drawWindSock(new Vector(380, 500));
        drawTree(new Vector(90, 190));
        drawTree1(new Vector(400, 190));
        drawTree2(new Vector(440, 190));
        drawTree3(new Vector(360, 190));
        drawTree4(new Vector(330, 190));

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log(horizon)

        crc2.putImageData(imgData, 0, 0);

        animateFlyingPerson()
        createFlyingPerson();
        window.setInterval(animateFlyingPerson, 1000) //As soon as I change the number the FlyingPerson vanishes. I think the Intervall is going through changeColor instead of going through move().... Dont know how to fix it

        createBumbleBee();
        window.setInterval(animateBumblebee, 1);
    }

    let FlyingPerson: paraglider[] = [];
    let insectArray: bumblebees[] = [];

    console.log(FlyingPerson[5])

    export let landingzone: Vector = new Vector(400, 500); //Vector is not a constructor? (Konsole im Browser (debugger) meckert, hab aber keine Ahnung was das Problem ist...)
    export let hikingzone: Vector = new Vector(0, 440);
    export let flystart: Vector = new Vector(50, 150);

    function createFlyingPerson(): void {
        for (let iFlyingPerson: number = 0; iFlyingPerson < 10; iFlyingPerson++) {
            let paraglideri: paraglider = new paraglider(new Vector(400, 500), new Vector(400, 500), "flying");
            FlyingPerson.push(paraglideri);
            console.log(paraglideri)
            console.log(FlyingPerson)
        }
    }

    function animateFlyingPerson(): void {
        crc2.clearRect(0, 0, 1000, 600);
        crc2.putImageData(imgData, 0, 0);

        for (let paraglideri of FlyingPerson) {
            paraglideri.move(1 / 50); //hiermit kommt er auch nicht klar
            paraglideri.draw(new Vector(150, 150), new Vector(10, 16));
            window.setInterval(animateFlyingPerson, 10)
        }

    }

    function createBumbleBee(): void {
        for (let i: number = 0; i < 5; i++) {
            let bumblebee: bumblebees = new bumblebees(0.5, new Vector(10, 0));
            insectArray.push(bumblebee);
        }
    }

    function animateBumblebee(): void {
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

}

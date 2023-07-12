namespace FlyingPeopleAlpsIII {



    /*
   Aufgabe: <L08.2 Artpiece>
   Name: <Laura Kupferschmid>
   Matrikel: <272613>
   Datum: <18.06.23>
   Quellen: <Judith Pauler, Madelein Hansen>
   */

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

        createFlyingPerson();
        window.setInterval(animateFlyingPerson, 1000) //As soon as I change the number the FlyingPerson vanishes. I think the Intervall is going through changeColor instead of going through move().... Dont know how to fix it

        createBumbleBee();
        window.setInterval(animateBumblebee, 1);
    }

    let EverythingsFlying: FlyingObject[] = [];
    console.log(EverythingsFlying[5])
    //let FlyingPerson: paraglider[] = [];
    //let insectArray: bumblebees[] = [];

    export let landingzone: Vector = new Vector(400, 500); 
    export let hikingzone: Vector = new Vector(0, 440);
    export let flystart: Vector = new Vector(50, 150);

    function createFlyingPerson(): void {
        for (let iFlyingObject: number = 0; iFlyingObject < 10; iFlyingObject++) {
            let paraglideri: paraglider = new paraglider(new Vector(400, 500), new Vector(120,20));
            EverythingsFlying.push(paraglideri);
            console.log(paraglideri)
            //console.log(FlyingPerson)
        }
    }

    function animateFlyingPerson(): void {
        crc2.clearRect(0, 0, 1000, 600);
        crc2.putImageData(imgData, 0, 0);

        for (let paraglideri of EverythingsFlying) {
            paraglideri.doActivity(1 / 50);
            paraglideri.draw();
        }

    }

    function createBumbleBee(): void {
        for (let i: number = 0; i < 5; i++) {
            let bumblebee: bumblebees = new bumblebees(new Vector(0 , 0.5), new Vector(10, 0));
            EverythingsFlying.push(bumblebee);
        }
    }

    function animateBumblebee(): void {
        crc2.clearRect(0, 0, 1000, 600);
        crc2.putImageData(imgData, 0, 0);

        for (let bumblebee of EverythingsFlying) {
            bumblebee.doActivity(1 / 50);
            bumblebee.draw();
        }
    }

}

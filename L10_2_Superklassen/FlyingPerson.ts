namespace FlyingPeopleAlpsIII {

    export class FlyingObject {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector, _velocity: Vector,) {

            this.velocity = new Vector(50, 0);
            this.velocity = new Vector(120, 20);
            //this.velocity = _velocity;

            this.position = new Vector(150, 20);
            //this.position = _position;
        }

        doActivity(_timeslice:number): void {

        }

        draw(): void {
            
        }

        
    }

    export class paraglider extends FlyingObject{
        activity: string;


        getRandomNumber(_max: number, _min: number = 0): number {
            return Math.floor(Math.random() * _max) + _min;
        }

        changeColor(): string {
            const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
            let randomColor1 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor2 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor3 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor4 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor5 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor6 = intensity[Math.floor(Math.random() * intensity.length)];
            const randomColor: string = `#${randomColor1}${randomColor2}${randomColor3}${randomColor4}${randomColor5}${randomColor6}`;
            crc2.fillStyle = "randomColor";

            return randomColor;
        }

        doActivity(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            console.log(this.position)
            this.activity = "flying";

            let y_ground: Vector = new Vector(200, 500);
            let flyground: Vector = new Vector(150, 50);
            let x_ground: Vector = new Vector(50, 10);


            if (flystart > y_ground) {//flystart
                 //this.draw(_y: 400, 10)
                 this.activity = "walking";
                 this.position.x += crc2.canvas.width;
             }
 
             if (hikingzone.x > x_ground.x && hikingzone.y > x_ground.y) {
                 this.position.x -= crc2.canvas.width;
                 this.activity = "climbing"
             }
 
             if (flystart = flyground) {
                 this.position.y += crc2.canvas.height;
                 this.activity = "flying"
             }

        }

        draw() {

            if (this.activity = "flying") {
                //Schirm
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y, 10, 16);
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(this.position.x, this.position.y);
                crc2.lineTo(this.position.x - 20, this.position.y - 20);
                crc2.lineTo(this.position.x + 30, this.position.y - 30);
                crc2.stroke();
                crc2.fillStyle = this.changeColor();
                crc2.fill();
                crc2.closePath();
            }
            console.log(this.activity = "flying")

            if (this.activity = "walking") {
                //Kein Schirm
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y, 10, 16);

                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                crc2.closePath();
            }

            if (this.activity = "climbing") {
                //KeinSchirm
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y, 10, 16);

                crc2.fillStyle = this.changeColor();
                crc2.fillRect(this.position.x, this.position.y - 6, 10, 10);
                crc2.closePath();
            }
        };
    
    }

    export class bumblebees extends FlyingObject {
        size: Vector;
    
    
        /*constructor(_size: number, _position?: Vector) {
    
    
            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
    
            this.velocity = new Vector(50, 0);
            this.velocity.randomize(120, 20);
        }*/
    
        doActivity(_timeslice: number): void {
    
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
    
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    
        draw() {
    
            console.log("Bee1");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
    
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
        };
    }
    


    }
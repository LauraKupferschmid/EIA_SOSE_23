namespace AnimatedPic {

    export class paraglider {
        position: Vector;
        velocity: Vector;
        activity: string;

        constructor (_velocity:Vector) {}

        fly(_timesclice : number){
            this.velocity
            this.position
            

            if(y_position > y_ground){
                this.activity = "walking"
                this.velocity
            };
            this.activity = "flying"
        
            return this.activity
        }

        walk(){

        }

        climb(){

        }

        getRandomNumber(_max: number, _min: number = 0): number {
            return Math.floor(Math.random() * _max) + _min;
        }
    
       changeColor(): string { //works for background, but not for any other function
            const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
            let randomColor1 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor2 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor3 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor4 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor5 = intensity[Math.floor(Math.random() * intensity.length)];
            let randomColor6 = intensity[Math.floor(Math.random() * intensity.length)];
            const randomColor: string = `#${randomColor1}${randomColor2}${randomColor3}${randomColor4}${randomColor5}${randomColor6}`;
            crc2.fillStyle = "randomColor";
            console.log(randomColor);
    
            return randomColor;
        }

        draw(_position: Vector, _size: Vector){

            if(this.activity="flying"){
                // kein schirm nur human
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y, 10, 16);
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                crc2.closePath();
        
                crc2.beginPath();
                crc2.moveTo(_position.x, _position.y);
                crc2.lineTo(_position.x - 20, _position.y - 20);
                crc2.lineTo(_position.x + 30, _position.y - 30);
                crc2.stroke();
                crc2.fillStyle = this.changeColor();
                crc2.fill();
                crc2.closePath();
            }

            if(this.activity="walking"){
                // kein schirm nur human
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y, 10, 16);
        
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                crc2.closePath();
            }
            if(this.activity="climbing"){
                //kein schirm nur human
                crc2.beginPath();
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y, 10, 16);
        
                crc2.fillStyle = this.changeColor();
                crc2.fillRect(_position.x, _position.y - 6, 10, 10);
                crc2.closePath();
            }
            };

    }











}
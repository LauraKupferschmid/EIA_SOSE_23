// namespace iceshop {
//     export class customer extends human {

//         draw(ctx: CanvasRenderingContext2D/*,_position: Vector, _size: Vector, mood: string*/) {
//             console.log(this.mood)
//           if (this.mood == "happy"){
//                 //face
//                 ctx.fillStyle = "yellow";
//                 ctx.beginPath();
//                 ctx.arc(400, 300, 22, 0, 2 * Math.PI);
//                 ctx.fill();
//                 ctx.closePath();

//                 //eyes
//                 ctx.fillStyle = "black";
//                 ctx.beginPath();
//                 ctx.arc(394, 298, 3, 0, 2 * Math.PI);
//                 ctx.fill();
//                 ctx.closePath();

//                 ctx.fillStyle = "black";
//                 ctx.beginPath();
//                 ctx.arc(406, 298, 3, 0, 2 * Math.PI);
//                 ctx.fill();
//                 ctx.closePath();

//                 // mouth happy
//                 ctx.strokeStyle = "black";
//                 ctx.beginPath();
//                 ctx.arc(400, 305, 4, 0, 1 * Math.PI);
//                 ctx.stroke();
//                 ctx.closePath();
//             };

//             // if (this.mood == "annoyed"){

//             //     //face
//             //     ctx.fillStyle = "yellow";
//             //     ctx.beginPath();
//             //     ctx.arc(400, 300, 22, 0, 2 * Math.PI);
//             //     ctx.fill();
//             //     ctx.closePath();

//             //     //eyes
//             //     ctx.fillStyle = "black";
//             //     ctx.beginPath();
//             //     ctx.arc(394, 298, 3, 0, 2 * Math.PI);
//             //     ctx.fill();
//             //     ctx.closePath();

//             //     ctx.fillStyle = "black";
//             //     ctx.beginPath();
//             //     ctx.arc(406, 298, 3, 0, 2 * Math.PI);
//             //     ctx.fill();
//             //     ctx.closePath();
                
             
//             //     // mouth anooyed
//             //     ctx.strokeStyle = "black";
//             //     ctx.beginPath();
//             //     ctx.arc(395, 308, 4, 1.3 * Math.PI, 2 * Math.PI);
//             //     ctx.stroke();
//             //     ctx.closePath();
//             //     ctx.rotate(90);

//             // };
             
//             // if (this.mood == "mad"){
//             //     //face
//             //     ctx.fillStyle = "yellow";
//             //     ctx.beginPath();
//             //     ctx.arc(400, 300, 22, 0, 2 * Math.PI);
//             //     ctx.fill();
//             //     ctx.closePath();

//             //     //eyes
//             //     ctx.fillStyle = "black";
//             //     ctx.beginPath();
//             //     ctx.arc(394, 298, 3, 0, 2 * Math.PI);
//             //     ctx.fill();
//             //     ctx.closePath();

//             //     ctx.fillStyle = "black";
//             //     ctx.beginPath();
//             //     ctx.arc(406, 298, 3, 0, 2 * Math.PI);
//             //     ctx.fill();
//             //     ctx.closePath();

//             //     // //mouth unhappy
//             //     ctx.strokeStyle = "black";
//             //     ctx.beginPath();
//             //     ctx.arc(400, 308, 4, 1 * Math.PI, 2 * Math.PI);
//             //     ctx.stroke();
//             //     ctx.closePath();
        
//             // }

//         };


//         move(keys: { [key: string]: boolean }) {
//                   if (keys['w']) this.y -= this.speed;
//                   if (keys['s']) this.y += this.speed;
//                   if (keys['a']) this.x -= this.speed;
//                   if (keys['d']) this.x += this.speed;
//             }

//     }





// }
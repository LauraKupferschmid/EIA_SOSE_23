"use strict";
var text;
(function (text) {
    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    // Create the character object
    const character = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: 50,
        height: 50,
        speed: 5,
    };
    // Function to draw the character on the canvas
    function drawCharacter() {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(400, 300, 22, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        //     //eyes
        //     ctx.fillStyle = "black";
        //     ctx.beginPath();
        //     ctx.arc(394, 298, 3, 0, 2 * Math.PI);
        //     ctx.fill();
        //     ctx.closePath();
        //     ctx.fillStyle = "black";
        //     ctx.beginPath();
        //     ctx.arc(406, 298, 3, 0, 2 * Math.PI);
        //     ctx.fill();
        //     ctx.closePath();
        // //     // mouth happy
        //     ctx.strokeStyle = "black";
        //     ctx.beginPath();
        //     ctx.arc(400, 305, 4, 0, 1 * Math.PI);
        //     ctx.stroke();
        //     ctx.closePath();
    }
    // Function to update the character's position based on keyboard input
    function updateCharacterPosition() {
        if (keys['w'])
            character.y -= character.speed;
        if (keys['s'])
            character.y += character.speed;
        if (keys['a'])
            character.x -= character.speed;
        if (keys['d'])
            character.x += character.speed;
    }
    // Handle keyboard input
    const keys = {};
    window.addEventListener('keydown', (e) => {
        keys[e.key.toLowerCase()] = true;
    });
    window.addEventListener('keyup', (e) => {
        keys[e.key.toLowerCase()] = false;
    });
    // Game loop
    function gameLoop() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Update character position
        updateCharacterPosition();
        // Draw the character
        drawCharacter();
        // Request the next frame
        requestAnimationFrame(gameLoop);
    }
    // Start the game loop
    gameLoop();
    // class Character {
    //   x: number;
    //   y: number;
    //   width: number;
    //   height: number;
    //   speed: number;
    //   constructor(x: number, y: number, width: number, height: number, speed: number) {
    //     this.x = x;
    //     this.y = y;
    //     this.width = width;
    //     this.height = height;
    //     this.speed = speed;
    //   }
    //   draw(ctx: CanvasRenderingContext2D) {
    //     ctx.fillStyle = "yellow";
    //     ctx.beginPath();
    //     ctx.arc(400, 300, 22, 0, 2 * Math.PI);
    //     ctx.fill();
    //     ctx.closePath();
    //     //eyes
    //     ctx.fillStyle = "black";
    //     ctx.beginPath();
    //     ctx.arc(394, 298, 3, 0, 2 * Math.PI);
    //     ctx.fill();
    //     ctx.closePath();
    //     ctx.fillStyle = "black";
    //     ctx.beginPath();
    //     ctx.arc(406, 298, 3, 0, 2 * Math.PI);
    //     ctx.fill();
    //     ctx.closePath();
    //     // mouth happy
    //     ctx.strokeStyle = "black";
    //     ctx.beginPath();
    //     ctx.arc(400, 305, 4, 0, 1 * Math.PI);
    //     ctx.stroke();
    //     ctx.closePath();
    //   }
    //   move(keys: { [key: string]: boolean }) {
    //     if (keys['w']) this.y -= this.speed;
    //     if (keys['s']) this.y += this.speed;
    //     if (keys['a']) this.x -= this.speed;
    //     if (keys['d']) this.x += this.speed;
    //   }
    // }
    // // Get the canvas element and its 2D rendering context
    // const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    // const ctx = canvas.getContext('2d')!;
    // // Create the character object
    // const character = new Character(canvas.width / 2, canvas.height / 2, 50, 50, 5);
    // // Handle keyboard input
    // const keys: { [key: string]: boolean } = {};
    // window.addEventListener('keydown', (e) => {
    //   keys[e.key.toLowerCase()] = true;
    // });
    // window.addEventListener('keyup', (e) => {
    //   keys[e.key.toLowerCase()] = false;
    // });
    // // Game loop
    // function gameLoop() {
    //   // Clear the canvas
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   // Update character position
    //   character.move(keys);
    //   // Draw the character
    //   character.draw(ctx);
    //   // Request the next frame
    //   requestAnimationFrame(gameLoop);
    // }
    // // Start the game loop
    // gameLoop();
})(text || (text = {}));
//# sourceMappingURL=text.js.map
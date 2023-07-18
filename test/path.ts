namespace path{
    // Define the character properties
    interface Character {
        x: number;
        y: number;
        width: number;
        height: number;
        speed: number;
      }
      
      // Get the canvas element and its 2D rendering context
      const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d')!;
      
      // Create the character object
      const character: Character = {
        x: 50,
        y: 50,
        width: 50,
        height: 50,
        speed: 2,
      };
      
      // Define the path points
      const pathPoints: { x: number; y: number }[] = [
        { x: 100, y: 100 },
        { x: 200, y: 300 },
        { x: 300, y: 200 },
        { x: 400, y: 100 },
      ];
      
      let currentPointIndex = 0;
      
      // Function to draw the character on the canvas
      function drawCharacter() {
        ctx.fillStyle = 'red';
        ctx.fillRect(character.x, character.y, character.width, character.height);
      }
      
      // Function to move the character along the defined path
      function moveCharacterAlongPath() {
        const currentPoint = pathPoints[currentPointIndex];
        const dx = currentPoint.x - character.x;
        const dy = currentPoint.y - character.y;
        const distanceToTarget = Math.sqrt(dx * dx + dy * dy);
      
        if (distanceToTarget < character.speed) {
          // Reached the current point, move to the next one
          currentPointIndex = (currentPointIndex + 1) % pathPoints.length;
        } else {
          // Move towards the current point
          const angle = Math.atan2(dy, dx);
          character.x += character.speed * Math.cos(angle);
          character.y += character.speed * Math.sin(angle);
        }
      }
      
      // Game loop
      function gameLoop() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      
        // Move character along the path
        moveCharacterAlongPath();
      
        // Draw the character
        drawCharacter();
      
        // Request the next frame
        requestAnimationFrame(gameLoop);
      }
      
      // Start the game loop
      gameLoop();
    
    }
    
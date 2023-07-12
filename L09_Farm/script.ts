namespace OldMcDonald {

    /*
    Aufgabe: <L08.2 Artpiece>
    Name: <Laura Kupferschmid>
    Matrikel: <272613>
    Datum: <16.05.23>
    Quellen: <Judith Pauler, Madelein Hansen>
    */
  /*normal script*/
  window.addEventListener("load", handleload);
  export let crc2: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
  crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
  
  let food = new Food(10, crc2); let foodDog = new Food(10, crc2); let foodPig = new Food(10, crc2); let foodCow = new Food(10, crc2); let foodChicken = new Food(10, crc2);
  let foodDonkey = new Food(10, crc2);
  let i = 0;

  export let donkey = new Animal("Donkey", "EHHHHHAHHHHH", "OLD MC DONALD HAD A FARM!", "HEU", 10);
  export let pig = new Animal("Pig", "OINK OINK", "OLD MC DONALD HAD A FARM!", "Junk", 10);
  export let chicken = new Animal("Chicken", "BOOOCK BOOOOCK", "OLD MC DONALD HAD A FARM!", "KORN", 10);
  export let cow = new Animal("COW", "MUHHHHHHHH", "OLD MC DONALD HAD A FARM!", "GRAS", 10);
  export let dog: Animal = new Animal("DOG", "WUFFF WIFFF", "OLD MC DONALD HAD A FARM!", "FLEISCH", 10);

  function handleload(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    document.getElementById("button")!.addEventListener('click', newDay);
    document.addEventListener("click", Song)

    drawBackground();
    drawWall();
    food.drawManager();
  }

  function drawBackground(): void {

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(1, "white");
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
  };

  function drawWall(): void {
    crc2.fillStyle = "HSLA(137, 74%, 33%, 1)";
    crc2.fillRect(0, 290, crc2.canvas.width, 250);
  }

  function newDay(): void {
    console.log("newDay")
    donkey.drawDonkey();
    pig.drawPig();
    dog.drawDog();
    chicken.drawChicken();
    cow.drawCow();

    foodDog.drawFood(3, 4, 5, 6, "#7d6f4f", "#8a7850", "#a39167", "#b59f6d");
    foodCow.drawFood(22, 23, 24, 25, "#1d4727", "#1a4f27", "#155224", "#31633d");
    foodPig.drawFood(41, 42, 43, 44, "#6e5b46", "#4a3926", "#362818", "#574531");
    foodChicken.drawFood(61, 62, 63, 64, "#c7a22a", "#c7a228", "#d1aa2a", "#c79f1e");
    foodDonkey.drawFood(82, 83, 84, 85, "#93a646", "#8a9950", "#7e8a4e", "#778a2b");
  }

  function Song(): void {

    if (i < 1) {
      console.log("Old MacDonald had a farm, E-I-E-I-O");
      console.log("And on that farm he had a dog, E-I-E-I-O.");
      console.log("With a ");
      console.log("Dog: " + dog.sound + " " + dog.sound);
      console.log("here,");
      console.log("and a");
      console.log("Dog: " + dog.sound + " " + dog.sound);
      console.log("there.");
      console.log("Here a ");
      console.log("Dog: " + dog.sound);
      console.log("there a ");
      console.log("Dog: " + dog.sound);
      console.log("Everywhere a ");
      console.log("Dog: " + dog.sound + " " + dog.sound);
      console.log("Old MacDonald had a farm, E-I-E-I-O.");

      food.eat(dog);
      i++
      return;
    }
    if (i < 2) {
      console.log("Old MacDonald had a farm, E-I-E-I-O");
      console.log("And on that farm he had a cow, E-I-E-I-O.");
      console.log("With a ");
      console.log("Cow: " + cow.sound + " " + cow.sound);
      console.log("here,");
      console.log("and a");
      console.log("Cow: " + cow.sound + " " + cow.sound);
      console.log("there.");
      console.log("Here a ");
      console.log("Cow: " + cow.sound);
      console.log("there a ");
      console.log("Cow: " + cow.sound);
      console.log("Everywhere a ");
      console.log("Cow: " + cow.sound + " " + cow.sound);
      console.log("Old MacDonald had a farm, E-I-E-I-O.");

      food.eat(cow);
      i++
      return;
    }
    if (i < 3) {

      console.log("Old MacDonald had a farm, E-I-E-I-O");
      console.log("And on that farm he had a cow, E-I-E-I-O.");
      console.log("With a ");
      console.log("Pig: " + pig.sound + " " + pig.sound);
      console.log("here,");
      console.log("and a");
      console.log("Pig: " + pig.sound + " " + pig.sound);
      console.log("there.");
      console.log("Here a ");
      console.log("Pig: " + pig.sound);
      console.log("there a ");
      console.log("Pig: " + pig.sound);
      console.log("Everywhere a ");
      console.log("Pig: " + pig.sound + " " + pig.sound);
      console.log("Old MacDonald had a farm, E-I-E-I-O.");

      food.eat(pig);
      i++
      return;
    }
    if (i < 4) {

      console.log("Old MacDonald had a farm, E-I-E-I-O");
      console.log("And on that farm he had a cow, E-I-E-I-O.");
      console.log("With a ");
      console.log("Chicken: " + chicken.sound + " " + chicken.sound);
      console.log("here,");
      console.log("and a");
      console.log("Chicken: " + chicken.sound + " " + chicken.sound);
      console.log("there.");
      console.log("Here a ");
      console.log("Chicken: " + chicken.sound);
      console.log("there a ");
      console.log("Chicken: " + chicken.sound);
      console.log("Everywhere a ");
      console.log("Chicken: " + chicken.sound + " " + chicken.sound);
      console.log("Old MacDonald had a farm, E-I-E-I-O.");

      food.eat(chicken);
      i++
      return;
    }
    if (i < 5) {

      console.log("Old MacDonald had a farm, E-I-E-I-O");
      console.log("And on that farm he had a cow, E-I-E-I-O.");
      console.log("With a ");
      console.log("Donkey: " + donkey.sound + " " + donkey.sound);
      console.log("here,");
      console.log("and a");
      console.log("Donkey: " + donkey.sound + " " + donkey.sound);
      console.log("there.");
      console.log("Here a ");
      console.log("Donkey: " + donkey.sound);
      console.log("there a ");
      console.log("Donkey: " + donkey.sound);
      console.log("Everywhere a ");
      console.log("Donkey: " + donkey.sound + " " + donkey.sound);
      console.log("Old MacDonald had a farm, E-I-E-I-O.");

      food.eat(donkey);
      i++
      return;
    }
  }

}
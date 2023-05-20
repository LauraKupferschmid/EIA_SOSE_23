namespace OldMcDonald {
    /*Klassen*/
    export class Animal {
        name: string;
        sound: string = "EHHAHH";
        sing: string;
        eat: string;
        food: number;

        constructor(_name: string, _sound: string, _sing: string, _eat: string, _food: number) {
            console.log("Hallo")
            this.name = _name;
            this.sound = _sound;
            this.sing = _sing;
            this.eat = _eat;
            this.food = _food;
        }
        singingSong(): void {
            let song: string = "OLD MC DONALD HAD A FARM!";
            let sing: string = song;
            console.log(sing)

        };

        soundAnimal(): void {
            let sound: string = "EHHHHAHHHHH";
            console.log(sound)
            let sound1: string = "MUHHHHHHH";
            console.log(sound1)
            let sound2: string = "BOOOCKBOOOCK";
            console.log(sound2)
            let sound3: string = "WUFFWUFF";
            console.log(sound3)
            let sound4: string = "OINKOINK";
            console.log(sound4)
        };

       eatFood(_stockReamins: number): void {
            let fullstorage: number = 10;
            console.log(fullstorage)
            /* if (fullstorage < 0, fullstorage-- ) {
                 console.log('x is less than y');*/
             }
             
             /*draw(_name:string): void {
                if (_name: "donkey");
                
                if (_name: "pig");
                if (_name: "cow");
                if (_name: "chicken");
                if (_name: "dog");
             }*/



        };
    }
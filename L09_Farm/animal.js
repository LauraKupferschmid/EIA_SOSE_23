"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    /*Klassen*/
    class Animal {
        name;
        sound = "EHHAHH";
        sing;
        eat;
        food;
        constructor(_name, _sound, _sing, _eat, _food) {
            console.log("Hallo");
            this.name = _name;
            this.sound = _sound;
            this.sing = _sing;
            this.eat = _eat;
            this.food = _food;
        }
        singingSong() {
            let song = "OLD MC DONALD HAD A FARM!";
            let sing = song;
            console.log(sing);
        }
        ;
        soundAnimal() {
            let sound = "EHHHHAHHHHH";
            console.log(sound);
            let sound1 = "MUHHHHHHH";
            console.log(sound1);
            let sound2 = "BOOOCKBOOOCK";
            console.log(sound2);
            let sound3 = "WUFFWUFF";
            console.log(sound3);
            let sound4 = "OINKOINK";
            console.log(sound4);
        }
        ;
        eatFood(_stockReamins) {
            let fullstorage = 10;
            console.log(fullstorage);
            /* if (fullstorage < 0, fullstorage-- ) {
                 console.log('x is less than y');*/
        }
    }
    OldMcDonald.Animal = Animal;
    ;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map
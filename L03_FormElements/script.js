"use strict";
var aufgabe3;
(function (aufgabe3) {
    /*
    Aufgabe: <L03 FormElements>
    Name: <Laura Kupferschmid>
    Matrikel: <272613>
    Datum: <09.04.2023>
    Quellen: <Madeleine Hansen>
    */
    window.addEventListener('load', handleLoad);
    function handleLoad() {
        document.getElementById("new").addEventListener('click', newtask);
        document.getElementById("edit").addEventListener('click', edittask);
        document.getElementById("add").addEventListener('click', addtask);
    }
    ;
    function newtask() {
        console.log("Bitte erstelle eine Aufgabe");
    }
    ;
    function addtask() {
        console.log("Hinzufügen einer Aufgabe");
    }
    ;
    function edittask() {
        console.log("Bearbeite die Aufgabe");
    }
    ;
})(aufgabe3 || (aufgabe3 = {}));
//# sourceMappingURL=script.js.map
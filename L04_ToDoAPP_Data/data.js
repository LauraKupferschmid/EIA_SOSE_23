"use strict";
var Datensammlung;
(function (Datensammlung) {
    /*
    Aufgabe: <Aufgabe 4 ToDo>
    Name: <Laura Kupferschmid
    Matrikel: <272240>
    Datum: <14.04.23>
    Quellen: <Judith Pauler, Madelein Hansen>
    */
    let taskArray = [];
    function getData() {
        let form = document.querySelector('#myform');
        let todoArray;
        let formData = new FormData(form);
        console.log(formData);
        let input0 = formData.get('names');
        let input1 = formData.get('ToDo');
        let input2 = formData.get('date');
        let input3 = formData.get('comments');
        let input4 = formData.get('radio1');
        todoArray = [input0, input1, input2, input3, input4];
        console.log("getData: " + todoArray);
        taskArray = todoArray;
        return taskArray;
    }
    ;
    let divcontainer = document.querySelector("#div2");
    //New todo mit addeventlister erstellen, macht formular teil sichtbar
    document.querySelector("#new").addEventListener("click", function () {
        divcontainer.style.setProperty("visibility", "visible");
    });
    //auf add button add eventlistener legen, kindelemente erzeugen und anhängen
    document.querySelector("#add").addEventListener("click", function (e) {
        divcontainer.style.setProperty("visibility", "hidden");
        getData();
        let newdiv = document.createElement("div");
        newdiv.setAttribute("id", "newtask");
        let newP = document.createElement("p");
        newP.setAttribute("id", "newp");
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "<input type=checkbox id=check>" + "Name: " + taskArray[0] + ", Aufgabe: " + taskArray[1] + ", <br>bis: " + taskArray[2] + ", Kommentar: " + taskArray[3] + "  <br>Status: " + taskArray[4];
        e.preventDefault();
        //delet button erstellen und
        let trash = document.createElement("button");
        trash.setAttribute("id", "trash");
        newP.appendChild(trash);
        trash.innerHTML = "Delete";
        trash.addEventListener("click", function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
        //edit button erstellen und definieren
        let edit = document.createElement("button");
        edit.setAttribute("id", "edit");
        newP.appendChild(edit);
        edit.innerHTML = "Edit";
        edit.addEventListener("click", function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
            divcontainer.style.setProperty("visibility", "visible");
        });
    });
})(Datensammlung || (Datensammlung = {}));
//# sourceMappingURL=data.js.map
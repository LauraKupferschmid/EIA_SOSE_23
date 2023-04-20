"use strict";
var client;
(function (client) {
    window.addEventListener("load", hndlload);
    function hndlload() {
        trash.addEventListener("click", trshbtn);
        edit.addEventListener("click", editbtn);
        document.querySelector("#add").addEventListener("click", addbtn);
    }
    let trash = document.createElement("button"); // delet button erstellen
    trash.setAttribute("id", "trash");
    trash.innerHTML = "Delete";
    let edit = document.createElement("button"); // edit button erstellen
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newdiv = document.createElement("div"); // div element für to do erstellen
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p"); // p element für to do erstellen
    newP.setAttribute("id", "newp");
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
    document.querySelector("#new").addEventListener("click", function () {
        divcontainer.style.setProperty("visibility", "visible");
    });
    function addbtn(e) {
        divcontainer.style.setProperty("visibility", "hidden");
        getData();
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "<input type=checkbox id=check>" + "Name: " + taskArray[0] + ", Aufgabe: " + taskArray[1] + ", <br>bis: " + taskArray[2] + ", Kommentar: " + taskArray[3] + "  <br>Status: " + taskArray[4];
        e.preventDefault();
        newP.appendChild(trash);
        newP.appendChild(edit);
    }
    function trshbtn() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
    function editbtn() {
        divcontainer.style.setProperty("visibility", "visible");
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
})(client || (client = {}));
//# sourceMappingURL=client.js.map
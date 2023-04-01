namespace EvnetInspector {


    /*
    Aufgabe: <L02 Eventinspector>
    Name: <Laura Kupferschmid>
    Matrikel: <272613>
    Datum: <21.04.2023>
    Quellen: <Madeleine Hansen, Judith Pauler> 
    */

    window.addEventListener("load", hndload);

    function hndload(): void {

        document.addEventListener("mousemove", setInfoBox);

        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);

        document.getElementById("#div01")?.addEventListener("click", logInfo);
        document.getElementById("#div01")?.addEventListener("keyup", logInfo);

        document.getElementById("#div02")?.addEventListener("click", logInfo);
        document.getElementById("#div02")?.addEventListener("keyup", logInfo);

        document.querySelector("#button")?.addEventListener("click",button1)

    }

    function setInfoBox(_event: MouseEvent): void {

        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let span: HTMLElement = <HTMLElement>document.getElementById("span");
        span.style.top = y + "px";
        span.style.left = x + "px";
        span.innerText = "Mouseposition" + x + " " + y + _event.target;
    }


    function logInfo(_event: Event): void {
        console.log(_event.type, _event.target, _event.currentTarget, _event);
    }

    const customevent = new CustomEvent("word",{bubbles:true, detail: {name:"jim"} });

    function button1(){
        document.addEventListener("word", customEvent);
        document.dispatchEvent(customevent);
    }

    function customEvent(){
        console.log(customevent.bubbles)
        console.log(customevent.detail)
    }

}
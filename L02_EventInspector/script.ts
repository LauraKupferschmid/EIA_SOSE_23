namespace EvnetInspector {

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

    document.getElementById("btn")?.addEventListener("tree",() =>{
        console.log("i am working")
    })
    /*function bton(): void {
        console.log("hi ich funktioniere");
        conso
    }*/

    function custom(_event: MouseEvent): void {
        let customone = new CustomEvent('tree', {bubbles: true})
    document.querySelector("#btn")!.dispatchEvent(customone);
        
    }

}
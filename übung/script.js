//Funktion zum Starten des Timers
let start = document.getElementById("Start")
start.addEventListener("click",handleTouch12) 
document.getElementById("Start").addEventListener("click",handleTouch12)

let stop = document.getElementById("Stop")
start.addEventListener("click",handleTouch13)

let zurücksetzen = document.getElementById("Zurücksetzen")
start.addEventListener("click",handleTouch14)

let Neustarten = document.getElementById("Neustarten")
start.addEventListener("click",handleTouch27)

let Runde = document.getElementById("Runde")
start.addEventListener("click",handleTouch32)


//alt
function handleTouch13() { 
  let stop = (stoppuhr.stop );
  document.querySelector(".Stop").innerHTML=stop
}

function handleTouch14() { 
  let zurucksetzen = (stoppuhr.clear); // kein ü
  document.querySelector(".Zurücksetzen").innerHTML=regen
}

function handleTouch27() { 
}

function handleTouch32() { 
}

function handleTouch33() { 
}
//altEnde

//codepen.io
function idset(id, string) {
    document.getElementById(id).innerHTML = string;
  }
  
  var stoppuhr = (function() {
    var stop = 1;
    var days = 0;
    var hrs = 0;
    var mins = 0;
    var secs = 0;
    var msecs = 0;
    var runden = "";
    var anzrunden = 0;
    return {
      start: function() {
        stop = 0;
      },
      stop: function() {
        stop = 1;
      },
      clear: function() {
        stoppuhr.stop();
        days = 0;
        hrs = 0;
        mins = 0;
        secs = 0;
        msecs = 0;
        runden = "";
        anzrunden = 0;
        stoppuhr.html();
      },
      restart: function() {
        stoppuhr.clear();
        stoppuhr.start();
      },
      timer: function() {
        if (stop === 0) {
          msecs++;
          if (msecs === 100) {
            secs ++;
            msecs = 0;
          }
          if (secs === 60) {
            mins++;
            secs = 0;
          }
          if (mins === 60) {
            hrs++;
            mins = 0;
          }
          if (hrs === 24) {
            days++;
            hrs = 0;
          }
          stoppuhr.html();
        }
      },
      runde: function() {
        runden = "<tr><td>" + days + "</td><td>" + hrs + "</td><td>" + mins + "</td><td>" + secs + "</td><td>" + msecs + "</td></tr>" + runden;
        anzrunden++;
        stoppuhr.html();
      },
      set: function(tage, stunden, minuten, sekunden, msekunden) {
        stoppuhr.stop();
        days = tage;
        hrs = stunden;
        mins = minuten;
        secs = sekunden;
        msecs = msekunden;
        runden = "";
        anzrunden = 0;
        stoppuhr.html();
      },
      html: function() {
        idset("tage", days);
        idset("stunden", hrs);
        idset("minuten", mins);
        idset("sekunden", secs);
        idset("msekunden", msecs);
        idset("runden", runden);
        idset("anzrunden", anzrunden + " Runden");
      }
    }
  })();
  setInterval(stoppuhr.timer, 10);
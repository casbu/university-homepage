"use strict"

// device nav transformation
function navIcon(x) {
    x.classList.toggle("transform");
}

// clock & countdown
showClock();
setInterval("showClock()", 1000);

function showClock (){

    var thisDay = new Date();
    var localDay = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();

    var gradDate = new Date("December 13, 2024 09:30:00");
    var days = (gradDate - thisDay)/(1000*60*60*24);
    var hrs = (days - Math.floor(days))*24;
    var mins = (hrs - Math.floor(hrs))*60;
    var secs = (mins - Math.floor(mins))*60;

    document.getElementById("currentTime").innerHTML = localDay + "<br />" + localTime;
    document.getElementById("dLeft").innerHTML = Math.floor(days);
    document.getElementById("hLeft").innerHTML = Math.floor(hrs);
    document.getElementById("mLeft").innerHTML = Math.floor(mins);
    document.getElementById("sLeft").innerHTML = Math.floor(secs);
}




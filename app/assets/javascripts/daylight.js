function daylightColor(time) {
  if (time === "morning") {
    document.body.style.backgroundColor = "pink";
    document.getElementById("morning").innerHTML = "<h1>Morning</h1>";
    document.getElementById("afternoon").innerHTML = "";
    document.getElementById("evening").innerHTML = "";
  } else if (time === "afternoon") {
    document.body.style.backgroundColor = "blue";
    document.getElementById("morning").innerHTML = "";
    document.getElementById("afternoon").innerHTML = "<h1>Afternoon</h1>";
    document.getElementById("evening").innerHTML = "";
  } else if (time === "evening") {
    document.body.style.backgroundColor = "black";
    document.getElementById("morning").innerHTML = "";
    document.getElementById("afternoon").innerHTML = "";
    document.getElementById("evening").innerHTML = "<h1>Evening</h1>";
  }
}
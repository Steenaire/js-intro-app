function changeColor(time) {
  if (time === "morning") {
    document.body.style.backgroundColor = "pink";
    document.getElementById("morning").innerHTML = "Morning";
    document.getElementById("afternoon").innerHTML = "";
    document.getElementById("evening").innerHTML = "";
  } else if (time === "afternoon") {
    document.body.style.backgroundColor = "blue";
    document.getElementById("morning").innerHTML = "";
    document.getElementById("afternoon").innerHTML = "Afternoon";
    document.getElementById("evening").innerHTML = "";
  } else if (time === "evening") {
    document.body.style.backgroundColor = "black";
    document.getElementById("morning").innerHTML = "";
    document.getElementById("afternoon").innerHTML = "";
    document.getElementById("evening").innerHTML = "Evening";
  }
}
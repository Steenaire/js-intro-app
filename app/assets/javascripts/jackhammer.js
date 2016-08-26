var counter = 0

function jackhammer(element) {
  counter ++;
  element.style["background-color"] = changeColor();
  if (counter === 5) {
    element.style["background-color"] = "white";
    alert("You won! What a great game!");
  }
}

function changeColor() {
  var characters = '0123456789ABCDEF'.split('');
  var color = "#";
  for (var i=0; i<6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  return color;
}
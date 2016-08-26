var counter = 0

function jackhammer(element) {
  counter ++;
  element.style["background-color"] = changeColor();
  if (counter === 5) {
    alert("You won! What a great game!");
    counter = 0;
  }
}

function changeColor() { //Generate a random hex code for a color
  var characters = '0123456789ABCDEF'.split('');
  var color = "#";
  for (var i=0; i<6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var boxesClicked = [];
function clickBoxes(click) {
  if (boxesClicked.indexOf(click) === -1) {
    boxesClicked.push(click);
  }
  if (boxesClicked.length === 3) {
    console.log("You win! What a great game!");
  }
}
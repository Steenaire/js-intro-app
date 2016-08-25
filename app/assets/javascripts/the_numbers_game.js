var nextNumber = 1;
function numbersGame(number) {
  if (number === nextNumber) {
    nextNumber++;
    if (number === 10) {
      console.log("You win! What a great game!");
    }
  } else {
    nextNumber = 1;
  }
}
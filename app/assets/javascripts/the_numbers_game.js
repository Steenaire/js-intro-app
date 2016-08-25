var clickNumbers = [];
var comparisons = [1,2,3,4,5,6,7,8,9,10]
function numbersGame(number) {
  clickNumbers.push(number);
  holder = 0;
  if (clickNumbers.length==comparisons.length) {
    for (i=0; i<comparisons.length; i++) {
      if (clickNumbers[i]==comparisons[i]) {
        holder++;
      }
    }
    if (holder==10) {
      console.log("You win! What a great game!");
    }
  }
}
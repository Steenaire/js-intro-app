var clickCount = 0;
var xClicks = [];
var oClicks = [];

function ticTacToe(element,gridId) {
  if (clickCount%2 === 0){
    element.innerHTML = "X";
    xClicks.push(gridId);
    console.log(xClicks);
  } else {
    element.innerHTML = "O";
    oClicks.push(gridId);
  }

  if ((xClicks.indexOf(1)>=0 && xClicks.indexOf(2)>=0 && xClicks.indexOf(3)>=0)
    || (xClicks.indexOf(1)>=0 && xClicks.indexOf(5)>=0 && xClicks.indexOf(9)>=0)
    || (xClicks.indexOf(4)>=0 && xClicks.indexOf(5)>=0 && xClicks.indexOf(6)>=0)
    || (xClicks.indexOf(7)>=0 && xClicks.indexOf(8)>=0 && xClicks.indexOf(9)>=0)
    || (xClicks.indexOf(3)>=0 && xClicks.indexOf(5)>=0 && xClicks.indexOf(7)>=0)
    || (xClicks.indexOf(3)>=0 && xClicks.indexOf(6)>=0 && xClicks.indexOf(9)>=0)
    || (xClicks.indexOf(2)>=0 && xClicks.indexOf(5)>=0 && xClicks.indexOf(8)>=0)
    || (xClicks.indexOf(1)>=0 && xClicks.indexOf(4)>=0 && xClicks.indexOf(7)>=0)){
    console.log("X Wins!");
    alert("X Wins!");
  } else if ((oClicks.indexOf(1)>=0 && oClicks.indexOf(2)>=0 && oClicks.indexOf(3)>=0)
    || (oClicks.indexOf(1)>=0 && oClicks.indexOf(5)>=0 && oClicks.indexOf(9)>=0)
    || (oClicks.indexOf(4)>=0 && oClicks.indexOf(5)>=0 && oClicks.indexOf(6)>=0)
    || (oClicks.indexOf(7)>=0 && oClicks.indexOf(8)>=0 && oClicks.indexOf(9)>=0)
    || (oClicks.indexOf(3)>=0 && oClicks.indexOf(5)>=0 && oClicks.indexOf(7)>=0)
    || (oClicks.indexOf(3)>=0 && oClicks.indexOf(6)>=0 && oClicks.indexOf(9)>=0)
    || (oClicks.indexOf(2)>=0 && oClicks.indexOf(5)>=0 && oClicks.indexOf(8)>=0)
    || (oClicks.indexOf(1)>=0 && oClicks.indexOf(4)>=0 && oClicks.indexOf(7)>=0)){
    console.log("O Wins!");
    alert("O Wins!");
  } 

  clickCount++;
}
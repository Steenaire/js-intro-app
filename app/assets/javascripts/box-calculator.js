var sum = 0;
function boxCalculator(number) {
  sum = sum+number;
  console.log(sum);
  document.getElementById("result").innerHTML = sum;
}
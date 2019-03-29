// Should return an array of elements
function range (start, end, step = 1) {
  let numberList = [];
  let currentNumber = start;
  if (start < end) {
    while (currentNumber < end + 1) {
      numberList.push(currentNumber);
      currentNumber += step;
    }
  } else if (start > end) {
    while (currentNumber > end - 1) {
      numberList.push(currentNumber);
      currentNumber += step;
    }
  }
  return numberList;
}

function sum(numberList){
  let total = 0;
  for (let number of numberList) {
    total += Number(number);
  }
  return total;
}

console.log(range(3, 6));
console.log(sum(range(1,10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
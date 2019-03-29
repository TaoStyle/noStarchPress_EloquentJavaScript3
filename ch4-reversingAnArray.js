function reverseArray(array) {
  let newArray = [];
  for (let element of array) {
    newArray.unshift(element);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let firstHalfElement = array[i];
    let lastHalfElement = array[(array.length - 1) - i];
    array[i] = lastHalfElement;
    array[(array.length - 1) - i] = firstHalfElement;
  }
  return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));


console.log(reverseArrayInPlace(['A', 'B', 'C', 'd', 'e', 'f']));
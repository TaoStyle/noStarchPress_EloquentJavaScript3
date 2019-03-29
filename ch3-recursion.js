function isEven(number) {
  do {
    number = (number >= 0 ? number : number * -1);
    switch(number){
    case 0:
      return false;
    case 1:
      return true;
    default:
      return isEven(number - 2);
    }

  } while (number > 1);
}

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(-1));
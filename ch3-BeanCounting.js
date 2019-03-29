function countBs(string) {
  return countChar('B',string);
};

function countChar(char,string){
  let numberOfChar = 0;
  for(let i = 0; i < string.length - 1 ; i++) {
    if (string[i] == char) { numberOfChar++ };
  }
  return numberOfChar;
};

console.log(countBs('Brave&Bold'));
console.log(countChar('a','Brave&Bold'));
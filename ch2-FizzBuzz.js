let number = 1;
while (number < 101) {
  if (!(number % 3) && !(number % 5)) {
    console.log('FizzBuzz');
  } else if(!(number % 3)){
    console.log('Fizz');
  } else if (!(number % 5)) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
  number++;
};

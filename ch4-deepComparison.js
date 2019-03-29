// INCOMPLETE, too advanced at this stage

function deepEqual(eval1, eval2) {
  if (eval1.keys == eval2.keys){
    return true;
  } else {
    return false;
  }
}

let obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
// → true
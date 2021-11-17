//generate multiplication table from 1 to number provided, multiplying each line by next number in sequence and start on new line


const multiplicationTable = function(maxValue) {
let result = ""

  for (let a = 1; a <= maxValue; a++) {
    for (let b = 1; b <= maxValue; b++) {
      result = (result + (a*b)) + " "; 
    }
    result = result + '\n'
  }
  return result
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));




//sum the value of the array together given their condition, if no value return 0
//return the total of those values

const conditionalSum = function(values, condition) {
  let total = 0;

  for (let i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      total += values[i]
    }
    else if (condition === "odd" && values[i] % 2 !== 0) {
      total += values[i] 
    }
  }  
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

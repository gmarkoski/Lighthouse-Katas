// sum the two largest numbers in an array, loop through array to choose largest and second largest, then sum those together


const sumLargestNumbers = function(data) {
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < data.length; i++) {
    if(data[i] > max1) {
      max1 = data[i];
    }
  };
  for (let k = 0; k < data.length; k++) {
    if (data[k] > max2 && data[k] < max1) {
      max2 = data[k]
    }
  };
  return max1 + max2
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
// repeat the first number, by the second number (ie return 1, 10 times)

const repeatNumbers = function(data) {
  let result = "";

  for (let x = 0; x < data.length; x++) {
    for (let y = data[x][1]; y > 0; y--) {
      result += data[x][0];
    }
    if (x < (data.length - 1))
      result += ", "
  }
  return result 
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

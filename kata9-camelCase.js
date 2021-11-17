const camelCase = function(input) {
  let output = '';
  let array = input.split(" ");

  for (let x = 0; x < array.length; x++) {
    if (x !== 0) {
      output += array[x].charAt(0).toUpperCase() + array[x].slice(1)
    }
    else {
      output += array[x].toLowerCase();
    }
  }    
  return output
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//replace the whitespace within the strings with %20

const urlEncode = function(text) {
  let encodedText = "";
  text = text.trim();
  
  for (let space of text) {
    if (space === " ") {
      space = "%20";
      encodedText += space;
    }
    else {
      encodedText += space;
    }
  }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

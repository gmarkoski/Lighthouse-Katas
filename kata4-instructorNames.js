//return which intructor has the longest name in each array by comparing name

const instructorWithLongestName = function(instructors) {
  let longestNameOb = {name: " ", course: " "};
  
  for (let i = 0; i < instructors.length; i++) {
    let holderName = instructors[i].name;
      
      if (longestNameOb.name.length < holderName.length) {
        longestNameOb = instructors[i];
    }
  }
  return longestNameOb;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

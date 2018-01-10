const math = require("./notes.js");
const result = math.add(2,3);
// console.log(result);
const person = {
  name : "Will",
  color : "blue",
  add : (x,y)=> {return x+y},
  school : "Paly",
  nums : [2,3,4,5]
}
const letters ="ms";
console.log(person["nums"]);

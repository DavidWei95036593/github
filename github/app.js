const math = require("./notes.js");
const result = math.add(2,3);
const fs = require('fs');
//writeFileSync will overwrite the content in the file
fs.writeFileSync("results.txt","GoodBye");
//appendFileSync will add content in the file
fs.appendFileSync("results.txt","How's going");
//both commands will create a new file if the require file is missing

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

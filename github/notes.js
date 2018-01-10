const add = (x,y)=> x+y;
// console.log(add(2,3));
const sub = (x,y) => x-y;
module.exports = {
  add: add,
  sub: sub,
  num: 5
}
console.log(module.exports);

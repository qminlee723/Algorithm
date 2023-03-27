const input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .split(" ");

let answer = 0;
let array = [];
array.push(input);
array.forEach((a) => (answer += a));
console.log(answer);

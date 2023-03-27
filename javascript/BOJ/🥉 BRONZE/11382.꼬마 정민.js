const input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .split(" ");

let answer = 0;

input.forEach((i) => (answer += Number(i)));
console.log(answer);

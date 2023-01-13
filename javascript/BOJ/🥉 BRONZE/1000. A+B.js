// BOJ 제출시 dev/stdin
// 드디어 자바스크립트 입력 받는 법을 알게 됐다...ㅎ 프로그래머스 짱... 반성하자...
// 출력은 console.log로!
const input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);

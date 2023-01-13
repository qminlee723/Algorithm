const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < input.length - 1; i++) {
  let answer = 0;

  // 조건 제대로 읽자~!
  if (input[i] === "#") {
    break;
  }

  for (let char of input[i].toLowerCase()) {
    if (vowels.includes(char)) {
      answer += 1;
    }
  }
  console.log(answer);
}

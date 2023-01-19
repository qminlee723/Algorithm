// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  var answer = 0;
  let score = 0;
  let temp = [];

  for (let i = 0; i < dartResult.length; i++) {
    // 숫자인지 판별 isNaN
    if (!isNaN(dartResult[i])) {
      // 10
      if (Number(dartResult[i - 1]) === 1) {
        score = 10;
      } else {
        score = Number(dartResult[i]);
      }
    } else if (dartResult[i] === "S") {
      temp.push(score);
    } else if (dartResult[i] === "D") {
      temp.push(Math.pow(score, 2));
    } else if (dartResult[i] === "T") {
      temp.push(Math.pow(score, 3));
    } else if (dartResult[i] === "*") {
      if (temp.length > 1) {
        temp[temp.length - 1] = temp[temp.length - 1] * 2;
        temp[temp.length - 2] = temp[temp.length - 2] * 2;
      } else {
        temp[temp.length - 1] = temp[temp.length - 1] * 2;
      }
    } else if (dartResult[i] === "#") {
      temp[temp.length - 1] = temp[temp.length - 1] - temp[temp.length - 1] * 2;
    }
  }
  answer = temp.reduce((acc, currVal) => acc + currVal, 0);
  return answer;
}

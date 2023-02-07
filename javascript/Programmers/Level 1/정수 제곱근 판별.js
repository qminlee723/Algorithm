function solution(n) {
  var answer = 0;
  let temp = 0;
  for (let i = 0; i < n + 1; i++) {
    if (Math.pow(i, 2) === n) {
      answer = Math.pow(i + 1, 2);
      break;
    } else {
      answer = -1;
    }
  }
  return answer;
}

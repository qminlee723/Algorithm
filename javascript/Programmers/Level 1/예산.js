function solution(d, budget) {
  var answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget) {
      break;
    } else {
      budget -= d[i];
      answer += 1;
    }
  }
  return answer;
}

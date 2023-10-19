function solution(n, m, section) {
  let answer = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    if (section[i] > max) {
      answer++;
      max = section[i] - 1 + m;
    }
  }

  return answer;
}

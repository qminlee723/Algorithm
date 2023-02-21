function solution(t, p) {
  var answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    var temp = t.slice(i, i + p.length);
    if (temp <= p) {
      answer += 1;
    }
  }
  return answer;
}

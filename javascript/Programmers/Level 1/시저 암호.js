function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = [];

  for (let i = 0; i < s.length; i++) {
    if (upper.includes(s[i])) {
      // 대문자인 경우
      let idx = upper.indexOf(s[i]);
      let real = 26 - (idx + n);
      if (real <= 0) {
        real = -real;
        answer.push(upper[real]);
      } else {
        answer.push(upper[idx + n]);
      }
    } else if (lower.includes(s[i])) {
      // 소문자인 경우
      let idx = lower.indexOf(s[i]);
      let real = 26 - (idx + n);

      if (real <= 0) {
        real = -real;
        answer.push(lower[real]);
      } else {
        answer.push(lower[idx + n]);
      }
    } else {
      answer.push(" ");
    }
  }
  return answer.join("");
}

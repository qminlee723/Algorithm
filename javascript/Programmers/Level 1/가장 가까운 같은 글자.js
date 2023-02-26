function solution(s) {
  var answer = [];
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      answer.push(-1);
      arr.push(s[i]);
    } else {
      answer.push(arr.length - arr.lastIndexOf(s[i]));
      arr.push(s[i]);
    }
  }
  return answer;
}

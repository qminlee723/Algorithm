function solution(s) {
  var answer = "";
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    temp.push(s[i]);
  }
  answer = temp.sort().reverse().join("");
  return answer;
}

function solution(s) {
  var answer = [];
  var sArray = s.split(" ");
  answer.push(Math.min(...sArray));
  answer.push(Math.max(...sArray));
  return answer.join(" ");
}

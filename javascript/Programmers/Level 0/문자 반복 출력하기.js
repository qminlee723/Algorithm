function solution(my_string, n) {
  // ... 나머지 연산자
  // string map함수
  var answer = [...my_string];
  return answer.map((a) => a.repeat(n)).join("");
}

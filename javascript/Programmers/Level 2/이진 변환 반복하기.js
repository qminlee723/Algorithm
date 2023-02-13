function solution(s) {
  var answer = [0, 0];

  while (s.length > 1) {
    let sLength = s.length;
    s = s.split("").filter((x) => x === "1").length;
    answer[0]++;
    answer[1] += sLength - s;
    s = s.toString(2);
  }
  return answer;
}

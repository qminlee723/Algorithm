function solution(my_string) {
  const stringArray = my_string.split("").filter((s) => s.match(/\d/));
  var answer = stringArray.map((n) => Number(n));
  answer.sort((a, b) => {
    return a - b;
  });
  return answer;
}

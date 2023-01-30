function solution(money) {
  var answer = [];
  const coffee = parseInt(money / 5500);
  const change = money - coffee * 5500;
  answer.push(coffee, change);
  return answer;
}

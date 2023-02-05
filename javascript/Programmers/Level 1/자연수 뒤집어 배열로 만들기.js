function solution(n) {
  var answer = [];
  let stringNum = n.toString();

  for (let i = 0; i < stringNum.length; i++) {
    answer.push(Number(stringNum[i]));
  }
  return answer.reverse();
}

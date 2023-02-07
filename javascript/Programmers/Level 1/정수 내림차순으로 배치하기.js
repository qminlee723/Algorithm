function solution(n) {
  var answer = "";
  let arr = [];
  let each = n.toString();

  for (let ea of each) {
    arr.push(ea);
  }
  arr.sort().reverse();

  arr.forEach((ea) => {
    answer += ea;
  });
  return Number(answer);
}

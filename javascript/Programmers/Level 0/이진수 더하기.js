function solution(bin1, bin2) {
  // parseInt(x, base)
  // toString(base)
  const sum = parseInt(bin1, 2) + parseInt(bin2, 2);
  var answer = sum.toString(2);
  return answer;
}

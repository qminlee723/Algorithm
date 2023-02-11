function solution(arr, divisor) {
  var answer = [];
  arr.forEach((a) => {
    if (a % divisor === 0) {
      answer.push(a);
    }
  });
  if (answer.length !== 0) {
    return answer.sort((a, b) => a - b);
  } else {
    return [-1];
  }
}

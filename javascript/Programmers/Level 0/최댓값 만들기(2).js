function solution(numbers) {
  const answer = [];
  numbers.sort((a, b) => {
    return b - a;
  });

  // python처럼 [-1], [-2] 이런거 안됨..  slice
  const minusNum = numbers.slice(-2)[0] * numbers.slice(-2)[1];
  if (minusNum > numbers[0] * numbers[1]) {
    return minusNum;
  }
  return numbers[0] * numbers[1];
}

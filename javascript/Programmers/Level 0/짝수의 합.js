function solution(n) {
  let evenSum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    }
  }
  return evenSum;
}

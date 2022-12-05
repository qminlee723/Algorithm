function solution(numbers) {
  // Array.sort()
  // a-b 오름차순(작은 것에서 큰 것)
  // b-a 내림차순(큰 것에서 작은 것)
  arr = numbers.sort((a, b) => {
    return b - a;
  });
  return arr[0] * arr[1];
}

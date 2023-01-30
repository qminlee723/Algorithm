function solution(array, n) {
  cnt = 0;
  array.forEach((number) => {
    if (number === n) {
      cnt += 1;
    }
  });
  return cnt;
}

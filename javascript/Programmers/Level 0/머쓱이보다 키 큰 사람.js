function solution(array, height) {
  cnt = 0;
  array.forEach((h) => {
    if (h > height) {
      cnt += 1;
    }
  });
  return cnt;
}

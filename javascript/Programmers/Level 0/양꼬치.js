function solution(n, k) {
  if (n < 10) {
    return n * 12000 + k * 2000;
  } else {
    free = parseInt(n / 10);
    return n * 12000 + (k - free) * 2000;
  }
}

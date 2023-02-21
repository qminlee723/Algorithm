function solution(a, b, n) {
  let coke = 0;
  while (n >= a) {
    coke += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return coke;
}

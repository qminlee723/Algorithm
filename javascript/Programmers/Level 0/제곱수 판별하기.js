function solution(n) {
  if (Math.pow(Math.floor(Math.sqrt(n)), 2) === n) {
    return 1;
  }
  return 2;
}

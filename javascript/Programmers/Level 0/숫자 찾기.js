function solution(num, k) {
  numbers = [...num.toString()];
  if (numbers.indexOf(k.toString()) !== -1) {
    return numbers.indexOf(k.toString()) + 1;
  }
  return -1;
}

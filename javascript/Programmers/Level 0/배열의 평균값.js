function solution(numbers) {
  const initialVal = 0;
  const len = numbers.length;
  // reduce함수 인자로 (누적값, 현재값)
  const sum = numbers.reduce((acc, currVal) => acc + currVal / len, initialVal);
  return sum;
}

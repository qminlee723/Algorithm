function solution(numbers, direction) {
  if (direction === "right") {
    const lastNum = numbers[numbers.length - 1];
    for (let i = numbers.length - 1; 0 < i; i--) {
      numbers[i] = numbers[i - 1];
    }
    numbers[0] = lastNum;
  } else {
    const firstNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = numbers[i + 1];
    }
    numbers[numbers.length - 1] = firstNum;
  }
  return numbers;
}

function solution(array) {
  const maxNum = Math.max(...array);
  const maxIndex = array.indexOf(maxNum);

  return [maxNum, maxIndex];
}

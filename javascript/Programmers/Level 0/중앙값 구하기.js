function solution(array) {
  let sortedArray = array.sort((a, b) => {
    return a - b;
  });
  const index = parseInt(array.length / 2) + (array.length % 2);
  var answer = sortedArray[index - 1];
  return answer;
}

function solution(number) {
  let triplet = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        triplet.push(number[i] + number[j] + number[k]);
      }
    }
  }
  let answer = triplet.filter((t) => t === 0).length;
  return answer;
}

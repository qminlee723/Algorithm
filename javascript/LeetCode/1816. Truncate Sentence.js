var truncateSentence = function (s, k) {
  let arr = s.split(" ");
  let answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(arr[i]);
  }
  return answer.join(" ");
};

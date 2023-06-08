var sortSentence = function (s) {
  let arr = s.split(" ");
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== NaN) {
        answer[arr[i][j]] = arr[i].slice(0, j);
      }
    }
  }
  return answer.join(" ").trim();
};

var chunk = function (arr, size) {
  let answer = [];
  let idx = 0;
  for (let i = 0; i < arr.length; i += size) {
    answer[idx] = arr.slice(i, i + size);
    idx++;
  }
  return answer;
};

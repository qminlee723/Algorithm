function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; ) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(num_list[i]);
      i++;
    }
    answer.push(arr);
  }

  return answer;
}

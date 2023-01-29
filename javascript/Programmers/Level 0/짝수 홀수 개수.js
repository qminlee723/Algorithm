function solution(num_list) {
  var answer = [];
  let evenNum = 0;
  let oddNum = 0;

  num_list.forEach((num) => {
    if (num % 2 === 0) {
      evenNum += 1;
    } else {
      oddNum += 1;
    }
    answer = [evenNum, oddNum];
  });
  return answer;
}

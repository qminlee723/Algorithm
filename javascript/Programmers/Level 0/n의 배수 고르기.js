function solution(n, numlist) {
  const answer = [];
  numlist.map((num) => {
    if (num % n === 0) {
      answer.push(num);
    }
  });
  return answer;
}

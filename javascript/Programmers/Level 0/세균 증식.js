function solution(n, t) {
  // new Array(t)하면 t 길이만큼의 Array가 나타남
  // fill 쓰면 n 으로 해당 Array가 채워짐
  // 누적이 나오면 reduce!
  var answer = new Array(t).fill(n).reduce((acc, currVal) => acc * 2, n);
  return answer;
}

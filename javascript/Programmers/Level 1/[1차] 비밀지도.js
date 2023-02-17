function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let bin = (arr1[i] | arr2[i]).toString(2);
    if (bin.length < n) {
      bin = " ".repeat(n - bin.length) + bin;
    }
    let sharp = bin.replaceAll(1, "#");
    answer.push(sharp.replaceAll(0, " "));
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/17681#qna

function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    // 2진수로 변환한 거 서로 더하는 부분
    let bin = (arr1[i] | arr2[i]).toString(2);
    // 저렇게 하는 경우 0이 앞에 오는 경우 공백으로 변해버림
    // 따라서 n만큼 숫자 채워주는 작업을 거침
    if (bin.length < n) {
      bin = " ".repeat(n - bin.length) + bin;
    }
    let sharp = bin.replaceAll(1, "#");
    answer.push(sharp.replaceAll(0, " "));
  }
  return answer;
}

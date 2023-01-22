// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
// 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(s) {
  let arr = s.toLowerCase().split(" ");
  // substring(indexStart)
  // substring(indexStart, indexEnd)
  // a.charAt(0).toUpperCase() : 첫 번째 글자 대문자
  // a.substring(1) : index 1부터 끝까지 잘라서 붙임
  var answer = arr
    .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
    .join(" ");
  return answer;
}

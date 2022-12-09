//문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// before.split('').sort() === after.split('').sort() 해서 배열끼리 비교했을때
// 계속 false가 나왔음

function solution(before, after) {
  if (before.split("").sort().join("") === after.split("").sort().join("")) {
    return 1;
  }
  return 0;
}

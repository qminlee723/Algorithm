// 문자열 my_string이 매개변수로 주어집니다.
// my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
// 연속된 수는 하나의 숫자로 간주합니다.

function solution(my_string) {
  let result = 0;

  for (let i = 0; i < my_string.length; i++) {
    let thisNum = "";

    // isNan
    while (!Number.isNaN(Number(my_string[i]))) {
      thisNum += my_string[i];
      i++;
    }
    result += Number(thisNum);
  }
  return result;
}

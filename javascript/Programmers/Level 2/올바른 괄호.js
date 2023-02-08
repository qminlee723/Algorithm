// 등호 vs 부등호
// 부등호가 훨씬 효율이 좋다.. 삼항연산자 문제가 아니었음
function solution(s) {
  var answer = true;
  var stack = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack += 1;
    } else if (s[i] === ")") {
      stack -= 1;
    }

    if (stack < 0) {
      answer = false;
      break;
    }
  }
  if (stack !== 0) {
    answer = false;
  }
  return answer;
}

function solution(s) {
  var stack = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? stack++ : stack--;
    if (stack < 0) {
      return false;
    }
  }
  return stack !== 0 ? false : true;
}

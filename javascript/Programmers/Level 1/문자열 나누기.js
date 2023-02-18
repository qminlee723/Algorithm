function solution(s) {
  var answer = 0;
  let base = "";
  let baseCount = 0;
  let otherCount = 0;

  // ab/ra/ca/da/br/aaaaaaa
  for (let i = 0; i < s.length; i++) {
    if (baseCount === 0) {
      base = s[i];
      baseCount += 1;
      if (i === s.length - 1) {
        answer += 1;
      }
    } else if (base === s[i]) {
      baseCount += 1;
      if (baseCount === otherCount) {
        answer += 1;
        baseCount = 0;
        otherCount = 0;
      } else if (i === s.length - 1) {
        answer += 1;
      }
    } else if (base !== s[i]) {
      otherCount += 1;
      if (baseCount === otherCount) {
        answer += 1;
        baseCount = 0;
        otherCount = 0;
      } else if (i === s.length - 1) {
        answer += 1;
      }
    }
  }

  return answer;
}

function solution(n) {
  var answer = 0;
  var oneCount = n
    .toString(2)
    .split("")
    .filter((x) => x === "1").length;

  for (let i = n + 1; i > n; i++) {
    var iCount = i
      .toString(2)
      .split("")
      .filter((x) => x === "1").length;
    if (oneCount === iCount) {
      return i;
      break;
    }
  }
}

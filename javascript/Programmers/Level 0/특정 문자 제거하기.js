function solution(my_string, letter) {
  var answer = [...my_string];
  return answer
    .map((a) => {
      if (a !== letter) {
        return a;
      }
    })
    .join("");
}

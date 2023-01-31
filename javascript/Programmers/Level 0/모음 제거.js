function solution(my_string) {
  var answer = [...my_string];
  return answer
    .map((a) => {
      if (a !== "a" && a !== "e" && a !== "i" && a !== "o" && a !== "u") {
        return a;
      }
    })
    .join("");
}

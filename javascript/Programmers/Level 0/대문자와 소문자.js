function solution(my_string) {
  const strings = [...my_string];
  let answer = strings
    .map((s) => {
      if (s === s.toUpperCase()) {
        return s.toLowerCase();
      } else {
        return s.toUpperCase();
      }
    })
    .join("");

  return answer;
}

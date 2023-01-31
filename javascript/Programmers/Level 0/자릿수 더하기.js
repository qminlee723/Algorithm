function solution(n) {
  const stringified = String(n);
  let strings = [...stringified];
  console.log(strings, stringified);
  let answer = 0;
  strings.map((s) => {
    answer += Number(s);
  });
  return answer;
}

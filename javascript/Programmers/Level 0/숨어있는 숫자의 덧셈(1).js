function solution(my_string) {
  var answer = [...my_string];
  const arr = [];
  let sum = 0;

  answer.map((a) => {
    if (
      a === "1" ||
      a === "2" ||
      a === "3" ||
      a === "4" ||
      a === "5" ||
      a === "6" ||
      a === "7" ||
      a === "8" ||
      a === "9"
    ) {
      arr.push(a);
    }
  });

  arr.forEach((a) => {
    sum += Number(a);
  });

  return sum;
}

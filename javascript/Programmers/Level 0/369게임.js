function solution(order) {
  strings = [...order.toString()];
  let sum = 0;
  strings.map((string) => {
    if (string !== "0" && string % 3 === 0) {
      sum += 1;
    }
  });
  return sum;
}

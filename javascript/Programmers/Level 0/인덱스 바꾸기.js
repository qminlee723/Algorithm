function solution(my_string, num1, num2) {
  const strings = [...my_string];
  const one = strings[num1];
  const two = strings[num2];
  strings[num1] = two;
  strings[num2] = one;
  return strings.join("");
}

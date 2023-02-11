function solution(phone_number) {
  let len = phone_number.length - 4;
  let answer = phone_number.slice(-4);
  let star = "*".repeat(len);
  return star + answer;
}

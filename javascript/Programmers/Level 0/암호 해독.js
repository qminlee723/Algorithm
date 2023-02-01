function solution(cipher, code) {
  cipherArr = [...cipher];
  var answer = [];
  for (let i = 1; i < cipher.length + 1; i++) {
    if (i % code === 0) {
      answer.push(cipherArr[i - 1]);
    }
  }
  return answer.join("");
}

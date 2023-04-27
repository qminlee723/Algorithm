function solution(n, words) {
  var answer = [];
  let temp = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1) {
      answer.push((i % n) + 1, Math.ceil((i + 1) / n));
      break;
    }

    if (i > 0) {
      if (words[i - 1].slice(-1) !== words[i].slice(0, 1)) {
        answer.push((i % n) + 1, Math.ceil((i + 1) / n));
        break;
      }

      if (temp.includes(words[i])) {
        answer.push((i % n) + 1, Math.ceil((i + 1) / n));
        break;
      }
    }

    temp.push(words[i]);
  }
  return answer.length === 0 ? (answer = [0, 0]) : answer;
}

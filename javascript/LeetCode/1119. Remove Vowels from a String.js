var removeVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      continue;
    } else {
      answer += s[i];
    }
  }
  return answer;
};

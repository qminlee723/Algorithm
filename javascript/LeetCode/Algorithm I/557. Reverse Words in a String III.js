var reverseWords = function (s) {
  let word = s.split(" ");

  for (let i = 0; i < word.length; i++) {
    let left = 0;
    let right = word[i].length - 1;
    let al = word[i].split("");

    while (left < right) {
      let temp = al[left];
      al[left] = al[right];
      al[right] = temp;
      left++;
      right--;
    }
    word[i] = al.join("");
  }

  return word.join(" ");
};

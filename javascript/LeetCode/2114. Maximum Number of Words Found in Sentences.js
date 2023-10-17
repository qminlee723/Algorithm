var mostWordsFound = function (sentences) {
  let max = 0;

  for (let sentence of sentences) {
    let len = sentence.split(" ").length;
    max = max > len ? max : len;
  }

  return max;
};

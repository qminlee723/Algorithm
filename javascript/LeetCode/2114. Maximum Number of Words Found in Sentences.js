var mostWordsFound = function (sentences) {
  let max = 0;

  for (let sentence of sentences) {
    let len = sentence.split(" ").length;
    if (max > len) {
      max = max;
    } else {
      max = len;
    }
  }

  return max;
};

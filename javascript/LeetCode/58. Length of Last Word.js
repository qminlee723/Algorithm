// Slice
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr.slice(-1)[0].length;
};

// lastIndexOf
var lengthOfLastWord = function (s) {
  let word = s.trim();
  return word.length - word.lastIndexOf(" ") - 1;
};

var isPalindrome = function (s) {
  // g = global, match all instances of the pattern in a string, not just one
  // i = case-insensitive (so, for example, /a/i will match the string "a" or "A".
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return str === str.split("").reverse().join("");
};

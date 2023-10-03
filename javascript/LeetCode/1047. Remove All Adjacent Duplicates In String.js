// Stack: Use less memory than Two Pointers method / and a bit faster
var removeDuplicates = function (s) {
  let stack = [];

  for (let char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

// Two Pointers
var removeDuplicates = function (s) {
  let left = 0;
  let right = left + 1;

  while (right < s.length) {
    if (s[left] === s[right]) {
      s = s.slice(0, left) + s.slice(right + 1, s.length);
      left = 0;
      right = left + 1;
    } else {
      left++;
      right++;
    }
  }
  return s;
};

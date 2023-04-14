// Two Pointers
var isPalindrome = function (x) {
  let arr = [...x.toString()];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

// js methods
var isPalindrome = function (x) {
  if (x.toString() === x.toString().split("").reverse().join("")) {
    return true;
  }
  return false;
};

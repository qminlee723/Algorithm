var strStr = function (haystack, needle) {
  let left = 0;
  let right = needle.length;

  while (left < haystack.length) {
    let temp = haystack.slice(left, right);

    if (temp === needle) {
      return left;
    } else {
      left++;
      right++;
    }
  }
  return -1;
};

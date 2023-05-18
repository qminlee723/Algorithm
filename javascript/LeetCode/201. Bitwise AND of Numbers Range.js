var rangeBitwiseAnd = function (left, right) {
  let i = 0;
  while (left != right) {
    i++;
    left = left >> 1;
    right = right >> 1;
  }
  return left << i;
};

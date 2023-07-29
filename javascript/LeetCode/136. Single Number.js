var singleNumber = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
};

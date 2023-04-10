var twoSum = function (nums, target) {
  let left = 0;
  let right = left + 1;

  while (left < nums.length) {
    if (nums[left] + nums[right] === target) {
      return [left, right];
    } else if (right === nums.length - 1) {
      left++;
      right = left + 1;
    } else {
      right++;
    }
  }
};

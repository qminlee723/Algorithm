var removeDuplicates = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  let left = 0; // pointer1
  let right = 0; // pointer2

  while (right < nums.length) {
    if (nums[left] != nums[right]) {
      left++;
      nums[left] = nums[right];
    }
    right++;
  }
  return left + 1;
};

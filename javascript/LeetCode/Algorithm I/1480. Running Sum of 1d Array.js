var runningSum = function (nums) {
  let prev = 0;
  let next = prev + 1;

  while (next < nums.length) {
    nums[next] += nums[prev];
    prev++;
    next++;
  }

  return nums;
};

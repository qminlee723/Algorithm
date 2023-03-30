var sortedSquares = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let idx = nums.length - 1;
  const answer = [];

  while (idx > -1) {
    if (Math.abs(nums[start]) < Math.abs(nums[end])) {
      answer[idx] = Math.pow(nums[end], 2);
      end--;
    } else {
      answer[idx] = Math.pow(nums[start], 2);
      start++;
    }
    idx--;
  }
  return answer;
};

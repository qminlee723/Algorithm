var leftRightDifference = function (nums) {
  let answer = [];
  let left = 0;
  let right = 0;

  for (let i = 0; i < nums.length; i++) {
    right += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    answer.push(Math.abs(left - right));
    left += nums[i];
  }
  return answer;
};

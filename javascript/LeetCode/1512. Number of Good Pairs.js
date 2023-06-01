var numIdenticalPairs = function (nums) {
  let map = new Map();
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      answer += map.get(nums[i]);
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  return answer;
};

// hashmap
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      // 더했을 때 타겟이 되는 숫자(즉, 타겟-현재숫자)가 해쉬맵에 있으면
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i); // key: 숫자, value: 인덱스
  }
};

// double for loop
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

// two pointer
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

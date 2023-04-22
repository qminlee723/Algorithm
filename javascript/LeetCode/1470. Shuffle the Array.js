// two pointers
var shuffle = function (nums, n) {
  let left = 0;
  let right = n;
  let answer = [];

  while (left < right && right < nums.length) {
    answer.push(nums[left]);
    answer.push(nums[right]);
    left++;
    right++;
  }

  return answer;
};

// map
var shuffle = function (nums, n) {
  let map = new Map();
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(i % n)) {
      map.get(i % n).push(nums[i]);
    } else {
      map.set(i % n, [nums[i]]);
    }
  }

  for (const [key, value] of map) {
    for (const v of value) {
      answer.push(v);
    }
  }
  return answer;
};

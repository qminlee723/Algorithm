// Set (length)
var containsDuplicate = function (nums) {
  let set = new Set([...nums]);
  return nums.length === set.size ? false : true;
};

// Set
var containsDuplicate = function (nums) {
  let set = new Set();
  let answer = false;
  nums.forEach((num) => {
    if (set.has(num)) {
      answer = true;
    } else {
      set.add(num);
    }
  });
  return answer;
};

// Two Pointers
var containsDuplicate = function (nums) {
  let left = 0;
  let right = 1;

  while (left < right && left < nums.length && right < nums.length) {
    if (nums[left] === nums[right]) {
      return true;
    }
    right++;
    if (right > nums.length - 1) {
      left++;
      right = left + 1;
    }
  }
  return false;
};

// double for loops(worst)
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

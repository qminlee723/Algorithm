// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// iteration
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

// recursion
var searchInsert = function (nums, target) {
  const recursion = function (nums, target, start, end) {
    if (start > end) return start;
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) return recursion(nums, target, mid + 1, end);
    else return recursion(nums, target, start, mid - 1);
  };

  return recursion(nums, target, 0, nums.length);
};

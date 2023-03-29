// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// var search = function (nums, target) {
//   return nums.indexOf(target);
// };

var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let index = 0;

  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      index = mid;
      return index;
    } else if (target > nums[mid]) {
      start = mid + 1;
      index = start + 1;
    } else {
      end = mid - 1;
      index = end + 1;
    }
  }
  return -1;
};

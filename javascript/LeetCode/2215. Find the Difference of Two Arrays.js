var findDifference = function (nums1, nums2) {
  let num1 = [];
  let num2 = [];
  nums1.forEach((num) => {
    if (nums2.includes(num)) {
    } else if (!num2.includes(num)) {
      num2.push(num);
    }
  });

  nums2.forEach((num) => {
    if (nums1.includes(num)) {
    } else if (!num1.includes(num)) {
      num1.push(num);
    }
  });
  return [num2, num1];
};

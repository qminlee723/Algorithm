var reverse = function (x) {
  let arr = [...x.toString()];
  let left = 0;
  let right = arr.length - 1;
  let maxNum = 2 ** 31;

  while (left <= right) {
    if (arr[left] === "-") {
      left++;
    }

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return Math.abs(arr.join("")) > maxNum ? 0 : arr.join("");
};

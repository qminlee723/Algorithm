var countElements = function (arr) {
  let xCount = 0;
  let set = new Set(arr);

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + 1)) {
      xCount++;
    }
  }

  return xCount;
};

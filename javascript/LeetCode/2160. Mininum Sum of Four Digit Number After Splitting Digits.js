var minimumSum = function (num) {
  let arr = [...num.toString()].sort();
  let num1 = "";
  let num2 = "";

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      num1 += arr[i];
    } else {
      num2 += arr[i];
    }
  }

  return Number(num1) + Number(num2);
};

var climbStairs = function (n) {
  let firstStep = 1;
  let secondStep = 1;
  let thirdStep = 0;

  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }

  return n < 2 ? 1 : thirdStep;
};

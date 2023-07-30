var maximumWealth = function (accounts) {
  let max = 0;
  accounts.forEach((account) => {
    let sum = 0;
    account.forEach((acc) => {
      sum += acc;
    });
    if (sum > max) {
      max = sum;
    }
  });
  return max;
};

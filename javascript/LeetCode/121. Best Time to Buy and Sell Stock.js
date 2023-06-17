var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else {
      profit = prices[i] - min;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};

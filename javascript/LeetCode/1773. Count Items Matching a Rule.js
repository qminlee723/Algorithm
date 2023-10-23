var countMatches = function (items, ruleKey, ruleValue) {
  let ruleKeys = ["type", "color", "name"];
  let idx = ruleKeys.indexOf(ruleKey);

  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i][idx] === ruleValue) {
      count++;
    }
  }
  return count;
};

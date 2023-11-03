var isHappy = function (n) {
  const checked = [];
  while (n !== 1) {
    if (checked.includes(n)) return false;
    checked.push(n);
    n = n
      .toString()
      .split("")
      .map((i) => i ** 2)
      .reduce((sum, i) => sum + i, 0);
  }
  return true;
};

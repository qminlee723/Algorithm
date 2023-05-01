var average = function (salary) {
  salary.sort((a, b) => a - b);
  salary.pop();
  salary.shift();
  return salary.reduce((acc, curr) => acc + curr, 0) / salary.length;
};

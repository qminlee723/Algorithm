function solution(sides) {
  const longest = Math.max(...sides);
  let sum = 0;
  sides.forEach((side) => {
    sum += side;
  });
  if (sum - longest > longest) {
    return 1;
  }
  return 2;
}

function solution(sides) {
  const long = Math.max(...sides);
  const longIndex = sides.indexOf(long);
  const shortIndex = longIndex === 0 ? 1 : 0;

  const longSide = sides[longIndex];
  const shortSide = sides[shortIndex];

  let ans = longSide - (longSide - shortSide + 1) + 1;

  ans += longSide + shortSide - longSide - 1;

  return ans;
}

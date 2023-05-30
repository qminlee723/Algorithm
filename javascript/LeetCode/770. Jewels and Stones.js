var numJewelsInStones = function (jewels, stones) {
  let set = new Set(jewels);
  return stones.split("").reduce((res, stone) => res + set.has(stone), 0);
};

var summaryRanges = function (nums) {
  let answer = [];
  let track = 0;
  let i = 0;
  while (track < nums.length) {
    let str = nums[track].toString();
    while (track + 1 < nums.length && nums[track] + 1 === nums[track + 1]) {
      str = nums[i] + "->" + nums[track + 1];
      track++;
    }

    answer.push(str);
    track++;
    i = track;
  }

  return answer;
};

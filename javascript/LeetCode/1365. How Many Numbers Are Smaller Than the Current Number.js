var smallerNumbersThanCurrent = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let j = 0;
    let cnt = 0;
    while (j < nums.length) {
      if (nums[j] < nums[i]) {
        cnt++;
      }
      j++;
    }
    answer.push(cnt);
  }
  return answer;
};

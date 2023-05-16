var permute = function (nums) {
  let answer = [];
  dfs(nums, [], answer);
  return answer;
};

let dfs = function (nums, list, answer) {
  if (list.length === nums.length) {
    answer.push([...list]);
  }

  for (let num of nums) {
    if (list.includes(num)) continue;
    list.push(num);
    dfs(nums, list, answer);
    list.pop();
  }
};

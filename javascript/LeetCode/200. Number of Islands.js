var numIslands = function (grid) {
  let answer = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "1") {
        answer++;
        dfs(grid, r, c);
      }
    }
  }
  return answer;
};

var dfs = function (grid, r, c) {
  if (
    r < 0 ||
    r > grid.length - 1 ||
    c < 0 ||
    c > grid[0].length - 1 ||
    grid[r][c] === "v" ||
    grid[r][c] === "0"
  )
    return;
  grid[r][c] = "v";
  dfs(grid, r + 1, c);
  dfs(grid, r - 1, c);
  dfs(grid, r, c + 1);
  dfs(grid, r, c - 1);
};

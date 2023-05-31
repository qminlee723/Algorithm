// 아직 테케 안돌아가는게 있는데 ㅠㅠ 오늘은 여기까지
var solve = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        board[i][j] === "O" &&
        (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length)
      ) {
        dfs(board, i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "V") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }
  return board;
};

var dfs = function (board, r, c) {
  if (
    r < 0 ||
    c < 0 ||
    r >= board.length ||
    c >= board[0].length ||
    board[r][c] === "X" ||
    board[r][c] === "V"
  )
    return;

  // visited
  board[r][c] = "V";

  dfs(board, r + 1, c);
  dfs(board, r - 1, c);
  dfs(board, r, c + 1);
  dfs(board, r, c - 1);
};

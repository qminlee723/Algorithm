// RECURSIVE DFS
var floodFill = (image, sr, sc, color) => {
  if (image[sr][sc] === color) return image;
  fill(image, sr, sc, color, image[sr][sc]);
  return image;
};

var fill = (image, sr, sc, color, currPos) => {
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) return;
  if (currPos !== image[sr][sc]) return;

  image[sr][sc] = color;
  fill(image, sr + 1, sc, color, currPos);
  fill(image, sr - 1, sc, color, currPos);
  fill(image, sr, sc + 1, color, currPos);
  fill(image, sr, sc - 1, color, currPos);
};

// DFS USING STACK
const floodFill = (image, sr, sc, color) => {
  const stack = [[sr, sc]];
  const Currcolor = image[sr][sc];
  while (!!stack.length) {
    const [r, c] = stack.pop();
    if (image[r][c] === color) continue;
    if (image[r + 1]?.[c] === Currcolor) stack.push([r + 1, c]);
    if (image[r - 1]?.[c] === Currcolor) stack.push([r - 1, c]);
    if (image[r][c + 1] === Currcolor) stack.push([r, c + 1]);
    if (image[r][c - 1] === Currcolor) stack.push([r, c - 1]);
    image[r][c] = color;
  }
  return image;
};

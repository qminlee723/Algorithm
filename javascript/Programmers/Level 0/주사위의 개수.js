function solution(box, n) {
  const horizontal = parseInt(box[0] / n);
  const vertical = parseInt(box[1] / n);
  const height = parseInt(box[2] / n);

  return horizontal * vertical * height;
}

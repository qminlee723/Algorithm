function solution(sizes) {
  var answer = 0;
  let widthArr = [];
  let heightArr = [];
  sizes.forEach((size) => {
    if (size[0] < size[1]) {
      size.reverse();
    }
    widthArr.push(size[0]);
    heightArr.push(size[1]);
  });

  let maxWidth = Math.max(...widthArr);
  let maxHeight = Math.max(...heightArr);

  return maxWidth * maxHeight;
}

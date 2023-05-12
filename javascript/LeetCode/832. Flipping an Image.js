var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let left = 0;
    let right = image[i].length - 1;
    while (left <= right) {
      if (left === right) {
        image[i][left] = image[i][left] === 0 ? 1 : 0;
      } else {
        let temp = image[i][left];
        image[i][left] = image[i][right];
        image[i][right] = temp;

        if (image[i][left] === 0) {
          image[i][left] = 1;
        } else {
          image[i][left] = 0;
        }

        if (image[i][right] === 0) {
          image[i][right] = 1;
        } else {
          image[i][right] = 0;
        }
      }
      left++;
      right--;
    }
  }
  return image;
};

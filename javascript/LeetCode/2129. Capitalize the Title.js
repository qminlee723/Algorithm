var capitalizeTitle = function (title) {
  let arr = title.toLowerCase().split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 2) {
    } else {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(" ");
};

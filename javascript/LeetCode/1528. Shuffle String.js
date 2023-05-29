var restoreString = function (s, indices) {
  let str = new Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    str[indices[i]] = s[i];
  }
  return str.join("");
};

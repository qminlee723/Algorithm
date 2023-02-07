function solution(s) {
  let pCount = 0;
  let yCount = 0;
  const temp = s.toLowerCase();

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "p") {
      pCount += 1;
    } else if (temp[i] === "y") {
      yCount += 1;
    }
  }
  if (pCount === yCount) {
    return true;
  }
  return false;
}

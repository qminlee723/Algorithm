function solution(x) {
  let sumOfEach = 0;
  for (let i = 0; i < x.toString().length; i++) {
    sumOfEach += Number(x.toString()[i]);
  }
  if (x % sumOfEach === 0) {
    return true;
  } else {
    return false;
  }
}

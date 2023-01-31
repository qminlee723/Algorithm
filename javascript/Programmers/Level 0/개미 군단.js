function solution(hp) {
  let total = 0;
  if (hp % 5 === 0) {
    total = hp / 5;
  } else if (hp % 5 === 1) {
    total = parseInt(hp / 5) + 1;
  } else if (hp % 5 === 2) {
    total = parseInt(hp / 5) + 2;
  } else if (hp % 5 === 3) {
    total = parseInt(hp / 5) + 1;
  } else if (hp % 5 === 4) {
    total = parseInt(hp / 5) + 2;
  }
  return total;
}

function solution(number, limit, power) {
  let armWeight = [];

  // number들의 약수갯수 구하기
  for (let i = 1; i < number + 1; i++) {
    let divisorCnt = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisorCnt += 1;
      }
    }
    armWeight.push(divisorCnt + 1);
  }

  // limit보다 큰지 판별하기
  // 크면 power, 아니면 number약수갯수가 철 무게
  let answer = armWeight.map((arm) => {
    if (arm > limit) {
      return power;
    } else {
      return arm;
    }
  });
  return answer.reduce((acc, curr) => acc + curr, 0);
}

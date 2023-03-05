function solution(X, Y) {
  // 길이 10짜리, 값 0으로 채워진 Array 생성
  const numX = new Array(10).fill(0);
  const numY = new Array(10).fill(0);

  let answer = [];

  // numX Array에 각 숫자 카운트
  for (let i = 0; i < X.length; i++) {
    numX[X[i]]++;
  }

  // numY Array에 각 숫자 카운트
  for (let i = 0; i < Y.length; i++) {
    numY[Y[i]]++;
  }

  // numX와 numY 를 10번씩 돌면서 겹치는 부분이 있는지 확인하기
  for (let i = 0; i < 10; i++) {
    if (numX[i] > 0 && numY[i] > 0) {
      const count = Math.min(numX[i], numY[i]);
      for (let j = 0; j < count; j++) {
        answer.push(i);
      }
    }
  }

  if (answer.length === 0) {
    return "-1";
  } else if (answer.join("") == 0) {
    return "0";
  } else {
    return answer.sort((a, b) => b - a).join("");
  }
}

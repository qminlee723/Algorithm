// 수포자는 수학을 포기한 사람의 준말입니다.
// 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answers) {
  var answer = [];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    // i % one.length 는 answers 배열의 길이가 수포자 1, 2, 3 반복배열의 길이보다 길 경우에도 계속해서 돌 수 있도록 하는 것임
    if (answers[i] === one[i % one.length]) {
      score[0] += 1;
    }
  }

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === two[i % two.length]) {
      score[1] += 1;
    }
  }

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === three[i % three.length]) {
      score[2] += 1;
    }
  }

  // 가장 많이 맞춘 애들
  for (let i = 0; i < score.length + 1; i++) {
    if (score[i] === Math.max(...score)) {
      answer.push(i + 1);
    }
  }
  return answer;
}

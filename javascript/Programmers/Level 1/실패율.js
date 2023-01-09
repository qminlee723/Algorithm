// 실패율은 다음과 같이 정의한다.
// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N,
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

function solution(N, stages) {
  var answer = [];
  let players = stages.length;
  for (let i = 1; i < N + 2; i++) {
    // 스테이지는 도달했으나 클리어 하지 못한 사람의 수
    let notPassed = stages.filter((e) => e === i).length;
    // 실패율
    let failRate = notPassed / players;
    players -= notPassed;
    answer.push([i, failRate]);
  }

  // 마지막 단계 + 1 은 통과자들을 나타내는 것이므로 빼 줌
  answer.pop();

  // sort의 1번째 값을 기준으로 정렬하여, 0번째 값을 가지는 배열을 새로 리턴
  answer = answer.sort((a, b) => b[1] - a[1]).map((a) => a[0]);

  return answer;
}

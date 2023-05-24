// 시간초과(배열)
function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    let idx = players.indexOf(callings[i]);
    let temp = players[idx - 1];
    players[idx - 1] = players[idx];
    players[idx] = temp;
  }
  return players;
}

// 통과(해쉬맵)
function solution(players, callings) {
  const map = new Map();

  players.forEach((name, idx) => {
    map.set(name, idx);
  });

  for (let i = 0; i < callings.length; i++) {
    let idx = map.get(callings[i]); // 지금 사람 등수
    let front = players[idx - 1]; // 지금 사람 바로 앞에 있는 사람
    let temp = players[idx];
    players[idx] = players[idx - 1];
    players[idx - 1] = temp;

    map.set(callings[i], map.get(callings[i]) - 1);
    map.set(front, map.get(callings[i]) + 1);
  }

  return players;
}

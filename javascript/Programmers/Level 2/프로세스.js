function solution(priorities, location) {
  var answer = 0;
  let priorIdx = [];
  let priorMax = Math.max(...priorities);
  let pos_map = [];

  for (let i = 0; i < priorities.length; i++) {
    priorIdx.push(i);
  }

  while (priorities.length != 0) {
    if (priorities[0] < priorMax) {
      priorities.push(priorities.shift());
      priorIdx.push(priorIdx.shift());
    } else {
      answer++;
      priorities.shift();

      if (priorIdx.shift() == location) {
        return answer;
      } else {
        priorMax = Math.max(...priorities);
      }
    }
  }
}

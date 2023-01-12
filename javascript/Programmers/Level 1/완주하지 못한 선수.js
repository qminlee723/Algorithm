function solution(participant, completion) {
  participant.sort(); // string sort 할 땐.. 내림차순 오름차순 아님..
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

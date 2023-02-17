function solution(cards1, cards2, goal) {
  var answer = [];
  for (let i = 0; i < goal.length; i++) {
    if (cards1.includes(goal[i])) {
      answer.push(cards1.shift());
    } else if (cards2.includes(goal[i])) {
      answer.push(cards2.shift());
    }
  }
  if (answer.join("") === goal.join("")) {
    return "Yes";
  } else {
    return "No";
  }
}

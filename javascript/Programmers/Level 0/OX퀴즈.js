function solution(quiz) {
  return quiz.map((v) => {
    const [formula, answer] = v.split("=");
    return eval(formula) === +answer ? "O" : "X";
  });
}

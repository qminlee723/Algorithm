function solution(survey, choices) {
  const mbti = {};
  const characters = ["R", "T", "C", "F", "J", "M", "A", "N"];

  // key: ch value:0
  characters.forEach((ch) => {
    mbti[ch] = 0;
  });

  let answer = [];
  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    let status = "";
    if (choice > 4) {
      status = agree;
    } else {
      status = disagree;
    }

    mbti[status] += Math.abs(choice - 4);
  });

  if (mbti["T"] > mbti["R"]) {
    answer.push("T");
  } else {
    answer.push("R");
  }

  if (mbti["F"] > mbti["C"]) {
    answer.push("F");
  } else {
    answer.push("C");
  }

  if (mbti["M"] > mbti["J"]) {
    answer.push("M");
  } else {
    answer.push("J");
  }

  if (mbti["N"] > mbti["A"]) {
    answer.push("N");
  } else {
    answer.push("A");
  }

  return answer.join("");
}

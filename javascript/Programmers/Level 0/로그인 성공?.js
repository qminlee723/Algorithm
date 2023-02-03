function solution(id_pw, db) {
  let answer = "";

  db.forEach((data) => {
    if (data[0] === id_pw[0] && data[1] === id_pw[1]) {
      answer = "login";
    } else if (data[0] === id_pw[0] && data[1] !== id_pw[1]) {
      answer = "wrong pw";
    } else if (data[0] !== id_pw[0] && data[1] !== id_pw[1]) {
      answer = "fail";
    }
  });

  return answer;
}

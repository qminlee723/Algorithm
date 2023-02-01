function solution(rsp) {
  rspArr = [...rsp];
  return rspArr
    .map((a) => {
      if (a === "2") {
        return "0";
      } else if (a === "0") {
        return "5";
      }
      return "2";
    })
    .join("");
}

function solution(ingredient) {
  let burger = [];
  let cnt = 0;

  ingredient.forEach((i) => {
    burger.push(i);
    if (burger.length >= 4) {
      if (burger.slice(-4).join("") === "1231") {
        burger.pop();
        burger.pop();
        burger.pop();
        burger.pop();
        cnt++;
      }
    }
  });

  return cnt;
}

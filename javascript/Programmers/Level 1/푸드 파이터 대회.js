function solution(food) {
  let left = "";

  for (let i = 0; i < food.length; i++) {
    // Math.floor 내림
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      left += i;
    }
  }

  return left + "0" + left.split("").reverse().join("");
}

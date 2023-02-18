function solution(babbling) {
  const can = ["aya", "ye", "woo", "ma"];
  let count = 0;

  babbling.forEach((babb) => {
    for (let i = 0; i < 4; i++) {
      // 2번 반복시 못함
      if (babb.includes(can[i].repeat(2))) {
        break;
      }

      babb = babb.split(can[i]).join("*");
    }

    console.log(babb);
    if (babb.split("*").join("").length === 0) {
      count += 1;
    }
  });

  return count;
}

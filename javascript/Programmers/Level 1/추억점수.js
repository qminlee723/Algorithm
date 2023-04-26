function solution(name, yearning, photo) {
  var answer = [];
  let map = new Map();

  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearning[i]);
  }

  photo.forEach((p) => {
    let sum = 0;
    for (let j = 0; j < p.length; j++) {
      if (map.has(p[j])) {
        sum += map.get(p[j]);
      }
    }
    answer.push(sum);
  });
  return answer;
}

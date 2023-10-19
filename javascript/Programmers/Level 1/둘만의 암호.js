function solution(s, skip, index) {
  let answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = [...alphabet];

  s = s.split("");
  skip = skip.split("");

  for (let i = 0; i < skip.length; i++) {
    arr = arr.filter((e) => e !== skip[i]); // skip에 있는 애들을 포함하지 않은 arr
  }

  for (let j = 0; j < s.length; j++) {
    let idx = 0;
    idx = arr.indexOf(s[j]);
    idx += index;

    if (idx > arr.length - 1) {
      idx %= arr.length;
    }

    answer += arr[idx];
  }

  return answer;
}

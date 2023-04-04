var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  // s의 길이가 0이면 0을, 1이면 1을 반환한다
  if (s.length === 0) {
    return 0;
  } else if (s.length === 1) {
    return 1;
  }

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      //2. set에 다음 알파벳이 있다면, 즉 중복된다면
      set.delete(s[left]); //젤 왼쪽에 있는 값을 지워주고
      left++; // left 인덱스를 올려줍니다
    }
    set.add(s[i]); //1. set에 알파벳 하나씩을 순서대로 넣기
    maxSize = Math.max(maxSize, i - left + 1); //최댓값구하기: i, left 둘 다 인덱스라 1을 더해줌
  }
  return maxSize;
};

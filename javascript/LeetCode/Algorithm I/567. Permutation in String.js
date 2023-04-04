//  s1 = "ab", s2 = "eidbaooo"
var checkInclusion = function (s1, s2) {
  // s1이 s2보다 긴 경우 s2에 포함될 경우가 없으므로 false반환
  if (s1.length > s2.length) return false;

  // s1에 있는 알파벳 숫자 카운트(key: 알파벳, value: 개수)해서 집어넣기
  // for문을 지나면 charCount={a: 1, b:1}가 됨 (s1에서의 string 개수)
  let charCount = new Set();
  for (let i = 0; i < s1.length; i++) {
    if (charCount[s1[i]] === undefined) {
      // 처음에는 charCount 비어있을 거니까(undefined)
      charCount[s1[i]] = 0; // 0을 일단 할당해줌
    }
    charCount[s1[i]] += 1;
  }

  // console.log(charCount) // Set(0) { a: 1, b: 1 }

  // Sliding Window
  let left = 0; // 윈도우 왼쪽 끝 인덱스
  let right = 0; // 윈도우 오른쪽 끝 인덱스

  // s1이 몇 자인지 확인할 때 쓰는 변수. s2에서 s1에 해당하는 캐릭터를 만나면 하나씩 지울거임
  // 즉 0이 되면 s1의 문자열들이 s2에서 연속적으로 발견된다는 뜻! (즉, true 반환)
  let charLength = s1.length;

  // s2탐색 시작!
  // 윈도우 오른쪽 인덱스는 s2의 길이보다 작아야 함
  while (right < s2.length) {
    // s2[right]이 chraCount에 key로서 존재할 때
    if (charCount[s2[right]] > 0) {
      charLength--; // 빼주자! 이제 남은 길이만 없애면 true 리턴가능
    }
    charCount[s2[right]]--; // 존재한다면 1 빼주고, 존재하지 않으면 NaN(undefined-1 이므로)
    right++; // 오른쪽 인덱스 오른쪽으로 1 옮겨주기

    // charLength가 0이면 true 반환
    if (charLength === 0) return true;

    // s1.length는 고정된 윈도우(window)의 크기.
    // right-left가 목표한 윈도우의 크기일 때,
    if (right - left === s1.length) {
      // s2[left]가 charCount에 키로서 존재했다면
      // charLength를 하나 올리자
      // 왜냐하면 그 존재하는 'left'는 이제 우리의 윈도우 바깥에 위치하게 될 거니까
      if (charCount[s2[left]] >= 0) {
        charLength++;
      }
      charCount[s2[left]]++; // 키로서 존재하지 않으면 NaN, 존재했다면 1 더해줄 것
      left++; // 왼쪽 인덱스 오른쪽으로 1 옮겨주기
    }
  }
  return false;
};

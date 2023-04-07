function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n; // 걸릴 수 있는 최대 시간: 느린애시간 * 사람수 = 60

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = times.reduce(
      (acc, currVal) => acc + Math.floor(mid / currVal),
      0
    );

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

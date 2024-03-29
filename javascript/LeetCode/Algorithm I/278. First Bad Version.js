// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check.
// Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
// which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad.
// Implement a function to find the first bad version. You should minimize the number of calls to the API.

// iteration
var solution = function (isBadVersion) {
  return function (n) {
    let start = 0;
    let end = n; // Bad
    while (start + 1 < end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid; // true면 왼쪽 확인
      } else {
        start = mid; // false면 오른쪽 확인
      }
    }
    return end;
  };
};

// recursion
var solution = function (isBadVersion) {
  // 이진 탐색 할 재귀함수 새로 설정
  const recursion = (start, end) => {
    if (isBadVersion(start) && isBadVersion(end)) return start;
    const mid = Math.floor((start + end) / 2);
    if (isBadVersion(mid)) return recursion(start + 1, mid);
    else return recursion(mid + 1, end);
  };

  return function (n) {
    return recursion(1, n);
  };
};

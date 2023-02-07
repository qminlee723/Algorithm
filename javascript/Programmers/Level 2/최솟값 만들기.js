function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((acc, currVal, currIndex) => acc + currVal * B[currIndex], 0);
}

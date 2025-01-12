class Solution {
    public int solution(int n) {
        int answer = 0;
        
        if (n % 2 == 1) {
            // 포문도 아직 못돌린다 i+2 했다가 고침 뭐냐 이 언어는
            for (int i = 1; i <= n; i+=2) {
                answer += i;
            }
        } else {
            for (int i = 0; i <= n; i+=2) {
                
                // 처음에 i**2 함.. 그런데 자바는 **이 아니라 Math.pow()를 써야한다
                // Math.pow(i, 2) 요걸 몰라서 i*i 했는데 이게 더 빠르다고 함 개꿀
                answer += i*i;
            }
        }
        
        return answer;
    }
}
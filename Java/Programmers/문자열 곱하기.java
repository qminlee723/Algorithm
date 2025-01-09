class Solution {
    public String solution(String my_string, int k) {
        String answer = "";
        for (int i = 0; i < k; i++) {
            answer += my_string;
        }

        // repeat을 쓰는 방법도 있었다
        // answer = my_string.repeat(k);
        
        return answer;
    }
}
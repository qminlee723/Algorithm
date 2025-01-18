class Solution {
    public int solution(String str1, String str2) {
        int answer = 0;
        
        // 문자열.contains(): str1이 str2에 포함되어 있는지 확인
        if (str2.contains(str1)) {
            answer = 1;
        }
        return answer;
    }
}
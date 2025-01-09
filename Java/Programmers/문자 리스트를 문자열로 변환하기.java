class Solution {
    public String solution(String[] arr) {
        String answer = "";
        
        // 왜 길이 메서드가 자료형별로 다른건데ㅠㅠ
        for (int i = 0; i < arr.length; i++) {
            answer += arr[i];
        }
        return answer;
    }
}
class Solution {
    public int solution(int a, int b) {
        
        String aFirst = a + "" + b + "";
        String aSecond = b + "" + a + "";
    
        int first = Integer.parseInt(aFirst);
        int second = Integer.parseInt(aSecond);
        
        if (first > second) {
            return first;
        } else {
            return second;
        }
    }
}
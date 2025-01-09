class Solution {
    public int solution(int a, int b) {
        
        String concatStr = a + "" + b + "";
        int multiply = 2 * a * b;
        int concat = Integer.parseInt(concatStr);
        
        if (concat > multiply) {
            return concat;
        } else {
            return multiply;
        }
    }
}
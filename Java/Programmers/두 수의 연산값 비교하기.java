class Solution {
    public int solution(int a, int b) {
        
        String concatStr = a + "" + b + "";
        // a + "" + b 해도 됨

        int multiply = 2 * a * b;
        int concat = Integer.parseInt(concatStr);
        
        if (concat > multiply) {
            return concat;
        } else {
            return multiply;
        }
    }
}
class Solution {
    public int solution(int number, int n, int m) {
    
        // 어떤 사람들은 변수에 담아서 리턴하고, 어떤 사람들은 바로 리턴하는데
        // 뭐가 다른지 궁금해서 지피티한테 물어봤더니
        // 성능차이는 거의 없고 그냥 가독성 문제라 카더라
        return number % (n*m) == 0 ? 1 : 0;

    }
}
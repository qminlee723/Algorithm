
// 아니 자바 이 미친놈은 배열이 동적으로 안늘어나?
// 지피티놈은 더 어렵게 알려줬는데 역시 다른 사람의 풀이를 보니까 간단한게 있었다
// ArratList를 쓰면 된다고 한다


// 1번째 풀이
class Solution {
    public ArrayList<Integer> solution(int[] arr) {
        ArrayList<Integer> answer = new ArrayList<Integer>(); // ArrayList 생성

        for (int i=0; i<arr.length; i++) {
            for (int j=0; j<arr[i]; j++) {
                answer.add(arr[i]); // add() 
            }
        }
        return answer;
    }
}


// 2번째 풀이
class Solution {
    public int[] solution(int[] arr) {
        int[] answer = {};

        int sum = 0;

        for(int i=0; i<arr.length; i++) {
            sum += arr[i];    
        }

        answer = new int[sum];

        int idx = 0;

        for(int i=0; i<arr.length; i++) {
            for(int j=0; j<arr[i]; j++) {
                answer[idx++] = arr[i];
            }
        }

        return answer;
    }
}
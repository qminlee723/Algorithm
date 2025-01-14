import java.io.*;
import java.util.*;

public class BOJ_1654 {
    public static void main(String[] args) throws IOException {
        System.setIn(new FileInputStream("example.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 첫 번째 줄 입력
        String[] firstLine = br.readLine().split(" ");
        int K = Integer.parseInt(firstLine[0]); // 랜선 개수
        int N = Integer.parseInt(firstLine[1]); // 필요한 랜선 개수

        // K개 랜선 길이 입력
        long[] numbers = new long[K];
        for (int i = 0; i < K; i++) {
            numbers[i] = Long.parseLong(br.readLine());
        }

        // 최대값 찾기
        long max = numbers[0];
        for (int i = 1; i < K; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }

        // 이진탐색 
        long left = 1; // 최소 길이
        long right = max; // 최대 길이
        long answer = 0;

        while (left <= right) {
            long mid = (left + right) / 2;
            long sum = 0;

            // mid 길이로 만들 수 있는 랜선 개수 계산
            for (long num : numbers) {
                sum += num / mid;
            }

            // 조건에 따라 범위 조정
            if (sum >= N) {
                answer = mid; // 가능한 길이 저장
                left = mid + 1; // 더 긴 길이 탐색
            } else {
                right = mid - 1; // 더 짧은 길이 탐색
            }
        }

        // 결과 출력
        System.out.println(answer);
    }
}



// import java.io.*;
// import java.util.*;

// public class BOJ_1654 {
//     public static void main(String[] args) throws IOException {
//         System.setIn(new FileInputStream("example.txt"));
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력을 받기 위한 BufferedReader 생성
        
//         // 첫 번째 줄 입력받기
//         String[] firstLine = br.readLine().split(" ");
//         int K = Integer.parseInt(firstLine[0]); // 첫 번째 값
//         int N = Integer.parseInt(firstLine[1]); // 두 번째 값
        
//         // N개의 줄 입력받기
//         int[] numbers = new int[K];
//         for (int i = 0; i < K; i++) {
//             numbers[i] = Integer.parseInt(br.readLine());
//         }

//         // 다 더해서 N으로 나눈 값(N이 될 수 있는 최댓값) 구하기
//         int max = 0;
//         for (int i = 0; i < K; i++) {
//             max += numbers[i];
//         }

//         while (true) {
//             int sum = 0;
//             for (int i = 0; i < K; i++) {
//                 sum += numbers[i] / max;
//             }
//             if (sum >= N) {
//                 System.out.println(max);
//                 break;
//             }
//             max--;
//         }
//     }}


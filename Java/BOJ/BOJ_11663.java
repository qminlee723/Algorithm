import java.io.*;
import java.util.*;

public class BOJ_11663 {
    public static void main(String[] args) throws IOException {
        System.setIn(new FileInputStream("example.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 첫 번째 줄 입력
        String[] firstLine = br.readLine().split(" ");
        int N = Integer.parseInt(firstLine[0]); // 점 개수
        int M = Integer.parseInt(firstLine[1]); // 선분 개수

        // N개 좌표 입력
        int[] numbers = new int[N];
        String [] thirdLine = br.readLine().split(" ");
        for (int i = 0; i < N; i++) {
            numbers[i] = Integer.parseInt(thirdLine[i]);
        }

        // 배열 정렬
        Arrays.sort(numbers);

        // M개 선분의 쌍 입력
        for (int i = 0; i < M; i++) {
          String[] secondLine = br.readLine().split(" ");
          int target1 = Integer.parseInt(secondLine[0]);
          int target2 = Integer.parseInt(secondLine[1]);

          // target1 index
          int target1Idx = 0;
          int target2Idx = 0;

          // target 1 이진탐색
          int left = 0;
          int right = N - 1;

          while (left <= right) {
              int mid = (left + right) / 2;

              if (numbers[mid] < target1) {
                  left = mid + 1;
              } else {
                  right = mid - 1;
              }
              target1Idx = left;
          }

          // target 2 이진탐색
          int left2 = 0;
          int right2 = N - 1;

          while (left2 <= right2) {
              int mid = (left2 + right2) / 2;

              if (numbers[mid] > target2) {
                  right2 = mid - 1;
              } else {
                  left2 = mid + 1;
              }
              target2Idx = left2;
          }

          System.out.println(target2Idx - target1Idx);
        }


    }
}
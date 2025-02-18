import java.io.*;
import java.util.*;

public class BOJ_11053 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine()); // 수열의 크기
    int[] arr = new int[N]; // 수열
    int[] dp = new int[N]; // 가장 긴 증가하는 부분 수열

    String[] line = br.readLine().split(" ");
    for (int i = 0; i < N; i++) {
      arr[i] = Integer.parseInt(line[i]);
    }

    for (int i = 0; i < N; i++) {
      dp[i] = 1; // 초기값 1
      for (int j = 0; j < i; j++) {
        if (arr[j] < arr[i] && dp[i] < dp[j] + 1) { // 나보다 작은 수가 있으면
          dp[i] = dp[j] + 1; // 수열 증가시키기
        }
      }
    }

    int max = 0;
    for (int i = 0; i < N; i++) {
      max = Math.max(max, dp[i]);
    }

    System.out.println(max);

  }
}

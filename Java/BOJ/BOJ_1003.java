import java.io.*;
import java.util.*;

public class BOJ_1003 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int T = Integer.parseInt(br.readLine()); // 테스트 케이스 수
    int[][] dp = new int[41][2]; // 0과 1의 호출 횟수
    dp[0][0] = 1; // 0일 때 0 호출 횟수
    dp[1][1] = 1; // 1일 때 1 호출 횟수

    for (int i = 2; i <= 40; i++) { // 2부터 40까지
      dp[i][0] = dp[i - 1][0] + dp[i - 2][0]; // 0 호출 횟수
      dp[i][1] = dp[i - 1][1] + dp[i - 2][1]; // 1 호출 횟수
    }

    for (int i = 0; i < T; i++) {
      int N = Integer.parseInt(br.readLine());
      System.out.println(dp[N][0] + " " + dp[N][1]);
    }
  }
}

import java.io.*;
import java.util.*;

public class BOJ_9251 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String[] arr = br.readLine().split("");
    String[] arr2 = br.readLine().split("");

    int[][] dp = new int[arr.length + 1][arr2.length + 1]; //

    for (int i = 1; i <= arr.length; i++) {
      for (int j = 1; j <= arr2.length; j++) {
        if (arr[i - 1].equals(arr2[j - 1])) { // 같은 문자열이면
          dp[i][j] = dp[i - 1][j - 1] + 1; // 대각선 위의 값 + 1
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // 왼쪽과 위쪽 중 큰 값
        }
      }
    }

    System.out.println(dp[arr.length][arr2.length]);
  }  
}

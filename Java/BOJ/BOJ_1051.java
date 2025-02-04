import java.util.*;
import java.io.*;

public class BOJ_1051 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String[] firstLine = br.readLine().split(" ");
    int N = Integer.parseInt(firstLine[0]); // 최대 50
    int M = Integer.parseInt(firstLine[1]);

    // 직사각형 받기
    int[][] map = new int[N][M];

    for (int i = 0; i < N; i++) {
      String[] line = br.readLine().split("");
      for (int j = 0; j < M; j++) {
        map[i][j] = Integer.parseInt(line[j]);
      }
    }

    // System.out.println(Arrays.deepToString(map));

    int max = 0;
    // 제일 왼쪽 포인트 (0.0)부터 시작해서 최대한 큰 정사각형인지 확인
    for (int n = 0; n < N; n++) {
      for (int m = 0; m < M; m++) {
        for (int k = 0; k < Math.min(N, M); k++) { // N, M 중 작은 값까지 확인(왜냐면 정사각형이니까)
          if (n + k < N && m + k < M) { 
            if (map[n][m] == map[n][m+k] && map[n][m] == map[n+k][m] && map[n][m] == map[n+k][m+k]) {
              if ( max < (k + 1) * (k + 1)) {
                max = (k + 1) * (k + 1);
              }
            }
          }
        } 
      }
    }

    System.out.println(max);

  }  
}

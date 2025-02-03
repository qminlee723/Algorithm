import java.util.*;
import java.io.*;

public class BOJ_1018 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // N, M 입력
    String[] firstLine = br.readLine().split(" ");
    int N = Integer.parseInt(firstLine[0]);
    int M = Integer.parseInt(firstLine[1]);
    
    // 그래프 입력받기
    char[][] graph = new char[N][M];
    for (int i = 0; i < N; i++) {
      graph[i] = br.readLine().toCharArray();
    }

    // 최소 색칠 횟수 찾기
    int minPaint = Integer.MAX_VALUE;
    
    for (int n = 0; n <= N - 8; n++) {
      for (int m = 0; m <= M - 8; m++) {
        int w = 0; // W로 시작하는 체스판에서 색칠할 횟수
        int b = 0; // B로 시작하는 체스판에서 색칠할 횟수

        for (int i = 0; i < 8; i++) {
          for (int j = 0; j < 8; j++) {
            char expectedW = ((i + j) % 2 == 0) ? 'W' : 'B';
            char expectedB = ((i + j) % 2 == 0) ? 'B' : 'W';
            
            if (graph[n + i][m + j] != expectedW) {
              w++;
            }
            if (graph[n + i][m + j] != expectedB) {
              b++;
            }
          }
        }
        
        minPaint = Math.min(minPaint, Math.min(w, b));
      }
    }
    
    System.out.println(minPaint);
  }
}

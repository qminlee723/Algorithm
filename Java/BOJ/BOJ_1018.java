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
    int minPaint = 50*50; // 최대값으로 초기화
    
    for (int n = 0; n <= N - 8; n++) { // 8*8 초과하면 안됨
      for (int m = 0; m <= M - 8; m++) {
        int w = 0; // W로 시작하는 체스판에서 색칠할 횟수
        int b = 0; // B로 시작하는 체스판에서 색칠할 횟수

        for (int i = 0; i < 8; i++) {
          for (int j = 0; j < 8; j++) {
            char expectedW = ((i + j) % 2 == 0) ? 'W' : 'B'; // 이 부분을 못생각해냄 멍청아
            char expectedB = ((i + j) % 2 == 0) ? 'B' : 'W';
            
            if (graph[n + i][m + j] != expectedW) {
              w++;
            }
            if (graph[n + i][m + j] != expectedB) {
              b++;
            }
          }
        }
        
        minPaint = Math.min(minPaint, Math.min(w, b)); // 제일 작은 숫자로 갱신
      }
    }
    
    System.out.println(minPaint);
  }
}

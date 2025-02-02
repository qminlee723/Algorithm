import java.util.*;
import java.io.*;

public class BOJ_2573 {
    public static void main(String[] args) throws IOException{
      System.setIn(new FileInputStream("example.txt"));
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

      // 첫 번째 줄 입력
      String[] firstLine = br.readLine().split(" ");
      int N = Integer.parseInt(firstLine[0]); // 행의 갯수
      int M = Integer.parseInt(firstLine[1]); // 열의 갯수

      // 빙산의 높이 입력
      int[][] iceberg = new int[N][M];
      for (int i = 0; i < N; i++) {
        String[] secondLine = br.readLine().split(" ");
        for (int j = 0; j < M; j++) {
          iceberg[i][j] = Integer.parseInt(secondLine[j]);
        }
      }
      
      // 상하좌우
      int[] dx = {0, 0, 1, -1};
      int[] dy = {1, -1, 0, 0};

      // 몇 년 만에 녹을지
      int year = 0;
      
      // 빙산이 녹는 것을 저장할 배열
      int[][] temp = new int[N][M];

      // 빙산이 녹는 것을 저장할 큐
      Queue<int[]> queue = new LinkedList<>();

      // 빙산이 녹는 것을 저장할 큐에 빙산의 위치를 넣음
      for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
          if (iceberg[i][j] != 0) {
            queue.add(new int[] {i, j});
          }
        }
      }

      // 빙산이 녹는 것을 저장할 큐가 빌 때까지
      while (!queue.isEmpty()) {
        // 빙산의 위치를 꺼내서
        int[] current = queue.poll();
        int x = current[0];
        int y = current[1];
        int count = 0;

        // 상하좌우 확인
        for (int i = 0; i < 4; i++) {
          int nx = x + dx[i];
          int ny = y + dy[i];

          // 범위 내에 있고 빙산이면
          if (nx >= 0 && nx < N && ny >= 0 && ny < M && iceberg[nx][ny] == 0) {
            count++;
          }
        }

        // 빙산이 녹는 것을 저장
        temp[x][y] = count;


      }
        year++;
      System.out.println(year);

    }
}

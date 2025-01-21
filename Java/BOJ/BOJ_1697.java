import java.util.*;
import java.io.*;

public class BOJ_1697 {
    public static void main(String[] args) throws IOException { 
      System.setIn(new FileInputStream("example.txt"));
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

      // 첫 번째 줄 입력
      String[] firstLine = br.readLine().split(" ");
      int N = Integer.parseInt(firstLine[0]); // 수빈이의 위치 
      int K = Integer.parseInt(firstLine[1]); // 동생의 위치

      // BFS
      boolean [] visited = new boolean[100001];
      Queue<Integer> queue = new LinkedList<>();
      int [] time = new int[100001];

      if (N == K) {
        System.out.println(0);
      }

      queue.add(N); // 수빈의 위치를 큐에 넣음
      visited[N] = true; // 방문 표시

      while (!queue.isEmpty()) { // 큐가 차 있으면
        int current = queue.poll(); // 수빈이의 현재 위치
        visited[current] = true; // 방문했다고 표시

        for (int next : new int [] {current + 1, current -1, current * 2}) { // 다음 위치
          if ( next >= 0 && next <= 100000 && !visited[next]) { // 범위 내에 있고 방문하지 않았다면
            queue.add(next); // 다음 큐에 넣음
            visited[next] = true; // 방문했다고 표시
            time[next] = time[current] + 1; // 시간 증가

            if (next == K) { // 동생 찾았으면
              System.out.println(time[next]); // 시간 출력
              break;
            }

          }
        }
        }
      }

    }
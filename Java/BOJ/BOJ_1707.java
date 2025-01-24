import java.util.*;
import java.io.*;

public class BOJ_1707 {
    public static void main(String[] args) throws IOException {
      System.setIn(new FileInputStream("example.txt"));
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

      // 첫 번째 줄 입력
      int T = Integer.parseInt(br.readLine()); // 테스트 케이스의 개수

      for (int i = 0; i < T; i++) { // TestCase 만큼 돌면서
        String[] firstLine = br.readLine().split(" ");
        int V = Integer.parseInt(firstLine[0]); // 정점의 개수
        int E = Integer.parseInt(firstLine[1]); // 간선의 개수
        
        ArrayList<Integer>[] graph = new ArrayList[V + 1]; // 인접리스트 생성
        int[] visited = new int[V + 1]; // 방문 여부 체크
        boolean isBipartite = true; // 이분 그래프 여부

        // 인접리스트 초기화
        for (int j = 1; j <= V; j++) {
          graph[j] = new ArrayList<>();
        }

        // 간선 정보 입력
        for (int j = 0; j < E; j++) {
          String[] edge = br.readLine().split(" ");
          int u = Integer.parseInt(edge[0]);
          int v = Integer.parseInt(edge[1]);
          graph[u].add(v);
          graph[v].add(u);
        }

        // BFS
        Queue<Integer> queue = new LinkedList<>();  
        for (int j = 1; j <= V; j++) { // 모든 정점에 대해
          if (visited[j] == 0) { // 방문하지 않은 정점이라면
            queue.add(j); // 큐에 넣고
            visited[j] = 1; // 방문 표시
          }

          while (!queue.isEmpty()) { // 큐가 빌 때까지
            int currV = queue.poll(); // 큐에서 정점을 꺼내서
            for (int next : graph[currV]) { // 인접한 정점에 대해
              if (visited[next] == 0) { // 방문하지 않은 정점이라면
                queue.add(next); // 큐에 넣고
                visited[next] = visited[currV] * -1; // 방문 표시
              } else if (visited[next] == visited[currV]) { // 방문한 정점인데 색이 같다면
                isBipartite = false; // 이분 그래프가 아님
                break;
              }
            }
          }
        }

        System.out.println(isBipartite ? "YES" : "NO"); // 결과 출력

        
      }
    }
}
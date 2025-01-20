import java.io.*;
import java.util.*;

public class BOJ_1260 {
    public static void main(String[] args) throws IOException {
        System.setIn(new FileInputStream("example.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 첫 번째 줄 입력
        String[] firstLine = br.readLine().split(" ");
        int N = Integer.parseInt(firstLine[0]); // 정점의 갯수
        int M = Integer.parseInt(firstLine[1]); // 간선의 갯수
        int V = Integer.parseInt(firstLine[2]); // 탐색을 시작할 정점의 번호

        // 인접 리스트 생성
        int[][] graph = new int[N + 1][N + 1]; // 0번 인덱스는 사용하지 않음
        for (int i = 0; i < M; i++) { 
            String[] edge = br.readLine().split(" "); // 간선 정보
            int a = Integer.parseInt(edge[0]); // 간선의 시작 정점
            int b = Integer.parseInt(edge[1]);
            graph[a][b] = 1;
            graph[b][a] = 1;
        }

        // DFS
        boolean[] visited = new boolean[N + 1];
        Stack<Integer> stack = new Stack<>(); // 스택 생성
        stack.push(V);

        while (!stack.isEmpty()) {
            int v = stack.pop(); // 정점을 꺼내서
            if (!visited[v]) { // 방문하지 않은 정점이라면
                visited[v] = true; // 방문 
                System.out.print(v + " "); // 출력
                for (int i = N; i > 0; i--) {
                    if (graph[v][i] == 1 && !visited[i]) {
                        stack.push(i);
                    }
                }
            }
        }
        
        System.out.println(); // 줄바꿈
        
        // BFS
        visited = new boolean[N + 1];
        Queue<Integer> queue = new LinkedList<>(); // 큐 생성
        queue.add(V); // 시작 정점을 큐에 넣음 
        visited[V] = true; // 방문 표시

        while (!queue.isEmpty()) { // 큐가 빌 때까지
            int v = queue.poll(); // 큐에서 정점을 꺼내서
            System.out.print(v + " "); // 출력
            for (int i = 1; i <= N; i++) {
                if (graph[v][i] == 1 && !visited[i]) {
                    queue.add(i); // 방문하지 않은 정점을 큐에 넣음
                    visited[i] = true; // 방문 표시
                }
            }
        }

    }
}
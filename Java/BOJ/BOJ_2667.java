import java.io.*;
import java.util.*;

public class BOJ_2667 {
    public static void main(String[] args) throws IOException {
        System.setIn(new FileInputStream("example.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // N 입력
        int N = Integer.parseInt(br.readLine());

        // N x N 지도 입력
        int[][] map = new int[N][N];

        for (int i = 0; i < N; i++) {
            String[] line = br.readLine().split("");
            for (int j = 0; j < N; j++) {
                map[i][j] = Integer.parseInt(line[j]);
            }
        }

        // 상하좌우 이동 정의
        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};

        List<Integer> answer = new ArrayList<>(); // 단지 내 집의 수 리스트
        int count = 0; // 단지 수

        // 전체 지도 탐색
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (map[i][j] == 1) { // 새로운 단지 발견
                    int cnt = 0; // 단지 내 집의 수 초기화
                    Stack<int[]> stack = new Stack<>(); // 단지별 스택 초기화
                    stack.push(new int[]{i, j}); // 스택에 시작 좌표 추가
                    map[i][j] = 0; // 방문 처리
                    count++; // 단지 수 증가

                    // DFS 탐색
                    while (!stack.isEmpty()) {
                        int[] current = stack.pop();
                        int x = current[0];
                        int y = current[1];
                        cnt++; // 현재 집 포함

                        for (int k = 0; k < 4; k++) {
                            int nx = x + dx[k];
                            int ny = y + dy[k];

                            // 지도 범위 내에 있고 방문하지 않은 집이면
                            if (nx >= 0 && ny >= 0 && nx < N && ny < N && map[nx][ny] == 1) {
                                stack.push(new int[]{nx, ny}); // 스택에 추가
                                map[nx][ny] = 0; // 방문 처리
                            }
                        }
                    }

                    answer.add(cnt); // 단지 크기 저장
                }
            }
        }

        // 결과 출력
        Collections.sort(answer); // 단지 크기 오름차순 정렬
        System.out.println(count); // 단지 수 출력
        for (int size : answer) {
            System.out.println(size); // 각 단지 크기 출력
        }
    }
}

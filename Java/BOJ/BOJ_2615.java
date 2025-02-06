import java.io.*;
import java.util.*;

public class BOJ_2615 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 바둑판 받기
    int[][] map = new int[19][19];

    for (int i = 0; i < 19; i++) {
      String[] line = br.readLine().split(" ");
      for (int j = 0; j < 19; j++) {
        map[i][j] = Integer.parseInt(line[j]);
      }
    }

    // 방향
    int[] dx = {1, 1, 0, -1}; 
    int[] dy = {0, 1, 1, 1};

    // 검사
    // 참고로 검은색 1, 흰색 2
    for (int i = 0; i < 19; i++) {
      for (int j = 0; j < 19; j++) {
        if (map[i][j] == 0) continue; // 돌이 없으면 넘어가기

        int stoneColor = map[i][j]; // 돌의 색 // answer

        // 돌을 찾으면 상하좌우 체크
        for (int k = 0; k < 4; k++) { // 4 방향 체크
          int cnt = 1; // 연속된 돌의 개수 저장
          int x = i; // 현재 x
          int y = j; // 현재 y

          while (true) { // 쭉 확인
            x += dx[k]; // x 이동 // dx={1, 1, 0, -1}
            y += dy[k]; // y 이동 // dy={0, 1, 1, 1}

            // 바둑판을 벗어나지 않고, 같은 색의 돌이면
            if (x >= 0 && x < 19 && y >= 0 && y < 19 && map[x][y] == map[i][j]) { 
              cnt++; // 돌의 개수 증가
            } else { // 바둑판을 벗어나거나, 다른 색의 돌이면
              break; // 다음 연속된 돌 찾으러 가기
            }
          }

          // 5개의 돌이 연속되어 있으면
          if (cnt == 5) {

            int px = i - dx[k]; // 이전 x
            int py = j - dy[k]; // 이전 y

            // 6번째 돌이 같은 색이면(6목 방지)
            if (px >= 0 && px < 19 && py >= 0 && py < 19 && map[px][py] == map[i][j]) {
              continue;
            }

            System.out.println(stoneColor); // 돌의 색 출력
            System.out.println((i + 1) + " " + (j + 1)); // 돌의 위치 출력
            return; // 종료
          }
          
            
          }
        } 
        }
        System.out.println(0); // 오목 없으면 0 출력
      }
    }

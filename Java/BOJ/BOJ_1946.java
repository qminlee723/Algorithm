import java.io.*;

public class BOJ_1946 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int T = Integer.parseInt(br.readLine()); // TC 갯수

    for (int i = 0; i < T; i++) {
      int N = Integer.parseInt(br.readLine()); // 지원자 수
      int[] ranks = new int[N + 1]; // 순위 저장 // 1부터 시작

      for (int j = 0; j < N; j++) {
        String[] line = br.readLine().split(" ");
        int a = Integer.parseInt(line[0]); // 서류 순위 // 인덱스
        int b = Integer.parseInt(line[1]); // 면접 순위

        ranks[a] = b; // 서류 순위에 대한 면접 순위
      }

      int count = 1; // 1등은 무조건 합격
      int min = ranks[1]; // 1등의 면접 순위

      for (int j = 2; j <= N; j++) { // 2등부터 비교
        if (ranks[j] < min) { // 면접 순위가 더 낮으면
          count++; // 합격
          min = ranks[j];  // 면접 순위 업데이트
        }
      }

      System.out.println(count);
    }


  }  
}

import java.io.*;
import java.util.*;

public class BOJ_31860 {
    public static void main(String[] args) throws IOException {
        System.setIn(new FileInputStream("example.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        String[] line = br.readLine().split(" ");
        int N = Integer.parseInt(line[0]);
        int M = Integer.parseInt(line[1]);
        int K = Integer.parseInt(line[2]);

        // 중요도별 빈도수를 저장할 배열 (인덱스: 0~1000)
        int[] freq = new int[1001];

        for (int i = 0; i < N; i++) {
            int d = Integer.parseInt(br.readLine());
            freq[d]++;
        }

        // 초기값 설정
        int currentMax = 1000;   // 현재 freq에서 가장 높은 중요도
        int tasksLeft = N;      // 아직 완료되지 않은 작업의 수
        int satisfaction = 0;   // 전날(이전) 만족도
        int days = 0;           // 총 소요일

        // 작업이 모두 끝날 때까지 (tasksLeft == 0)
        while (tasksLeft > 0) {
            // 현재 freq[currentMax]가 없으면 줄여가면서 찾는다
            while (currentMax > K && freq[currentMax] == 0) {
                currentMax--;
            }
            // 가장 높은 중요도의 작업 하나를 처리
            freq[currentMax]--;

            // 오늘 만족도 = floor(전날 만족도/2) + currentMax
            satisfaction = (satisfaction / 2) + currentMax;
            days++;

            // 결과(오늘 만족도)를 출력 버퍼에 저장
            sb.append(satisfaction).append('\n');

            // 처리한 작업의 중요도 감소
            int newVal = currentMax - M;
            if (newVal <= K) {
                // K 이하로 떨어지면 작업 완료
                tasksLeft--;
            } else {
                // 아직 K보다 크면 다시 freq에 넣어 내일 이후에 재처리
                freq[newVal]++;
            }
        }

        // 최종 출력
        System.out.println(days);
        System.out.print(sb.toString());
    }
}

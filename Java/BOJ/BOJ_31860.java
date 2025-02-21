import java.io.*;
import java.util.*;

public class BOJ_31860 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String[] line = br.readLine().split(" ");
    int N = Integer.parseInt(line[0]); // 해야 할 일 수
    int M = Integer.parseInt(line[1]); // 일 처리했을때 감소하는 중요도
    int K = Integer.parseInt(line[2]); // 완료한 것으로 간주하는 중요도 최댓값

    PriorityQueue<Integer> importance = new PriorityQueue<>(Collections.reverseOrder()); // 중요도가 높은 것부터 처리
    for (int i = 0; i < N; i++) {
      importance.add(Integer.parseInt(br.readLine()));
    }

    int days = 0;
    int satisfaction = 0;
    List<Integer> satisfactions = new ArrayList<>(); // 배열 대신 리스트 사용

    while (!importance.isEmpty()) {
      int size = importance.size(); // 하루 동안 처리해야 할 작업 수 저장
      int dailySatisfaction = 0; // 오늘 하루 만족도 합산

      for (int i = 0; i < size; i++) {
        int today = importance.poll(); // 오늘의 중요도
        today -= M; // 일 처리하고 중요도 감소

        if (today > K) { // 중요도가 K 이상이면 다음날로 넘김
          importance.add(today);
        }

        dailySatisfaction += today;
      }

      // 하루가 끝난 후 만족도 업데이트
      satisfaction = (satisfaction / 2) + dailySatisfaction;
      satisfactions.add(satisfaction); // 리스트에 저장

      days++; // 하루가 끝난 후 증가
    }

    System.out.println(days);
    
    for (int sat : satisfactions) {
      System.out.println(sat);
    }
  }
}

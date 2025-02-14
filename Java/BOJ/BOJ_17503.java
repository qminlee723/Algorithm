import java.io.*;
import java.util.*;

public class BOJ_17503 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String[] firstLine = br.readLine().split(" ");
    int N = Integer.parseInt(firstLine[0]); // 축제 기간 // 마셔야되는 맥주 개수
    int M = Integer.parseInt(firstLine[1]); // 채워야 하는 선호도의 합
    int K = Integer.parseInt(firstLine[2]); // 마실 수 있는 맥주 종류 수

    // 선호도를 K번 만큼 더했을 때 M보다 큰 모든 경우의 수를 찾기
    // 그 중 도수 레벨이 가장 낮은 것을 찾기 

    // 선호도 작은 순서대로 저장할 ArrayList
    List<int[]> beers = new ArrayList<>();

    for (int i = 0; i < K; i++) {
      String[] line = br.readLine().split(" ");
      int v = Integer.parseInt(line[0]); // 맥주 선호도
      int c = Integer.parseInt(line[1]); // 맥주 도수
      
      beers.add(new int[] {v, c});
    }

    // 선호도 작은 순서대로 정렬
    beers.sort((a, b) -> a[0] - b[0]);

    // 도수 레벨 작은 순서대로 저장할 PriorityQueue
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    int sumPreference = 0;
    int maxAlcohol = 0;
    int answer = -1;

    for (int[] beer: beers) { 
      pq.add(beer); // 도수 레벨 추가
      sumPreference += beer[0]; // 선호도 더하기
      maxAlcohol = Math.max(maxAlcohol, beer[1]); // 가장 높은 도수 레벨 저장

      if (pq.size() > N) { // 맥주를 N개 이상 마신 경우, 
        int[] removed = pq.poll(); // 가장 선호도가 낮은 맥주를 빼기
        sumPreference -= beer[0]; // 가장 선호도가 낮은 맥주를 빼기

        if (removed[1] == maxAlcohol) { // 가장 선호도가 낮은 맥주가 가장 높은 도수 레벨인 경우
          maxAlcohol = 0; // 가장 높은 도수 레벨 초기화
          for (int[] b : pq) {
            maxAlcohol = Math.max(maxAlcohol, b[1]); // 가장 높은 도수 레벨 찾기
          }
        }
        
        
      }

      if (pq.size() == N && sumPreference >= M) { // 선호도가 M보다 크거나 같은 경우
        answer = maxAlcohol; // 그 중 가장 높은 도수 레벨 저장
        break;
      }
    }
    System.out.println(answer);


  }
}

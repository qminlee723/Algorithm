import java.io.*; 
import java.util.*;

public class BOJ_19598 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine()); // 회의 수
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]); // 시작 시간 순서대로 정렬
    int[] start = new int[N]; // 시작 시간
    int[] end = new int[N]; // 끝나는 시간

    for (int i = 0; i < N; i++) { // 회의 시간 입력
      String[] line = br.readLine().split(" "); 
      start[i] = Integer.parseInt(line[0]); // 시작 시간
      end[i] = Integer.parseInt(line[1]); // 끝나는 시간
    } 

    Arrays.sort(start); // 시작 시간 정렬
    Arrays.sort(end);

    int count = 0;
    int max = 0; // 최대 회의실 갯수

    for (int i = 0; i < N; i++) { // 최소 회의실 갯수 구하기
      while (!pq.isEmpty() && pq.peek()[0] <= start[i]) { // 시작 시간보다 빨리 끝나는 회의가 있는 경우
        pq.poll(); // 끝나는 시간이 빠른 회의를 빼기
        count--; // 회의실 하나 빼기
      }

      pq.add(new int[] {end[i], start[i]}); // 끝나는 시간, 시작 시간 순서대로 추가 // 시작 시간보다 빨리 끝나는 회의가 없는 경우
      count++;

      max = Math.max(max, count);
    }

    System.out.println(max);
  }
}
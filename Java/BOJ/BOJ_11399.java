import java.util.*;
import java.io.*;

public class BOJ_11399 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int N = Integer.parseInt(br.readLine()); // 사람 수
    String[] tempArr = br.readLine().split(" "); // 각 사람이 돈을 인출하는데 걸리는 시간

    int[] arr = new int[N];
    for (int i = 0; i < N; i++) {
      arr[i] = Integer.parseInt(tempArr[i]);
    }

    Arrays.sort(arr); // 오름차순 정렬

    int sum = 0;

    for (int i = 0; i < N; i++) {
      sum += arr[i] * (N - i);
    }

    System.out.println(sum);
  }
}

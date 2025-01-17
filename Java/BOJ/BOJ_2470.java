import java.io.*;
import java.util.*;

public class BOJ_2470 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // N 입력
    int N = Integer.parseInt(br.readLine());

    // N개 용액 입력
    int[] numbers = new int[N]; 
    String [] secondLine = br.readLine().split(" ");
    for (int i = 0; i < N; i++) {
      numbers[i] = Integer.parseInt(secondLine[i]);
    }

    // 배열 정렬
    Arrays.sort(numbers);

    // 투 포인터
    int left = 0;
    int right = N-1;
    int sum = 2000000000; // 두 용액의 합의 최댓값
    int[] answer = new int[2];

    while (left < right) {
      int temp = numbers[left] + numbers[right];

      if (Math.abs(temp) < Math.abs(sum)) {
        sum = temp;
        answer[0] = numbers[left];
        answer[1] = numbers[right];
      } 

      if (temp < 0) { // 두 용액의 합이 0보다 작으면
        left++;
      } else {
        right--;
      }
    }

    System.out.println(answer[0] + " " + answer[1]);
  }
}
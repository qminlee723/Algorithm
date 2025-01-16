import java.io.*;
import java.util.*;

public class BOJ_2343 {
    public static void main(String[] args) throws IOException {
        System.setIn(new FileInputStream("example.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 첫 번째 줄 입력
        String[] firstLine = br.readLine().split(" ");
        int N = Integer.parseInt(firstLine[0]); // 강의의 갯수
        int M = Integer.parseInt(firstLine[1]); // 블루레이의 갯수

        // N개 강의의 길이 입력(강의 순서대로, 분 단위(자연수)로 주어짐)
        int[] numbers = new int[N];
        String [] thirdLine = br.readLine().split(" ");
        for (int i = 0; i < N; i++) {
            numbers[i] = Integer.parseInt(thirdLine[i]);
        }

        // M개 블루레이의 길이 입력
        int left = Arrays.stream(numbers).max().getAsInt(); // 블루레이에 들어있는 값 중 가장 긴 강의 길이
        int right = Arrays.stream(numbers).sum(); // 모든 강의 길이의 합
        int answer = 0;

        while (left <= right) {
            int mid = (left + right) / 2; // 블루레이의 길이
            int sum = 0; // 블루레이에 담긴 강의 중 가장 긴 강의 길이
            int cnt = 1; // 블루레이 개수

            for (int i = 0; i < N; i++) { // 강의 길이만큼 반복
                if (sum + numbers[i] > mid) { // 블루레이에 담긴 강의 길이가 블루레이의 길이보다 크면
                    cnt++; // 블루레이 개수 증가
                    sum = 0; // 블루레이 초기화
                }
                sum += numbers[i]; // 블루레이에 담긴 강의 길이 추가
                System.out.println("sum: " + sum + ", cnt: " + cnt + ", mid: " + mid + ", left: " + left + ", right: " + right + ", answer: " + answer);
            }

            if (cnt <= M) { // 블루레이 개수가 M개 이하이면
                answer = mid; // 결과값에 블루레이의 길이 저장
                right = mid - 1; // 블루레이의 길이를 줄임
            } else { // 블루레이 개수가 M개보다 크면
                left = mid + 1; 
            }
        }
        System.out.println(answer);
    }
}
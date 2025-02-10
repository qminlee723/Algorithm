import java.io.*;
import java.util.*;

public class BOJ_27961 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    long N = Long.parseLong(br.readLine());

    if (N == 0) { // 0일 때
      System.out.println(0);
      return;
    }

    int count = 0; 
    long num = 1;

    while (num < N) { 
      num *= 2; 
      count++;
    }

    System.out.println(count+1); // 0부터 시작하니까 +1
  }  
}

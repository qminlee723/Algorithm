import java.io.*;
import java.util.*;

public class BOJ_2490 {
  public static void main(String[] args) throws IOException {
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    for (int i = 0; i < 3; i++) { // 줄 세 개 주어짐
      String[] line = br.readLine().split(" ");
      int count = 0;
      for (int j = 0; j < 4; j++) {
        count += Integer.parseInt(line[j]);
      }

      if (count == 0) {
        System.out.println("D");
      } else if (count == 1) {
        System.out.println("C");
      } else if (count == 2) {
        System.out.println("B");
      } else if (count == 3) {
        System.out.println("A");
      } else {
        System.out.println("E");
      }

    }
  }
}

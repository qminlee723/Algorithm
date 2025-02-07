import java.util.*;
import java.io.*;

public class BOJ_4949 {
  public static void main(String[] args) throws IOException{
    System.setIn(new FileInputStream("example.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    while (true) { // 몇 줄 들어오는지 모르니까
      String line = br.readLine();
      if (line.equals(".")) break; // 종료 조건

      Stack<Character> stack = new Stack<>(); // Char
      boolean isBalanced = true;

      for (int i = 0; i < line.length(); i++) {
        char c = line.charAt(i);
        
        if (c == '(' || c == '[') {
          stack.push(c);
        } else if (c == ')') {
          if (stack.isEmpty() || stack.peek() != '(') {
            isBalanced = false;
            break;
          }
          stack.pop();
        } else if (c == ']') {
          if (stack.isEmpty() || stack.peek() != '[') {
            isBalanced = false;
            break;
          }
          stack.pop();
        }
      }

      if (isBalanced && stack.isEmpty()) {
        System.out.println("yes");
      } else {
        System.out.println("no");
      }
    }

  }
}

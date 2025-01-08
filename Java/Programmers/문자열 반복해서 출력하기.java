import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int n = sc.nextInt();
        
        String answer = "";
        for (int i = 0; i < n; i++) {
            answer += str;
        }
        
        System.out.println(answer);
    }
}

// repeat 메서드라는 것도 있었음
// System.out.println(str.repeat(n));

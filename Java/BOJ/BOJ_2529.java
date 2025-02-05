import java.io.*;
import java.util.*;

public class BOJ_2529 {
    
    // dfs가 static method라, 거기서 변수를 사용하려면 static으로 선언을 먼저 해줘야 함
    // error: non-static variable visited cannot be referenced from a static context
    static int k;
    static String[] signs;
    static boolean[] visited = new boolean[10];
    static List<String> numbers = new ArrayList<>();
        
    public static void main(String[] args) throws IOException {
    	  System.setIn(new FileInputStream("example.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        k = Integer.parseInt(br.readLine());
        signs = br.readLine().split(" ");

        // DFS
        for (int i = 0; i <= 9; i++) {
            visited[i] = true; // 방문 확인
            dfs(i, 0, i + ""); // 백트래킹
            visited[i] = false; // 방문 해제
        }
        
        // 출력
        System.out.println(numbers.get(numbers.size()-1)); // 최댓값(리스트의 가장 마지막 값)
        System.out.println(numbers.get(0));
    }

    private static void dfs(int number, int idx, String str) {
        if (idx == k) {
            // 가능한 숫자 조합을 문자열로 저장
            numbers.add(str);
            return;
        } 
        
        for (int i = 0; i <= 9; i++) {
            if (!visited[i]) {
                if (signs[idx].equals("<")) {
                    if (number >= i) {
                        continue;
                    } 
                } else {
                    if (number <= i) {
                        continue;
                    }
                }
                
                visited[i] = true;
                dfs(i, idx + 1, str + i);
                visited[i] = false;
            }
        }

}
}
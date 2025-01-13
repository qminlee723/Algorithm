// import java.io.*;
// import java.util.*;

// public class BOJ_2776 {
//     public static void main(String[] args) throws IOException {
//         System.setIn(new FileInputStream("example.txt"));
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력을 받기 위한 BufferedReader 생성
//         StringBuilder sb = new StringBuilder(); // 출력할 결과 저장
//         int t = Integer.parseInt(br.readLine()); // test case 수


//         for (int i=0; i<t; i++) { 
//             int n = Integer.parseInt(br.readLine()); // 노트 1에 수가 몇개 있는지
//             int[] note1 = new int[n]; // 노트 1에 있는 수 
//             StringTokenizer st = new StringTokenizer(br.readLine()); // StringTokenizer는 문자열을 공백을 기준으로 토큰으로 나누는 역할
            
//             for (int j=0; j<n; j++) {
//                 note1[j] = Integer.parseInt(st.nextToken()); // 노트 1에 있는 수를 배열에 넣기
//             }

//             int m = Integer.parseInt(br.readLine()); // 노트 2에 수가 몇개 있는지
//             int[] note2 = new int[m]; // 노트 2에 있는 수

//             st = new StringTokenizer(br.readLine()); // StringTokenizer는 문자열을 공백을 기준으로 토큰으로 나누는 역할
//             for (int j=0; j<m; j++) { // 노트 2에 있는 수를 배열에 넣기
//                 note2[j] = Integer.parseInt(st.nextToken()); // nextToken()은 토큰을 반환
//             }

//             for (int j=0; j<m; j++) { // 노트 2에 있는 수가 노트 1에 있는지 확인
//                 boolean found = false;
//                 for (int k=0; k<n; k++) {
//                     if (note1[k] == note2[j]) { // 있으면 1 출력
//                         sb.append(1).append("\n");
//                         found = true;
//                         break;
//                     } 
//                 }
//                 if (!found) { // 없으면 0 출력
//                     sb.append(0).append("\n");
//                 }
//             }


//         System.out.println(sb);

//     }
//     }}



import java.io.*;
import java.util.*;

public class BOJ_2776 {
    public static void main(String[] args) throws IOException {
        System.setIn(new FileInputStream("example.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력을 받기 위한 BufferedReader 생성
        StringBuilder sb = new StringBuilder(); // 출력할 결과 저장
        int t = Integer.parseInt(br.readLine()); // test case 수


        for (int i=0; i<t; i++) { 
            int n = Integer.parseInt(br.readLine()); // 노트 1에 수가 몇개 있는지
            int[] note1 = new int[n]; // 노트 1에 있는 수 
            StringTokenizer st = new StringTokenizer(br.readLine()); // StringTokenizer는 문자열을 공백을 기준으로 토큰으로 나누는 역할
            
            for (int j=0; j<n; j++) {
                note1[j] = Integer.parseInt(st.nextToken()); // 노트 1에 있는 수를 배열에 넣기
            }

            int m = Integer.parseInt(br.readLine()); // 노트 2에 수가 몇개 있는지
            int[] note2 = new int[m]; // 노트 2에 있는 수

            st = new StringTokenizer(br.readLine()); // StringTokenizer는 문자열을 공백을 기준으로 토큰으로 나누는 역할

            HashSet<Integer> set = new HashSet<>();

            for (int j=0; j<n; j++) {
                set.add(note1[j]);
            }

            for (int j=0; j<m; j++) { // 노트 2에 있는 수를 배열에 넣기
                note2[j] = Integer.parseInt(st.nextToken()); // nextToken()은 토큰을 반환
            }

            for (int j=0; j<m; j++) { // 노트 2에 있는 수가 노트 1에 있는지 확인
                if (set.contains(note2[j])) {
                    sb.append(1).append("\n");
                } else {
                    sb.append(0).append("\n");
                }
            }
        

    }
            // 마지막 줄바꿈 제거
        if (sb.length() > 0) {
            sb.setLength(sb.length() - 1);
        }

        System.out.println(sb);
    }}


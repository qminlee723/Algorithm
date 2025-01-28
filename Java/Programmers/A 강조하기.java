class Solution {
  public String solution(String myString) {
      String answer = "";
      
      String lowString = myString.toLowerCase();
      
      String[] temp = lowString.split("");
      
      for (int i=0; i<myString.length(); i++) {
          
          // == 대신 equals 사용
          // == 사용시 참조값 (메모리 주소) 비교함
          if (temp[i].equals("a")) {
              temp[i] = "A";
          } 
          
          answer += temp[i];
      }

      return answer;
  }
}

// replace
class Solution {
  public String solution(String myString) {
      String answer = "";
      myString = myString.replace("a", "A");
}
function solution(a, b) {
  // 윤년이란? 2월이 29일까지 있는 년도
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const newDate = new Date(2016, a - 1, b);
  // day = 0:Sunday, 1: Monday ... 6: Saturday
  let day = newDate.getDay();

  return days[day];
}

function solution(id_list, report, k) {
  const reportCounts = {}; // 각 유저의 신고 횟수를 저장할 객체
  const reportedUsers = {}; // 신고당한 유저와 신고한 유저들을 저장할 객체
  const emailsSent = {}; // 처리 결과 메일을 받은 횟수를 저장할 객체

  // reportCounts와 reportedUsers 객체 초기화
  for (const userId of id_list) {
    reportCounts[userId] = 0;
    reportedUsers[userId] = new Set();
  }

  // reportedUsers 객체에 데이터 추가
  for (const reportData of report) {
    const [reportedUser, reporter] = reportData.split(" ");
    reportedUsers[reportedUser].add(reporter);
  }

  // reportCounts 객체에 데이터 추가
  for (const reportedUser of Object.keys(reportedUsers)) {
    const reporters = reportedUsers[reportedUser];
    for (const reporter of reporters) {
      reportCounts[reporter]++;
    }
  }

  // emailsSent 객체에 데이터 추가
  for (const reportedUser of Object.keys(reportedUsers)) {
    const reporters = reportedUsers[reportedUser];
    let count = 0;
    for (const reporter of reporters) {
      if (reportCounts[reporter] >= k) {
        count++;
      }
    }
    emailsSent[reportedUser] = count;
  }

  // 결과 반환
  return id_list.map((userId) => emailsSent[userId]);
}

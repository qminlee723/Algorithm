class Solution {

    private long result;

    public long solution(int n, int[] times) {
        long maxTime = (long)1000000000 * (long)1000000000;
        long minTime = 1;
        result = maxTime;
        search(times, n, minTime, maxTime);
        return result;
    }

    private void search(int[] times, int goal, long start, long end) {
        while(start <= end) {
            long mid = (start + end) / 2;

            long timeCnt = 0;
            for (int time : times) {
                timeCnt += (mid / time);
            }

            if (goal <= timeCnt) {
                result = Math.min(result, mid);
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
}
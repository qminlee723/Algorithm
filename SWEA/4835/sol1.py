import sys

sys.stdin = open('input.txt')

# input은 이제 주석 생략
T = int(input())

for tc in range(1, T + 1):
    int_cnt, sec_cnt = map(int, input().split())  # int_cnt = N, sec_cnt = M
    integers = list(map(int, input().split())) # integers = ai

    max_value = min_value = integers[0]
    for i in range(int_cnt - sec_cnt + 1):
        result = 0
        for j in range(i, i + sec_cnt):
            result += integers[j]
        if result >= max_value:
            max_value = result
        if result <= min_value:
            min_value = result
    ans = max_value - min_value


    # for i in range(len(integers) - sec_cnt + 1):
    #     summation = sum(integers[i: i+sec_cnt])
    #     if summation > max_value:
    #         max_value = summation
    #     if summation <= min_value:
    #         min_value = summation
    #
    # ans = max_value - min_value
    print(f'#{tc} {ans}')
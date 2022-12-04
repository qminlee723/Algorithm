import sys
sys.stdin = open('1244.txt')

switch_num = int(input())
lights = [2] + list(map(int, input().split()))
student_num = int(input())

def onoffswitch(index):
    if lights[index] == 1:
        lights[index] = 0
    elif lights[index] == 0:
        lights[index] = 1


for _ in range(student_num):
    gender, number = map(int, input().split())

    # 남학생
    if gender == 1:
        for i in range(number, switch_num+1, number):
            onoffswitch(i)

    # 여학생
    if gender == 2:
        onoffswitch(number)

        for i in range(switch_num // 2):
            if 0 < number - i and number + i <= switch_num:
                if lights[number - i] == lights[number + i]:
                    onoffswitch(number-i)
                    onoffswitch(number+i)
                else:
                    break
            else:
                break

for j in range(1, switch_num+1):
    print(lights[j], end='')
    if j % 20 == 0:
        print()
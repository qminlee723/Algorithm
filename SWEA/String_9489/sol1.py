import sys

sys.stdin = open('input.txt')

T = int(input())
for tc in range(1, T+1):
    n, m = input().split()
    arr = [list(map(int, input().split()) for _ in range(int(n)))]



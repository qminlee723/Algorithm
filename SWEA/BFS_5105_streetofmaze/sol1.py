import sys
from collections import deque

sys.stdin = open('input.txt')

def bfs(start):
    # 일단 큐를 만들어줍시당
    Q = deque()
    # Q에다가 v를 집어넣어줍니당
    Q.append(start)
    # visited 리스트에 visit된 거 1로 표시해주기
    # start는 튜플로 받아옴
    # start 튜플은 visited 좌표 .........
    visited[start[0]][start[1]] = 1

    # Q에 값이 있으면
    while Q:
        # Q에서 젤 처음 값을 빼준다
        w = Q.popleft()

        # 4방향 체크
        for i in range(4):
            ni = w[0] + di[i]
            nj = w[1] + dj[i]
            if 0 <= ni < N and 0 <= nj < N:
                if maze[ni][nj] == 0 and visited[ni][nj] == 0:
                    visited[ni][nj] = 1
                    Q.append((ni, nj))
                    visited[ni][nj] = visited[w[0]][w[1]] + 1
                # elif maze[ni][nj] == 1:
                #     continue
                # 0, 2, 3 ..............
                elif maze[ni][nj] == 3:
                    return visited[w[0]][w[1]]-1
    return 0


T = int(input())

# 상, 하, 좌, 우
di = [0, 0, -1, 1]
dj = [-1, 1, 0, 0]

# 입력을 받아줍니다.
for tc in range(1, T+1):
    N = int(input())
    maze = [list(map(int, input())) for _ in range(N)]

    for i in range(N):
        for j in range(N):
            if maze[i][j] == 2:
                start = (i, j)

    visited = [[0] * N for _ in range(N)]

    ans = bfs(start)
    print(f'#{tc} {ans}')

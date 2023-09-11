//머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다.
//예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
//가로 2 세로 5인 종이는 가로로 1번 세로로 8번 총 가위질 9번이 필요합니다.
//정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(M, N) {
  const lower = (M<=N) ? M : N;
  const higher = (lower==M) ? N : M;
  return (lower-1) + (higher-1)*lower;
}

//M, N 중에서 작은 수를 먼저 x-1만큼 자르고, 큰수를 (y-1)*x만큼 자르면 됨?


//나눌 필요 없이 아래처럼 그냥 단순계산 해도 됨

function simple(M, N) {
  return M*N-1;
}
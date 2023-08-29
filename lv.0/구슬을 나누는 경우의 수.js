//머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
//머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
//balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

function solution(balls, share) {
  var answer = 0;
  let bPs1 = 1;
  let sp = 1;
  
  for (let i=balls; i>=balls-share+1; i--) {
      bPs1 *= i;
  }
  for (let i=share; i>=1; i--) {
      sp *= i;
  }
  
  answer = bPs1 / sp;
  return answer;
}

/*
nCm 공식: n! / {(n-m)! * m!}
다만 이대로 수식짜면 오버플로우 현상때문에 오류남...
그러므로 n!과 (n-m)!을 약분해서 수식을 짜야함
nCm
= nP(m+1) / m!
*/
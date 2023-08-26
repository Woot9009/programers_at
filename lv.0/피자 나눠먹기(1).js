//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다.
//피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function stupid(n) {
  let pizza = 0;
  
  for (pizza=0; pizza<=n; pizza++) {
      if (n < 7) {
          return 1;
      } else if (n>=7 && pizza===n) {
          return Math.ceil(pizza/7);
      }
  }
}

function solution(n) {
  return Math.ceil(n/7);
}

//알고리즘 테스트 연습이 필요한 이유...간단한 것을 꼬고 꼬아서 생각함...
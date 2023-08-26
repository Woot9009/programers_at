//머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
//피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
//n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

function ramaProgramer(n) {//while문과 true
  let pizza = 1;
  while(true) {
      if (pizza*6%n === 0) {
          return pizza;
      }
      pizza++;
  }
}

function programers(n) {//for문의 조건식이 true일 경우 실행문 실행, false일 경우 for문 종료
  for (let i = n; ; i+=n) {//0이외의 숫자를 true, 0은 false인 점을 이용해 조건식을 비워둠?!
      if (i % 6 === 0) {
          return i / 6;
      }
  }
}

function solution(n) {
  for (let pizza = 1; ; pizza++) {
      if (pizza*6%n===0) {
          return pizza;
      }
  }
}

/*
n명일 때마다 피자를 1판부터 증가시켜서,
조각이 딱 나누어 떨어지는 순간 return하도록.

나는 for문안에 if문을 사용하지 않고, 조건식에 i%6===0을 넣어둔 채로 return을 해서 undefined가 떴음.
*/
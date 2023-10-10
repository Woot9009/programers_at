/*
Finn은 요즘 수학공부에 빠져 있습니다.
수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15

자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
*/

function runtimeError(n) {
  var answer = 0;
  let sum = 0;
  
  for (let i=1; i<=n; i++) {
      for (let k=i; k<=n; k++) {
          sum += k;
          if (sum === n) {
              answer++;
              break;
          }
      }
      sum = 0;
  }
  
  return answer;
}

/*
1. 이중 for문 활용
2. 첫 for문 조건식은 i=1부터 n까지
3. 두 번째 for문으로 i의 등차수열의 합
4. sum === n 일때 cnt++
5. sum 초기화하고 2번부터 반복

정확성은 맞는데, 효율성 테스트에서 시간 초과 뜸..
*/


function solution(n) {
  var answer = 1;
  
  for (let i=1; i<=n/2; i++) {
      let sum = 0;
      let k=i;
      while (sum < n) sum += k++;
      if (sum == n) answer++;
  }
  
  return answer;
}

/*
1. 이중 for문이 오래걸리는 듯하여 while문으로 바꿈
2. let sum=0; 을 for문 안에서 선언하면 sum초기화를 따로 안해도 됨
3. 어차피 n은 포함이니까 처음에 answer=1; 로 두고, for문의 길이를 절반으로 줄임.
  (예를 들어 7+8=15는 돼도 8이나 9부터 더해서 15되는 경우는 없으니까)
4. 조건식을 sum<=n으로 설정하면 불필요한 계산이 추가됨

while문의 실행문 구조를 잘 기억해두자!!
1씩 증가하는 k를 sum에 += 하는 구조
*/
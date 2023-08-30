//i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
//정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = 0;
  let ip = 1;
  
  for (let i=1; i<=11; i++) {
      ip *= i;
      if (ip>n) {
          answer = i-1;
          break;
      }
  }
  return answer;
}

//if문에 break;를 써서 조건을 만족하는 순간 멈추도록 하는 것이 포인트
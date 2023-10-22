/*
숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다.
기사들은 무기점에서 무기를 구매하려고 합니다.
각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다.
단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고,
제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.

예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다.
만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면,
15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다.
무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다.
그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.

기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와
제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때,
무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.

1 ≤ number ≤ 100,000
2 ≤ limit ≤ 100
1 ≤ power ≤ limit
*/

function err1(number, limit, power) {
  var answer = 0;
  
  for (let i=1; i<=number; i++) {
      let cnt = 0;
      for (let k=1; k<=i; k++) {
          if (i%k === 0) cnt++;
      }
      cnt > limit ? answer+=power : answer+=cnt;
  }
  
  return answer;
}

/*
1. 1부터 number까지 각각의 약수 개수를 구한다
  1-1. 이중 반복문에서 (i%k === 0)이면 cnt++
2. cnt가 limit를 초과할 경우 power를 더하고 아니면 cnt를 더함

일부 시간초과 뜨면서 정확도 66.7% 뜸
*/


function err2(number, limit, power) {
  var answer = 0;
  
  for (let i=1; i<=number; i++) {
      let cnt = 1;
      for (let k=1; k<=i/2; k++) {
          if (i%k === 0) cnt++;
      }
      cnt > limit ? answer+=power : answer+=cnt;
  }
  
  return answer;
}

//for문의 길이를 반으로 줄이되 cnt를 1로 만들었음. 여전히 정확도 92.6%


function solution(number, limit, power) {
  var answer = 0;

  for (let n = 1; n <= number; n++){
      let count = 0;
      for (let j = 1; j * j <= n; j++){
          if (j * j == n) count++;
          else if (n % j == 0) count += 2;
      }
      if (count > limit) count = power;
      answer += count;
  }

  return answer;
}

/*
제곱근을 구하는 Math.sqrt()의 방식을 풀어서 쓴 ver
참고:
https://velog.io/@yeonsubaek/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B8%B0%EC%82%AC%EB%8B%A8%EC%9B%90%EC%9D%98-%EB%AC%B4%EA%B8%B0-JavaScript
*/
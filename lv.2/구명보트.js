/*
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다.
구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면
2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로
구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때,
모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
*/

function solution(people, limit) {
  var answer = 0;
  
  people.sort((a,b)=>b-a);
  while (people.length > 0) {
      for (let i=1; i<people.length; i++) {
          if (people[0]+people[i] <= limit) {
              people.splice(i,1);
              break;
          }
      }
      people.splice(0,1);
      answer++;
  }
  
  return answer;
}

/*
1. people 내림차순 정렬
2. 동승 가능 판별
  2-1. people[0]에 대해 'people[0] + people[i] <= limit'면 동승
  2-2. 아니면 people[0]은 혼자 탑승
  2-3. cnt++하고 탑승자는 splice(i,1)로 삭제
3. 2번을 while문으로 people.length가 0이 될 때까지 반복

break;는 조건문 안에서, people[0]삭제와 answer++은 for문 밖에서 하는 것이 포인트
테스트는 전부 통과하나 효율성에서 시간초과 뜸;;;

오름차순으로 바꾸고, 끝에서부터 동승 가능 판별삭제하다가, people[0]이 limit/2를 초과하면 for문 없이 바로바로 삭제
마찬가지로 효율성에서 시간초과
*/


function solution(people, limit) {
  var answer = 0;
  
  people.sort((a,b)=>b-a);
  for (let i=0, k=people.length-1; i<=k; i++) {
      if (people[i]+people[k] <= limit) k--;
      answer++;
  }
  
  return answer;
}

/*
for문의 초기값을 콤마를 이용해 2개 설정 가능!
그리고 실행문에서 이 초기값을 바꿔주는(k--) 방법을 쓰면 while문이나 이중for문을 쓰지 않고 해결할 수 있음
이를 이용해 시간복잡도 감소
*/
//외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
//정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(emergency) {
  var answer = [];
  let cnt = 1;
  
  for (let i=0; i<emergency.length; i++) {
      for (let check=0; check<emergency.length; check++) {
          if (emergency[i] < emergency[check]) {
            cnt++;
          }
      }
      answer.push(cnt);
      cnt = 1;
  }
  
  return answer;
}

/*
1. i번째 요소를 나머지 요소와 전부 비교
2. i번째 요소가 각요소보다 작을 때마다 cnt를 1씩 증가
3. cnt를 answer배열에 push후 cnt초기화
4. 다음 i번째 요소에 대해 1번부터 반복
*/


function solution(emergency) {
    const temp = [...emergency].sort((a,b)=>b-a)
    return emergency.map(v=>temp.indexOf(v)+1)
}

//spread연산자, 내림차순정렬, map, indexOf
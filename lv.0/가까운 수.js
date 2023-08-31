//정수 배열 array와 정수 n이 매개변수로 주어질 때,
//array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
//가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

function solution(array, n) {
  var answer = 0;
  let check = Math.abs(array[0]-n);
  
  array.sort((a,b) => b-a);
  for (let i=0; i<array.length; i++) {
      if (Math.abs(array[i]-n) <= check) {
          check = Math.abs(array[i]-n);
          answer = array[i];
      }
  }
  
  return answer;
}

/*
'array[i] - n'의 절대값이 가장 작은 array[i]를 찾으면 됨
1. 일단 check 변수에 'array[0]-n'의 절대값을 담은 상태로 for문으로 인덱스0부터 검사
2. 현시점에서 절대값이 check 이하면, check에 현재 절대값 담고 answer에 'array[i]'를 담음
2. for문 종료 후 answer 리턴

주의할 점은 우선 array를 내림차순 정렬해줘야 가장 가까운 수가 여러 개일 경우에도 조건문이 정상작동함
*/
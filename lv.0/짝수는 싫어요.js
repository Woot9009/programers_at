//정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = [];
  
  for(i=1; i<=n; i+=2){
      answer.push(i);
  }
  
  return answer;
}

//for문에서 i<=n으로 설정해야 n이 짝수든 홀수든 상관없이 작동
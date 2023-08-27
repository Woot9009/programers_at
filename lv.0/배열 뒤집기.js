//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다.
//num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  var answer = [];
  
  for (let i=num_list.length; i>=1; i--) {
      answer.push(num_list[i-1]);
  }
  
  return answer;
}

//for문의 조건식을 유의하자
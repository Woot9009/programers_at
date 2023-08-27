//정수가 담긴 리스트 num_list가 주어질 때,
//num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  var answer = [];
  let even = [];
  let odd = [];
  
  for (let i=0; i<num_list.length; i++) {
      if (num_list[i]%2 === 0) {
          even.push(num_list[i]);
      } else {
          odd.push(num_list[i]);
      }
  }
  answer.push(even.length, odd.length);
  
  return answer;
}

//요소를 담을 빈배열을 미리 만들고 for문 안의 if문
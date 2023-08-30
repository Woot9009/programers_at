//문자열 my_string이 매개변수로 주어질 때,
//my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution(my_string) {
  var answer = [];
  
  for (let i=0; i<my_string.length; i++) {
      if (my_string.charAt(i) <= 9) {
          answer.push(Number(my_string.charAt(i)));
      }
  }
  answer.sort((a,b) => a-b);
  
  return answer;
}

//isNaN을 활용하는 방법도 생각해보자
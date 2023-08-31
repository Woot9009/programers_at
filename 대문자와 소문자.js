//문자열 my_string이 매개변수로 주어질 때,
//대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = '';
  
  for (let i=0; i<my_string.length; i++) {
      if (my_string.charCodeAt(i)<96) {
          answer += my_string[i].toLowerCase();
      } else {
          answer += my_string[i].toUpperCase();
      }
  }
  return answer;
}

//아스키코드를 이용해 대소문자 구분
//주의할 점은 toLowerCase()할 때 각각의 문자별로 적용해야함
//my_string.toLwerCase(i)한다고 개별적으로 적용되지 않고 my_string 통째로 적용됨(괄호 안은 무의미)
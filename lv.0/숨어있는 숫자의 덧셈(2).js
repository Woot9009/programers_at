//문자열 my_string이 매개변수로 주어집니다.
//my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
//my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
//연속된 수는 하나의 숫자로 간주합니다.
//문자열에 자연수가 없는 경우 0을 return 해주세요.

function solution(my_string) {
  var answer = 0;
  let tempStr = ''
  let onlyString = true;
  
  for (let i=0; i<my_string.length; i++) {
      if (isNaN(Number(my_string[i])) == false) {//item이 숫자일 때
          tempStr += my_string[i];
          onlyString = false;
      } else if (isNaN(Number(my_string[i]))) {
          answer += Number(tempStr);
          tempStr = '';
      }
  }
  
  if (tempStr !== '') answer += Number(tempStr);
  if (onlyString) answer = 0;
  
  return answer;
}

//여기서 자연수를 일단은 문자형태로 임시변수에 더해야 연속된 수를 하나의 숫자로 간주할 수 있음
//my_string의 마지막이 문자가 아닌 자연수인 경우를 위해 조건문 추가
//문자열에 자연수가 없는 경우 return 0;
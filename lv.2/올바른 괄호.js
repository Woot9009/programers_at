/*
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때,
문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
*/

function err(s){
  var answer = false;
  let cnt = 0;

  for (let i=0; i<s.length; i++) {
      s.charAt(i) === '(' ? cnt++ : cnt--;
  }
  if (cnt===0 && s.charAt(0)==='(' && s.charAt(s.length-1)===')' && s.length%2===0) answer = true;

  return answer;
}

/*
테스트 5, 11에서 실패 뜸...
왜냐면 예를 들어 '( ) ) ( ( )' 이런 경우 조건식은 만족하지만 올바르지 않은 괄호임
최종적으로 cnt===0이 되는 것보다 괄호의 완성이 선행돼야함
괄호의 완성이 선행돼야한다는 말은 cnt가 음수가 돼선 안된다는 말
*/

function solution(s){
  var answer = false;
  let cnt = 0;

  for (let i=0; i<s.length; i++) {
      s[i] === '(' ? cnt++ : cnt--;
      if (cnt<0) return false;
  }
  if (cnt===0 && s[0]==='(' && s[s.length-1]===')' && s.length%2===0) answer = true;

  return answer;
}

//조건식에서 s.length%2===0 생략하면 효율성테스트1에서 시간초과 뜸
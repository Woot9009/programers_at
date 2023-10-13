/*
짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다.
먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다.
그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다.
문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요.
성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = baabaa 라면
b aa baa → bb aa → aa →
의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.
*/

function err(s) {
  for (let k=0; k<s.length; k++){
      for (let i=0; i<s.length-1; i++) {
          if (s[i] === s[i+1]) {
              s = s.replace(s[i],'');
              s = s.replace(s[i],'');
          }
      }
  }
  
  return s.length === 0 ? 1 : 0;
}

//위와 같이 하면 s가 너무 길면 실패 뜨고 역시 효율성테스트도 통과 못함
//while문으로 작성시 테스트케이스에서부터 런타임에러


function solution(s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) { 
      if(stack[stack.length - 1] === s[i]) {
          stack.pop();
      } else {
          stack.push(s[i]);
      }
  }
  
  return !stack.length ? 1 : 0;
}

/*
스택 자료구조형 방법
풀이 참고 https://velog.io/@pest95/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A7%9D%EC%A7%80%EC%96%B4-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0-js
큐, 스택, 트리 개념 https://helloworldjavascript.net/pages/282-data-structures.html
*/

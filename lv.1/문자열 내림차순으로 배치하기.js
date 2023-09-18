//문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
//s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  let answer = '';
  let arr = [];
  
  for (let i=0; i<s.length; i++) {
      arr.push(s.charCodeAt(i));
  }
  arr.sort((a,b)=>b-a);
  for (let i=0; i<arr.length; i++) {
      answer += String.fromCharCode(arr[i]);
  }
  
  return answer;
}

//아스키코드 활용


function simple(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}

//정렬해서 뒤집기
//영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
//my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string) {
  const lower = my_string.toLowerCase();
  const strArray = [...lower];
  
  return strArray.sort().join('');
}

/*
1. 우선 toLowerCase()로 전부 소문자로 바꿔줌
2. 스프레드 연산자를 이용해 문자열 lower의 문자 하나하나를 배열의 요소로 담음
  ex) [ 'h', 'e', 'l', 'l', 'o' ]
3. 배열을 sort()후 join('')으로 문자상태로 덤프
  (여기선 a-b안하고 그냥 sort해주면 됨)
*/
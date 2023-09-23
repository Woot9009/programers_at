/*
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면
각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 n의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
*/

function solution(strings, n) {
  strings.sort((a,b)=>{
      //n번째 글자 기준 정렬
      if(a[n] > b[n]) return 1;
      if(b[n] > a[n]) return -1;

      //위의 경우에 해당하지 않는 a[n]===b[n]인 상황에서 단어 전체 기준 정렬
      if(a > b) return 1;
      if(b > a) return -1;

      //전부 같은 경우 그대로
      return 0;
  });
  return strings;
}

/*
sort()메서드의 이해
https://minzz.tistory.com/64

1. return 1;
  a-b>0 일 때(a>b) a가 먼저
2. return 0;
  a-b=0 일 때(a=b) 그대로
3. return -1;
  a-b<0 일 때(a<b) b가 먼저
*/


function ss(strings, n) {
  return strings.sort().sort((a,b) => a.charCodeAt(n)-b.charCodeAt(n));
}

/*
인덱스n이 같은 경우를 굳이 따로 정렬할 필요 없이
미리 사전순서대로 정렬해버리고(문자순 정렬에서 매개변수 안쓰고 str.sort()하면 됨)
그 배열에 대해 인덱스n기준으로 한 번 더 정렬하면 됨
*/
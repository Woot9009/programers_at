//문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
//이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때,
//A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
  var answer = -1;
  let arrA = [];
  let stop = 0;
  
  for (let i=0; i<A.length; i++) {
      arrA.push(A[i]);
  }
  for (stop=0; stop<A.length; stop++) {
      if (arrA.join('') == B) {
          answer = stop;
          break;
      }
      arrA.unshift(arrA[A.length-1]);
      arrA.pop();
  }
  
  return answer;
}

/*
1. 배열로 만듦
2. unshift로 맨 앞에 마지막 인자 추가
3. pop으로 맨뒤의 인자 삭제
4. 2~3번 반복하다가 B와 일치하면 break;
5. 문자열의 길이만큼 반복해도 일치 안하면 return -1;
*/


let programers=(a,b)=>(b+b).indexOf(a)

//초간단ver
//https://www.youtube.com/watch?v=HwpF73JJC8s&list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS&index=29
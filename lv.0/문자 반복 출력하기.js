//문자열 my_string과 정수 n이 매개변수로 주어질 때,
//my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  var answer = '';
  
  for (let i=0; i<my_string.length; i++) {
      for (let multiple=1; multiple<=n; multiple++) {
          answer = answer + my_string[i];
      }
  }
  
  return answer;
}

function useMap(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}

//for문 안의 for문 사용과
//spread연산자 + map 사용을 비교해보자.
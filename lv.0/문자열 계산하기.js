// /my_string은 "3 + 5"처럼 문자열로 된 수식입니다.
//문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.


function solution(my_string) {
  var answer = 0;
  const sp = my_string.split(" ");
  let array = [];
  
  for (let i=0; i<(my_string.length+1)/2; i++) {
      array.push(sp[i]);
  }
  answer = Number(array[0]);
  for (let i=2; i<array.length; i+=2) {
      if (array[i-1] === "+") {
          answer += Number(array[i]);
      } else if (array[i-1] === "-") {
          answer -= Number(array[i]);
      }
  }
  
  return answer;
}

/*
1. my_string을 마디별로 본래의 문자형 요소 그대로 array에 담음
  1-1. 이때 (my_string.length+1)/2로 조건식을 설정하면 길이가 딱 맞아 undefined가 push되지 않음
2. 그러면 array의 짝수인덱스는 전부 숫자, 홀수인덱스는 전부 +-연산자.
3. 일단 array[0]을 answer에 Number씌워서 더함
4. 이후 짝수 번째 요소마다 현재요소 바로 앞의 연산자를 if문으로 파악해 answer에 가감해주면 됨
*/
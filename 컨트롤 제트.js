//숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다.
//문자열에 있는 숫자를 차례대로 더하려고 합니다.
//이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
//숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

function solution(s) {
  var answer = 0;
  const sp = s.split(" ");
  const array = [];
  let i =0;
  
  while(sp[i] !== undefined) {
      array.push(Number(sp[i]));
      i++;
  }
  for (i=0; i<array.length; i++) {
      if (isNaN(array[i])) array[i] = array[i-1] * -1;
      answer += array[i];
  }
  
  return answer;
}

/*
1. 문자열s를 마디별로 새로운 배열에 담아줌
  1-1. for문은 조건식이 모호하므로 while문 사용
  1-2. 계속해서 s.split(" ")[i];로 마디를 구분하다 s의 끝을 넘어가는 순간 s.split(" ")[끝넘]=undefined;이 됨
  2-3. 그러므로 !== undefined일 때까지 새로운 배열에 Number()를 씌워서 push
2. 새로운 배열에는 문자형 자료였던 숫자는 숫자로, Z는 NaN으로 담김
3. 새로운 배열의 요소들을 차례로 더하되, NaN만 바로 전의 숫자에 -1을 곱한 값으로 바꿔서 계산
*/

//if문에서..
//조건식은 isNaN(array[i])가 true이면 실행하라는 것
//실행문이 한줄이라 화살표함수에서처럼 {}없이 써줘도 됨

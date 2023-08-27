//문자열 my_string이 매개변수로 주어집니다.
//my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let arr = []
  
  for (i=0; i<my_string.length; i++) {
      arr.push(my_string[i]);
  }
  arr.reverse();
  
  return arr.join('');
}

function spread(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}

//spread연산자로 간단하게 가능!!
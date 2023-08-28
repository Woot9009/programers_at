//문자열 my_string과 문자 letter이 매개변수로 주어집니다.
//my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
  var answer = '';
  
  for (let i=0; i<my_string.length; i++) {
      if (my_string.charAt(i) !== letter) {
          answer += my_string.charAt(i);
      }
  }
  
  return answer;
}
//for문 안의 if문


function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}
//split의 인자를 기준으로 분리 -> 배열로 반환


function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}
//replaceAll을 사용해 빈문자열로 대체
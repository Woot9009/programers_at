//영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
//문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = '';
  const aeiou = ['a', 'e', 'i', 'o', 'u'];
  
  for (let i=0; i<my_string.length; i++) {
      let check = false;
      for (let c=0; c<5; c++) {
          if (my_string[i] === aeiou[c]) {
              check = true;
              break;
          }
      }
      if (check) continue;
      answer += my_string[i];
  }
  return answer;
}

/*
1. for문으로 my_string 한글자씩 for문으로 검사
2-1-1. for문안의 for문에서 현재 글자가 모음 중에 일치하는 것이 있다면,
  check = true;로 바꾸고 그 순간 break;로 이후 모음검사 중지하고 2번 for문에서 나옴
2-1-2. check = true라면 1번 for문 continue로 바꿔줌
2-2-1. for문 안의 for문에서 현재 글자가 몸음중에 일치하는 것이 없다면,
  check는 그대로 false인 상태고 answer에 현재 글자 추가
*/

//true & false의 활용, break & continue의 활용 연습! (전형적인 패턴임)


function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

//정규표현식과 replace 활용
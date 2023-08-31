//문자열 my_string이 매개변수로 주어집니다.
//my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
//my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
//대문자와 소문자를 구분합니다.
//공백(" ")도 하나의 문자로 구분합니다.
//중복된 문자 중 가장 앞에 있는 문자를 남깁니다.
//예를 들어 my_string = "We are the world"; answer = "We arthwold";

function solution(my_string) {
  var answer = my_string[0];
  
  for(let i=0; i<my_string.length; i++) {
      let check = false;
      for (let c=0; c<=answer.length; c++) {
          if (my_string[i] === answer[c]) {
              check = true;
              break;
          }
      }
      if (check) continue;
      answer += my_string[i];
  }
  return answer;
}

//모음제거.js와 유사한 양식. 연습하자!!
//break와 continue의 위치. false와 true의 위치 유의!!


function programers(my_string) {
    return [...new Set(my_string)].join('');
}

//Set()을 활용
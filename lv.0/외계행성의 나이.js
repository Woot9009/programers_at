//우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
//입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
//a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
//나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

function solution(age) {
  var answer = '';
  const alphabet= ['a','b','c','d','e','f','g','h','i','j'];
  
  for (let hun=0; hun<=9; hun++) {
      for (let ten=0; ten<=9; ten++) {
          for (let one=0; one<=9; one++) {
              if (hun*100 + ten*10 + one === age) {
                  if (hun===0 && ten!==0) {
                      answer = alphabet[ten]+alphabet[one];
                  }else if (hun===0 && ten===0) {
                      answer = alphabet[one];
                  } else {
                      answer = alphabet[hun]+alphabet[ten]+alphabet[one];
                  }
              } else if (age === 1000) {
                  answer = 'baaa';
              }
          }
      }
  }
  
  return answer;
}

/*
1. for문을 이용해 age와 일치하는 각 자리의 숫자를 찾음
2. 해당 숫자를 alphabet배열의 인덱스번호를 참조해 answer에 대입
  2-1. 1자리 숫자와 2자리 숫자의 경우 001살 020살등이 아닌 1살. 20살로 answer에 대입
  2-2. 3자리 숫자의 경우 찾은 그대로 answer에 대입
  2-3. 최대값인 1000살의 경우 'baaa'대입
*/


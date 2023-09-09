//머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.
//조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
//문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

function programers(babbling) {
  let answer = 0;
  const able_words = ["aya", "ye", "woo", "ma"]; 
  for(let i=0; i<babbling.length; i++) {
      for(let j of able_words) {
          if(babbling[i].includes(j)) {
              babbling[i] = babbling[i].replace(j, "*");
          }
      }
      babbling[i] = babbling[i].replaceAll("*", "");
  }
  babbling.map(item => {
      if(item == "") answer++;
  });
  return answer;
}

/*
1. able_words에 가능한 옹알이를 정의한다.
2. 각 babbling들을 able_words와 비교하여 똑같은 것이 있으면 *와 replace해준다
3. empty string으로 replace할 시 붙어 있지 않은 문자들끼리 붙어 able_words을 만들어서 없어지는 경우가 발생한다.
4. *들을 전부 없애준다.
5. 빈 문자열의 갯수를 구해 제출한다.
*/
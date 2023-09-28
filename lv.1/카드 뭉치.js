/*
문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때,
cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를,
만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
한 번 사용한 카드는 다시 사용할 수 없습니다.
카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.

1 ≤ cards1의 길이, cards2의 길이 ≤ 10
1 ≤ cards1[i]의 길이, cards2[i]의 길이 ≤ 10
cards1과 cards2에는 서로 다른 단어만 존재합니다.
2 ≤ goal의 길이 ≤ cards1의 길이 + cards2의 길이
1 ≤ goal[i]의 길이 ≤ 10
goal의 원소는 cards1과 cards2의 원소들로만 이루어져 있습니다.
cards1, cards2, goal의 문자열들은 모두 알파벳 소문자로만 이루어져 있습니다.
*/

function solution(cards1, cards2, goal) {
  let sentence = '';
  
  for (let i=0; i<goal.length; i++) {
      if (goal[i] === cards1[0]) {
          sentence += cards1[0];
          cards1.shift();
      } else if (goal[i] === cards2[0]) {
          sentence += cards2[0];
          cards2.shift();
      }
  }
  
  return sentence === goal.join('') ? 'Yes' : 'No';
}

/*
순서대로만 사용 가능한 것이 포인트
1. goal[i]와 card[0]이 일치하면 sentence=''; 변수에 넣고 shift();
2. sentence == goal.join('')이면 'yes'
*/
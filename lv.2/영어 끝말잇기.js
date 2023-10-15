/*
1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
이전에 등장했던 단어는 사용할 수 없습니다.
한 글자인 단어는 인정되지 않습니다.
다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

tank → kick → know → wheel → land → dream → mother → robot → tank

위 끝말잇기는 다음과 같이 진행됩니다.

1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
(계속 진행)
계속 진행해 나가다 보면, 3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때,
가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.
*/

function err(n, words) {
  let num = 0;
  let turn = 0;
  
  for (let i=1; i<words.length; i++) {
      if (words[i][0] !== words[i-1][words[i-1].length-1]) {
          num = i % n + 1;
          turn = parseInt(i/n)+1;
          break;
      }
      for (let k=0; k<i; k++) {
          if (words[i] === words[k]) {
              num = i % n + 1;
              turn = parseInt(i/n)+1;
              break;
          }
      }
  }

  return [num, turn];
}

/*
1. 'words[i][0] !== words[i-1][words.length-1]'이면 탈락
2. words[i]가 이전에 나왔던 단어와 일치하면 탈락
3. 탈락자의 번호는 i%n+1, 탈락한 차례는 turn = parseInt(i/n)+1;

정확도 90% 뜸....
*/


function solution(n, words) {
  let num = 0;
  let turn = 0;
  
  for (let i=1; i<words.length; i++) {
      if (words[i][0] !== words[i-1][words[i-1].length-1]) {
          num = i % n + 1;
          turn = parseInt(i/n)+1;
          break;
      }
      if (words.indexOf(words[i]) < i) {
          num = i % n + 1;
          turn = parseInt(i/n)+1;
          break;
      }
  }

  return [num, turn];
}

//2중 반복문을 쓰는 대신 indexOf() 함수를 쓰니 해결됨
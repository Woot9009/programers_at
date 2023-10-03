/*
과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며,
k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.

한 상자에 사과를 m개씩 담아 포장합니다.
상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.
(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면,
다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때,
과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

3 ≤ k ≤ 9
3 ≤ m ≤ 10
7 ≤ score의 길이 ≤ 1,000,000
1 ≤ score[i] ≤ k
이익이 발생하지 않는 경우에는 0을 return 해주세요.
*/

function solution(k, m, score) {
  var answer = 0;
  const spare = score.length % m;
  let box = [];
  let price = 0;
  
  score.sort((a,b)=>a-b);
  score.splice(0,spare);
  
  for (let i=0; i<score.length; i+=m) {
      for (let k=i; k<m+i; k++) {
          box.push(score[k]);
      }
      price = box[0] * m;
      answer += price;
      box.splice(0,m);
  }
  
  return answer;
}

/*
우선 1상자당 가격 변수 선언, 1상자씩 담을 배열 생성
1. score를 오름차순 정렬
2. score.length % m 만큼은 버려지는 사과이므로 splice()로 제거
3. 순서대로 m개씩 상자배열에 담고,
4. 1상자가격 = 상자[0] * m;을 answer에 +=
5. 상자배열 비우고  3~5번 반복

while문으로 하면 시간초과 나는 경우 있음
for문의 조건식과 증감값 유의
*/
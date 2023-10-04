/*
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/

function solution(answers) {
  var answer = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;
  let i=0;
  
  for (i=0; i<answers.length; i++) {
      arr1.push(i%5+1)
  }
  for (i=0; i<answers.length+8; i+=8) {
      arr2.push(2,1,2,3,2,4,2,5);
  }
  for (i=0; i<answers.length+10; i+=10) {
      arr3.push(3,3,1,1,2,2,4,4,5,5);
  }
  for (i=0; i<answers.length; i++) {
      if (answers[i] === arr1[i]) cnt1++;
      if (answers[i] === arr2[i]) cnt2++;
      if (answers[i] === arr3[i]) cnt3++;
  }
  if (cnt1>=cnt2 && cnt1>=cnt3) answer.push(1);
  if (cnt2>=cnt1 && cnt2>=cnt3) answer.push(2);
  if (cnt3>=cnt1 && cnt3>=cnt2) answer.push(3);
  
  return answer;
}
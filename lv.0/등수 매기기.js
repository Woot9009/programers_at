//영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
//영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
//영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
//0 ≤ score[0], score[1] ≤ 100
//1 ≤ score의 길이 ≤ 10
//score의 원소 길이는 2입니다.
//score는 중복된 원소를 갖지 않습니다.

function solution(score) {
  var answer = [];
  let sum = [];
  let cnt = 1;
  let i = 0;
  
  for (i=0; i<score.length; i++) {
      sum.push(score[i][0]+score[i][1]);
  }
  for (i=0; i<sum.length; i++) {
      for (let k=0; k<sum.length; k++) {
          if (sum[i] < sum[k]) cnt ++;
      }
      answer.push(cnt);
      cnt = 1;
  }
  
  return answer;
}

/*
1. score배열 순서 그대로 평균점수 배열을 만듦(사실 비교우열만 가리면 되므로 평균아니고 합산으로 해도 됨)
2. (평균[i] <= 다른 요소)일 경우 cnt++
3. answer에 push()한 후 cnt = 1; 만들고 2번 반복
*/
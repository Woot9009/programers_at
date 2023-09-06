//점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
//[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
//주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
//0 ≤ x, y ≤ 100. x, y는 정수.
//서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
//두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
//임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.

const line = (a,b) => {
  return (a[1]-b[1]) / (a[0]-b[0]);
}

function solution(dots) {
  var answer = 0;
  if (line(dots[0],dots[1]) === line(dots[2],dots[3])) answer = 1;
  if (line(dots[0],dots[2]) === line(dots[1],dots[3])) answer = 1;
  if (line(dots[0],dots[3]) === line(dots[1],dots[2])) answer = 1;
  
  return answer;
}

/*
두 직선의 기울기가 일치하는 경우를 찾으면 됨
직선그래프의 기울기는 y증가량 / x증가량
'dots[i][1]-dots[j][1] / dots[i][0]-dots[j][0] === 나머지 두 점을 이은 선분기울기'면 평행
*/
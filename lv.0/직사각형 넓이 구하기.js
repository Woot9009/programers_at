//2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
//직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
//직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  let garo = 0;
  let sero = 0;
  
  for(let i=0; i<dots.length-1; i++) {//nextXY를 구하는 식을 포함하므로 length-1을 해주는 것이 포인트
      const [x,y] = dots[i];
      const [nx, ny] = dots[i+1];
      garo = Math.max(Math.abs(nx-x), garo);
      sero = Math.max(Math.abs(ny-y), sero);
  }
  
  return garo*sero;
}

//x좌표끼리 뺏을 때 나올 수 있는 경우의 수는 0, 음수, 정수. y좌표도 마찬가지
//0이 아닌 값중의 절대값의 최대값이 가로의 길이.
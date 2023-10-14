/*
Leo는 카펫을 사러 갔다가 아래 그림과 같이
중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만,
전체 카펫의 크기는 기억하지 못했습니다.
Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때
카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
*/

function solution(brown, yellow) {
  let rowcol = [];
  const brown2 = (brown-4) / 2;
  
  for (let i=1; i<=Math.ceil(yellow/2); i++) {
      if (yellow%i === 0) {
          rowcol.push([yellow/i, i]);
      }
  }
  
  for (let i=0; i<rowcol.length; i++) {
      if (rowcol[i][0]+rowcol[i][1] === brown2) {
          return [rowcol[i][0]+2, rowcol[i][1]+2];
      }
  }
}

/*
1. 노랑의 약수쌍을 찾아 배열로 만듦
  (조건식을 절반에서 올림한 값인 i<=Math.ceil(yellow/2); 으로 설정하면 맞아떨어짐)
2. '(약수[0]+약수[1])*2 + 4 = 갈색'이면 그 약수가 노랑의 가로세로 (a>=b)
  (약수[0]+약수[1] = (갈색-4)/2 로 바꿔서 for문에서의 연산을 줄이자)
3. return [약수[0]+2, 약수[1]+2];
*/
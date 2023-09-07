//선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.
//모든 선분은 길이가 1 이상입니다.
//-100 ≤ start < end ≤ 100
//예를 들어 lines가 [[0, 2], [-3, -1], [-2, 1]]일 때
//선분이 두 개 이상 겹친 곳은 -2 ~ -1, 0 ~ 1로 길이 2만큼 겹쳐있습니다.

const arrToNumbers = (arr,numbers) => {
  for (let i=arr[0]; i<=arr[1]; i++) {
      numbers.push(i);
  }
}

function solution(lines) {
  let cnt = 0;
  let cntTemp = 0;
  let line0 = [];
  let line1 = [];
  let line2 = [];
  let lineTemp = [];
  arrToNumbers(lines[0],line0);
  arrToNumbers(lines[1],line1);
  arrToNumbers(lines[2],line2);
  
  //line0 순회하면서 line1 검사
  for (let i=0; i<line0.length; i++) {
      for (let j=0; j<line1.length; j++) {
          if (line0[i] === line1[j]) {
              cntTemp++;
              lineTemp.push(line0[i]);//3개 겹칠 경우 계산위해 미리 임시배열에 담음
          }
      }
  }
  if (cntTemp>0) {
      cnt += cntTemp-1;
      cntTemp = 0;
  }
  
  //line0 순회하면서 line2 검사
  for (let i=0; i<line0.length; i++) {
      for (let j=0; j<line2.length; j++) {
          if (line0[i] === line2[j]) cntTemp++;
      }
  }
  if (cntTemp>0) {
      cnt += cntTemp-1;
      cntTemp = 0;
  }
  
  //line1 순회하면서 line2 검사
  for (let i=0; i<line1.length; i++) {
      for (let j=0; j<line2.length; j++) {
          if (line1[i] === line2[j]) cntTemp++;
      }
  }
  if (cntTemp>0) {
      cnt += cntTemp-1;
      cntTemp = 0;
  }
  
  //3개 선분이 동시에 겹치는 경우 차감
  for (let i=0; i<lineTemp.length; i++) {
      for (let j=0; j<line2.length; j++) {
          if (lineTemp[i] === line2[j]) cntTemp++;
      }
  }
  if (cntTemp>0) {
      cnt = cnt - (cntTemp-1)*2;
  }
  
  return cnt;
}

/*
1. 선분의 시작 끝 좌표가 아니라 start~end의 연속된 정수배열로 바꿈
2. 그리고 '겹친 길이'를 각 배열끼리 '중복된 숫자의 개수-1'로 치환해서 생각해보자
  2-1. cnt=0 변수 선언
  2-2. line0 순회하면서 line1 검사
  2-3. line0 순회하면서 line2 검사
  2-4. line1 순회하면서 line2 검사

위와 같이 하면 3개 선분이 동시에 겹치는 경우까지 cnt해서 기대값과 다르게 나옴
3. 3개가 겹치는 경우만 마지막에 2번 빼주면 됨
*/
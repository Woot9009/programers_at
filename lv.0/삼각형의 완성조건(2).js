//선분 세 개로 삼각형을 만들기 위해서는 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
//삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.(sides의 원소는 자연수입니다.)
//나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
  let case1 = 0;
  let case2 = 0;
  
  sides.sort((a,b)=>b-a);
  for (let i=sides[0]-sides[1]+1; i<=sides[0]; i++) {
      case1 ++;
  }
  for (let i=sides[0]+1; i<sides[0]+sides[1]; i++) {
      case2 ++;
  }
  
  return case1 + case2;
}

//가장 긴 변이 sides의 최대값이 되는 경우와, 제3의 정수가 되는 경우 두 가지로 나눠서 생각
//선분 세 개로 삼각형을 만들기 위해서는 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
//삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
//세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
  sides.sort((a,b) => a-b);
  const [one, two, three] = sides;
  let answer = (one+two > three) ? 1 : 2;
  
  return answer;
}

/*
1. 배열을 오름차순 정렬
2. 변 길이 순서대로 one two three 변수에 구조분해할당
3. 삼항연산자로 조건을 만족하면 1 아니면 2
*/
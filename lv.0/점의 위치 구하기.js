//x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다.
//좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
//(cf.1사분면부터 반시계 방향으로 234분면)

function solution(dot) {
  const [num,num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}

//구조분해 할당으로 x좌표, y좌표를 변수 num, num2에 순서대로 할당
//삼항연산자 안의 삼항연산자
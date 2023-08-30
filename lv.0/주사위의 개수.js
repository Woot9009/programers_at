//머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
//상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때,
//상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(box, n) {
  var answer = 1;
  
  for (let i=0; i<3; i++) {
      answer *= Math.floor(box[i]/n);
  }
  
  return answer;
}

/*
주사위는 어차피 박스모서리 길이 이하로만 들어갈 수 있음
'n<=각각의 모서리'인 n의 최대값을 곱하면 answer
모서리를 n으로 나눈 몫에서 소수점을 내려주면 n의 최대값
*/


function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}

//구조분해할당을 이용해 box의 원소를 변수에 담아서 사용한 방법
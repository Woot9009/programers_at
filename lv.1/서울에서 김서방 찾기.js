//String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
//"김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
//seoul에 "Kim"은 반드시 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
  for (let i=0; i<seoul.length; i++) {
      if (seoul[i] === 'Kim') {
          return `김서방은 ${i}에 있다`
          break;
      }
  }
}

//백틱


function findKim(seoul) {
  return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}

//indexOf()를 활용한 방법
//문자열뿐만아니라 배열도 indexOf()를 사용가능하다!
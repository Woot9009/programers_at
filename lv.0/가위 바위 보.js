//가위는 2 바위는 0 보는 5로 표현합니다.
//가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
//rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

function solution(rsp) {
  var answer = '';
  
  for (let i=0; i<rsp.length; i++) {
      switch(rsp.charAt(i)) {
          case '2':
              answer += '0';
              break;
          case '0':
              answer += '5';
              break;
          case '5':
              answer += '2';
              break;
      }
  }
  
  return answer;
}

/*
for문으로 순회하면서 switch문으로 answer에 순서대로 추가
케이스가 범위가 아닌 지정값이므로 if문이 아닌 switch문으로도 가능
*/


const win = {
    "2": "0",
    "0": "5",
    "5": "2",
}

function solution(rsp) {
    var answer = '';
    
    for (let i=0; i<rsp.length; i++) {
        const item = rsp[i];
        answer += win[item];
    }
    
    return answer;
}

//항상 같은 값이 대응되므로 객체형 자료로 만들어서 키에 대응하는 값 반환


function solution(rsp) {
    return rsp.split("").map((v) => v==="2" ? 0 : (v==="0" ? 5 : 2)).join("")
}

//삼항연산자를 두번 사용
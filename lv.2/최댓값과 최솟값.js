//문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
//str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
//예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

function solution(s) {
  var answer = '';
  const sp = s.split(' ');
  let num = [];
  
  for (let i=0; i<sp.length; i++) {
      num.push(Number(sp[i]));
  }
  num.sort((a,b)=>a-b);
  answer = num[0] + ' ' + num[num.length-1];
  
  return answer;
}

//min max에 배열을 넣고 왜 안되지 하다가 돌고 돌아...


function spread(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}

//min max를 쓸 때 그냥 배열을 넣으면 안됨. 스프레드 연산자 활용이 포인트!!!!
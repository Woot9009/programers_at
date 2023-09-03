//문자열 my_str과 n이 매개변수로 주어질 때,
//my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  var answer = [];
  let tempStr = '';
  
  for (let i=0; i<my_str.length; i++) {
      tempStr += my_str[i];
      if (i%n === n-1) {
          answer.push(tempStr);
          tempStr = '';
      }
  }
  if (tempStr.length > 0) {
      answer.push(tempStr);
  }
  
  return answer;
}

//조건식에서 나머지 연산자를 활용하는 것이 포인트
//임시변수를 만들고 조건식을 만족하면 push하고 비우고
//자투리 글자가 남으면 그대로 push
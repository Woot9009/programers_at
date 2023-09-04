//한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
//다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
//덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
//동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요.
//같은 식이라면 가장 짧은 수식을 return 합니다.
//polynomial은 양의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
//예를 들어 polynomial="3x + 7 + x"; answer="4x + 7";

function solution(polynomial) {
  var answer = '';
  let xValue = 0;
  let numValue = 0;
  const sp = polynomial.split(" + ");
  
  for (let i=0; i<sp.length; i++) {
      const item = sp[i];
      if (item[item.length-1] !== "x") {
          numValue += Number(item);
      } else {
          const xNum = item.split("x")[0];
          if (xNum === '') xValue += 1;
          else xValue += Number(xNum);
      }
  }
  
  if (xValue === 1) answer += "x";
  else if (xValue > 1) answer +=`${xValue}x`;
  
  if (xValue === 0 && numValue >0) answer += numValue;
  else if (numValue > 0) answer +=` + ${numValue}`;
  
  return answer;
}
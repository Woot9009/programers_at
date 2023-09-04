//정수 배열 numbers가 매개변수로 주어집니다.
//numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
//예를 들어 numbers=[1, 2, -3, 4, -5]; answer=15;

function solution(numbers) {
  let plusMultiple = 0;
  let minusMultiple = 0;
  
  numbers.sort((a,b)=>a-b);
  plusMultiple = numbers[numbers.length-2]*numbers[numbers.length-1];
  minusMultiple = numbers[0]*numbers[1];
  
  const maxValue = (plusMultiple>=minusMultiple) ? plusMultiple : minusMultiple;
  
  return maxValue;
}

//오름차순 정렬
//맨끝 2개의 곱과 맨앞 2개의 곱을 삼항연산자로 비교해 return
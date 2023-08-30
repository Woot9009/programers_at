//정수 배열 numbers가 매개변수로 주어집니다.
//numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  numbers.sort((a,b)=>a-b);
  return numbers[numbers.length-1] * numbers[numbers.length-2];
}

//오름차순 정렬


function programers(numbers) {
    let [x, y] = numbers.sort((a,b) => b - a);
    return x * y;
}

//내림차순으로 정렬한 배열을 비구조화 할당으로 맨 앞 2개 요소만 변수지정
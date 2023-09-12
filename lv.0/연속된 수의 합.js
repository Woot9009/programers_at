//연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
//두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때,
//정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
//1 ≤ num ≤ 100
//0 ≤ total ≤ 1000
//num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
//정수배열의 요소에 음수가 오는 경우 주의
//예를 들어 num=5; total=5; answer=[-1,0,1,2,3];

function sum(num, total) {
  var answer = [];
  let sum = 0;
  
  for (let leadNum = total; leadNum>-500; leadNum--) {
      for (let i=0; i<num; i++) {
          sum += leadNum-i;
          answer.push(leadNum-i);
      }
      if (sum === total) {
          return answer.sort((a,b)=>a-b);
          break;
      } else {
          sum = 0;
          answer = [];
      }
  }
}

/*
1. total부터 num만큼 더해서 total과 비교
2. 'total == sum'이 될 때까지 total-1부터 num만큼 더해서 total과 비교
3. sum의 정수들을 오름차순으로 배열에 담아서 return;
어디서 오류인지 모르겠는데 정확도 90% 뜸;;;
*/


function math(num, total) {
  var answer = [];
  let sum = 0;
  
  for (let leadNum = total; leadNum>-500; leadNum--) {
      if (total === num * (2*leadNum + 1-num) / 2) {
          for (let i=0; i<num; i++) {
              sum += leadNum-i;
              answer.push(leadNum-i);
          }
          return answer.sort((a,b)=>a-b);
          break;
      }
  }
}

/*
등차수열의 합 공식
첫항a 갯수n 공차d
n{2a + (n-1)d} / 2

num * (2*leadNum + 1-num) / 2

얘도 마찬가지로 테스트9에서 에러나면서 정확도 90%ㅠㅠ
*/


function useAverage(num, total) {
  // 초기 값을 구하는 과정
  // total / num 으로 연속 되는 숫자의 중간 값을 구한다.
  // 구한 중간 값에서 num / 2의 내림을 해서 구한 자릿수 값을 빼고
  // 그 값을 올림으로 해서 초기 값을 구한다.

  // ex) num = 4 / total = 14
  // total / num = 3.5
  // num / 2 = 2
  // 3.5 - 2 = 1.5를 올림 처리해서 초기 값은 2
  const min = Math.ceil(total / num - Math.floor(num / 2));

  // Array.from() 메서드를 이용해 구해둔 초기값 부터
  // num의 길이 만큼 해서 답을 구한다.
  return Array.from({ length: num }, (_, i) => i + min);
}

console.log(useAverage(3, 12)); // [3, 4, 5]
console.log(useAverage(5, 15)); // [1, 2, 3, 4, 5]
console.log(useAverage(4, 14)); // [2, 3, 4, 5]
console.log(useAverage(5, 5)); // [-1, 0, 1, 2, 3]

//Array.from이라는 내장함수
//https://leejams.github.io/%EC%97%B0%EC%86%8D%EB%90%9C-%EC%88%98%EC%9D%98-%ED%95%A9/
/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(nums) {
  let answer = 0;
  

  for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              if (isPrime(nums[i] + nums[j] + nums[k])) {
                  answer++;
              }
          }
      }
  }
  
  return answer;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }

  return true;
}

/*
1. 3중 for문을 활용해 서로 다른 3개를 고르는 경우의 수를 훑는다
2. 매개변수가 소수임을 판별하는 함수를 별도로 만들고 true면 answer++
3. 제곱근을 구하는 Math.sqrt() 함수를 활용해 소수 판별

참고: https://gurtn.tistory.com/101
*/
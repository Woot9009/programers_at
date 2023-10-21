/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
n은 2이상 1000000이하의 자연수입니다.
*/

function solution(n) {
  var answer = 0;
  
  for (let i=2; i<=n; i++) {
      let cnt = 0;
      for (let k=2; k<=i; k++) {
          if (i%k === 0) cnt++
      }
      if (cnt === 1) answer++;
  }
  
  return answer;
}

//일부 케이스에서 시간초과 뜨고 효율성 테스트 실패ㅠㅠ


function solution(n) {
  let answer = [];
  
  function isPrime (n) {
    for(let x of answer) {
      if (x>Math.sqrt(n)) return true
      if (Number.isInteger(n/x)) return false
    }
    return true
  }
  
  for (let i=2; i<=n; i++) {
		if (!i%2) continue
    if (isPrime(i)) answer.push(i)
  }
  
  return answer.length;
}

/*
소수 찾는 법을 이용한 함수
  1보다 큰 모든 자연수는 소수의 곱으로 이루어져 있다.
  따라서 100이 소수인지 확인하기 위해서는 100보다 작은 소수를 이용하면 된다.
  자연수 n이 있을 때 √n 보다 작은 수로 나눠 떨어지지 않으면 n은 소수이다.
  2보다 큰 모든 짝수는 2로 나누어 떨어지는 소수가 아닌 수이다.

Math.sqrt() - 숫자의 제곱근을 찾음
Number.isInteger() - 숫자가 정수인지 확인

참고: https://velog.io/@te-ing/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%86%8C%EC%88%98%EC%B0%BE%EA%B8%B0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%EC%86%8C%EC%88%98%EB%A5%BC-%EC%B0%BE%EB%8A%94-%EB%B0%A9%EB%B2%95
*/
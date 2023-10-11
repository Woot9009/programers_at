/*
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
*/

function cnt1(x) {
  let two = x.toString(2);
  let cnt = 0;
  for (let i=0; i<two.length; i++) {
      if (two[i] == '1') cnt++;
  }
  return cnt;
}

function solution(n) {
  var answer = n+1;
  let n1 = cnt1(n);
  let next1 = cnt1(answer);
  
  while (n1 !== next1) {
      answer++;
      next1 = cnt1(answer);
  }
  
  return answer;
}

/*
1. 2진수로 변환했을 때의 1의 갯수를 세는 함수를 별도로 만듦
2. while문으로 조건을 만족할 때까지 숫자를 키우면 됨
*/
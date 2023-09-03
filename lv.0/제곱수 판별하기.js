//어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
//정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
//1 ≤ n ≤ 1,000,000

function solution(n) {
  var answer = 2;
  
  if (n === 1) {
      answer = 1;
  } else {
      for (let i=2; i<=1000; i++) {
          if (n === i*i) {
              answer = 1;
              break;
          }
      }
  }
  
  return answer;
}


//조건 위와같이 너무 복잡하게 안하고 아래처럼 해도 됨

function solution(n) {
  for (let i=0; i*i <= n; i++) {
      if (i*i === n) return 1
  }
  return 2;
}
//조건문을 만족하는 순간 return 2;에 가기전에 return 1;하고 끝남
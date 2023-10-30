//두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
//배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.

function solution(n, m) {
  var answer = [];
  const lower = Math.min(n,m);
  let max = 0;
  
  for (let i=1; i<=lower; i++) {
      if (n%i===0 && m%i===0 && i>max) max = i;
  }
  
  let min = n * m / max;
  
  answer.push(max,min);
  
  return answer;
}

//최소공배수 = (num1 * num2) / 최대공약수


function solution(n, m) {
  var answer = [];
  const lower = Math.min(n,m);
  const higher = Math.max(n,m);
  let max = 0;
  let min = n * m;
  
  for (let i=1; i<=lower; i++) {
      if (n%i===0 && m%i===0 && i>max) max = i;
  }
  for (let i=min; i>=higher; i--) {
      if (i%n===0 && i&m===0 && i<min) min = i;
  }
  answer.push(max,min);
  
  return answer;
}

//이렇게 하면 최소공배수가 n*m 상태에서 줄어들지 않음;; 왜지;;;;;

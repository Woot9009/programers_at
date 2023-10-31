/*
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다.
정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.
arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다.
*/

const min = (a,b) => {
  let max = 0;
  for (let i=1; i<=a; i++) {
      if (a%i === 0 && b%i === 0 && i>max) max = i;
  }
  return a * b / max
}

function solution(arr) {
  var answer = arr[0];
  
  for (let i=1; i<arr.length; i++) {
      answer = min(answer,arr[i]);
  }
  
  return answer;
}

/*
최소공배수 = (num1 * num2) / 최대공약수
숫자가 여러개일 경우 n1 n2의 최소공배수를 구하고, 그 최소공배수와 n3의 최소공배수를 구하는 식으로 반복하면 됨
1. 2개 숫자의 최소공배수 구하는 함수
  1-1. 1부터 늘려가며 나머지가 0인 최대공약수를 구함 (if문에서 i>max가 있어야 최대까지 올라감)
  1-2. 최대공약수를 이용해 두 수의 최소공배수를 return
2. arr의 요소에 대해 2개씩 순서대로 최소공배수 구함
  2-1. arr의 길이가 1이라면 최소공배수는 그냥 본인이므로 처음에 answer = arr[0];
  2-2. 인덱스 1부터 끝까지 answer와 arr[i] 두 수의 최소공배수 구함 (매개변수에 answer가 들어가는게 포인트)
*/
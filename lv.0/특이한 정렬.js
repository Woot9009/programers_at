//정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
//이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
//정수가 담긴 배열 numlist와 정수 n이 주어질 때
//numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
//1 ≤ n ≤ 10,000
//1 ≤ numlist의 원소 ≤ 10,000
//1 ≤ numlist의 길이 ≤ 100
//numlist는 중복된 원소를 갖지 않습니다.

function solution(numlist, n) {
  let answer = [];
  let arr = [];
  let distance = {};
  
  for (let i=0; i<numlist.length; i++) {
      distance[numlist[i]] = Math.abs(numlist[i]-n);
  }
  arr = Object.entries(distance);
  arr.sort((a,b)=>b[0]-a[0]);
  arr.sort((a,b)=>a[1]-b[1]);
  
  for (let i=0; i<arr.length; i++) {
      answer.push(Number(arr[i][0]));
  }
  
  return answer;
}

/*
Math.abs(numlist[i]-n)이 n으로부터의 거리
1. 이를 아래와 같은 객체로 만들어보자
  let distance = {
    numlist[i]: 거리
  }
  1-1. 이때 키는 항상 문자로 시작해야 하므로 ['num':거리]의 형태로 프로퍼티 생성됨
  1-2. 'num'의 오름차순 기준으로 키가 정령돼있음
2. 위의 객체를 Object를 이용해 [키:값]의 형태로 배열로 만듦
3. 이후 push할 때 거리가 같을 경우 더 큰 수를 앞에 오기 쉽게 미리 'num'을 기준으로 ['num':거리] 내림차순 정렬
4. 거리를 기준으로 ['num':거리] 오름차순 정렬
5. 순서대로 'num'에 Number()씌워서 push하면 완성
*/
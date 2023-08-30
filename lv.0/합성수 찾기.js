//약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
//자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
//예를 들어 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.

const getIsCnt = (i) => {
  let isCnt = false;
      for (let num=2; num<i-1; num++) {
          if (i%num === 0) {//합성수
              isCnt = true;
          }
      }
  return isCnt;
}

function solution(n) {
  let answer = 0;
  
  for (let i=n; i>=1; i--) {//i가 합성수인지 비교해야 하는 숫자
      const isCnt = getIsCnt(i);
      if(isCnt) {
          answer++;
      }
  }
  
  return answer;
}

/*
1과 자신 사이에 약수가 하나라도 있으면 합성수(소수의 반대)
그러므로 '2 ~ x-1' 사이에 'x%i === 0'이 하나라도 있으면 x는 합성수
*/

//복잡한 부분을 콜백함수로 만들어서 정리후 호출
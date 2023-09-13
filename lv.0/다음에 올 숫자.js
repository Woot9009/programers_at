//등차수열 혹은 등비수열 common이 매개변수로 주어질 때,
//마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
//2 < common의 길이 < 1,000
//-1,000 < common의 원소 < 2,000
//common의 원소는 모두 정수입니다.
//등비수열인 경우 공비는 0이 아닌 정수입니다.

function solution(common) {
  var answer = 0;
  
  if (common[1]%common[0]===0 && common[2]%common[1]===0) {
      answer = common[common.length-1] * (common[1]/common[0]);
  } else answer = common[common.length-1] + (common[common.length-1]-common[common.length-2]);
  
  return answer;
}

/*
common을 판별해서 등차수열인 경우와 등비수열인 경우를 나눠서 생각
1.등비수열
  1-1. 첫항으로 다음항을 나눴을 때 나머지가 0이면서 둘째항으로 다음항을 나눴을 때 나머지가 0
  1-2. return 끝항 * 공비;
2. 등차수열은 1번의 else
  2-1. retrun 끝항 + (끝항-'끝-1항');
*/
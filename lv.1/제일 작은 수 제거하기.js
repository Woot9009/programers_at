/*
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
*/

function solution(arr) {
  let deleteNum = arr[0];
  
  if (arr.length === 1) return [-1];
  for (let i=1; i<arr.length; i++) {
      if (arr[i] < deleteNum) deleteNum = arr[i];
  }
  for (let i=0; i<arr.length; i++) {
      if (arr[i] === deleteNum) arr.splice(i,1);
  }
  
  return arr;
}

//arr.splice(삭제할인덱스, 몇개삭제);


function programers(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

//indexOf()와 Math.min()을 활용한 방법
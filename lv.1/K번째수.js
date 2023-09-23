/*
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

예를 들어 array=[1, 5, 2, 6, 3, 7, 4]; commands=[[2, 5, 3], [4, 4, 1], [1, 7, 3]]; answer=[5, 6, 3];

array의 길이는 1 이상 100 이하입니다.
array의 각 원소는 1 이상 100 이하입니다.
commands의 길이는 1 이상 50 이하입니다.
commands의 각 원소는 길이가 3입니다.
*/

function solution(array, commands) {
  var answer = [];
  let temp = [];
  
  for (let m=0; m<commands.length; m++) {
      let [i,j,k] = commands[m];
      
      temp = array.slice(i-1, j);
      temp.sort((a,b)=>a-b);
      answer.push(temp[k-1]);
      temp = [];
  }
  
  return answer;
}

/*
new = arr.slice(시작 인덱스번호, 마지막인덱스번호-1); 하면 arr의 시작인~마지인까지 복사해서 new에 넣음
1. let temp = array.slice(i-1, j)를 command의 0번요소부터 진행
  1-1. 이때 for문 안에서 구조분해할당을 통해 2차원배열인 commands를 단순화
  1-2. commands[m]의 원소3개에 대해 각각 i,j,k 변수에 구조분해할당
2. temp정렬
3. answer.push(temp[k]); 하고 temp 리셋
4. 1~3번 반복
*/

//정수 배열 array가 매개변수로 주어질 때,
//가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
//0 ≤ array 원소 ≤ 1,000
//array에 중복된 숫자는 없습니다.

function solution(array) {
  var answer = [];
  let maxValue = -1;
  let maxIndex = 0;
  
  for (let i=0; i<array.length; i++) {
      if (maxValue < array[i]) {
          maxValue = array[i];
          maxIndex = i;
      }
  }
  answer.push(maxValue, maxIndex);
  
  return answer;
}

//그때그때 갱신을 최대값과 해당 인덱스 변수를 지정하고, array[i]마다 체크하는 것이 포인트!!!!
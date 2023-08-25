//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.
//정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  array.sort((a,b)=>a-b);
  return array[Math.trunc(array.length/2)];
}

//인덱스는 0부터 매기기 때문에 Math.floor나 Math.trunc를 써야지 Math.ceil을 써서 올리면 안됨
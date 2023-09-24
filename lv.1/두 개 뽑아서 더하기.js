//정수 배열 numbers가 주어집니다.
//numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
//배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = [];
  
  while (numbers.length>0) {
      for (let i=1; i<numbers.length; i++) {
          if (answer.indexOf(numbers[0] + numbers[i]) === -1) {
              answer.push(numbers[0] + numbers[i]);
          }
      }
      numbers.shift();
  }
  
  return answer.sort((a,b)=>a-b);
}

/*
1. 가장 첫 요소(numbers[0])부터 배열의 끝까지 각각 더하는데
2. answer의 요소중에 현재 더한 값과 동일한 값이 없다면 answer에 push
  (이때 indexOf()를 활용. indexOf(값)은 처음 등장하는 값의 인덱스를 반환하는데 없으면 -1 반환)
3. shift()를 이용해 가장 첫 요소를 삭제하고, while문을 이용해 1~2번의 과정을 반복
  (while문을 쓰면 numbers의 길이 고민 없이 쉽게 가능)
4. 오름차순정렬하고 return
*/
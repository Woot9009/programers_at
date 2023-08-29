//정수 배열 num_list와 정수 n이 매개변수로 주어집니다. (num_list의 길이는 n의 배 수개, n은 2이상)
//num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
//num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
//2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다. 예를 들어
//num_list = [1, 2, 3, 4, 5, 6, 7, 8];
//answer = [[1, 2], [3, 4], [5, 6], [7, 8]];

function solution(num_list, n) {
  var answer = [];
  let temp = [];
  
  for (let i=0; i<num_list.length; i++) {
      temp.push(num_list[i]);
      if (temp.length === n) {
          answer.push(temp);
          temp = [];
      }
  }
  
  return answer;
}

/*
1. num_list에서 순서대로 temp배열에 push
2. temp배열의 길이가 n과 같아지는 순간 answer배열의 원소로 temp배열 push
3. temp배열 비워줌(for문에서 계속 수정하므로 처음에 배열 생성시 const로 하면 오류남)
4. num_list의 끝까지 1번부터 반복
*/



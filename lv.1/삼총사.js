/*
한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다.
이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때,
첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다.
또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다.
따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때,
학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

3 ≤ number의 길이 ≤ 13
서로 다른 학생의 정수 번호가 같을 수 있습니다.
*/

function solution(number) {
  var answer = 0;
  
  for (let i=0; i<number.length-2; i++) {
      for (let k=i+1; k<number.length-1; k++) {
          for (let m=k+1; m<number.length; m++) {
              if (number[i] + number[k] + number[m] === 0) answer++;
          }
      }
  }
  
  return answer;
}

/*
1. number[i]에 대하여 for문
2. number[i+k]에 대하여 for문
3. number[i+k+m]에 대하여 for문
  3-1. 위의 3수를 더해서 0이면 cnt++;
1~3으로 3개를 뽑는 경우의 수 커버가능
*/
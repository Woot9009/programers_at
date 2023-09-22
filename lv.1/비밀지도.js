/*
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다.
그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다.
다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자.
지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다.
지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
"지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

입력 형식
입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.
1 ≦ n ≦ 16
arr1, arr2는 길이 n인 정수 배열로 주어진다.
정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.

출력 형식
원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.

매개변수	값
n	        5
arr1	    [9, 20, 28, 18, 11]
arr2	    [30, 1, 21, 17, 28]
출력	    ["#####","# # #", "### #", "# ##", "#####"]
*/

function error(n, arr1, arr2) {
  var answer = [];
  let wall = '';
  
  for (let i=0; i<n; i++) {
      let check = String(Number(arr1[i].toString(2)) + Number(arr2[i].toString(2)));
      
      for (let m=0; m<n-check.length; m++) {
          check = '0' + check;
      }
      
      for (let k=0; k<check.length; k++) {
          check[k] === '0' ? wall+=' ' : wall+='#';
      }
      answer.push(wall);
      wall = '';
  }
  
  return answer;
}

/*
num.toString(n진법으로) & parseInt(num,n진법에서)

1. 우선 toString(2)로 arr의 요소들을 2진법으로
2. 2진법 형태의 arr1[i] + arr2[i]
  (이때 덧셈에서 각항에 Number()씌우면 2진법 형태를 유지한채로 10진법으로 더해짐)
3. for문으로 String(덧셈한 수)[k]에 대해 0이 아니면 '#', 0이면 ' '를 wall에 +=
4. 2번의 for문에서 answer.push(wall);하고 wall리셋

위와 같이 하면 덧셈의 맨 앞이 0인 경우를 반영하지 못함
  2-1. check의 길이가 n보다 작으면 맨 앞이 0이라는 얘기
  2-2. 그만큼 check의 앞에 '0'을 추가 (이때 for문에서 조건식 위와 같이 하면 if문 따로 안써도 됨)

정확도 75% 뜸;;;;

덧셈을 하지 말고 각각의 각각의 요소에 대해 0인지 1인지 검사하는 방식을 해볼까
*/


function solution(n, arr1, arr2) {
  var answer = [];
  let trans1 = [];
  let trans2 = [];
  let wall = '';
  
  for (let i=0; i<n; i++) {
      trans1.push(arr1[i].toString(2));
      trans2.push(arr2[i].toString(2));
  }
  for (let i=0; i<n; i++) {
      while(trans1[i].length < n) {
          trans1[i] = '0' + trans1[i];
      }
      while(trans2[i].length < n) {
          trans2[i] = '0' + trans2[i];
      }
  }
  
  for (let i=0; i<n; i++) {
      for (let k=0; k<n; k++) {
          (trans1[i][k]==='0' && trans2[i][k]==='0') ? wall += ' ' : wall += '#';
      }
      answer.push(wall);
      wall = '';
  }
  
  return answer;
}

/*
1. 우선 toString(2)로 arr의 요소들을 2진법으로 만든 새로운 trans배열 생성
2. trans배열의 각 요소에 대해 while문으로 요소의 길이가 n과 같아질 때까지 요소의 앞에 '0'추가해서 자릿수 맞춤
(여기까지가 사전작업)
3. trans1[i][k] 와 trans2[i][k] 모두 '0'이면 ' ', 아니면 '#'을 wall에 +=
4. trans[i]에서 answer.push(wall);하고 wall리셋

통과!! :)
다만 여기서 맨앞에 0을 추가해서 자릿수를 맞출 때,
while이 아닌 for문을 쓰면 어떤 자릿수는 정상작동이고 어떤 자릿수는 부족한 경우가 있었음.
위의 방법에서도 그런 오류가 아니었나 싶음...
*/
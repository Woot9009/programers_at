//영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
//문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
//numbers는 공백 없이 소문자로만 구성되어 있습니다. "zero"는 numbers의 맨 앞에 올 수 없습니다.
//예를 들어 numbers="onefourzerosixseven"; answer=14067;

function solution(numbers) {
  var answer = 0;
  const item = {
      'zero': '0',
      'one': '1',
      'two': '2',
      'three': '3',
      'four': '4',
      'five': '5',
      'six': '6',
      'seven': '7',
      'eight': '8',
      'nine': '9',
  }
  let change = '';
  
  for (let i=0; i<numbers.length; i++) {
      change += numbers[i];
      for (let c=0; c<10; c++) {
          if (change === Object.keys(item)[c]) {
              answer += Object.values(item)[c];
              change = '';
          }
      }
  }
  
  return Number(answer);
}

/*
1. 객체형 자료로 0~9까지 만들어 둠(키값 모두 문자형으로)
2. change변수에 numbers[i]를 한글자씩 추가하면서 객체의 키와 일치하는 순간의 값을 answer에 추가
3. change를 비움
4. 2번부터 numbers의 끝까지 반복
5. answer에 Number()씌워서 return;
*/


function programers(numbers) {
    const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0 ; i<number.length; i++){
        numbers = numbers.split(number[i]).join(i)
    }
    return +numbers
}

//객체로 만들지 않고 배열의 인덱스를 그대로 써도 되는 문제이긴 했네
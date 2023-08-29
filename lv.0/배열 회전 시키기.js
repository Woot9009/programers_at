//정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. (direction은 "right" 또는 "left")
//배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
//예를 들어 numbers=[1,2,3]; direction="right";이면 정답은 [3,1,2]

function solution(numbers, direction) {
  var answer = numbers;
  
  if (direction === "right") {
      answer.unshift(answer[answer.length-1]);
      answer.pop();
  } else if (direction === "left") {
      answer.push(answer[0]);
      answer.shift();
  }
  
  return answer;
}

//위의 if문 안 내용을 아래와 같이 한줄로 축약도 가능

function solution(numbers, direction) {
    var answer = [];

    if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }

    answer = numbers;

    return answer;
}
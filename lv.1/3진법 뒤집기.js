//자연수 n이 매개변수로 주어집니다.
//n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  let arr = [];
  const three = n.toString(3);
  
  for (let i=0; i<three.length; i++) {
      arr.unshift(three[i]);
  }
  
  return parseInt(arr.join(''), 3);
}

/*
num.toString(n진법으로) & parseInt(num,n진법에서)

1. num.toString(3);을 이용해 10진법수를 3진법으로 바꿈
2. 이를 뒤집기 위해 순서대로 배열의 앞에 추가
3. 배열을 덤프한 값에 대해 parseInt(num,3)을 이용해 10진법으로 바꿈
*/


const programers = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

//스프레드 연산자와 reverse()활용하면 for문내용 대체 가능
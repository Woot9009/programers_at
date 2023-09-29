/*
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
*/

const find = (a,b) => {
  return new Date(2016,a-1,b).getDay();
}

function solution(a, b) {
  switch(find(a,b)) {
      case 0:
          return 'SUN';
          break;
      case 1:
          return 'MON';
          break;
      case 2:
          return 'TUE';
          break;
      case 3:
          return 'WED';
          break;
      case 4:
          return 'THU';
          break;
      case 5:
          return 'FRI';
          break;
      case 6:
          return 'SAT';
          break;
  }
}

//월을 a-1로 쓰는 것이 포인트


function getDayName(a,b){
  var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  var date = new Date(`2016-${a}-${b}`);
var day = date.getDay()
  return arr[day];
}

//switch문과 함수대신 배열과 백틱활용한 ver
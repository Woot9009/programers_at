//정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
//최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  let soltedArray = array.sort((a,b)=>a-b);
  let cnt = 0;
  
  let mostOftenValue = -1;//최빈값이 무엇인지
  let mostOftenValueCnt = 0;//최빈값이 될 때 몇번 반복해서 된건지
  let repeatCnt = 0;//현재 똑같은 값이 몇번 등장했는지
  let beforeNumber = -1;//지금 for문에서 보고있는 숫자 이전의 숫자
  let duplicationCheck = false;
  
  for (cnt=0; cnt<soltedArray.length; cnt++) {
      if (beforeNumber !== array[cnt]) {//새로운 값이 등장하면 반복카운트를 새로 시작
          repeatCnt = 1;
      } else {//같은 값이면 반복카운트를 하나씩 증가
          repeatCnt = repeatCnt + 1;
      }
      
      if (repeatCnt === mostOftenValueCnt && mostOftenValue !== array[cnt]) {//최빈값이 여러개일 때
          duplicationCheck = true;
      }
      
      if(repeatCnt > mostOftenValueCnt) {//현재 숫자가 이전 최빈값을 밀어내고 새로운 최빈값이 되는 순간
          mostOftenValue = array[cnt];
          mostOftenValueCnt = repeatCnt;
          duplicationCheck = false;
      }
      
      beforeNumber = array[cnt];
  }
  
  if (duplicationCheck) {
      return -1;
  }
  
  return mostOftenValue;
}

/*
1. 우선 배열 오름차순 정렬
2. 인덱스를 1개씩 올려가면서 같은 값이 몇개인지 카운트함
3. 최빈값을 그때그때 갱신
4. 최빈값이 여러개인지 Boolean형으로 체크
  4-1 if문에서 (현재카운트===최빈값카운트 && 최빈값!==현재값)일 경우 중복여부 true
  4-2 추후 현재값이 이전 최빈값(들)을 밀어내고 새로운 최빈값이 될 때 중복여부 다시 false;
  4-3 for문 밖에서 중복여부가 true일 경우 return -1해주면 됨
*/

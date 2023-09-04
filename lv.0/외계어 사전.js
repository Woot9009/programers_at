//PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다.
//알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
//spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
//dic과 spell 모두 중복된 원소를 갖지 않습니다.
//두 번도 안되고 0 번도 안되고 한번씩만이 포인트

function solution(spell, dic) {
  const arr = [];
  
  for (let i=0; i<dic.length; i++) {
      const subArr = [];
      for (let j=0; j<spell.length; j++) {
          subArr.push(dic[i].includes(spell[j]));
      }
      arr.push(subArr);
  }
  
  return arr.filter((v) => !v.includes(false)).length > 0 ? 1 : 2;
}

//filter와 includes 활용
//https://webd.tistory.com/76


function solution(spell, dic) {
  const isExist = [];

  dic.forEach((e) => {
    let cnt = 0;
    spell.forEach((i) => {
      if (e.includes(i)) cnt++;
    });

    if (cnt === spell.length) isExist.push(e);
  });
  return isExist.length === 0 ? 2 : 1;
}

//forEach의 중복
//https://juicyjerry.tistory.com/entry/85%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%EC%9E%85%EB%AC%B8-%EC%99%B8%EA%B3%84%EC%96%B4-%EC%82%AC%EC%A0%84
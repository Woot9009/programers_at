/*
사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다.
사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다.

예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고
각 인물의 그리움 점수가 [5점, 10점, 1점]일 때
해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다.
다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고
["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, "tony"는 그리움 점수가 없을 때,
이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.

그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning,
각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때,
사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.

3 ≤ name의 길이 = yearning의 길이≤ 100
3 ≤ name의 원소의 길이 ≤ 7
name의 원소들은 알파벳 소문자로만 이루어져 있습니다.
name에는 중복된 값이 들어가지 않습니다.
1 ≤ yearning[i] ≤ 100
yearning[i]는 i번째 사람의 그리움 점수입니다.

3 ≤ photo의 길이 ≤ 100
1 ≤ photo[i]의 길이 ≤ 100
3 ≤ photo[i]의 원소(문자열)의 길이 ≤ 7
photo[i]의 원소들은 알파벳 소문자로만 이루어져 있습니다.
photo[i]의 원소들은 중복된 값이 들어가지 않습니다.
*/

let memory= {};

function solution(name, yearning, photo) {
    var answer = [];
    let sum = 0;
    
    for (let i=0; i<name.length; i++) {
        memory[name[i]] = yearning[i];
    }
    for (let i=0; i<photo.length; i++) {
        for (let k=0; k<photo[i].length; k++) {
            for (let m=0; m<name.length; m++) {
                if (photo[i][k] == Object.keys(memory)[m]) sum += Object.values(memory)[m];
            }
        }
        answer.push(sum);
        sum = 0;
    }
    
    return answer;
}

/*
1. name과 yearning을 객체로 만들어줌.
  (이때 괄호표기법이 아닌 점보기법으로 생성하면 에러메세지뜸. name이 문자형이라서?!)
2. photo의 1차요소에 대해
3. k번째 사람의 이름이 memory객체의 key와 일치한다면 해당 key의 값을 추억점수에 추가
4. 추억점수합산을 정답에 push하고 초기화한 뒤 photo의 다음 1차요소에 대해 3번 반복
*/


function programers(name, yearning, photo) {
  let obj = {};
  for(let i = 0; i < name.length; i++){
      obj[name[i]] = yearning[i];
  }
  return photo.map(value => value.map(v => obj[v] ? obj[v] : 0).reduce((acc,cur) => acc + cur,0))
}

//map과 reduce를 활용한 방법
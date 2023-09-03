//문자열 str1, str2가 매개변수로 주어집니다.
//str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

//includes의 활용


function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1;
}

//indexOf의 활용
//indexOf는 특정 문자열이 처음으로 나타나는 인덱스를 반환. 만약 해당 문자열이 존재하지 않는다면, -1을 반환.
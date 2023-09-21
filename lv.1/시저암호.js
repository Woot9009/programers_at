/*어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
n은 1 이상, 25이하인 자연수입니다.
*/

const ascii = (x) => x.charCodeAt();
const str = (x) => String.fromCharCode(x);

function solution(s, n) {
    var answer = '';
    
    for (let i=0; i<s.length; i++) {
        if (ascii(s[i])>=97 && ascii(s[i])<=122) {
            if (ascii(s[i])+n > 122) answer += str(ascii(s[i]) + n - 26);
            else answer += str(ascii(s[i]) + n);
        } else if (ascii(s[i])>=65 && ascii(s[i])<=90) {
            if (ascii(s[i])+n > 90) answer += str(ascii(s[i]) + n - 26);
            else answer += str(ascii(s[i]) + n);
        } else if (s[i] === ' ') answer += ' ';
    }
    
    return answer;
}

/*
String.fromCharCode()와 charCodeAt()활용하되 공백은 그대로
n만큼 밀 때 z를 넘어가면 다시 a로 돌아오게 해야함

1. 매개변수 x를 아스키코드와 문자간에 서로 바꿔주는 함수 미리 생성
2. for문으로 s를 순회하는데 소문자, 대문자, 공백 3가지 경우로 나눠서 생각
3. n만큼 밀 때 z를 넘어가면 26만큼 빼주면 알파벳 딱 맞음
*/
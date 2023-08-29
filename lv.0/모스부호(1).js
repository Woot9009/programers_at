//머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다.
//그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다.
//문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
//letter의 모스부호는 공백으로 나누어져 있습니다.
//ex) letter = ".... . .-.. .-.. ---"; answr = "hello"

const morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
}

function solution(letter) {
  var answer = '';
  const spl = letter.split(' ');
  
  for (let i=0; i<spl.length; i++) {
      for (let check=0; check<Object.keys(morse).length; check++) {
          if (spl[i] === Object.keys(morse)[check]) {
              answer += String(Object.values(morse)[check]);
          }
      }
  }
  
  return answer;
}

//string 매서트의 split(' ')을 이용해 마디별로 인덱스 접근
//Object.keys와 Object.values를 이용해 객체의 프로퍼티에 인덱스 접근


function solution(letter) {
  let answer = ""
  const spl = letter.split(' ');
  for(let i = 0; i < spl.length; i++){
      answer += morse[spl[i]];
  }
  return answer;
}

/*
복잡하게 접근할 필요 없이
letter.split(' ')[i]는 모스부호이자 morse객체의 키중 하나
그러므로 그 키를 morse[키]에 넣으면 해당 키의 값이 됨(morse[letter.split(' ')[i]])
*/

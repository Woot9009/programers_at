//문자열 s가 매개변수로 주어집니다. s는 소문자로만 이루어져 있습니다.
//s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
//한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

const obj = {};

function solution(s) {
    let appearOne = [];
    
    for (let i=0; i<s.length; i++) {
        const item = s[i];
        if (obj[item]) {//obj에 item 키가 있으면
            obj[item]++//해당 item의 값을 1씩 증가
        } else {//obj에 item 키가 없으면
            obj[item] = 1;//해당 item의 값은 1
        }
    }
    
    const objArray = Object.entries(obj);
    console.log(objArray);
    for (let i=0; i<objArray.length; i++) {
        const item = objArray[i];//['a', 1];
        if (item[1] === 1) {
            appearOne.push(item[0]);
        }
    }
    
    const sortedArray = appearOne.sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0));    
    
    return sortedArray.join('');
}

/*
1문단. 미리 생성해둔 obj에 각 문자가 몇번 등장하는지 키값으로 입력
2문단. 객체형자료인 obj를 entries를 사용해 배열형태로 만들고, 등장회수가 1인 요소의 키를 appearOne배열에 push
3문단. 아스키코드를 이용해 문자형으로 appearOne에 담긴 요소들을 정렬 후 join메서드를 이용해 하나로 덤프
*/
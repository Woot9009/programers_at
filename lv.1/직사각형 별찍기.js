//이 문제에는 표준 입력으로 두 개의 정수 a와 b가 주어집니다.
//별(*) 문자를 이용해 가로의 길이가 a, 세로의 길이가 b인 직사각형 형태를 출력해보세요.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let square = '';
    for (let line=1; line<=b; line++) {
        for (let star=1; star<=a; star++) {
            square += '*';
        }
        console.log(square);
        square = '';
    }
});

//위의 복잡한 초기세팅 패스하고,
//let square = '';부터가 내가 쓴 코드
//a만큼 한줄생성하고, 콘솔찍고, square비운 뒤 b만큼 이 내용 반복
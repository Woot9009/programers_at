//첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
//두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    const num = (numer1*denom2)+(numer2*denom1);
    const denom = denom1*denom2;
    
    let key = 1;
    if(num<denom) {
        key = num;
    } else {
        key = denom;
    }
    
    while (true) {
        if (num%key === 0 && denom%key === 0) {
            return [num/key, denom/key];
        }
        key -= 1;
    }
    
    return answer;
}

/*
1. 분수 덧셈
2. 덧셈한 분수의 분자분모의 최대공약수로 나눠줌
  2-1. 분자 분모 중 작은 수를 찾기
  2-2. 작은수로 분자분모를 나눠보기
    2-2-1. 둘다 나누어 떨어지면 그 나눈 수가 최대공약수
    2-2-2. 안나누어 떨어지면 제수를 1 줄이고, 이를 제수가 1이 될 때까지 반복
  2-3. 나누어 떨어진 제수들을 모두 곱한 값이 분자분모의 최대공약수
*/


//최대공약수 찾아서 기약분수 만드는 for문 ++ ver
function simple(a, b) {
    let key = 1;
    
    for(let i=1; i<=Math.min(a, b); i++) {
        if(a % i == 0 && b % i == 0) {
            key = i;
        }
    }
}

/*
1. a/b를 기약분수로 만듦
  2-1. Math.min()으로 분자 분모 중 작은 수를 찾기
  2-2. 제수를 1부터 Math.min(a,b)까지 증가시키면서 a와 b 모두 나누어 떨어지는 수를 찾음
  2-3. 그중 가장 큰 제수가 최대공약수
*/
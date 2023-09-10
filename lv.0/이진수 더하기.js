//이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때,
//두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

function test1Error(bin1, bin2) {
  let arr = [];
  const longer = (bin1.length>=bin2.length) ? bin1.length : bin2.length;
  
  for (let i=0; i<longer; i++) {
      if(bin1[bin1.length-1-i]==='0' && bin2[bin2.length-1-i]==='0') arr.unshift(0);
      if(bin1[bin1.length-1-i]==='1' && bin2[bin2.length-1-i]==='1') arr.unshift(2);
      if(bin1[bin1.length-1-i] !== bin2[bin2.length-1-i]) arr.unshift(1);
  }
  arr.unshift(0);
  
  for (let i=arr.length-1; i>=0; i--) {
      if (arr[i] === 2) {
          arr[i] = 0;
          arr[i-1] += 1;
      } else if (arr[i] === 3) {
          arr[i] = 1;
          arr[i-1] += 1;
      }
  }
  if (arr[0] === 0) arr.shift();
  
  return arr.join('');
}

/*
1. 문자열의 가장 끝에서부터 검사하는데 3가지 경우의 수가 있음
  1-1. bin1[i]===0 && bin2[i]===0 이면 arr[k]+=0;
  1-2. bin1[i]===1 && bin2[i]===1 이면 arr[k]+=2;
  1-3. bin1[i] !== bin2[i] 이면 answer[i]+=1;
2. 이때 arr.unshift()로 배열의 맨 앞에 추가해야 함
3. arr[k]가 2이면, arr[k]=0;으로 만들고, arr[k-1]+=1;
4. arr[k]가 3이면, arr[k]=1;로 만들고, arr[k-1]+=1'

어디서 걸리는지 모르겠는데 정확성 88.9가 뜸....
*/

function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}

//2진수를 10진수로. 10진수를 2진수로.
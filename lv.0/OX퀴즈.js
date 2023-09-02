//덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
//수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
//[연산자]는 + 와 - 중 하나입니다.
//예를 들어 quiz=["3 - 4 = -3", "5 + 6 = 11"]; answer=["X", "O"]


function solution(quiz) {
  var answer = [];
  
  for (let i=0; i<quiz.length; i++) {
      const sp = (i,ele) => quiz[i].split(" ")[ele];
      if (sp(i,1) === "+") {
          if (Number(sp(i,0)) + Number(sp(i,2)) === Number(sp(i,4))) {
              answer.push("O");
          } else {
              answer.push("X");
          }
      } else if (sp(i,1) === "-") {
          if (Number(sp(i,0)) - Number(sp(i,2)) === Number(sp(i,4))) {
              answer.push("O");
          } else {
              answer.push("X");
          }
      }
  }
  return answer;
}
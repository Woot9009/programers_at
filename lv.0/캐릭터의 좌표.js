//머쓱이는 RPG게임을 하고 있습니다.
//게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다.
//예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1],
//left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다.
//머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다.
//캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
//[0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.
//예를 들어 keyinput=["down", "down", "down", "down", "down"]; board=[7,9]; answer=[0,-4];
//[0, 0]에서 아래로 다섯 칸 이동한 좌표는 [0, -5]이지만 맵의 세로 크기가 9이므로 아래로는 네 칸을 넘어서 이동할 수 없습니다. 따라서 [0, -4]를 return합니다.

function solution(keyinput, board) {
  var answer = [];
  let xx = 0;
  let yy = 0;
  
  const moveX = (x) => {
      if (x === "left") xx -= 1;
      else if (x === "right") xx += 1;
  }
  const moveY = (y) => {
      if (y === "up") yy += 1;
      else if (y === "down") yy -= 1;
  }
  
  for (let i=0; i<keyinput.length; i++) {
      if (keyinput[i] === "left" && xx>-Math.floor(board[0]/2)) moveX("left");
      if (keyinput[i] === "right" && xx<Math.floor(board[0]/2)) moveX("right");
      if (keyinput[i] === "up" && yy<Math.floor(board[1]/2)) moveY("up");
      if (keyinput[i] === "down" && yy>-Math.floor(board[1]/2)) moveY("down");
      console.log(xx,yy,-Math.floor(board[1]/2));
  }
  answer.push(xx,yy);
  
  return answer;
}

/*
1. x좌표를 담을 변수, y좌표를 담을 변수를 미리 선언
2. 반복실행되는 상하좌우이동을 함수로 만들어둠
3. 상하좌우 각 좌표값이 +-board/2를 넘어가도록 key가 입력되면 move함수 작동x,
  아니면 move함수 작동o (이때 board/2에 Math.floor를 씌우거나 조정값 +-해줘야 범위값이 맞음)
*/


function programers(keyinput, board) {
  let res = [0,0];
  for (let p of keyinput) {
      switch(p){
          case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
          case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
          case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
          case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
      }
  }
  return res;
}

//switch문을 사용한 예